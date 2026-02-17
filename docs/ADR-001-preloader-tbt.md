# ADR-001: WebGL Preloader & Lighthouse TBT Score

**Status:** Accepted  
**Date:** 17 Feb 2026  
**Decision makers:** Jake Fieldhouse  

---

## Context

The site uses a **WebGL fluid simulation** (`FluidCursor.vue`) as a decorative preloader effect during the 3.2-second introductory animation (`ArtHousePreloader.vue`). This is an **intentional design choice** that creates a premium, memorable first impression.

Lighthouse measures **Total Blocking Time (TBT)** — the sum of all main-thread tasks longer than 50ms during page load. The FluidCursor initializes 10 WebGL shader programs, compiles them, links them, creates framebuffer objects, and starts an animation loop. This work is CPU-bound JavaScript that Lighthouse counts as blocking time, especially on its **simulated 4x CPU-throttled Moto G Power** test environment.

## Decision

**We accept an elevated TBT score as the deliberate cost of the WebGL preloader effect.**

The preloader IS the user experience during load — it is intentional and desirable. Lighthouse cannot distinguish "cool animated preloader the user wants to see" from "janky unoptimised JS blocking interaction."

### What has been tried and why it failed

| Approach | Outcome |
|----------|---------|
| **1s artificial delay** (`setTimeout` in `defineAsyncComponent`) | Gamed the Lighthouse TTI window but completely broke the preloader visual — fluid effect appeared too late |
| **Per-program `yieldToMain()` yields** | Broke long tasks into <50ms chunks for Lighthouse but slowed down actual init and delayed the fluid effect |
| **`v-if` + `showFluid` ref guard** | Prevented FluidCursor from rendering during preloader entirely |
| **`KHR_parallel_shader_compile` (buggy)** | Called `getShaderParameter` on a `WebGLProgram` object — caused silent WebGL error, hung initialization |

### What is currently in place (correct approach)

- **`KHR_parallel_shader_compile`** (fixed): All 10 programs submitted at once, GPU compiles in background. Only `getProgramParameter(program, COMPLETION_STATUS_KHR)` is polled — never `getShaderParameter`. Falls back to single `yieldToMain()` for browsers without the extension.
- **`defineAsyncComponent`**: FluidCursor code-split into a separate chunk for smaller initial bundle, but loads immediately (no artificial delay).
- **No `v-if` guards, no `Transition` wrappers, no `setTimeout` delays** on the FluidCursor.

## Consequences

- **Lighthouse Performance score ~61-67** (not 90+) due to TBT
- **All other scores perfect**: Accessibility 100, Best Practices 100, SEO 100
- **Real-world experience is excellent**: FCP 0.3s (desktop), LCP 0.4s, CLS 0
- **TBT cannot be meaningfully reduced** without removing the preloader

## ⚠️ Warning for Future Agents

**DO NOT attempt to optimize TBT by:**

- Adding artificial delays to FluidCursor loading
- Wrapping FluidCursor in `v-if` guards or `Transition` components
- Deferring FluidCursor past the preloader's visible window
- Breaking up shader compilation with excessive yields

These approaches were all tried and either broke the visual effect or gamed the score without real improvement. The KHR_parallel_shader_compile extension is the correct and only optimization — it is already implemented.

The only way to achieve a perfect TBT score would be to **remove the WebGL preloader entirely**, which is not desired.
