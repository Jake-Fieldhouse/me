<script setup lang="ts">
import FluidCursor from './components/FluidCursor.vue'
import AuroraBackground from './components/AuroraBackground.vue'
import ArtHousePreloader from './components/ArtHousePreloader.vue'
import CookieConsent from './components/CookieConsent.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(true)

onMounted(() => {
    // Handle GitHub Pages SPA redirect
    // The 404.html redirects to /?p=original-path
    const urlParams = new URLSearchParams(window.location.search)
    const redirectPath = urlParams.get('p')
    
    if (redirectPath) {
        // Clean the URL and navigate to the intended route
        window.history.replaceState(null, '', '/' + decodeURIComponent(redirectPath))
        router.replace('/' + decodeURIComponent(redirectPath))
    }

    // Load time for art house effect
    setTimeout(() => {
        isLoading.value = false
    }, 3500)
})
</script>

<template>
  <div class="relative min-h-screen bg-black text-white font-inter selection:bg-white/20 overflow-x-hidden">
    
    <!-- Hero Layer -->
    <AuroraBackground class="fixed inset-0 z-0">
        <!-- Aurora handles its own visuals -->
    </AuroraBackground>

    <!-- Art House Preloader (Z-40, provides black background) -->
    <ArtHousePreloader :loading="isLoading" />

    <!-- Cursor Layer (Z-50, smoke sits ON TOP of preloader) -->
    <FluidCursor class="fixed inset-0 z-50 pointer-events-none" :intro-mode="isLoading" />

    <!-- Navigation -->
    <Navbar />

    <!-- Main Router Content -->
    <div class="relative z-10">
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

      <!-- Global Footer -->
      <Footer />
    </div>
  </div>
</template>

<style>
/* Remove local styles in favor of Tailwind classes where possible */
</style>
