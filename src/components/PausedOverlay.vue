<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pausedRoutes } from '../data/pausedRoutes'

const route = useRoute()
const isPaused = computed(() => pausedRoutes.includes(route.path))
</script>

<template>
  <!-- Overlay: blocks interaction but page content stays in DOM for crawlers -->
  <Transition
    enter-active-class="transition ease-out duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isPaused" class="paused-overlay">
      <div class="paused-card">
        <!-- Decorative top accent -->
        <div class="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-t-2xl" />
        
        <div class="p-8 md:p-12 flex flex-col items-center text-center gap-6">
          <!-- Icon -->
          <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <!-- Copy -->
          <div class="space-y-3">
            <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">
              This Service Is Coming Soon
            </h2>
            <p class="text-neutral-400 max-w-md leading-relaxed">
              We're currently focusing on our core services. This page will be back soon — in the meantime, explore what's available now.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <router-link
              to="/secure-data-disposal-hull"
              class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-[0.98]"
            >
              ♻️ Book Free E-Waste Collection
            </router-link>
            <router-link
              to="/contact"
              class="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
            >
              Get in Touch
            </router-link>
          </div>

          <!-- Active services mini-nav -->
          <div class="pt-4 border-t border-white/5 w-full">
            <p class="text-xs text-neutral-500 uppercase tracking-wider mb-3">Available Services</p>
            <div class="flex flex-wrap justify-center gap-3">
              <router-link to="/secure-data-disposal-hull" class="paused-service-link text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10">
                E-Waste & ITAD
              </router-link>
              <router-link to="/microsoldering-repair-hull" class="paused-service-link text-red-400 border-red-500/20 hover:bg-red-500/10">
                Repair
              </router-link>
              <router-link to="/ai-optimization-hull" class="paused-service-link text-violet-400 border-violet-500/20 hover:bg-violet-500/10">
                AI Optimization
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.paused-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.paused-card {
  max-width: 32rem;
  width: 100%;
  background: rgba(23, 23, 23, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.03);
  overflow: hidden;
}

.paused-service-link {
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
</style>
