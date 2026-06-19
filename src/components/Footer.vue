<script setup lang="ts">
import IconLinkedIn from './icons/IconLinkedIn.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full border-t border-white/5 pt-8 pb-8 text-center text-neutral-400 text-sm bg-black/50 backdrop-blur-sm z-40 relative">
    <div class="flex flex-col gap-6 items-center max-w-4xl mx-auto px-6">
        <!-- Status Indicator -->
        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs text-green-500 font-medium tracking-wide">All Systems Operational</span>
        </div>

        <!-- Social Links -->
        <a 
          href="https://uk.linkedin.com/in/jake-fieldhouse" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors group"
          aria-label="Connect on LinkedIn"
        >
          <IconLinkedIn class="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span class="text-xs text-blue-400 font-medium group-hover:text-blue-300 transition-colors">LinkedIn</span>
        </a>

        <p>© {{ currentYear }} Jake Fieldhouse Consulting Ltd | Registered in England & Wales | Company No. 16536646 | Insured by Hiscox</p>
        <p class="text-xs text-neutral-300">Hull & East Yorkshire | UK-Wide On-Site & Remote</p>
        
        <!-- Main Navigation -->
        <nav class="flex justify-center gap-6 flex-wrap">
          <router-link to="/#about" class="hover:text-white transition-colors">About</router-link>
          <router-link to="/#expertise" class="hover:text-white transition-colors">Expertise</router-link>
          <router-link to="/#contact" class="hover:text-white transition-colors">Contact</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Book a Session</router-link>
          <router-link to="/compliance" class="hover:text-white transition-colors">Compliance</router-link>
        </nav>

        <!-- Legal Links -->
        <div class="flex flex-col gap-2">
          <span class="text-neutral-300 text-xs uppercase tracking-wider">Legal & Policies</span>
          <nav class="flex justify-center gap-4 flex-wrap text-xs text-neutral-300">
            <router-link to="/privacy" class="hover:text-white transition-colors">Privacy</router-link>
            <router-link to="/terms" class="hover:text-white transition-colors">Terms</router-link>
            <router-link to="/cookies" class="hover:text-white transition-colors">Cookies</router-link>
            <router-link to="/policies" class="hover:text-white transition-colors font-medium">All Policies →</router-link>
          </nav>
        </div>
    </div>
  </footer>
</template>
