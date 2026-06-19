# Portfolio Home Base (Working Brief)

## Why this document exists

This is the working anchor for rebuilding **jakefieldhouse.co.uk** to a modern, high-trust portfolio and service site that clearly communicates what you offer and converts visitors into qualified enquiries.

---

## 1) Current state snapshot (what exists today)

### Stack and architecture
- Vue 3 + TypeScript + Vite SPA
- Tailwind CSS styling
- Vue Router for core routes
- Playwright + axe-core tests (currently present but partly out of sync with live routes/content)
- GitHub Actions deploy pipeline (`npm ci` → `npm run build` → deploy)

### Current live route footprint in source
- `/` (Home)
- `/contact`
- `/compliance`
- `/privacy`
- `/terms`
- `/cookies`
- `/policies`
- `/:pathMatch(.*)*` (404)

### Current positioning and service themes on Home
- Hardware specialist / microsoldering
- eWaste solutions / secure disposal
- Complex IT support
- AI & LLM integration
- Strong personal-founder story and direct contact access

### Strengths already in place
- Premium visual styling and strong brand tone
- Fast production build and clean compile (`npm run build` passes)
- Legal/compliance pages already implemented
- Contact options are extensive and prominent

---

## 2) Disrepair / drift identified

- **Repository messaging drift**: README and test expectations still describe routes and offers that no longer match the router/content exactly.
- **Testing drift**: current Playwright suite references pages like `/about`, `/blog`, and multiple service landing pages that are not currently in router source.
- **No single project brief**: there has not been a maintained “source of truth” document for strategy + implementation priorities.
- **Service clarity gap**: capabilities are present, but packaging into a clean, market-ready service catalogue can be sharpened.

---

## 3) Interpreted intention for this rebuild

Based on your brief, the target is:

1. Re-establish the site as a **personal marketing asset** (clear trust, positioning, proof, conversion paths).
2. Re-establish it as a **technical credibility asset** (modern implementation quality, structured content, consistency).
3. Produce a **clean, explicit service list** with clear outcomes, audience fit, and calls to action.
4. Use this ongoing conversation + doc set as a durable working base for phased improvements.

---

## 4) Proposed phased plan (incremental, low-risk)

### Phase 1 — Source-of-truth content and structure
- Define final service catalogue (service names, target customer, outcomes, boundaries).
- Align homepage messaging hierarchy (headline, value proposition, service blocks, proof, CTA).
- Align README/project docs to match real site architecture.

### Phase 2 — Information architecture and conversion flow
- Confirm required pages (single-page vs multi-page service routes).
- Standardize navigation, internal anchors/routes, and CTA paths.
- Tighten contact funnel (primary CTA, secondary CTA, qualifying prompts).

### Phase 3 — Trust and proof layer
- Case study/testimonial strategy (if/when social proof assets are ready).
- Compliance/trust badge placement refinement.
- Service-specific proof blocks (process, deliverables, response times, guarantees where valid).

### Phase 4 — Technical hardening and maintainability
- Bring automated tests back in sync with active routes/content.
- Validate accessibility/SEO quality against actual information architecture.
- Keep docs and test coverage aligned with future edits to avoid drift.

---

## 5) Working rules for collaboration in this repo

- Keep changes small and deliberate.
- Keep docs/routes/tests synchronized as content evolves.
- Treat this file as the ongoing brief; update it when strategy or scope changes.
- Capture unanswered strategic questions here before implementing large content rewrites.

---

## 6) Known gaps to confirm next (after this baseline)

- Final prioritized service lineup and naming (marketing language vs technical language).
- Primary target audience order (consumer, SMB, enterprise, or mixed with clear segmentation).
- Preferred conversion goals per page type (call, booking, form, WhatsApp, etc.).
- Whether to reintroduce dedicated service/blog/case-study routes now or later.
