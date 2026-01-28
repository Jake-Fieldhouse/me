<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const serviceItems = [
  { name: 'Microsoldering & Repair', path: '/microsoldering-repair-hull' },
  { name: 'Managed IT Services', path: '/managed-it-services-hull' },
  { name: 'AI Optimization', path: '/ai-optimization-hull' },
  { name: 'Secure Data Disposal', path: '/secure-data-disposal-hull' },
  { name: 'Compliance', path: '/compliance' }
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
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
          
          <!-- Services Dropdown -->
          <div class="relative group">
            <button class="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1 border-b border-transparent hover:border-white/50 pb-0.5">
              Services
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div class="bg-neutral-900 border border-white/10 rounded-xl p-2 min-w-[180px] shadow-2xl">
                <router-link 
                  v-for="service in serviceItems" 
                  :key="service.path"
                  :to="service.path"
                  class="block px-4 py-2 text-sm rounded-lg transition-colors"
                  :class="isActive(service.path) ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'"
                >
                  {{ service.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2">
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
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
        <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-white/5">
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
