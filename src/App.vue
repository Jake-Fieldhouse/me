<script setup lang="ts">
import FluidCursor from './components/FluidCursor.vue'
import AuroraBackground from './components/AuroraBackground.vue'
import Preloader from './components/Preloader.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const showCookies = ref(true)



onMounted(() => {
    // Artificial minimum load time for effect, plus asset check
    setTimeout(() => {
        isLoading.value = false
    }, 2000)
})

const acceptCookies = () => {
  showCookies.value = false
  localStorage.setItem('cookies-accepted', 'true')
}

if (localStorage.getItem('cookies-accepted')) {
  showCookies.value = false
}


</script>

<template>
  <div class="relative min-h-screen bg-black text-white font-inter selection:bg-white/20 overflow-x-hidden">
    
    <!-- Hero Layer -->
    <AuroraBackground class="fixed inset-0 z-0">
        <!-- Aurora handles its own visuals -->
    </AuroraBackground>

    <!-- Preloader -->
    <Preloader :loading="isLoading" />

    <!-- Cursor Layer -->
    <FluidCursor class="fixed inset-0 z-50 pointer-events-none" />

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


      <!-- Cookies -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform translate-y-full opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-full opacity-0"
      >
        <div v-if="showCookies" class="fixed bottom-6 right-6 z-50 bg-neutral-900/90 border border-neutral-800 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl">
          <p class="text-sm text-neutral-300">This site uses cookies to enhance your experience.</p>
          <button 
            @click="acceptCookies" 
            class="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Got it
          </button>
        </div>
      </transition>

      <!-- Global Footer -->
      <Footer />
    </div>
  </div>
</template>

<style>
/* Remove local styles in favor of Tailwind classes where possible */
</style>
