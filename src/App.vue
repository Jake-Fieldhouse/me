<script setup lang="ts">
/**
 * ============================================
 * ⚠️  MAINTENANCE MODE CONFIGURATION
 * ============================================
 * 
 * When MAINTENANCE_MODE = true:
 * - Human visitors see ONLY the preloader (loops forever)
 * - No pages, navigation, or content is accessible
 * - AI crawlers can still access static files in /public/
 *   (llms.txt, knowledge.json, robots.txt, etc.)
 * 
 * To disable: Set MAINTENANCE_MODE = false, then build & deploy
 * 
 * See: MAINTENANCE_MODE.md for full documentation
 * ============================================
 */
const MAINTENANCE_MODE = false

import FluidCursor from './components/FluidCursor.vue'
import AuroraBackground from './components/AuroraBackground.vue'
import ArtHousePreloader from './components/ArtHousePreloader.vue'
import CookieConsent from './components/CookieConsent.vue'
import StickyCTA from './components/StickyCTA.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Toast from './components/Toast.vue'
import { ref, onMounted } from 'vue'
import { useToast } from './composables/useToast'

const isLoading = ref(true)
const showFluidCursor = ref(true)
const { toastMessage, showToast } = useToast()
const HOME_PRELOADER_DELAY_MS = 3500
const PAGE_PRELOADER_DELAY_MS = 900
const FAST_PRELOADER_DELAY_MS = 350

onMounted(() => {
    // ⚠️ MAINTENANCE MODE: If enabled, preloader runs forever
    if (MAINTENANCE_MODE) {
        // Never set isLoading to false - preloader loops infinitely
        // Humans cannot see any content
        if (import.meta.env.DEV) {
            console.log('%c⚠️ SITE IN MAINTENANCE MODE', 'color: orange; font-size: 20px; font-weight: bold;')
            console.log('%cHuman content is hidden. AI endpoints remain accessible.', 'color: orange;')
            console.log('%cSee: MAINTENANCE_MODE.md', 'color: gray;')
        }
        return // Exit early, don't run normal loading logic
    }

    // Normal operation below (only runs when MAINTENANCE_MODE = false)
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
    const networkInfo = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    const lowMemoryDevice = typeof deviceMemory === 'number' && deviceMemory <= 4
    const dataSaverMode = networkInfo?.saveData === true
    const slowConnection = typeof networkInfo?.effectiveType === 'string'
      && ['slow-2g', '2g', '3g'].includes(networkInfo.effectiveType)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const touchPrimaryInput = hasTouch && coarsePointer
    const desktopLikeViewport = window.matchMedia('(min-width: 1024px)').matches
    const constrainedDevice = lowMemoryDevice || dataSaverMode || slowConnection
    const reducedFxContext = constrainedDevice || touchPrimaryInput || prefersReducedMotion
    showFluidCursor.value = desktopLikeViewport && !reducedFxContext && !prefersReducedMotion

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

    <!-- Art House Preloader (Z-40, provides black background) -->
    <!-- In maintenance mode, this NEVER goes away -->
    <ArtHousePreloader :loading="isLoading" />

    <!-- Cursor Layer (Z-50, smoke sits ON TOP of preloader) -->
    <FluidCursor v-if="showFluidCursor" class="fixed inset-0 z-50 pointer-events-none" :intro-mode="isLoading" />

    <!-- Keep layout mounted to avoid CLS when preloader ends -->
    <div
      id="main-content"
      class="relative z-10 pb-32 md:pb-0 transition-opacity duration-200"
      :class="isLoading ? 'opacity-0 pointer-events-none select-none' : 'opacity-100 pointer-events-auto'"
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
