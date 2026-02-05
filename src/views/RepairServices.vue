<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import IconChip from '../components/icons/IconChip.vue'
import IconDatabase from '../components/icons/IconDatabase.vue'
import IconDroplet from '../components/icons/IconDroplet.vue'
import IconGamepad from '../components/icons/IconGamepad.vue'
import IconSmartphone from '../components/icons/IconSmartphone.vue'
import IconLaptop from '../components/icons/IconLaptop.vue'

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
  const subject = encodeURIComponent(`Repair Quote Request: ${form.value.device}`)
  const body = encodeURIComponent(`
Device: ${form.value.device}
Issue: ${form.value.issue}

Contact: ${form.value.name}
Email: ${form.value.email}
  `.trim())
  window.location.href = `mailto:jake@jakefieldhouse.co.uk?subject=${subject}&body=${body}`
}

const services = shallowRef([
  {
    icon: IconChip,
    title: 'Microsoldering',
    description: 'HDMI ports, USB-C connectors, backlight filters, and board-level trace repair for consoles and logic boards.'
  },
  {
    icon: IconDatabase,
    title: 'Data Recovery',
    description: 'Physical and logical recovery from dead drives, water-damaged phones, and corrupted partitions.'
  },
  {
    icon: IconDroplet,
    title: 'Liquid Damage',
    description: 'Advanced ultrasonic cleaning and corrosion removal. We don\'t just dry it; we chemically treat it.'
  },
  {
    icon: IconGamepad,
    title: 'Console Repair',
    description: 'PS5, Xbox, Switch: HDMI replacement, disc drive fixes, overheating solutions, and custom mods.'
  },
  {
    icon: IconSmartphone,
    title: 'Phone & Tablet',
    description: 'Screen replacements, battery swaps, charging port repairs, and motherboard diagnostics.'
  },
  {
    icon: IconLaptop,
    title: 'Laptop & MacBook',
    description: 'Logic board repair, keyboard replacement, hinge fixes, thermal paste reapplication.'
  }
])
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header ref="heroRef" class="text-center space-y-6 mt-10 relative">
      <!-- Circuit Pattern Backing -->
      <div class="absolute inset-0 -z-10 opacity-20 flex justify-center overflow-hidden pointer-events-none">
        <CircuitPattern class="w-full max-w-3xl h-auto aspect-square text-red-500 animate-pulse-slow" />
      </div>

      <div class="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
        No-Fix-No-Fee Guarantee • Component-Level Repair
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        We Fix <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">The Unfixable</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        Manufacturer said "unrepairable"? We disagree. Component-level board repair, 
        microsoldering, and forensic data recovery, at a fraction of replacement cost.
      </p>
      
      <div class="flex justify-center gap-4 pt-4">
        <a href="#quote" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
          Get in Touch
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
          <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-red-500">
             <component :is="service.icon" class="w-6 h-6" />
          </div>
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
