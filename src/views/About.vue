<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import BreadcrumbSchema from '../components/BreadcrumbSchema.vue'

const heroRef = ref<HTMLElement | null>(null)
const storyRef = ref<HTMLElement | null>(null)
const valuesRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(storyRef, { delay: 0.2 })
useScrollReveal(valuesRef, { delay: 0.3, stagger: 0.1 })

const values = [
  {
    icon: '🔧',
    title: 'Repair First',
    description: 'Before recycling, we try to fix it. Better for you, better for the planet.'
  },
  {
    icon: '🛡️',
    title: 'Security Obsessed',
    description: 'Your data is sacred. GDPR-compliant destruction with full audit trails.'
  },
  {
    icon: '🌱',
    title: 'Sustainability Built-In',
    description: 'Zero-landfill commitment. Every device gets a second life or responsible recycling.'
  },
  {
    icon: '🤝',
    title: 'Local & Personal',
    description: 'Not a faceless call center. Same-day response from a real person.'
  }
]
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <BreadcrumbSchema :crumbs="[{ name: 'About', url: '/about' }]" />

    <header ref="heroRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
        DBS Checked • ICO Registered
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        The Person Behind <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">The Tech</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
        I'm Jake Fieldhouse, Director of Jake Fieldhouse Consulting Ltd (Company No. 16536646). Your full-stack tech partner from setup to sunset, based in Hull.
      </p>
    </header>

    <!-- Photo Section -->
    <section class="flex justify-center">
      <div class="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border-4 border-neutral-700 overflow-hidden flex items-center justify-center shadow-2xl">
        <picture class="w-full h-full">
          <source srcset="/jake-fieldhouse.avif" type="image/avif" />
          <img src="/jake-fieldhouse.jpg" alt="Jake Fieldhouse - Director of Jake Fieldhouse Consulting Ltd" class="w-full h-full object-cover object-top" fetchpriority="high" />
        </picture>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="grid grid-cols-3 gap-4 md:gap-8 py-6">
      <div class="text-center space-y-1">
        <div class="text-3xl md:text-4xl font-black text-white">15+</div>
        <div class="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Years Experience</div>
      </div>
      <div class="text-center space-y-1">
        <div class="text-3xl md:text-4xl font-black text-white">1,000+</div>
        <div class="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Devices Repaired</div>
      </div>
      <div class="text-center space-y-1">
        <div class="text-3xl md:text-4xl font-black text-white">2TB+</div>
        <div class="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Data Recovered</div>
      </div>
    </section>

    <!-- Story -->
    <section ref="storyRef" class="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-white/5 space-y-6">
      <h2 class="text-3xl font-bold text-white">The Journey</h2>
      <div class="text-neutral-300 space-y-4 leading-relaxed">
        <p>
          I started soldering when I was 15, fixing broken phones for pocket money. That curiosity turned into a career spanning hardware repair, network administration, and business IT consulting.
        </p>
        <p>
          After years of seeing businesses struggle with fragmented IT support (one vendor for setup, another for repairs, a third for disposal), I founded <strong class="text-white">Jake Fieldhouse Consulting Ltd</strong> to be different. No call centers. No ticket numbers. Just one partner who knows your name and your systems.
        </p>
        <p>
          Today, I serve SMBs across Hull, East Yorkshire, and beyond, from 5-person agencies to 50-seat offices. One relationship. Complete lifecycle coverage.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section ref="valuesRef" class="space-y-12">
      <h2 class="text-3xl font-bold text-white text-center">What I Stand For</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="value in values" 
          :key="value.title"
          class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors hover-lift scroll-reveal"
        >
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-bold text-white mb-2">{{ value.title }}</h3>
          <p class="text-neutral-400 text-sm">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center space-y-6">
      <h2 class="text-2xl font-bold text-white">Ready to simplify your IT?</h2>
      <div class="flex justify-center gap-4">
        <router-link to="/contact" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors btn-depth">
          Get In Touch
        </router-link>
        <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/20">
          Back to Home
        </router-link>
      </div>
    </section>
  </div>
</template>
