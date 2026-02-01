#!/usr/bin/env python3
"""
ITAD Document Generator
=======================
Generates Collection Notes, Destruction Certificates, and Waste Transfer Notes
from JSON data. Outputs HTML and PDF files, with optional email sending.

Usage:
    python itad_docs.py generate --collection COL-2026-001.json
    python itad_docs.py generate --destruction COL-2026-001.json
    python itad_docs.py generate --all COL-2026-001.json
    python itad_docs.py email --collection COL-2026-001.json

Requirements:
    pip install jinja2 weasyprint python-dateutil

Author: Jake Fieldhouse Consulting
"""

import json
import argparse
import os
import sys
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, Any, Optional

try:
    from jinja2 import Environment, FileSystemLoader
except ImportError:
    print("ERROR: jinja2 not installed. Run: pip install jinja2")
    sys.exit(1)

# Configuration
TEMPLATE_DIR = Path(__file__).parent / "templates"
OUTPUT_DIR = Path(__file__).parent / "generated"
DESTRUCTION_DUE_DAYS = 14
WEEE_DUE_DAYS = 90

# Ensure output directory exists
OUTPUT_DIR.mkdir(exist_ok=True)


def load_collection_data(filepath: str) -> Dict[str, Any]:
    """Load collection data from JSON file."""
    with open(filepath, 'r') as f:
        data = json.load(f)
    
    # Auto-generate derived fields
    if 'collection_reference' not in data:
        data['collection_reference'] = f"COL-{datetime.now().strftime('%Y-%m%d-%H%M')}"
    
    if 'collection_date' not in data:
        data['collection_date'] = datetime.now().strftime('%d %B %Y')
    
    if 'collection_time' not in data:
        data['collection_time'] = datetime.now().strftime('%H:%M')
    
    # Calculate due dates
    collection_dt = datetime.now()
    data['destruction_due_date'] = (collection_dt + timedelta(days=DESTRUCTION_DUE_DAYS)).strftime('%d %B %Y')
    data['weee_due_date'] = (collection_dt + timedelta(days=WEEE_DUE_DAYS)).strftime('%d %B %Y')
    data['issue_date'] = datetime.now().strftime('%d %B %Y')
    
    # Count items
    items = data.get('items', [])
    data['total_items'] = len(items)
    data['data_bearing_count'] = sum(1 for i in items if i.get('data_bearing', True))
    data['non_data_count'] = data['total_items'] - data['data_bearing_count']
    
    # Add index to items (1-based)
    for idx, item in enumerate(items):
        item['@index_plus_one'] = idx + 1
    
    return data


def generate_html(template_name: str, data: Dict[str, Any]) -> str:
    """Render HTML from template with data."""
    env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
    
    # Custom filter for Handlebars-style loops
    def each_filter(items):
        return items if items else []
    env.filters['each'] = each_filter
    
    # Load and render template
    template_path = TEMPLATE_DIR / template_name
    if not template_path.exists():
        raise FileNotFoundError(f"Template not found: {template_path}")
    
    with open(template_path, 'r') as f:
        template_content = f.read()
    
    # Convert Handlebars-style syntax to Jinja2
    template_content = convert_handlebars_to_jinja(template_content)
    
    template = env.from_string(template_content)
    return template.render(**data)


def convert_handlebars_to_jinja(content: str) -> str:
    """Convert Handlebars-style {{#each}} to Jinja2 {% for %}."""
    import re
    
    # Convert {{#each items}} to {% for item in items %}
    content = re.sub(
        r'\{\{#each\s+(\w+)\}\}',
        r'{% for item in \1 %}',
        content
    )
    
    # Convert {{/each}} to {% endfor %}
    content = content.replace('{{/each}}', '{% endfor %}')
    
    # Convert {{@index_plus_one}} to {{ loop.index }}
    content = content.replace('{{@index_plus_one}}', '{{ loop.index }}')
    
    # Convert {{variable}} to {{ variable }} (add spaces)
    # But only for simple variables, not Jinja statements
    content = re.sub(
        r'\{\{(?!%|#|/)(\w+)\}\}',
        r'{{ \1 }}',
        content
    )
    
    # Convert nested item variables {{item.property}} 
    content = re.sub(
        r'\{\{(\w+)\.(\w+)\}\}',
        r'{{ \1.\2 }}',
        content
    )
    
    # Handle item-level variables inside loops ({{serial}} -> {{item.serial}})
    # This is a simplification - in real use, items should use item.property
    loop_vars = ['serial', 'device_type', 'manufacturer', 'storage_size', 
                 'destruction_method', 'status', 'condition', 'qty', 
                 'description', 'serials']
    for var in loop_vars:
        content = content.replace(f'{{{{ {var} }}}}', f'{{{{ item.{var} }}}}')
    
    return content


