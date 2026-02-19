# Jake Fieldhouse Consulting

Professional portfolio and service portal for Jake Fieldhouse Consulting Ltd.  
**Full Stack MSP Services, Repair Ninja Diagnostics, and Sustainable Tech Solutions.**

## 🚀 Live Site

**[View Live Application](https://jakefieldhouse.co.uk)**

![Build Status](https://github.com/Jake-Fieldhouse/me/actions/workflows/deploy.yml/badge.svg)

## Overview

This single-page application (SPA) serves as the primary digital presence for the consultancy. It features:

- **Repair Ninja**: Microsoldering diagnostics and component-level repair services.
- **MSP Services**: Corporate IT solutions, cybersecurity EDR, and Microsoft 365 management.
- **Secure Data Disposal**: NIST 800-88 compliant data destruction and B2B e-waste collection.
- **AI Search Optimization**: GEO (Generative Engine Optimization) services.
- **DC Remote Hands**: Data centre remote hands and smart hands services.
- **Compliance Hub**: Live status tracking for Waste Carrier, ICO, and DBS credentials.
- **Insights Blog**: Authority-building articles on IT, repair, and AI search.
- **Contact**: Integrated Cal.com booking engine and secure communications hub.

## 🤖 AI Search Optimized

This site is built with **Generative Engine Optimization (GEO)** in mind:

- Structured data (JSON-LD: Organization, LocalBusiness, FAQPage, HowTo, Speakable)
- `llms.txt` and `llms-full.txt` for AI crawler guidance
- FAQ-rich content architecture
- Citation-friendly format
- 110+ programmatic local SEO pages

## Tech Stack

- **Framework**: Vue 3 + TypeScript
- **Build**: Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: CSS scroll-driven animations (`animation-timeline: view()`)
- **Hosting**: GitHub Pages + Cloudflare (security headers via Worker)
- **Testing**: Playwright + axe-core (visual regression + WCAG 2.1 AA)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run Playwright tests
npx playwright test
```

## Architecture

```text
src/
├── components/       # Reusable Vue components
│   ├── Navbar.vue        # Global nav with services dropdown
│   ├── Footer.vue        # Global footer with legal links
│   ├── FluidCursor.vue   # WebGL fluid cursor effect
│   ├── BentoGrid.vue     # Service card grid layout
│   ├── BentoItem.vue     # Interactive service cards
│   ├── CookieConsent.vue # GDPR/UK-PECR consent
│   ├── Toast.vue         # Notification feedback
│   └── icons/            # 38 Lucide icon components
├── views/            # Route-level page components
│   ├── Home.vue          # Dashboard with bento grid
│   ├── RepairNinja.vue   # Microsoldering service hub
│   ├── MSPServices.vue   # Managed IT services
│   ├── SustainableTech.vue # E-waste & data disposal
│   ├── AISearchOptimization.vue # GEO services
│   ├── RemoteHands.vue   # DC remote hands
│   ├── About.vue         # Company story
│   ├── Blog.vue          # Insights listing
│   ├── BlogPost.vue      # Article template
│   ├── CaseStudies.vue   # Client projects
│   ├── Compliance.vue    # Regulatory credentials
│   ├── Contact.vue       # Cal.com + secure comms
│   ├── ServiceAreas.vue  # Local SEO hub
│   ├── ServiceArea.vue   # Dynamic area template
│   └── local/            # Programmatic local SEO pages
├── composables/      # Vue composables
│   ├── useOgMeta.ts      # OpenGraph meta management
│   ├── useScrollReveal.ts # Scroll animation hooks
│   └── useToast.ts       # Toast notification state
├── data/             # Static data modules
│   ├── blogPosts.ts      # Blog content
│   ├── localSeo.ts       # Location data
│   ├── remoteHands.ts    # DC services data
│   ├── services.ts       # Service definitions
│   └── testimonials.ts   # Client testimonials
├── lib/              # Utilities
│   ├── analytics.ts      # GA4 integration
│   └── utils.ts          # cn() class merging
├── router/           # Vue Router (Web History mode)
└── main.ts           # App entry point

public/
├── llms.txt          # AI crawler guidance file
├── llms-full.txt     # Extended AI documentation
├── knowledge.json    # JSON-LD entity graph
├── sitemap.xml       # Search engine sitemap
├── robots.txt        # Crawler directives (AI bots whitelisted)
├── feed.xml          # RSS feed
├── certificates/     # ICO, insurance PDFs
├── documents/        # RAMS, NDA templates
└── api/              # Availability endpoint

e2e/
├── visual.spec.ts    # 11 visual regression tests
└── a11y.spec.ts      # 11 WCAG 2.1 AA accessibility tests
```

## Deployment

This project uses **GitHub Actions** for CI/CD.
Any push to `main` triggers a build and deployment to the `gh-pages` environment.

Security headers (HSTS, CSP, Permissions-Policy) are injected via a **Cloudflare Worker**.

© 2026 Jake Fieldhouse Consulting Ltd
