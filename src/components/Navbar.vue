<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { trackPhoneClick } from '../lib/analytics'
import IconMenu from './icons/IconMenu.vue'
import IconX from './icons/IconX.vue'

const route = useRoute()
const isMenuOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)

const navItems = [
  { name: 'Expertise', path: '/#expertise' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Book a Session', path: '/contact' }
]

const isActive = (path: string) => {
  if (path.includes('#')) {
    const normalizedPath = path.startsWith('#') ? `/${path}` : path
    const [routePath, routeHash] = normalizedPath.split('#')
    return route.path === (routePath || '/') && route.hash === `#${routeHash}`
  }

  return route.path === path
}

// Close mobile menu when tapping/clicking outside.
const handleOutsideInteraction = (event: PointerEvent | MouseEvent) => {
  const target = event.target as Node
  if (isMenuOpen.value && navRef.value && !navRef.value.contains(target)) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsideInteraction, true)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleOutsideInteraction, true)
})

watch(() => route.hash, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <nav ref="navRef" aria-label="Main navigation" class="navbar-root fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <span class="text-xl font-black text-white tracking-tight">JF</span>
          <span class="text-xs text-neutral-400 hidden sm:block">Consulting</span>
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-sm transition-colors border-b pb-0.5"
            :class="isActive(item.path) ? 'text-white border-white/50' : 'text-neutral-400 hover:text-white border-transparent hover:border-white/50'"
          >
            {{ item.name }}
          </router-link>

          <!-- Phone (Desktop) -->
          <a href="tel:+447404090458" class="text-neutral-400 hover:text-white transition-colors" aria-label="Call us" title="07404 090458" @click="trackPhoneClick('navbar')">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-3 -mr-3" aria-label="Toggle menu">
          <IconMenu v-if="!isMenuOpen" class="w-6 h-6" />
          <IconX v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-white/5 bg-neutral-900">
          <div class="flex flex-col gap-2">
            <router-link 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              @click="isMenuOpen = false"
              class="px-4 py-2 rounded-lg text-sm transition-colors"
              :class="isActive(item.path) ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
.navbar-root {
  touch-action: manipulation;
}
.navbar-root button,
.navbar-root a {
  touch-action: manipulation;
}
</style>
