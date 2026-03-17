<script setup lang="ts">
const MAINTENANCE_MODE = false


import ArtHousePreloader from './components/ArtHousePreloader.vue'
// Async-load non-critical components to reduce initial main-thread work
const CookieConsent = defineAsyncComponent(() => import('./components/CookieConsent.vue'))
const ScrollProgress = defineAsyncComponent(() => import('./components/ScrollProgress.vue'))
const BackToTop = defineAsyncComponent(() => import('./components/BackToTop.vue'))
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
const Toast = defineAsyncComponent(() => import('./components/Toast.vue'))
import { ref, onMounted, defineAsyncComponent, computed } from 'vue'
import { useToast } from './composables/useToast'
import { useNativeViewTransition } from './router'


const isLoading = ref(true)
const consentGiven = ref(false)
const preloaderDone = computed(() => !isLoading.value)

// Site is accessible only after BOTH preloader finishes AND consent is given
const siteBlocked = computed(() => isLoading.value || !consentGiven.value)

function onConsentGiven(): void {
    consentGiven.value = true
}

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

    <!-- Hero Layer (Subtle Obsidian Glass Background) -->
    <div class="fixed inset-0 z-0 bg-black">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
    </div>

    <!-- Art House Preloader (z-9999 opaque overlay — content renders behind it for LCP) -->
    <ArtHousePreloader :loading="isLoading" />

    <!-- Main content: always rendered/painted for LCP detection.
         Preloader overlay at z-9999 visually hides it until ready.
         pointer-events-none prevents interaction during preloader. -->
    <div
      id="main-content"
      class="relative z-10 pb-32 md:pb-0 transition-opacity duration-200"
      :class="siteBlocked ? 'pointer-events-none select-none' : 'pointer-events-auto'"
      :aria-hidden="siteBlocked ? 'true' : 'false'"
    >
      <!-- Scroll Progress Indicator (pure CSS, zero JS) -->
      <ScrollProgress />

      <!-- Navigation (persists across view transitions) -->
      <Navbar style="view-transition-name: navbar;" />

      <!-- Route content with view transition name for animation targeting -->
      <router-view v-slot="{ Component }">
        <!-- Native View Transitions API handles animation — skip Vue transition -->
        <component v-if="useNativeViewTransition" :is="Component" style="view-transition-name: route-content;" />
        <!-- Fallback: Vue CSS transition for unsupported browsers -->
        <transition 
          v-else
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


      <!-- Cookie Consent Gate (full-screen overlay, mounted at body via teleport) -->
      <!-- Placed inside main-content for component context, but teleports to body -->
      <CookieConsent :preloader-done="preloaderDone" @consent-given="onConsentGiven" />

      <!-- Back to Top (scroll-driven, appears after 15% scroll) -->
      <BackToTop />

      <!-- Global Footer -->
      <Footer />
      
      <!-- Global Toast Notifications -->
      <Toast :message="toastMessage" :show="showToast" @close="showToast = false" />
    </div>
  </div>
</template>
