<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import IconPhone from './icons/IconPhone.vue'
import IconChat from './icons/IconChat.vue'

const route = useRoute()

// Hide on contact page - no need for CTA when already on contact
const isContactPage = computed(() => route.path === '/contact')

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
      v-if="isVisible && !isContactPage"
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
            <IconPhone class="w-6 h-6" />
        </a>

        <!-- Main Contact Button -->
        <router-link 
          to="/contact"
          class="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/30 active:scale-[0.98]"
          aria-label="Get in touch with Jake Fieldhouse"
        >
          <IconChat class="w-4 h-4" />
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
