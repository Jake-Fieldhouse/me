<script setup lang="ts">
import BentoGrid from '../components/BentoGrid.vue'
import BentoItem from '../components/BentoItem.vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import OutcomeStats from '../components/OutcomeStats.vue'
import Testimonials from '../components/Testimonials.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import HyperText from '../components/HyperText.vue'

const headerRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(headerRef, { delay: 2.2 }) // Wait for preloader
useScrollReveal(trustRef, { delay: 2.5 })
useScrollReveal(gridRef, { delay: 0.2, y: 100 })
</script>

<template>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center gap-32">
      
      <!-- Header -->
      <header ref="headerRef" class="text-center space-y-6 w-full mt-20">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            class="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" 
            />
        </div>
        <p class="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-light max-w-2xl mx-auto drop-shadow-2xl">
          Enterprise IT. Component-Level Repair. Zero Compromise.
        </p>
        <p class="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto text-readable drop-shadow-xl">
          <router-link to="/managed-it-services-hull" class="text-blue-400 hover:text-blue-300 transition-colors">SMB & enterprise IT</router-link>, <router-link to="/microsoldering-repair-hull" class="text-red-400 hover:text-red-300 transition-colors">board-level repairs</router-link>, <router-link to="/ai-optimization-hull" class="text-violet-400 hover:text-violet-300 transition-colors">AI visibility</router-link>, and <router-link to="/secure-data-disposal-hull" class="text-emerald-400 hover:text-emerald-300 transition-colors">responsible recycling</router-link>. Based in Hull.
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
            to="/repair-ninja" 
            class="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Get Repair Quote
          </router-link>
        </div>
        <!-- Secondary CTA: E-Waste -->
        <div class="pt-2">
          <router-link 
            to="/secure-data-disposal-hull" 
            class="text-sm text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
          >
            ♻️ Free E-Waste Collection & ITAD
            <span class="text-xs opacity-60">→</span>
          </router-link>
        </div>
      </header>
      
      <!-- Trust Signals -->
      <TrustBar ref="trustRef" class="w-full max-w-4xl mx-auto rounded-xl border border-white/5" />

      <!-- Services Grid -->
      <main ref="gridRef" class="w-full">
        <BentoGrid class="max-w-4xl mx-auto">
          <BentoItem
            title="Repair Ninja"
            description="Manufacturer says unrepairable? We disagree. Component-level microsoldering for MacBooks, PS5s, and phones. No Fix, No Fee."
            class="md:col-span-2 group hover:scale-105 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            to="/microsoldering-repair-hull"
          >
             <template #header>
                <div class="relative flex flex-1 w-full h-full min-h-24 rounded-xl bg-gradient-to-br from-red-900/50 to-neutral-900 overflow-hidden">
                    <CircuitPattern class="text-red-500/30" />
                </div>
             </template>
             <div class="mt-4 flex items-center text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Learn More <span class="ml-1">→</span>
             </div>
          </BentoItem>
          
          <BentoItem
            title="Managed IT"
            description="43% of UK businesses were breached this year. Local response, enterprise protection, 24/7 monitoring."
            class="md:col-span-1 group hover:scale-105 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            to="/managed-it-services-hull"
          >
            <template #header>
                <div class="flex flex-1 w-full h-full min-h-24 rounded-xl bg-gradient-to-br from-blue-900/50 to-neutral-900" />
            </template>
             <div class="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Explore <span class="ml-1">→</span>
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

          <BentoItem
            title="E-Waste & Recycling"
            description="Stop paying for disposal. Free business collection, Zero Landfill policy, and full compliance documentation."
            class="md:col-span-2 group hover:scale-105 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            to="/secure-data-disposal-hull"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-24 rounded-xl bg-gradient-to-br from-amber-900/50 to-neutral-900" />
             </template>
             <div class="mt-4 flex items-center text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Get in Touch <span class="ml-1">→</span>
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
