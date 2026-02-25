<script setup lang="ts">
// A subtle vector circuit pattern
</script>

<template>
  <div class="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <!-- Simple circuit-like paths -->
          <path d="M10 10 h 20 v 20 h -20 z" fill="none" stroke="currentColor" stroke-width="1" />
          <path d="M30 20 h 40" stroke="currentColor" stroke-width="1" />
          <path d="M70 20 v 30" stroke="currentColor" stroke-width="1" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="70" cy="50" r="2" fill="currentColor" />
          <path d="M50 50 h 20 v 20 h -20 z" fill="none" stroke="currentColor" stroke-width="1" />
          <path d="M50 60 h -30" stroke="currentColor" stroke-width="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  </div>
</template>
