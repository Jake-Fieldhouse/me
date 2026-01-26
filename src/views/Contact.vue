<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const heroRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(formRef, { delay: 0.2 })

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: 'general',
  message: ''
})

const submitForm = () => {
  // TODO: Hook up to backend or email service
  alert('Thanks for reaching out! I\'ll get back to you within 24 hours.')
}

const contactMethods = [
  { icon: '📧', label: 'Email', value: 'jke.contact.me@gmail.com', href: 'mailto:jke.contact.me@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+44 7400 052962', href: 'tel:+447400052962' },
  { icon: '💬', label: 'WhatsApp', value: 'Chat Now', href: 'https://wa.me/447400052962' }
]
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16">
    
    <!-- Hero -->
    <header ref="heroRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-4">
        Contact
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Talk</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        Whether you need a repair quote, MSP consultation, or e-waste pickup—I respond within 24 hours.
      </p>
    </header>

    <!-- Quick Contact -->
    <div class="grid md:grid-cols-3 gap-4">
      <a 
        v-for="method in contactMethods" 
        :key="method.label"
        :href="method.href"
        class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-colors text-center group"
      >
        <div class="text-3xl mb-3">{{ method.icon }}</div>
        <div class="text-sm text-neutral-500 mb-1">{{ method.label }}</div>
        <div class="text-white font-medium group-hover:text-emerald-400 transition-colors">{{ method.value }}</div>
      </a>
    </div>

    <!-- Form -->
    <section ref="formRef" class="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-white/5">
      <h2 class="text-2xl font-bold text-white mb-8">Send a Message</h2>
      <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Name</label>
          <input 
            v-model="form.name" 
            type="text" 
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500" 
            placeholder="Your name" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500" 
            placeholder="you@company.com" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Phone (optional)</label>
          <input 
            v-model="form.phone" 
            type="tel" 
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500" 
            placeholder="+44 7XXX XXXXXX" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-2">Service</label>
          <select 
            v-model="form.service" 
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500"
          >
            <option value="general">General Enquiry</option>
            <option value="repair">Repair Quote</option>
            <option value="msp">MSP / IT Support</option>
            <option value="ewaste">E-Waste Collection</option>
            <option value="data">Data Recovery</option>
          </select>
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-neutral-400 mb-2">Message</label>
          <textarea 
            v-model="form.message" 
            rows="4"
            required
            class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 resize-none" 
            placeholder="Tell me about your project or issue..."
          ></textarea>
        </div>
        <div class="md:col-span-2">
          <button 
            type="submit" 
            class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-colors"
          >
            Send Message
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
