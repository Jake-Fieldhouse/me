<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const heroRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(formRef, { delay: 0.2 })


const contactMethods = [
  { icon: '📧', label: 'Email', value: 'jke.contact.me@gmail.com', href: 'mailto:jke.contact.me@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+44 7404 090458', href: 'tel:+447404090458' },
  { icon: '💬', label: 'WhatsApp', value: 'Chat Now', href: 'https://wa.me/447404090458' }
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

    <!-- Booking & Contact Options -->
    <section ref="formRef" class="grid lg:grid-cols-5 gap-8">
        
        <!-- Option 1: Instant Booking (Cal.com) -->
        <div class="lg:col-span-3 bg-neutral-900/50 p-1 rounded-3xl border border-white/5 overflow-hidden h-fit">
            <div class="p-6 pb-2">
                <h2 class="text-2xl font-bold text-white flex items-center gap-3">
                    <span class="w-2 h-8 bg-emerald-500 rounded-full"></span>
                    Book a Time
                </h2>
                <p class="text-neutral-400 mt-2 text-sm">Schedule a 15-min discovery call or consultation instantly.</p>
            </div>
            <!-- Cal.com Embed -->
            <div class="w-full h-[600px] bg-neutral-900" id="cal-embed">
                <iframe src="https://cal.eu/jake-fieldhouse-7kcb9d?embed=true" style="width: 100%; height: 100%; overflow: scroll;" frameborder="0"></iframe>
            </div>
        </div>

        <!-- Option 2: Quick Message / Manual -->
        <div class="lg:col-span-2 space-y-6">
            <div class="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 h-fit">
                <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span class="w-2 h-8 bg-blue-500 rounded-full"></span>
                    Urgent / Quick Chat?
                </h2>
                <p class="text-neutral-400 mb-8">Skip the calendar. If you have an urgent MSP issue or need a quick quote on WhatsApp, reach out directly.</p>
                
                <div class="space-y-4">
                    <a href="tel:+447404090458" class="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors group">
                        <div class="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                            <span class="text-xl">📞</span>
                        </div>
                        <div>
                            <div class="text-xs text-neutral-500 uppercase tracking-widest font-bold">Business Line</div>
                            <div class="text-white font-mono text-lg">+44 7404 090 458</div>
                        </div>
                    </a>

                    <a href="https://wa.me/447404090458" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors group">
                        <div class="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                            <span class="text-xl">💬</span>
                        </div>
                        <div>
                            <div class="text-xs text-neutral-500 uppercase tracking-widest font-bold">WhatsApp</div>
                            <div class="text-white font-medium">Chat Instantly</div>
                        </div>
                    </a>

                    <a href="mailto:jke.contact.me@gmail.com" class="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors group">
                        <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-all">
                            <span class="text-xl">📧</span>
                        </div>
                        <div>
                            <div class="text-xs text-neutral-500 uppercase tracking-widest font-bold">Email</div>
                            <div class="text-white font-medium">jke.contact.me@gmail.com</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Back -->
    <div class="text-center">
      <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
    </div>
  </div>
</template>
