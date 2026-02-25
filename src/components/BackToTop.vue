<script setup lang="ts">
/**
 * BackToTop — Scroll-driven back-to-top button
 * 
 * Uses CSS `animation-timeline: scroll(root)` for show/hide animation.
 * The button appears after scrolling ~20% of the page and fades out near the top.
 * Clicking scrolls smoothly to the top via window.scrollTo (respects scroll-behavior).
 * 
 * Progressive enhancement: hidden on browsers without scroll-timeline support.
 * Accessibility: respects prefers-reduced-motion, has aria-label, focusable.
 */

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button
    class="back-to-top"
    @click="scrollToTop"
    aria-label="Scroll back to top"
    title="Back to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(23, 23, 23, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 0;

  /* Hover transitions */
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  /* Scroll-driven show/hide animation */
  opacity: 0;
  pointer-events: none;
  animation: back-to-top-reveal 1ms linear forwards;
  animation-timeline: scroll(root block);
  animation-range: 15% 20%; /* Appear between 15-20% scroll */
}

.back-to-top:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #60a5fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.2);
}

.back-to-top:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 3px;
}

.back-to-top:active {
  transform: translateY(0);
}

@keyframes back-to-top-reveal {
  from {
    opacity: 0;
    pointer-events: none;
  }
  to {
    opacity: 1;
    pointer-events: auto;
  }
}

/* Hide on browsers without support — progressive enhancement */
@supports not (animation-timeline: scroll()) {
  .back-to-top {
    /* JS fallback: always visible after scroll, handled by simple opacity */
    opacity: 0;
    display: none;
  }
}

/* Mobile: position above sticky CTA bar */
@media (max-width: 767px) {
  .back-to-top {
    bottom: 6rem; /* Above the sticky mobile CTA */
    right: 1rem;
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .back-to-top {
    /* Still show the button, just without animation */
    animation: none;
    opacity: 1;
    pointer-events: auto;
    transition: none;
  }
}

/* Hide for print */
@media print {
  .back-to-top {
    display: none;
  }
}
</style>
