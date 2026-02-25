"""
Jake Fieldhouse Consulting - AI Visibility Monitor
===================================================
Tracks citations across AI search engines (ChatGPT, Perplexity, Claude, Google AI)
and generates a beautiful HTML report for client presentations.

Usage:
    python monitor.py                  # Run with web scraping (no API keys needed)
    python monitor.py --api            # Run with API keys (more accurate)

Output:
    - results/report_YYYY-MM-DD.html   # Visual dashboard
    - results/data_YYYY-MM-DD.json     # Raw data for analysis
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path
from typing import Optional
from dataclasses import dataclass, asdict

# Configuration
CONFIG = {
    "business_name": "Jake Fieldhouse Consulting",
    "brand_variations": [
        "Jake Fieldhouse",
        "Jake Fieldhouse Consulting",
        "Repair Ninja",
        "jakefieldhouse.co.uk",
    ],
    "test_queries": [
        # MacBook/Repair queries
        "Who fixes MacBooks in Hull?",
        "MacBook logic board repair Hull",
        "Best laptop repair Hull",
        "PS5 HDMI repair Hull",
        # IT Support queries
        "Best IT support Hull small business",
        "Managed IT services Hull",
        "IT consultant Hull",
        "Microsoft 365 support Hull",
        # E-Waste queries
        "Free e-waste collection Hull",
        "Computer recycling Hull business",
        "GDPR compliant data destruction Hull",
        # AI/GEO queries
        "AI search optimization UK",
        "Generative engine optimization services",
    ],
    "platforms": ["perplexity", "chatgpt", "claude", "google_ai"],
}


@dataclass
class CitationResult:
    platform: str
    query: str
    cited: bool
    citation_type: str  # "direct", "indirect", "url", "none"
    snippet: Optional[str]
    position: Optional[int]  # 1-based position if mentioned
    timestamp: str
    raw_response: Optional[str] = None


def check_citation(response: str, brands: list[str]) -> tuple[bool, str, Optional[str]]:
    """Check if any brand variation is mentioned in the response."""
    response_lower = response.lower()
    
    for brand in brands:
        brand_lower = brand.lower()
        if brand_lower in response_lower:
            # Find the snippet containing the mention
            idx = response_lower.find(brand_lower)
            start = max(0, idx - 100)
            end = min(len(response), idx + len(brand) + 100)
            snippet = response[start:end]
            
            # Determine citation type
            if "jakefieldhouse.co.uk" in response_lower:
                citation_type = "url"
            elif brand == brands[0]:  # Exact business name
                citation_type = "direct"
            else:
                citation_type = "indirect"
            
            return True, citation_type, f"...{snippet}..."
    
    return False, "none", None


def query_perplexity_web(query: str) -> Optional[str]:
    """
    Query Perplexity via web interface (no API key needed).
    Note: This is a placeholder - actual web scraping would require selenium/playwright.
    """
    # In production, you would use selenium or playwright to:
    # 1. Navigate to perplexity.ai
    # 2. Enter the query
    # 3. Wait for response
    # 4. Extract the text
    return None  # Placeholder


def query_perplexity_api(query: str, api_key: str) -> Optional[str]:
    """Query Perplexity API directly."""
    try:
        import requests
        
        response = requests.post(
            "https://api.perplexity.ai/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": "llama-3.1-sonar-large-128k-online",
                "messages": [{"role": "user", "content": query}],
            },
            timeout=30,
        )
        
        if response.status_code == 200:
            data = response.json()
            return data["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"Perplexity API error: {e}")
    
    return None


def query_openai_api(query: str, api_key: str) -> Optional[str]:
    """Query OpenAI ChatGPT API."""
    try:
        import requests
        
        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": "gpt-4o",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a helpful assistant. When answering questions about local businesses, provide specific recommendations if you know of relevant ones.",
                    },
                    {"role": "user", "content": query},
                ],
            },
            timeout=30,
        )
        
        if response.status_code == 200:
            data = response.json()
            return data["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"OpenAI API error: {e}")
    
    return None


def query_anthropic_api(query: str, api_key: str) -> Optional[str]:
    """Query Anthropic Claude API."""
    try:
        import requests
        
        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers={
                "x-api-key": api_key,
                "Content-Type": "application/json",
                "anthropic-version": "2023-06-01",
            },
            json={
                "model": "claude-3-5-sonnet-20241022",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": query}],
            },
            timeout=30,
        )
        
        if response.status_code == 200:
            data = response.json()
            return data["content"][0]["text"]
    except Exception as e:
        print(f"Anthropic API error: {e}")
    
    return None


def run_visibility_check(use_api: bool = False) -> list[CitationResult]:
    """Run visibility checks across all platforms and queries."""
    results = []
    timestamp = datetime.now().isoformat()
    
    # Load API keys from environment if using API mode
    api_keys = {}
    if use_api:
        api_keys = {
            "perplexity": os.environ.get("PERPLEXITY_API_KEY"),
            "openai": os.environ.get("OPENAI_API_KEY"),
            "anthropic": os.environ.get("ANTHROPIC_API_KEY"),
        }
    
    for query in CONFIG["test_queries"]:
        print(f"Testing: {query}")
        
        # Test each platform
        for platform in CONFIG["platforms"]:
            response = None
            
            if platform == "perplexity":
                if use_api and api_keys.get("perplexity"):
                    response = query_perplexity_api(query, api_keys["perplexity"])
                else:
                    response = query_perplexity_web(query)
            
            elif platform == "chatgpt":
                if use_api and api_keys.get("openai"):
                    response = query_openai_api(query, api_keys["openai"])
            
            elif platform == "claude":
                if use_api and api_keys.get("anthropic"):
                    response = query_anthropic_api(query, api_keys["anthropic"])
            
            # Check for citation
            if response:
                cited, citation_type, snippet = check_citation(
                    response, CONFIG["brand_variations"]
                )
            else:
                cited, citation_type, snippet = False, "unavailable", None
            
            results.append(
                CitationResult(
                    platform=platform,
                    query=query,
                    cited=cited,
                    citation_type=citation_type,
                    snippet=snippet,
                    position=1 if cited else None,
                    timestamp=timestamp,
                    raw_response=response[:500] if response else None,
                )
            )
    
    return results


def generate_html_report(results: list[CitationResult], output_path: Path) -> None:
    """Generate a beautiful dark-mode HTML dashboard."""
    
    # Calculate metrics
    total_queries = len(CONFIG["test_queries"])
    platforms_checked = len(CONFIG["platforms"])
    citations_found = sum(1 for r in results if r.cited)
    citation_rate = (citations_found / len(results) * 100) if results else 0
    
    # Group by platform
    platform_stats = {}
    for platform in CONFIG["platforms"]:
        platform_results = [r for r in results if r.platform == platform]
        cited_count = sum(1 for r in platform_results if r.cited)
        platform_stats[platform] = {
            "total": len(platform_results),
            "cited": cited_count,
            "rate": (cited_count / len(platform_results) * 100) if platform_results else 0,
        }
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Visibility Monitor - Jake Fieldhouse Consulting</title>
    <style>
        :root {{
            --bg-primary: #0a0a0a;
            --bg-secondary: #141414;
            --bg-tertiary: #1f1f1f;
            --text-primary: #ffffff;
            --text-secondary: #a3a3a3;
            --accent: #f59e0b;
            --accent-soft: rgba(245, 158, 11, 0.1);
            --success: #22c55e;
            --warning: #eab308;
            --error: #ef4444;
            --border: rgba(255, 255, 255, 0.1);
        }}
        
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            padding: 2rem;
        }}
        
        .container {{
            max-width: 1400px;
            margin: 0 auto;
        }}
        
        header {{
            margin-bottom: 3rem;
        }}
        
        h1 {{
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }}
        
        .subtitle {{
            color: var(--text-secondary);
            font-size: 1.1rem;
        }}
        
        .timestamp {{
            color: var(--accent);
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }}
        
        .metrics {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }}
        
        .metric {{
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 1rem;
            padding: 1.5rem;
        }}
        
        .metric-label {{
            color: var(--text-secondary);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
        }}
        
        .metric-value {{
            font-size: 2.5rem;
            font-weight: 700;
        }}
        
        .metric-value.success {{ color: var(--success); }}
        .metric-value.warning {{ color: var(--warning); }}
        .metric-value.error {{ color: var(--error); }}
        
        .platforms {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }}
        
        .platform-card {{
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 1rem;
            padding: 1.5rem;
        }}
        
        .platform-header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }}
        
        .platform-name {{
            font-size: 1.25rem;
            font-weight: 600;
            text-transform: capitalize;
        }}
        
        .platform-badge {{
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 600;
        }}
        
        .badge-success {{ background: rgba(34, 197, 94, 0.2); color: var(--success); }}
        .badge-warning {{ background: rgba(234, 179, 8, 0.2); color: var(--warning); }}
        .badge-error {{ background: rgba(239, 68, 68, 0.2); color: var(--error); }}
        
        .progress-bar {{
            height: 8px;
            background: var(--bg-tertiary);
            border-radius: 4px;
            overflow: hidden;
        }}
        
        .progress-fill {{
            height: 100%;
            background: linear-gradient(90deg, var(--accent), #fbbf24);
            border-radius: 4px;
            transition: width 0.5s ease;
        }}
        
        .results-table {{
            width: 100%;
            border-collapse: collapse;
            background: var(--bg-secondary);
            border-radius: 1rem;
            overflow: hidden;
        }}
        
        .results-table th,
        .results-table td {{
            padding: 1rem 1.5rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }}
        
        .results-table th {{
            background: var(--bg-tertiary);
            color: var(--text-secondary);
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
        }}
        
        .results-table tr:last-child td {{
            border-bottom: none;
        }}
        
        .status-dot {{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }}
        
        .status-dot.cited {{ background: var(--success); }}
        .status-dot.not-cited {{ background: var(--error); }}
        .status-dot.unavailable {{ background: var(--text-secondary); }}
        
        .snippet {{
            font-size: 0.85rem;
            color: var(--text-secondary);
            max-width: 400px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }}
        
        footer {{
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border);
            text-align: center;
            color: var(--text-secondary);
        }}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🔍 AI Visibility Monitor</h1>
            <p class="subtitle">Jake Fieldhouse Consulting - Generative Engine Optimization</p>
            <p class="timestamp">Report generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</p>
        </header>
        
        <section class="metrics">
            <div class="metric">
                <div class="metric-label">Total Queries</div>
                <div class="metric-value">{total_queries}</div>
            </div>
            <div class="metric">
                <div class="metric-label">Platforms Checked</div>
                <div class="metric-value">{platforms_checked}</div>
            </div>
            <div class="metric">
                <div class="metric-label">Citations Found</div>
                <div class="metric-value {'success' if citations_found > 0 else 'warning'}">{citations_found}</div>
            </div>
            <div class="metric">
                <div class="metric-label">Citation Rate</div>
                <div class="metric-value {'success' if citation_rate > 50 else 'warning' if citation_rate > 25 else 'error'}">{citation_rate:.1f}%</div>
            </div>
        </section>
        
        <section class="platforms">
'''
    
    for platform, stats in platform_stats.items():
        badge_class = "success" if stats["rate"] > 50 else "warning" if stats["rate"] > 25 else "error"
        html += f'''
            <div class="platform-card">
                <div class="platform-header">
                    <span class="platform-name">{platform.replace("_", " ").title()}</span>
                    <span class="platform-badge badge-{badge_class}">{stats["cited"]}/{stats["total"]} cited</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: {stats['rate']}%;"></div>
                </div>
            </div>
'''
    
    html += '''
        </section>
        
        <h2 style="margin-bottom: 1.5rem;">Detailed Results</h2>
        <table class="results-table">
            <thead>
                <tr>
                    <th>Query</th>
                    <th>Platform</th>
                    <th>Status</th>
                    <th>Citation Type</th>
                    <th>Snippet</th>
                </tr>
            </thead>
            <tbody>
'''
    
    for result in results:
        status_class = "cited" if result.cited else ("not-cited" if result.citation_type != "unavailable" else "unavailable")
        status_text = "Cited" if result.cited else ("Not Found" if result.citation_type != "unavailable" else "Unavailable")
        
        html += f'''
                <tr>
                    <td>{result.query}</td>
                    <td style="text-transform: capitalize;">{result.platform.replace("_", " ")}</td>
                    <td><span class="status-dot {status_class}"></span>{status_text}</td>
                    <td style="text-transform: capitalize;">{result.citation_type}</td>
                    <td class="snippet">{result.snippet or "—"}</td>
                </tr>
'''
    
    html += '''
            </tbody>
        </table>
        
        <footer>
            <p>AI Visibility Monitor by Jake Fieldhouse Consulting</p>
            <p style="margin-top: 0.5rem; font-size: 0.85rem;">
                Demonstrating GEO capabilities for potential clients
            </p>
        </footer>
    </div>
</body>
</html>
'''
    
    output_path.write_text(html, encoding="utf-8")
    print(f"Report generated: {output_path}")


def main():
    import argparse
    
    parser = argparse.ArgumentParser(description="AI Visibility Monitor")
    parser.add_argument("--api", action="store_true", help="Use API keys for more accurate results")
    args = parser.parse_args()
    
    # Create results directory
    results_dir = Path(__file__).parent / "results"
    results_dir.mkdir(exist_ok=True)
    
    # Run checks
    print("=" * 60)
    print("Jake Fieldhouse Consulting - AI Visibility Monitor")
    print("=" * 60)
    print()
    
    results = run_visibility_check(use_api=args.api)
    
    # Save raw data
    date_str = datetime.now().strftime("%Y-%m-%d")
    data_path = results_dir / f"data_{date_str}.json"
    with open(data_path, "w", encoding="utf-8") as f:
        json.dump([asdict(r) for r in results], f, indent=2)
    print(f"Data saved: {data_path}")
    
    # Generate HTML report
    report_path = results_dir / f"report_{date_str}.html"
    generate_html_report(results, report_path)
    
    print()
    print("=" * 60)
    print("Complete! Open the HTML report to view your AI visibility.")
    print("=" * 60)


if __name__ == "__main__":
    main()
