<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import ContactForm from '../components/ContactForm.vue'

const heroRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(formRef, { delay: 0.2 })
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">
    
    <!-- Hero -->
    <header ref="heroRef" class="text-center space-y-3 pt-16">
      <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
        Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Talk</span>
      </h1>
      <p class="text-lg text-neutral-400 max-w-xl mx-auto">
        Reach me directly for repair quotes, IT consultations, or same-day e-waste collection.
      </p>
    </header>

    <!-- Primary Contact Grid - 1 Click Actions -->
    <section class="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <!-- Call -->
      <a href="tel:+447404090458" 
         class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
        <div class="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
        <div class="text-center">
          <div class="text-white font-semibold group-hover:text-emerald-400 transition-colors">Call</div>
          <div class="text-xs text-neutral-500">07404 090458</div>
        </div>
      </a>

      <!-- Email -->
      <a href="mailto:jake@jakefieldhouse.co.uk" 
         class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
        <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div class="text-center">
          <div class="text-white font-semibold group-hover:text-blue-400 transition-colors">Email</div>
          <div class="text-xs text-neutral-500">jake@...</div>
        </div>
      </a>

      <!-- WhatsApp -->
      <a href="https://wa.me/447404090458" target="_blank"
         class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-green-500/50 hover:bg-green-500/5 transition-all">
        <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <!-- WhatsApp Logo -->
          <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <div class="text-center">
          <div class="text-white font-semibold group-hover:text-green-400 transition-colors">WhatsApp</div>
          <div class="text-xs text-neutral-500">Instant</div>
        </div>
      </a>

      <!-- SMS -->
      <a href="sms:+447404090458" 
         class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
        <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </div>
        <div class="text-center">
          <div class="text-white font-semibold group-hover:text-purple-400 transition-colors">Text</div>
          <div class="text-xs text-neutral-500">SMS</div>
        </div>
      </a>
    </section>

    <!-- Main Content Grid -->
    <section ref="formRef" class="grid lg:grid-cols-5 gap-6">
      
      <!-- Calendar Booking -->
      <div class="lg:col-span-3 bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden">
        <div class="p-5 border-b border-white/5 bg-white/5">
          <h2 class="text-lg font-bold text-white">Book a Call</h2>
          <p class="text-neutral-500 text-sm">Schedule a 15-min discovery call</p>
        </div>
        <div class="w-full h-[520px]">
          <iframe 
            src="https://cal.eu/jake-fieldhouse-7kcb9d?embed=true&theme=dark&hideEventTypeDetails=true" 
            style="width: 100%; height: 100%; border: none; background: transparent;" 
            frameborder="0"
            loading="lazy"
            title="Book a consultation"
          ></iframe>
        </div>
      </div>

      <!-- Secure Messaging -->
      <div class="lg:col-span-2 space-y-4">
        
        <!-- Encrypted Channels -->
        <div class="bg-neutral-900/50 p-5 rounded-2xl border border-white/5">
          <h3 class="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Encrypted Channels</h3>
          
          <div class="space-y-2">
            <!-- Signal -->
            <a href="https://signal.me/#p/+447404090458" target="_blank" 
               class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
              <div class="w-10 h-10 rounded-lg bg-[#3a76f0]/20 flex items-center justify-center">
                <!-- Signal Logo -->
                <svg class="w-5 h-5 text-[#3a76f0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <div class="flex-1">
                <span class="text-white font-medium group-hover:text-[#3a76f0] transition-colors">Signal</span>
                <span class="text-neutral-600 text-xs ml-2">E2E Encrypted</span>
              </div>
              <span class="text-neutral-600 group-hover:text-white transition-colors">→</span>
            </a>

            <!-- Telegram -->
            <a href="https://t.me/jakefieldhouse" target="_blank" 
               class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
              <div class="w-10 h-10 rounded-lg bg-[#0088cc]/20 flex items-center justify-center">
                <!-- Telegram Logo -->
                <svg class="w-5 h-5 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div class="flex-1">
                <span class="text-white font-medium group-hover:text-[#0088cc] transition-colors">Telegram</span>
                <span class="text-neutral-600 text-xs ml-2">@jakefieldhouse</span>
              </div>
              <span class="text-neutral-600 group-hover:text-white transition-colors">→</span>
            </a>
          </div>
        </div>

        <!-- Professional -->
        <div class="bg-neutral-900/50 p-5 rounded-2xl border border-white/5">
          <h3 class="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Professional</h3>
          
          <div class="space-y-2">
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/jakefieldhouse" target="_blank" 
               class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
              <div class="w-10 h-10 rounded-lg bg-[#0077b5]/20 flex items-center justify-center">
                <!-- LinkedIn Logo -->
                <svg class="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div class="flex-1">
                <span class="text-white font-medium group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
              </div>
              <span class="text-neutral-600 group-hover:text-white transition-colors">→</span>
            </a>

            <!-- Save Contact -->
            <a href="/contact.vcf" download="JakeFieldhouse.vcf"
               class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
              <div class="w-10 h-10 rounded-lg bg-neutral-700/50 flex items-center justify-center">
                <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </div>
              <div class="flex-1">
                <span class="text-white font-medium group-hover:text-neutral-300 transition-colors">Save Contact</span>
                <span class="text-neutral-600 text-xs ml-2">vCard</span>
              </div>
              <span class="text-neutral-600 group-hover:text-white transition-colors">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Quick Message Form -->
    <section class="max-w-lg mx-auto">
      <ContactForm />
    </section>

    <!-- Back -->
    <div class="text-center pb-8">
      <router-link to="/" class="text-neutral-500 hover:text-white transition-colors text-sm">← Back to Home</router-link>
    </div>
  </div>
</template>
