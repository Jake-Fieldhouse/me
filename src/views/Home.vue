<script setup lang="ts">
import BentoGrid from '../components/BentoGrid.vue'
import BentoItem from '../components/BentoItem.vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const headerRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(headerRef, { delay: 2.2 }) // Wait for preloader
useScrollReveal(trustRef, { delay: 2.5 })
useScrollReveal(gridRef, { delay: 0.2, y: 100 })
</script>

<template>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center gap-32">
      
      <!-- Header -->
      <header ref="headerRef" class="text-center space-y-6 w-full mt-20">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            class="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" 
            />
        </div>
        <p class="text-2xl md:text-3xl text-neutral-300 font-light max-w-2xl mx-auto">
          Enterprise IT. Component-Level Repair. Zero Compromise.
        </p>
        <p class="text-lg text-neutral-500 max-w-xl mx-auto">
          From 24/7 managed services to microsoldering dead boards—I handle the full stack, Hull to worldwide.
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <router-link 
            to="/contact" 
            class="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
            Book Free Consultation
          </router-link>
          <router-link 
            to="/about" 
            class="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Learn More
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
            class="md:col-span-2 group hover:border-red-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/microsoldering-repair-hull')"
          >
             <template #header>
                <div class="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-900/50 to-neutral-900 overflow-hidden">
                    <CircuitPattern class="text-red-500/30" />
                </div>
             </template>
          </BentoItem>
          
          <BentoItem
            title="Managed IT"
            description="43% of UK businesses were breached this year. Local response, enterprise protection, 24/7 monitoring."
            class="md:col-span-1 group hover:border-blue-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/managed-it-services-hull')"
          >
            <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-900/50 to-neutral-900" />
            </template>
          </BentoItem>

          <BentoItem
            title="AI Visibility"
            description="58% of consumers now search with AI. Make sure ChatGPT, Perplexity, and Google AI recommend you, not your competitors."
            class="md:col-span-1 group hover:border-violet-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/ai-optimization-hull')"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-900/50 to-neutral-900" />
             </template>
          </BentoItem>

          <BentoItem
            title="E-Waste & ITAD"
            description="Free collection. NIST 800-88 data destruction. Certificate of Destruction included. WEEE 2025 compliant."
            class="md:col-span-2 group hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/secure-data-disposal-hull')"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-900/50 to-neutral-900" />
             </template>
          </BentoItem>
        </BentoGrid>
      </main>






    </div>
</template>
