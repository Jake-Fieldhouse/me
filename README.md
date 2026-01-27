# Jake Fieldhouse Consulting

Professional portfolio and service portal for Jake Fieldhouse Consulting Ltd.  
**Full Stack MSP Services, Repair Ninja Diagnostics, and Sustainable Tech Solutions.**

## 🚀 Live Site
**[View Live Application](https://jakefieldhouse.co.uk)**

![Build Status](https://github.com/Jake-Fieldhouse/me/actions/workflows/deploy.yml/badge.svg)

## Overview
This single-page application (SPA) serves as the primary digital presence for my consultancy. It features:
- **Repair Ninja**: Dynamic diagnostic info for consumer electronics.
- **MSP Services**: Corporate IT solutions and bookings.
- **E-Waste**: Compliance-ready recycling portal.
- **AI Search Optimization**: GEO (Generative Engine Optimization) services.
- **Compliance**: Live status tracking for Waste Carrier & ICO licenses.
- **Contact**: Integrated Cal.com booking engine.

## 🤖 AI Search Optimized
This site is built with **Generative Engine Optimization (GEO)** in mind:
- Structured data (JSON-LD schemas)
- `llms.txt` for AI crawler guidance
- FAQ-rich content architecture
- Citation-friendly format

## Tech Stack
- **Framework**: Vue 3 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP + ScrollTrigger
- **Hosting**: GitHub Pages

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Architecture

```
src/
├── components/     # Reusable Vue components (Navbar, Footer, etc.)
├── views/          # Route-level page components
│   ├── Home.vue
│   ├── RepairNinja.vue
│   ├── MSPServices.vue
│   ├── SustainableTech.vue
│   └── local/      # Programmatic local SEO pages
├── router/         # Vue Router configuration
├── data/           # Static data (locations, services)
└── main.ts         # App entry point

public/
├── llms.txt        # AI crawler guidance file
├── sitemap.xml     # Search engine sitemap
├── robots.txt      # Crawler directives
└── documents/      # Static assets (certificates, PDFs)
```

## Deployment
This project uses **GitHub Actions** for CI/CD.
Any push to `main` triggers a build and deployment to the `gh-pages` environment.

---
*© 2026 Jake Fieldhouse Consulting Ltd*

