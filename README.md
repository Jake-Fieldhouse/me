# Jake Fieldhouse Consulting

> [!WARNING]
> **PROPRIETARY & CLOSED SOURCE**
> This repository is public for **transparency, portfolio demonstration, and audit purposes only**.
> This is not an open-source project. No permission is granted to copy, modify, redistribute, or create derivative works from this codebase. GitHub may technically allow public forks on user-owned repositories, but that does not grant a usage license. See [LICENSE](./LICENSE).

---

**Full Stack MSP Services, Repair Ninja Diagnostics, and Sustainable Tech Solutions.**

## 🚀 Live Site

**[View Live Application](https://jakefieldhouse.co.uk)**

---

## Architecture & Engineering Highlights

This is not a template website. This Single Page Application (SPA) is built from the ground up to demonstrate mastery of modern web performance, advanced rendering APIs, and programmatic SEO.

### 🎨 Rendering & Graphics (The "Bleeding Edge")

* **Custom WebGL Fluid Cursor**: A bespoke 60fps Navier-Stokes fluid simulation (`FluidCursor.vue`) running entirely on the GPU.
* **Async Shader Compilation**: Utilizes `KHR_parallel_shader_compile` to compile WebGL shaders in a background thread, preventing main-thread blocking during initial page load and keeping Total Blocking Time (TBT) < 50ms.
* **Native View Transitions**: Exploits the cutting-edge View Transitions API for seamless, cinematic route changes, gracefully degrading to Vue `<Transition>` fallbacks on older browsers.
* **Scroll-Driven Animations**: Leverages pure CSS `animation-timeline: view()` for zero-JavaScript performance on scroll effects.

### 🤖 Search & Generative Engine Optimization (GEO)

* **Agentic Commerce Ready**: Features `llms.txt` and `llms-full.txt` files mapping out the knowledge graph for crawling by LLMs (Claude, GPTBot, Perplexity).
* **Machine-Readable Availability**: Uses `public/api/availability.json` as an endpoint explicitly designed for AI agents to parse booking states.
* **Semantic Entity Graph**: Implements deep JSON-LD structured data arrays (`Organization`, `LocalBusiness`, `FAQPage`, `HowTo`, `Speakable`) to assert entity dominance in traditional Search.
* **Programmatic SEO**: Houses 84 dynamically generated, highly localized Service Area pages to blanket search intent within a 1-hour radius.

### ⚡ Infrastructure & Quality Assurance

* **Tech Stack**: Vue 3.4 (Composition API), TypeScript 5.2, Vite 7, Tailwind v4.
* **Edge Security**: Cloudflare Worker deployment injecting strict HSTS, CSP, and Permissions-Policy headers.
* **End-to-End Testing**: Microsoft Playwright orchestrated with `axe-core`, executing 11 strict visual regression workflows and continuous WCAG 2.1 AA accessibility gating.
* **Cookieless Privacy**: Architecture supports fully functional navigation without cookies, integrating a strict UK-PECR compliant consent gate for GA4 and Microsoft Clarity analytics.

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
