# Jake Fieldhouse Consulting

> [!WARNING]
> **PROPRIETARY & CLOSED SOURCE**
> This repository is public for **transparency, portfolio demonstration, and audit purposes only**.
> This is not an open-source project. No permission is granted to copy, modify, redistribute, or create derivative works from this codebase. GitHub may technically allow public forks on user-owned repositories, but that does not grant a usage license. See [LICENSE](./LICENSE).

---

Practical IT services, repair diagnostics, and secure disposal solutions.

## 🚀 Live Site

**[View Live Application](https://jakefieldhouse.co.uk)**

---

## Overview

This repository contains the source for [jakefieldhouse.co.uk](https://jakefieldhouse.co.uk), built as a Vue + TypeScript SPA and deployed through GitHub Actions.

## Project Home Base

For the ongoing portfolio rebuild brief, current-state mapping, and phased plan, see:

- [Portfolio Home Base (Working Brief)](./docs/portfolio-home-base.md)

## Technical Highlights

* **Frontend stack**: Vue 3, TypeScript, Vite, Tailwind CSS.
* **Interactive UI**: GPU-accelerated WebGL cursor effects and smooth route transitions.
* **SEO/GEO**: Structured data, sitemap/robots, and localized service-area pages.
* **Security posture**: Strict security headers (HSTS, CSP, Permissions-Policy) managed at the edge.
* **Accessibility & testing**: Playwright + axe-core checks in CI.

---

## Core Services Hub

* **Repair Ninja**: Microsoldering diagnostics and component-level repair services.
* **MSP Services**: Corporate IT solutions, cybersecurity EDR, and Microsoft 365 management.
* **Secure Data Disposal**: NIST 800-88 compliant data destruction and B2B e-waste collection.
* **AI Search Optimization**: GEO (Generative Engine Optimization) services.
* **DC Remote Hands**: Data centre remote hands and smart hands services.
* **Insights Blog**: Authority-building articles on IT, repair, and AI search.

## Deployment

Pushes to the `main` branch trigger a GitHub Actions runner that:

1. Executes `vue-tsc` for strict type checking.
2. Builds the Vite production bundle.
3. Runs `generate-static-routes.mjs` for pre-rendering programmatic SEO nodes.
4. Deploys artifacts directly to the `gh-pages` environment.

---
© 2026 Jake Fieldhouse Consulting Ltd
