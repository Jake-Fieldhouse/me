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

## 🎯 Manual Owner Tasks (GEO/SEO/AEO)

The following actions require Jake's direct involvement to complete the site's optimization:

### 1. Wikidata Entity Creation
Create an entity for "Jake Fieldhouse Consulting Ltd" at https://www.wikidata.org
- **Why**: Establishes the business in the global knowledge graph that AI systems use for training
- **Properties to add**: Company name, founder, location (Hull), establishment date (2024-11), website, Companies House ID
- **Time**: ~15 minutes

### 2. Google Knowledge Panel
Search for "Jake Fieldhouse Consulting" on Google → Click "Claim this knowledge panel" when it appears
- **Why**: Verified entities get priority in AI citations and rich search results
- **Prerequisite**: Wikidata entry and consistent NAP (Name, Address, Phone) across web
- **Time**: ~5 minutes (may take weeks to become claimable)

### 3. Google Business Profile Optimization
Verify and fully complete your profile at https://business.google.com
- **Add**: All services as products, photos, posts, Q&A
- **Why**: Direct path to local pack rankings and AI local citations
- **Time**: ~30 minutes

### 4. HSTS Preload Submission
Submit to https://hstspreload.org (headers are already compliant)
- **Why**: Browser security + shows enterprise-grade security posture
- **Time**: ~2 minutes

### 5. Authority Backlinks (Ongoing)
Target mentions from:
- Hull Daily Mail / local news
- East Yorkshire business directories
- Industry publications (MSP blogs, repair forums)
- Companies House directory links
- **Why**: AI systems weight citations from authoritative domains heavily

### 6. IndexNow Ping (After Each Deploy)
```bash
curl "https://api.indexnow.org/indexnow?url=https://jakefieldhouse.co.uk/&key=a203532bbd3446768af8ae56145b0d24"
```
- **Why**: Instant notification to Bing/Yandex/AI crawlers of content updates
- **Automate**: Add to GitHub Actions workflow after deploy step

---

*© 2026 Jake Fieldhouse Consulting Ltd*

