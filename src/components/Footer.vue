<script setup lang="ts">
const currentYear = new Date().getFullYear()
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

        <!-- Social Links -->
        <a 
          href="https://uk.linkedin.com/in/jake-fieldhouse" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors group"
          aria-label="Connect on LinkedIn"
        >
          <svg class="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span class="text-xs text-blue-400 font-medium group-hover:text-blue-300 transition-colors">LinkedIn</span>
        </a>

        <p>© {{ currentYear }} Jake Fieldhouse Consulting Ltd | Registered in England & Wales | Company No. 16536646 | Insured by Hiscox</p>
        <p class="text-xs text-neutral-400">Hull & East Yorkshire | UK-Wide On-Site & Remote</p>
        
        <!-- Main Navigation -->
        <nav class="flex justify-center gap-6 flex-wrap">
          <router-link to="/about" class="hover:text-white transition-colors">About</router-link>
          <router-link to="/blog" class="hover:text-white transition-colors">Insights</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link>
          <router-link to="/compliance" class="hover:text-white transition-colors">Compliance</router-link>
          <router-link to="/service-areas" class="hover:text-white transition-colors">Service Areas</router-link>
        </nav>

        <!-- Legal Links -->
        <div class="flex flex-col gap-2">
          <span class="text-neutral-400 text-xs uppercase tracking-wider">Legal & Policies</span>
          <nav class="flex justify-center gap-4 flex-wrap text-xs text-neutral-400">
            <router-link to="/privacy" class="hover:text-white transition-colors">Privacy</router-link>
            <router-link to="/terms" class="hover:text-white transition-colors">Terms</router-link>
            <router-link to="/cookies" class="hover:text-white transition-colors">Cookies</router-link>
            <router-link to="/accessibility" class="hover:text-white transition-colors">Accessibility</router-link>
            <router-link to="/cybersecurity" class="hover:text-white transition-colors">Security</router-link>
            <router-link to="/policies" class="hover:text-white transition-colors font-medium">View All →</router-link>
          </nav>
        </div>
    </div>
  </footer>
</template>
