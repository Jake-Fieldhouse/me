<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const heroRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(formRef, { delay: 0.2 })


const contactMethods = [
  { icon: '📧', label: 'Email', value: 'jake@jakefieldhouse.co.uk', href: 'mailto:jake@jakefieldhouse.co.uk' },
  { icon: '📱', label: 'Phone', value: '+44 7404 090458', href: 'tel:+447404090458' },
  { icon: '💬', label: 'WhatsApp', value: 'Chat Now', href: 'https://wa.me/447404090458?text=Hi%20Jake,%20I%27d%20like%20to%20discuss...' },
  { icon: '💌', label: 'SMS', value: 'Text Me', href: 'sms:+447404090458' }
]
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16">
    
    <!-- Hero -->
    <header ref="heroRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
        24hr Response Guarantee • Speak to a Real Person
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Talk</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        No ticket queues. No chatbots. Just direct access to Jake—whether you need a repair quote, 
        MSP consultation, or same-day e-waste pickup.
      </p>
    </header>

    <!-- Quick Contact -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
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
    <section ref="formRef" class="grid lg:grid-cols-5 gap-6">
        
        <!-- Option 1: Instant Booking (Cal.com) -->
        <div class="lg:col-span-3 bg-neutral-900/50 p-1 rounded-3xl border border-white/5 overflow-hidden h-fit shadow-2xl shadow-black/50">
            <div class="p-6 pb-4 border-b border-white/5 bg-white/5 backdrop-blur-sm">
                <h2 class="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <span class="w-2 h-6 md:h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"></span>
                    Book Consultation
                </h2>
                <p class="text-neutral-400 mt-1 text-sm">Schedule a 15-min discovery call instantly.</p>
            </div>
            <!-- Cal.com Embed -->
            <div class="w-full h-[600px] bg-neutral-900" id="cal-embed">
                <iframe src="https://cal.eu/jake-fieldhouse-7kcb9d?embed=true&theme=dark" style="width: 100%; height: 100%; overflow: scroll;" frameborder="0"></iframe>
            </div>
        </div>

        <!-- Option 2: Quick Message / Manual -->
        <div class="lg:col-span-2 flex flex-col gap-6">
             <!-- Direct Contact Card -->
            <div class="bg-neutral-900/50 p-6 md:p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden group">
                <!-- Ambient Glow -->
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"></div>

                <h2 class="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                    <span class="w-2 h-6 md:h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)]"></span>
                    Direct Access
                </h2>
                <p class="text-neutral-400 mb-8 relative z-10 text-sm md:text-base">Skip the calendar. For urgent MSP issues or quick quotes, reach out directly.</p>
                
                <div class="grid gap-4 relative z-10">
                    <a href="tel:+447404090458" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover/item:text-emerald-400 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">📞</span>
                        </div>
                        <div>
                            <div class="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Priority Line</div>
                            <div class="text-white font-mono text-sm md:text-base group-hover/item:text-emerald-400 transition-colors">+44 7404 090 458</div>
                        </div>
                    </a>

                    <a href="https://wa.me/447404090458" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-green-500/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover/item:text-green-400 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">💬</span>
                        </div>
                        <div>
                            <div class="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">WhatsApp</div>
                            <div class="text-white font-medium text-sm md:text-base group-hover/item:text-green-400 transition-colors">Chat Instantly</div>
                        </div>
                    </a>

                    <a href="mailto:jake@jakefieldhouse.co.uk" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/item:text-blue-400 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">📧</span>
                        </div>
                        <div class="min-w-0"> <!-- Prevent overflow container -->
                            <div class="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Email</div>
                            <div class="text-white font-medium break-all text-sm group-hover/item:text-blue-400 transition-colors">jake@jakefieldhouse.co.uk</div>
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
