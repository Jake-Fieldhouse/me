<script setup lang="ts">
import BentoGrid from '../components/BentoGrid.vue'
import BentoItem from '../components/BentoItem.vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import Testimonials from '../components/Testimonials.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useOgMeta } from '../composables/useOgMeta'
import HyperText from '../components/HyperText.vue'

const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(gridRef, { delay: 0, y: 56 })

useOgMeta({
  title: 'Jake Fieldhouse | IT Consulting & Repair Hull',
  description: 'Expert IT support, microsoldering repairs, and B2B e-waste solutions in Hull & East Yorkshire. Your full-stack tech partner.',
  image: '/images/og-image.png',
  url: '/'
})
</script>

<template>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center gap-32">
      
      <!-- Header -->
      <header class="text-center space-y-6 w-full mt-20">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            :animate-on-load="false"
            class="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" 
            />
        </div>
        <p class="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-light max-w-2xl mx-auto drop-shadow-2xl">
          E-Waste. Repair. AI Optimisation.
        </p>
        <p class="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto text-readable drop-shadow-xl">
          <router-link to="/secure-data-disposal-hull" class="text-emerald-400 hover:text-emerald-300 transition-colors">Free e-waste collection &amp; certified data destruction</router-link>, <router-link to="/microsoldering-repair-hull" class="text-red-400 hover:text-red-300 transition-colors">component-level hardware repair</router-link>, and <router-link to="/ai-optimization-hull" class="text-violet-400 hover:text-violet-300 transition-colors">AI search visibility</router-link>. One partner. Hull &amp; East Yorkshire.
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <router-link 
            to="/contact" 
            class="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg shadow-white/10 btn-depth"
          >
            Get in Touch
          </router-link>
          <router-link 
            to="/microsoldering-repair-hull" 
            class="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Get Repair Quote
          </router-link>
          <router-link 
            to="/secure-data-disposal-hull" 
            class="px-8 py-3 border border-emerald-500/30 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 transition-all"
          >
            ♻️ Book Free Collection
          </router-link>
        </div>
      </header>
      
      <!-- Trust Signals -->
      <TrustBar class="w-full max-w-6xl mx-auto rounded-xl border border-white/5" />

      <!-- Services Grid -->
      <main ref="gridRef" class="w-full">
        <BentoGrid class="max-w-4xl mx-auto">
          <BentoItem
            title="E-Waste & ITAD"
            description="Stop paying for disposal. Free business collection, NIST 800-88 certified data destruction, Zero Landfill policy, and full compliance documentation."
            class="md:col-span-2 group hover:scale-105 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            to="/secure-data-disposal-hull"
          >
             <template #header>
                <div class="relative flex flex-1 w-full h-full min-h-24 rounded-xl bg-gradient-to-br from-emerald-900/50 to-neutral-900 overflow-hidden">
                    <CircuitPattern class="text-emerald-500/30" />
                </div>
             </template>
             <div class="mt-4 flex items-center text-emerald-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Book Free Collection <span class="ml-1">→</span>
             </div>
          </BentoItem>

          <BentoItem
            title="Repair Ninja"
            description="Manufacturer says unrepairable? We disagree. Component-level microsoldering for MacBooks, PS5s, and phones. No Fix, No Fee."
            class="md:col-span-1 group hover:scale-105 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            to="/microsoldering-repair-hull"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-24 rounded-xl bg-gradient-to-br from-red-900/50 to-neutral-900" />
             </template>
             <div class="mt-4 flex items-center text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Learn More <span class="ml-1">→</span>
             </div>
          </BentoItem>

          <BentoItem
            title="AI Visibility"
            description="58% of consumers now search with AI. Make sure ChatGPT, Perplexity, and Google AI recommend you, not your competitors."
            class="md:col-span-1 group hover:scale-105 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            to="/ai-optimization-hull"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-24 rounded-xl bg-gradient-to-br from-violet-900/50 to-neutral-900" />
             </template>
             <div class="mt-4 flex items-center text-violet-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                See How <span class="ml-1">→</span>
             </div>
          </BentoItem>
        </BentoGrid>
      </main>

      <!-- Outcome Stats -->
      <OutcomeStats class="w-full" />

      <!-- Testimonials (hidden until populated) -->
      <Testimonials class="w-full" />

    </div>
</template>
