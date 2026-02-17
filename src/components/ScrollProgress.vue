<script setup lang="ts">
/**
 * ScrollProgress — Pure CSS scroll progress indicator
 * 
 * Uses CSS `animation-timeline: scroll(root)` to drive a scaleX animation
 * linked to the document's scroll position. Zero JavaScript for the animation —
 * runs entirely on the compositor thread for butter-smooth 120fps performance.
 * 
 * Progressive enhancement: hidden on browsers without scroll-timeline support.
 * Accessibility: respects prefers-reduced-motion (hidden via CSS).
 */
</script>

<template>
  <div
    class="scroll-progress"
    role="progressbar"
    aria-label="Reading progress"
    aria-valuemin="0"
    aria-valuemax="100"
  />
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9998; /* Below preloader (9999), above navbar */
  background: linear-gradient(
    90deg,
    #3b82f6 0%,
    #6366f1 40%,
    #8b5cf6 70%,
    #34d399 100%
  );
  transform-origin: left;
  transform: scaleX(0);
  will-change: transform;

  /* Pure CSS scroll-driven animation */
  animation: scroll-progress-fill 1ms linear forwards;
  animation-timeline: scroll(root block);
}

@keyframes scroll-progress-fill {
  to {
    transform: scaleX(1);
  }
}

/* Hide on browsers without support — progressive enhancement */
@supports not (animation-timeline: scroll()) {
  .scroll-progress {
    display: none;
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .scroll-progress {
    display: none;
  }
}

/* Hide for print */
@media print {
  .scroll-progress {
    display: none;
  }
}
</style>
