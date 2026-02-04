<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const heroRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(contentRef, { delay: 0.15 })

// Form state
const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  const subject = encodeURIComponent(`Website Enquiry from ${form.value.name}`)
  const body = encodeURIComponent(`
Hi Jake,

${form.value.message}

Best,
${form.value.name}
${form.value.email}
  `.trim())
  
  window.location.href = `mailto:jake@jakefieldhouse.co.uk?subject=${subject}&body=${body}`
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section - Compact -->
    <header ref="heroRef" class="pt-24 pb-6 px-4 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
        Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Talk</span>
      </h1>
      <p class="text-neutral-400 text-sm sm:text-base max-w-md mx-auto">
        Pick your preferred way to reach out. I respond within a few hours.
      </p>
    </header>

    <!-- Main Content -->
    <main ref="contentRef" class="max-w-5xl mx-auto px-4 pb-12 space-y-6">
      
      <!-- Contact Methods - 2x3 Grid on mobile, 6-col on desktop -->
      <section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        
        <!-- Call -->
        <a href="tel:+447404090458" class="contact-card group">
          <div class="card-icon bg-emerald-500/15 group-hover:bg-emerald-500/25">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
            </svg>
          </div>
          <span class="card-label">Call</span>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/447404090458" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-green-500/15 group-hover:bg-green-500/25">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <span class="card-label">WhatsApp</span>
        </a>

        <!-- Email -->
        <a href="mailto:jake@jakefieldhouse.co.uk" class="contact-card group">
          <div class="card-icon bg-blue-500/15 group-hover:bg-blue-500/25">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
          </div>
          <span class="card-label">Email</span>
        </a>

        <!-- Signal -->
        <a href="https://signal.me/#p/+447404090458" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-[#3a76f0]/15 group-hover:bg-[#3a76f0]/25">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#3a76f0]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <span class="card-label">Signal</span>
        </a>

        <!-- Telegram -->
        <a href="https://t.me/jakefieldhouse" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-[#0088cc]/15 group-hover:bg-[#0088cc]/25">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <span class="card-label">Telegram</span>
        </a>

        <!-- LinkedIn -->
        <a href="https://uk.linkedin.com/in/jake-fieldhouse" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-[#0077b5]/15 group-hover:bg-[#0077b5]/25">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <span class="card-label">LinkedIn</span>
        </a>
      </section>

      <!-- Two Column: Calendar + Message Form -->
      <section class="grid lg:grid-cols-5 gap-4">
        
        <!-- Calendar Booking -->
        <div class="lg:col-span-3 card-container">
          <div class="card-header">
            <h2 class="text-base sm:text-lg font-semibold text-white">Schedule a Call</h2>
            <span class="text-xs text-neutral-500">15 or 30 min • Free</span>
          </div>
          <div class="relative w-full" style="min-height: 480px;">
            <iframe 
              src="https://cal.eu/jake-fieldhouse-7kcb9d?embed=true&theme=dark&hideEventTypeDetails=false&layout=month_view" 
              class="absolute inset-0 w-full h-full border-0"
              style="min-height: 480px; background: transparent;"
              loading="lazy"
              allow="payment"
              title="Book a consultation with Jake Fieldhouse"
            ></iframe>
          </div>
        </div>

        <!-- Quick Message Form -->
        <div class="lg:col-span-2 card-container flex flex-col">
          <div class="card-header">
            <h2 class="text-base sm:text-lg font-semibold text-white">Send a Message</h2>
            <span class="text-xs text-neutral-500">Quick reply</span>
          </div>
          <form @submit.prevent="submitForm" class="flex-1 flex flex-col p-4 gap-3">
            <div>
              <label class="block text-xs font-medium text-neutral-400 mb-1">Name</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label class="block text-xs font-medium text-neutral-400 mb-1">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="form-input"
                placeholder="you@company.com"
              />
            </div>
            <div class="flex-1 flex flex-col">
              <label class="block text-xs font-medium text-neutral-400 mb-1">Message</label>
              <textarea 
                v-model="form.message"
                required
                class="form-input flex-1 resize-none"
                placeholder="How can I help?"
                rows="3"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full py-2.5 px-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <!-- Utility Row -->
      <section class="flex flex-wrap items-center justify-center gap-3">
        <a href="/contact.vcf" download="JakeFieldhouse.vcf" class="utility-link">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Save Contact
        </a>
        <router-link to="/" class="utility-link">
          ← Back to Home
        </router-link>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Unified Card Container */
.card-container {
  background: rgba(23, 23, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}

/* Contact Method Cards - Compact vertical style */
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background: rgba(23, 23, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.875rem;
  transition: all 0.2s ease;
  text-align: center;
}

.contact-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.contact-card:active {
  transform: scale(0.97);
}

.card-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

@media (min-width: 640px) {
  .card-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
  }
}

.card-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}

@media (min-width: 640px) {
  .card-label {
    font-size: 0.8125rem;
  }
}

/* Form Inputs */
.form-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  background: rgba(38, 38, 38, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.625rem;
  color: white;
  font-size: 0.875rem;
  transition: border-color 0.2s, background-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: rgba(52, 211, 153, 0.5);
  background: rgba(38, 38, 38, 0.8);
}

.form-input::placeholder {
  color: rgb(82, 82, 82);
}

/* Utility Links */
.utility-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  font-size: 0.8125rem;
  color: rgb(163, 163, 163);
  background: rgba(38, 38, 38, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 9999px;
  transition: all 0.2s;
}

.utility-link:hover {
  color: white;
  background: rgba(38, 38, 38, 0.8);
  border-color: rgba(255, 255, 255, 0.12);
}
</style>
