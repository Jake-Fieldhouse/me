<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import ContactForm from '../components/ContactForm.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'

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
    <header ref="heroRef" class="text-center space-y-6 mt-10 relative min-h-[50vh] flex flex-col justify-center">
      <div class="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
        Direct Line to Jake • No Ticket Queues
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Talk</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
        No ticket queues. No chatbots. Just direct access to Jake—whether you need a repair quote, 
        MSP consultation, or same-day e-waste pickup.
      </p>
      <ScrollIndicator />
    </header>

    <!-- Quick Contact -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a 
        v-for="method in contactMethods" 
        :key="method.label"
        :href="method.href"
        class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-colors text-center group hover-lift"
      >
        <div class="text-3xl mb-3">{{ method.icon }}</div>
        <div class="text-sm text-neutral-500 mb-1">{{ method.label }}</div>
        <div class="text-white font-medium group-hover:text-emerald-400 transition-colors">{{ method.value }}</div>
      </a>
    </div>

    <!-- Emergency Support Callout -->
    <div class="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 text-center">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <span class="text-red-400 font-bold">🚨 Server down? Critical issue?</span>
        <a href="tel:+447404090458" class="px-4 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-400 transition-colors">
          Call Now: 07404 090458
        </a>
      </div>
    </div>

    <!-- Booking & Contact Options -->
    <section ref="formRef" class="grid lg:grid-cols-5 gap-6">
        
        <!-- Option 1: Instant Booking (Cal.com) -->
        <div class="lg:col-span-3 bg-neutral-900/50 p-1 rounded-3xl border border-white/5 overflow-hidden h-fit shadow-2xl shadow-black/50">
            <div class="p-6 pb-4 border-b border-white/5 bg-white/5 backdrop-blur-sm">
                <h2 class="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <span class="w-2 h-6 md:h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"></span>
                    Get in Touch
                </h2>
                <p class="text-neutral-400 mt-1 text-sm">Schedule a 15-min discovery call instantly.</p>
            </div>
            <!-- Cal.com Embed - Transparent to match site theme -->
            <div class="w-full h-[580px] bg-transparent rounded-2xl overflow-hidden">
                <iframe 
                    src="https://cal.eu/jake-fieldhouse-7kcb9d?embed=true&theme=dark&hideEventTypeDetails=true" 
                    style="width: 100%; height: 100%; border: none; background: transparent;" 
                    frameborder="0"
                    loading="lazy"
                    title="Book a consultation with Jake Fieldhouse"
                ></iframe>
            </div>
        </div>

        <!-- Option 2: Secure Comms & Operations -->
        <div class="lg:col-span-2 flex flex-col gap-6">
             <!-- Secure Messaging Hub -->
            <div class="bg-neutral-900/50 p-6 md:p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden group">
                <!-- Ambient Glow -->
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"></div>

                <h2 class="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                    <span class="w-2 h-6 md:h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)]"></span>
                    Secure Comms
                </h2>
                <p class="text-neutral-400 mb-8 relative z-10 text-sm md:text-base">
                    End-to-end encrypted channels for sensitive OPS and urgent response.
                </p>
                
                <div class="grid gap-3 relative z-10">
                    <!-- WhatsApp -->
                    <a href="https://wa.me/447404090458" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-green-500/10 border border-white/5 hover:border-green-500/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">💬</span>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-center">
                                <span class="text-white font-bold group-hover/item:text-green-400 transition-colors">WhatsApp</span>
                                <span class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Business</span>
                            </div>
                            <div class="text-neutral-500 text-xs mt-0.5">Quick Ops & Quotes</div>
                        </div>
                        <span class="text-neutral-600 group-hover/item:text-green-500 transition-colors">→</span>
                    </a>

                    <!-- Signal -->
                    <a href="https://signal.me/#p/+447404090458" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-indigo-500/10 border border-white/5 hover:border-indigo-500/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">🔒</span>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-center">
                                <span class="text-white font-bold group-hover/item:text-indigo-400 transition-colors">Signal</span>
                                <span class="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-xs">Encrypted</span>
                            </div>
                            <div class="text-neutral-500 text-xs mt-0.5">Confidential & Private</div>
                        </div>
                        <span class="text-neutral-600 group-hover/item:text-indigo-500 transition-colors">→</span>
                    </a>

                    <!-- Telegram -->
                    <a href="https://t.me/jakefieldhouse" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-sky-500/10 border border-white/5 hover:border-sky-500/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">✈️</span>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-center">
                                <span class="text-white font-bold group-hover/item:text-sky-400 transition-colors">Telegram</span>
                            </div>
                            <div class="text-neutral-500 text-xs mt-0.5">@jakefieldhouse</div>
                        </div>
                        <span class="text-neutral-600 group-hover/item:text-sky-500 transition-colors">→</span>
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://linkedin.com/in/jakefieldhouse" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-600/30 transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-all">
                            <span class="text-lg">💼</span>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-center">
                                <span class="text-white font-bold group-hover/item:text-blue-400 transition-colors">LinkedIn</span>
                                <span class="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-xs">B2B</span>
                            </div>
                            <div class="text-neutral-500 text-xs mt-0.5">Professional Profile</div>
                        </div>
                        <span class="text-neutral-600 group-hover/item:text-blue-500 transition-colors">→</span>
                    </a>
                </div>
                
                <div class="mt-6 pt-6 border-t border-white/5 relative z-10 text-center">
                     <a href="/contact.vcf" download="JakeFieldhouse.vcf" class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                        Save Contact (vCard)
                     </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Contact Form -->
    <section class="max-w-lg mx-auto">
      <ContactForm />
    </section>

    <!-- Back -->
    <div class="text-center">
      <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
    </div>
  </div>
</template>