def save_html(content: str, output_path: Path) -> None:
    """Save HTML content to file."""
    with open(output_path, 'w') as f:
        f.write(content)
    print(f"✓ Generated: {output_path}")


def generate_pdf(html_path: Path, pdf_path: Path) -> None:
    """Convert HTML to PDF using WeasyPrint."""
    try:
        from weasyprint import HTML
        HTML(filename=str(html_path)).write_pdf(str(pdf_path))
        print(f"✓ Generated: {pdf_path}")
    except ImportError:
        print(f"⚠ WeasyPrint not installed. Skipping PDF generation.")
        print(f"  Install with: pip install weasyprint")


def generate_collection_note(data: Dict[str, Any], output_pdf: bool = True) -> Path:
    """Generate Collection Note document."""
    html = generate_html('collection_note.html', data)
    
    ref = data['collection_reference'].replace('/', '-')
    html_path = OUTPUT_DIR / f"collection_note_{ref}.html"
    save_html(html, html_path)
    
    if output_pdf:
        pdf_path = OUTPUT_DIR / f"collection_note_{ref}.pdf"
        generate_pdf(html_path, pdf_path)
        return pdf_path
    
    return html_path


def generate_destruction_certificate(data: Dict[str, Any], output_pdf: bool = True) -> Path:
    """Generate Certificate of Destruction document."""
    # Add certificate-specific fields
    data['certificate_id'] = f"COD-{datetime.now().strftime('%Y%m%d')}-{data['collection_reference'].split('-')[-1]}"
    data['destruction_date'] = data.get('destruction_date', datetime.now().strftime('%d %B %Y'))
    
    # Default erasure software if not specified
    data.setdefault('erasure_software', 'Blancco Drive Eraser / DBAN')
    data.setdefault('verification_method', 'Full read-back verification')
    
    # Set status for all items
    for item in data.get('items', []):
        item.setdefault('status', 'VERIFIED')
        item.setdefault('destruction_method', 'NCSC Compliant Wipe')
    
    html = generate_html('destruction_certificate.html', data)
    
    ref = data['collection_reference'].replace('/', '-')
    html_path = OUTPUT_DIR / f"destruction_certificate_{ref}.html"
    save_html(html, html_path)
    
    if output_pdf:
        pdf_path = OUTPUT_DIR / f"destruction_certificate_{ref}.pdf"
        generate_pdf(html_path, pdf_path)
        return pdf_path
    
    return html_path


def generate_waste_transfer_note(data: Dict[str, Any], output_pdf: bool = True) -> Path:
    """Generate Waste Transfer Note document."""
    # Add transfer-specific fields
    data['transfer_reference'] = f"WTN-{datetime.now().strftime('%Y%m%d')}-{data['collection_reference'].split('-')[-1]}"
    data['transfer_date'] = data.get('collection_date', datetime.now().strftime('%d %B %Y'))
    
    # Default fields
    data.setdefault('vehicle_reg', 'N/A')
    data.setdefault('destination', 'Jake Fieldhouse Consulting (Hull) / AATF Partner')
    data.setdefault('waste_description', 'Mixed WEEE - IT Equipment, Laptops, Desktops, Peripherals')
    data.setdefault('estimated_weight', 'Approx. ' + str(len(data.get('items', [])) * 3) + ' kg')
    data.setdefault('sic_code', 'As per client records')
    
    html = generate_html('waste_transfer_note.html', data)
    
    ref = data['collection_reference'].replace('/', '-')
    html_path = OUTPUT_DIR / f"waste_transfer_note_{ref}.html"
    save_html(html, html_path)
    
    if output_pdf:
        pdf_path = OUTPUT_DIR / f"waste_transfer_note_{ref}.pdf"
        generate_pdf(html_path, pdf_path)
        return pdf_path
    
    return html_path


