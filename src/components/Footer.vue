<script setup lang="ts">
</script>

<template>
  <footer class="w-full border-t border-white/5 pt-8 pb-8 text-center text-neutral-500 text-sm bg-black/50 backdrop-blur-sm z-40 relative">
    <div class="flex flex-col gap-4 items-center">
        <!-- Status Indicator -->
        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs text-green-500 font-medium tracking-wide">All Systems Operational</span>
        </div>

        <p class="mb-2">Jake Fieldhouse Consulting Ltd | Company No. 16536646</p>
        <nav class="flex justify-center gap-6 flex-wrap">
          <router-link to="/about" class="hover:text-white transition-colors">About</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link>
          <span class="text-neutral-700">|</span>
          <router-link to="/privacy" class="hover:text-white transition-colors">Privacy Policy</router-link>
          <router-link to="/terms" class="hover:text-white transition-colors">Terms</router-link>
        </nav>
    </div>
  </footer>
</template>
