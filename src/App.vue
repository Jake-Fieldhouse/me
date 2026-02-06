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
import { useRouter } from 'vue-router'
import { useToast } from './composables/useToast'

const router = useRouter()
const isLoading = ref(true)
const { toastMessage, showToast } = useToast()

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
    
    // Handle GitHub Pages SPA redirect
    // The 404.html redirects to /?p=original-path
    const urlParams = new URLSearchParams(window.location.search)
    const redirectPath = urlParams.get('p')
    
    if (redirectPath) {
        // Clean the URL and navigate to the intended route
        window.history.replaceState(null, '', '/' + decodeURIComponent(redirectPath))
        router.replace('/' + decodeURIComponent(redirectPath))
    }

    // Smart preloader: skip on repeat visits within session
    const hasSeenPreloader = sessionStorage.getItem('preloader-seen')
    
    if (hasSeenPreloader) {
        // Instant load for repeat visitors
        isLoading.value = false
    } else {
        // Full art house experience for first visit
        setTimeout(() => {
            isLoading.value = false
            sessionStorage.setItem('preloader-seen', 'true')
        }, 3500)
    }
})
</script>

<template>
  <div class="relative min-h-dvh bg-black text-white font-inter selection:bg-white/20 overflow-x-hidden">
    
    <!-- Hero Layer -->
    <AuroraBackground class="fixed inset-0 z-0">
        <!-- Aurora handles its own visuals -->
    </AuroraBackground>

    <!-- Art House Preloader (Z-40, provides black background) -->
    <!-- In maintenance mode, this NEVER goes away -->
    <ArtHousePreloader :loading="isLoading" />

    <!-- Cursor Layer (Z-50, smoke sits ON TOP of preloader) -->
    <FluidCursor class="fixed inset-0 z-50 pointer-events-none" :intro-mode="isLoading" />

    <!-- ⚠️ ALL CONTENT BELOW IS HIDDEN WHEN isLoading = true (maintenance mode) -->
    <template v-if="!isLoading">
      <!-- Navigation -->
      <Navbar />

      <!-- Main Router Content (pb-32 on mobile for 108px StickyCTA clearance) -->
      <div class="relative z-10 pb-32 md:pb-0">
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
    </template>
  </div>
</template>