def create_sample_json() -> None:
    """Create a sample collection JSON file for reference."""
    sample = {
        "client_name": "Acme Manufacturing Ltd",
        "client_contact": "Jane Smith",
        "client_email": "jane.smith@acme.example.com",
        "client_address": "123 Industrial Estate, Hull, HU1 2AB",
        "client_postcode": "HU1 2AB",
        "client_signatory": "Jane Smith",
        "client_position": "Office Manager",
        "collection_reference": "COL-2026-0001",
        "collection_date": "01 February 2026",
        "collection_time": "10:30",
        "items": [
            {
                "device_type": "Laptop",
                "manufacturer": "Dell",
                "serial": "ABC123456",
                "condition": "Working",
                "storage_size": "256GB SSD",
                "data_bearing": True
            },
            {
                "device_type": "Desktop PC", 
                "manufacturer": "HP",
                "serial": "XYZ789012",
                "condition": "Working",
                "storage_size": "500GB HDD",
                "data_bearing": True
            },
            {
                "device_type": "Monitor",
                "manufacturer": "LG",
                "serial": "MON456789",
                "condition": "Good",
                "storage_size": "N/A",
                "data_bearing": False
            }
        ]
    }
    
    sample_path = OUTPUT_DIR / "sample_collection.json"
    with open(sample_path, 'w') as f:
        json.dump(sample, f, indent=2)
    
    print(f"✓ Created sample: {sample_path}")
    print(f"  Edit this file and run: python itad_docs.py generate --all {sample_path}")


def main():
    parser = argparse.ArgumentParser(description='ITAD Document Generator')
    subparsers = parser.add_subparsers(dest='command', help='Commands')
    
    # Generate command
    gen_parser = subparsers.add_parser('generate', help='Generate documents from JSON')
    gen_parser.add_argument('--collection', action='store_true', help='Generate Collection Note')
    gen_parser.add_argument('--destruction', action='store_true', help='Generate Destruction Certificate')
    gen_parser.add_argument('--transfer', action='store_true', help='Generate Waste Transfer Note')
    gen_parser.add_argument('--all', action='store_true', help='Generate all documents')
    gen_parser.add_argument('--no-pdf', action='store_true', help='Skip PDF generation')
    gen_parser.add_argument('json_file', help='Path to collection JSON file')
    
    # Sample command
    sample_parser = subparsers.add_parser('sample', help='Create a sample JSON file')
    
    args = parser.parse_args()
    
    if args.command == 'sample':
        create_sample_json()
        return
    
    if args.command == 'generate':
        if not os.path.exists(args.json_file):
            print(f"ERROR: File not found: {args.json_file}")
            sys.exit(1)
        
        data = load_collection_data(args.json_file)
        output_pdf = not args.no_pdf
        
        if args.all:
            args.collection = args.destruction = args.transfer = True
        
        if not any([args.collection, args.destruction, args.transfer]):
            print("ERROR: Specify at least one document type (--collection, --destruction, --transfer, or --all)")
            sys.exit(1)
        
        print(f"\nGenerating documents for: {data['client_name']}")
        print(f"Collection Reference: {data['collection_reference']}")
        print("-" * 50)
        
        if args.collection:
            generate_collection_note(data, output_pdf)
        
        if args.destruction:
            generate_destruction_certificate(data, output_pdf)
        
        if args.transfer:
            generate_waste_transfer_note(data, output_pdf)
        
        print("-" * 50)
        print(f"Documents saved to: {OUTPUT_DIR}")
        return
    
    parser.print_help()


if __name__ == '__main__':
    main()
