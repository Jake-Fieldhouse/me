<script setup lang="ts">
const MAINTENANCE_MODE = false


import AuroraBackground from './components/AuroraBackground.vue'
import ArtHousePreloader from './components/ArtHousePreloader.vue'
// Async-load non-critical components to reduce initial main-thread work
const CookieConsent = defineAsyncComponent(() => import('./components/CookieConsent.vue'))
const StickyCTA = defineAsyncComponent(() => import('./components/StickyCTA.vue'))
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
const Toast = defineAsyncComponent(() => import('./components/Toast.vue'))
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { useToast } from './composables/useToast'

const isLoading = ref(true)

const { toastMessage, showToast } = useToast()
const HOME_PRELOADER_DELAY_MS = 3500
const PAGE_PRELOADER_DELAY_MS = 900
const FAST_PRELOADER_DELAY_MS = 350

onMounted(() => {
    if (MAINTENANCE_MODE) return

    // Normal operation below (only runs when MAINTENANCE_MODE = false)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const currentPath = window.location.pathname || '/'
    const isHomeRoute = currentPath === '/'
    
    // Homepage ALWAYS gets the full cinematic experience (3.5s)
    // Other pages get shorter delays, respecting reduced motion preference
    const preloaderDelay = isHomeRoute 
      ? HOME_PRELOADER_DELAY_MS 
      : (prefersReducedMotion ? FAST_PRELOADER_DELAY_MS : PAGE_PRELOADER_DELAY_MS)

    // Always play the intro on hard loads (longer on home)
    setTimeout(() => {
        isLoading.value = false
    }, preloaderDelay)
})
</script>

<template>
  <div class="relative min-h-dvh bg-black text-white font-inter selection:bg-white/20 overflow-x-hidden">
    
    <!-- Skip to Content (a11y: keyboard users bypass nav) -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Hero Layer -->
    <AuroraBackground class="fixed inset-0 z-0">
        <!-- Aurora handles its own visuals -->
    </AuroraBackground>

    <!-- Art House Preloader (z-9999 opaque overlay — content renders behind it for LCP) -->
    <ArtHousePreloader :loading="isLoading" />

    <!-- Main content: always rendered/painted for LCP detection.
         Preloader overlay at z-9999 visually hides it until ready.
         pointer-events-none prevents interaction during preloader. -->
    <div
      id="main-content"
      class="relative z-10 pb-32 md:pb-0 transition-opacity duration-200"
      :class="isLoading ? 'pointer-events-none select-none' : 'pointer-events-auto'"
      :aria-hidden="isLoading ? 'true' : 'false'"
    >
      <!-- Navigation -->
      <Navbar />

      <router-view v-slot="{ Component }">
        <transition 
          enter-active-class="transition ease-out duration-500" 
          enter-from-class="opacity-0 translate-y-4" 
          enter-to-class="opacity-100 translate-y-0" 
          leave-active-class="transition ease-in duration-300" 
          leave-from-class="opacity-100 translate-y-0" 
          leave-to-class="opacity-0 -translate-y-4"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- Cookie Consent -->
      <CookieConsent />

      <!-- Sticky Mobile CTA -->
      <StickyCTA />

      <!-- Global Footer -->
      <Footer />
      
      <!-- Global Toast Notifications -->
      <Toast :message="toastMessage" :show="showToast" @close="showToast = false" />
    </div>
  </div>
</template>
