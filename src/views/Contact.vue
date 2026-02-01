<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import ContactForm from '../components/ContactForm.vue'

const heroRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(contentRef, { delay: 0.15 })
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <header ref="heroRef" class="pt-28 pb-8 px-6 text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3">
        Get in <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Touch</span>
      </h1>
      <p class="text-neutral-400 text-base sm:text-lg max-w-md mx-auto">
        Direct access for repairs, IT support, or e-waste collection.
      </p>
    </header>

    <!-- Main Content -->
    <main ref="contentRef" class="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-6">
      
      <!-- Primary Actions - Always Visible -->
      <section class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <!-- Call -->
        <a href="tel:+447404090458" 
           class="contact-card group bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 hover:from-emerald-500/20 hover:to-emerald-500/10">
          <div class="contact-icon bg-emerald-500/20 text-emerald-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <span class="contact-label text-emerald-400">Call</span>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/447404090458" target="_blank" rel="noopener"
           class="contact-card group bg-gradient-to-br from-green-500/10 to-green-500/5 hover:from-green-500/20 hover:to-green-500/10">
          <div class="contact-icon bg-green-500/20 text-green-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <span class="contact-label text-green-400">WhatsApp</span>
        </a>

        <!-- Email -->
        <a href="mailto:jake@jakefieldhouse.co.uk" 
           class="contact-card group bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:from-blue-500/20 hover:to-blue-500/10">
          <div class="contact-icon bg-blue-500/20 text-blue-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <span class="contact-label text-blue-400">Email</span>
        </a>

        <!-- SMS -->
        <a href="sms:+447404090458" 
           class="contact-card group bg-gradient-to-br from-purple-500/10 to-purple-500/5 hover:from-purple-500/20 hover:to-purple-500/10">
          <div class="contact-icon bg-purple-500/20 text-purple-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <span class="contact-label text-purple-400">Text</span>
        </a>
      </section>

      <!-- Two Column Layout: Calendar + Quick Links -->
      <section class="grid lg:grid-cols-3 gap-4">
        
        <!-- Calendar Booking - Takes More Space -->
        <div class="lg:col-span-2 bg-neutral-900/60 rounded-2xl border border-white/5 overflow-hidden">
          <div class="p-4 sm:p-5 border-b border-white/10 bg-white/5">
            <h2 class="text-base sm:text-lg font-bold text-white">Book a Discovery Call</h2>
            <p class="text-neutral-500 text-xs sm:text-sm mt-0.5">15 minutes • Free consultation</p>
          </div>
          <div class="w-full h-[450px] sm:h-[500px]">
            <iframe 
              src="https://cal.eu/jake-fieldhouse-7kcb9d?embed=true&theme=dark&hideEventTypeDetails=true" 
              class="w-full h-full border-0 bg-transparent"
              loading="lazy"
              title="Book a consultation"
            ></iframe>
          </div>
        </div>

        <!-- Quick Links Sidebar -->
        <div class="space-y-4">
          
          <!-- Secure Messaging -->
          <div class="bg-neutral-900/60 rounded-2xl border border-white/5 p-4">
            <h3 class="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Secure Messaging</h3>
            <div class="space-y-2">
              <!-- Signal -->
              <a href="https://signal.me/#p/+447404090458" target="_blank" rel="noopener"
                 class="quick-link group">
                <div class="quick-icon bg-[#3a76f0]/20">
                  <svg class="w-4 h-4 text-[#3a76f0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span class="flex-1 text-sm text-white group-hover:text-[#3a76f0] transition-colors">Signal</span>
                <span class="text-xs text-neutral-600">E2E</span>
              </a>

              <!-- Telegram -->
              <a href="https://t.me/jakefieldhouse" target="_blank" rel="noopener"
                 class="quick-link group">
                <div class="quick-icon bg-[#0088cc]/20">
                  <svg class="w-4 h-4 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <span class="flex-1 text-sm text-white group-hover:text-[#0088cc] transition-colors">Telegram</span>
              </a>
            </div>
          </div>

          <!-- Professional -->
          <div class="bg-neutral-900/60 rounded-2xl border border-white/5 p-4">
            <h3 class="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Professional</h3>
            <div class="space-y-2">
              <!-- LinkedIn -->
              <a href="https://uk.linkedin.com/in/jake-fieldhouse" target="_blank" rel="noopener"
                 class="quick-link group">
                <div class="quick-icon bg-[#0077b5]/20">
                  <svg class="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span class="flex-1 text-sm text-white group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
              </a>

              <!-- Save Contact -->
              <a href="/contact.vcf" download="JakeFieldhouse.vcf" class="quick-link group">
                <div class="quick-icon bg-neutral-700/50">
                  <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </div>
                <span class="flex-1 text-sm text-white group-hover:text-neutral-300 transition-colors">Save Contact</span>
                <span class="text-xs text-neutral-600">vCard</span>
              </a>
            </div>
          </div>

          <!-- Direct Info -->
          <div class="bg-neutral-900/60 rounded-2xl border border-white/5 p-4">
            <h3 class="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Direct</h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-3">
                <span class="text-neutral-500">📞</span>
                <a href="tel:+447404090458" class="text-white hover:text-emerald-400 transition-colors">07404 090458</a>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-neutral-500">✉️</span>
                <a href="mailto:jake@jakefieldhouse.co.uk" class="text-white hover:text-blue-400 transition-colors truncate">jake@jakefieldhouse.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Message Form -->
      <section class="bg-neutral-900/60 rounded-2xl border border-white/5 p-4 sm:p-6">
        <h2 class="text-base sm:text-lg font-bold text-white mb-4">Quick Message</h2>
        <ContactForm />
      </section>

      <!-- Back Link -->
      <div class="text-center pt-4">
        <router-link to="/" class="text-sm text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
      </div>
    </main>
  </div>
</template>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.2s;
}

.contact-card:active {
  transform: scale(0.95);
}

@media (min-width: 640px) {
  .contact-card {
    padding: 1.25rem;
  }
}

.contact-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

@media (min-width: 640px) {
  .contact-icon {
    width: 3rem;
    height: 3rem;
  }
}

.contact-card:hover .contact-icon {
  transform: scale(1.1);
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
}

@media (min-width: 640px) {
  .contact-label {
    font-size: 0.875rem;
  }
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem;
  margin-left: -0.625rem;
  margin-right: -0.625rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.quick-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.quick-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
