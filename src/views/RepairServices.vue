<script setup lang="ts">
import { ref } from 'vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const heroRef = ref<HTMLElement | null>(null)
const servicesRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(servicesRef, { delay: 0.2, stagger: 0.15 })
useScrollReveal(formRef, { delay: 0.3 })

const form = ref({
  name: '',
  email: '',
  device: '',
  issue: ''
})

const submitForm = () => {
  alert('Thanks! I\'ll review your repair request and get back to you within 24 hours.')
}

const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
    title: 'Microsoldering',
    description: 'HDMI ports, USB-C connectors, backlight filters, and board-level trace repair for consoles and logic boards.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>`,
    title: 'Data Recovery',
    description: 'Physical and logical recovery from dead drives, water-damaged phones, and corrupted partitions.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
    title: 'Liquid Damage',
    description: 'Advanced ultrasonic cleaning and corrosion removal. We don\'t just dry it; we chemically treat it.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    title: 'Console Repair',
    description: 'PS5, Xbox, Switch—HDMI replacement, disc drive fixes, overheating solutions, and custom mods.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
    title: 'Phone & Tablet',
    description: 'Screen replacements, battery swaps, charging port repairs, and motherboard diagnostics.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`,
    title: 'Laptop & MacBook',
    description: 'Logic board repair, keyboard replacement, hinge fixes, thermal paste reapplication.'
  }
]
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header ref="heroRef" class="text-center space-y-6 mt-10 relative">
      <!-- Circuit Pattern Backing -->
      <div class="absolute inset-0 -z-10 opacity-20 flex justify-center overflow-hidden pointer-events-none">
        <CircuitPattern class="w-[800px] h-[800px] text-red-500 animate-pulse-slow" />
      </div>

      <div class="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
        No-Fix-No-Fee Guarantee • Component-Level Repair
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        We Fix <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">The Unfixable</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        Manufacturer said "unrepairable"? We disagree. Component-level board repair, 
        microsoldering, and forensic data recovery—at a fraction of replacement cost.
      </p>
      
      <div class="flex justify-center gap-4 pt-4">
        <a href="#quote" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
          Get Repair Quote
        </a>
        <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10">
          Back to Home
        </router-link>
      </div>
    </header>

    <!-- Trust Bar -->
    <TrustBar />

    <!-- Services Grid -->
    <section ref="servicesRef" class="space-y-8">
      <h2 class="text-3xl font-bold text-white text-center">What We Repair</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="service in services" 
          :key="service.title"
          class="bg-neutral-900/50 p-8 rounded-2xl border border-red-900/30 hover:border-red-500/50 transition-colors group"
        >
          <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" v-html="service.icon"></div>
          <h3 class="text-xl font-bold text-white mb-2">{{ service.title }}</h3>
          <p class="text-neutral-400 text-sm">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Quote Form -->
    <section id="quote" ref="formRef" class="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-red-900/20">
      <h2 class="text-2xl font-bold text-white mb-8 text-center">Request a Repair Quote</h2>
      <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Your Name</label>
          <input 
            v-model="form.name" 
            type="text" 
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" 
            placeholder="John Doe" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" 
            placeholder="you@email.com" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Device Type</label>
          <input 
            v-model="form.device" 
            type="text" 
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" 
            placeholder="e.g. PS5, MacBook Pro 2019, iPhone 13" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Issue Description</label>
          <input 
            v-model="form.issue" 
            type="text" 
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" 
            placeholder="e.g. No display, water damage, won't turn on" 
          />
        </div>
        <div class="md:col-span-2">
          <button 
            type="submit" 
            class="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-colors"
          >
            Submit Repair Request
          </button>
        </div>
      </form>
    </section>

    <!-- Back -->
    <div class="text-center">
      <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
    </div>
  </div>
</template>
