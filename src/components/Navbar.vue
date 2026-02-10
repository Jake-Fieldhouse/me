<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconChevronDown from './icons/IconChevronDown.vue'
import IconMenu from './icons/IconMenu.vue'
import IconX from './icons/IconX.vue'

const route = useRoute()
const isMenuOpen = ref(false)
const isServicesOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const servicesDropdownRef = ref<HTMLElement | null>(null)

// Detect hover-capable devices (mouse, trackpad) vs touch-only
const supportsHover = ref(false)
onMounted(() => {
  supportsHover.value = window.matchMedia('(hover: hover)').matches
})

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Insights', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const serviceItems = [
  { name: 'Microsoldering & Repair', path: '/microsoldering-repair-hull' },
  { name: 'Managed IT Services', path: '/managed-it-services-hull' },
  { name: 'AI Optimization', path: '/ai-optimization-hull' },
  { name: 'DC Remote Hands', path: '/data-centre-remote-hands-hull' },
  { name: 'Secure Data Disposal', path: '/secure-data-disposal-hull' },
  { name: 'Compliance', path: '/compliance' }
]

const isActive = (path: string) => route.path === path

// Desktop hover: only on devices with a fine pointer (mouse)
const handleMouseEnter = () => {
  if (supportsHover.value) isServicesOpen.value = true
}
const handleMouseLeave = () => {
  if (supportsHover.value) isServicesOpen.value = false
}

// Close mobile menu and services dropdown when tapping/clicking outside.
// Uses pointerdown to fire BEFORE the delayed synthetic click on iOS,
// preventing the open→close race condition.
const handleOutsideInteraction = (event: PointerEvent | MouseEvent) => {
  const target = event.target as Node

  if (isMenuOpen.value && navRef.value && !navRef.value.contains(target)) {
    isMenuOpen.value = false
  }

  if (isServicesOpen.value && servicesDropdownRef.value && !servicesDropdownRef.value.contains(target)) {
    isServicesOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsideInteraction, true)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleOutsideInteraction, true)
})

// Close dropdown on route change (belt-and-suspenders)
watch(() => route.path, () => {
  isServicesOpen.value = false
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
          <span class="text-xs text-neutral-500 hidden sm:block">Consulting</span>
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
          
          <!-- Services Dropdown (Click + Desktop Hover) -->
          <div 
            ref="servicesDropdownRef"
            class="relative services-dropdown"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <button 
              @click.stop="isServicesOpen = !isServicesOpen"
              aria-haspopup="true"
              :aria-expanded="isServicesOpen"
              aria-controls="services-menu"
              class="services-trigger text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1 border-b border-transparent hover:border-white/50 pb-0.5"
            >
              Services
              <IconChevronDown class="w-4 h-4 transition-transform" :class="isServicesOpen ? 'rotate-180' : ''" />
            </button>
            <div 
              class="absolute top-full left-0 pt-4 transition-all duration-200 ease-out z-50"
              :class="isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
            >
              <div class="bg-neutral-900 border border-white/10 rounded-xl p-2 w-56 shadow-2xl" id="services-menu" role="menu">
                <router-link 
                  v-for="service in serviceItems" 
                  :key="service.path"
                  :to="service.path"
                  @click="isServicesOpen = false"
                  class="block px-4 py-2 text-sm rounded-lg transition-colors"
                  :class="isActive(service.path) ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'"
                >
                  {{ service.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button (44px+ touch target) -->
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
              v-for="item in [...navItems, ...serviceItems]" 
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
/* Eliminate iOS 300ms tap delay and double-tap-to-zoom on interactive elements */
.navbar-root {
  touch-action: manipulation;
}
.navbar-root button,
.navbar-root a {
  touch-action: manipulation;
}
</style>
