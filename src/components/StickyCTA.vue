<script setup lang="ts">
// Sticky mobile CTA component
// Shows on mobile after scrolling past hero
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-40 p-4 bg-neutral-900/95 backdrop-blur-md border-t border-white/10 md:hidden">
    <router-link 
      to="/contact"
      class="block w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-center text-white font-bold rounded-xl shadow-lg shadow-blue-500/25"
    >
      Book Free Consultation
    </router-link>
  </div>
</template>
