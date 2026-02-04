<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Show CTA only after scrolling past hero section
const isVisible = ref(false)
const SCROLL_THRESHOLD = 400 // pixels to scroll before showing

function handleScroll() {
  isVisible.value = window.scrollY > SCROLL_THRESHOLD
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Check initial position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="slide-up">
    <div 
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-40 p-3 md:hidden"
    >
      <!-- Subtle glassmorphism bar -->
      <div class="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/50 flex gap-3">
        
        <!-- Call Button (Urgent) -->
        <a 
          href="tel:+447404090458"
          class="flex items-center justify-center w-14 aspect-square bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-xl hover:bg-emerald-500 hover:text-white transition-all active:scale-[0.95]"
          aria-label="Call Now"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </a>

        <!-- Main Contact Button -->
        <router-link 
          to="/contact"
          class="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
          aria-label="Get in touch with Jake Fieldhouse"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get in Touch
        </router-link>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
