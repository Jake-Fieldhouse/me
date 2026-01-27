<script setup lang="ts">
</script>

<template>
  <footer class="w-full border-t border-white/5 pt-8 pb-8 text-center text-neutral-500 text-sm bg-black/50 backdrop-blur-sm z-40 relative">
    <div class="flex flex-col gap-6 items-center max-w-4xl mx-auto px-6">
        <!-- Status Indicator -->
        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs text-green-500 font-medium tracking-wide">All Systems Operational</span>
        </div>

        <p>Jake Fieldhouse Consulting Ltd | Company No. 16536646</p>
        
        <!-- Main Navigation -->
        <nav class="flex justify-center gap-6 flex-wrap">
          <router-link to="/about" class="hover:text-white transition-colors">About</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link>
          <router-link to="/compliance" class="hover:text-white transition-colors">Compliance</router-link>
          <router-link to="/service-areas" class="hover:text-white transition-colors">Service Areas</router-link>
        </nav>

        <!-- Legal Links -->
        <div class="flex flex-col gap-2">
          <span class="text-neutral-600 text-xs uppercase tracking-wider">Legal & Policies</span>
          <nav class="flex justify-center gap-4 flex-wrap text-xs">
            <router-link to="/privacy" class="hover:text-white transition-colors">Privacy</router-link>
            <router-link to="/terms" class="hover:text-white transition-colors">Terms</router-link>
            <router-link to="/cookies" class="hover:text-white transition-colors">Cookies</router-link>
            <router-link to="/refunds" class="hover:text-white transition-colors">Refunds</router-link>
            <router-link to="/complaints" class="hover:text-white transition-colors">Complaints</router-link>
            <router-link to="/service-commitment" class="hover:text-white transition-colors">SLA</router-link>
            <router-link to="/environmental-policy" class="hover:text-white transition-colors">Environmental</router-link>
            <router-link to="/disclaimer" class="hover:text-white transition-colors">Disclaimer</router-link>
          </nav>
        </div>
    </div>
  </footer>
</template>
