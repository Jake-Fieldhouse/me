<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import IconCall from '../components/icons/IconCall.vue'
import IconWhatsApp from '../components/icons/IconWhatsApp.vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconSignal from '../components/icons/IconSignal.vue'
import IconTelegram from '../components/icons/IconTelegram.vue'
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconVcf from '../components/icons/IconVcf.vue'
import IconExternalLink from '../components/icons/IconExternalLink.vue'
import IconCheck from '../components/icons/IconCheck.vue'

const heroRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const bookingUrl = 'https://cal.eu/jake-fieldhouse-7kcb9d'

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
            <IconCall class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
          </div>
          <span class="card-label">Call</span>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/447404090458" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-green-500/15 group-hover:bg-green-500/25">
             <IconWhatsApp class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
          </div>
          <span class="card-label">WhatsApp</span>
        </a>

        <!-- Email -->
        <a href="mailto:jake@jakefieldhouse.co.uk" class="contact-card group">
          <div class="card-icon bg-blue-500/15 group-hover:bg-blue-500/25">
            <IconEmail class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          </div>
          <span class="card-label">Email</span>
        </a>

        <!-- Signal -->
        <a href="https://signal.me/#p/+447404090458" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-[#3a76f0]/15 group-hover:bg-[#3a76f0]/25">
            <IconSignal class="w-5 h-5 sm:w-6 sm:h-6 text-[#3a76f0]" />
          </div>
          <span class="card-label">Signal</span>
        </a>

        <!-- Telegram -->
        <a href="https://t.me/jakefieldhouse" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-[#0088cc]/15 group-hover:bg-[#0088cc]/25">
            <IconTelegram class="w-5 h-5 sm:w-6 sm:h-6 text-[#0088cc]" />
          </div>
          <span class="card-label">Telegram</span>
        </a>

        <!-- LinkedIn -->
        <a href="https://uk.linkedin.com/in/jake-fieldhouse" target="_blank" rel="noopener" class="contact-card group">
          <div class="card-icon bg-[#0077b5]/15 group-hover:bg-[#0077b5]/25">
             <IconLinkedIn class="w-5 h-5 sm:w-6 sm:h-6 text-[#0077b5]" />
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
          <div class="p-4 sm:p-5 lg:p-6 space-y-4">
            <div class="booking-hero">
              <p class="text-sm sm:text-base text-neutral-200 leading-relaxed">
                Choose a consultation slot in the secure calendar and I will confirm quickly.
                Perfect for MSP onboarding, repair diagnostics, and compliance planning.
              </p>

              <div class="flex flex-wrap gap-2 mt-4">
                <span class="booking-chip">15 min triage</span>
                <span class="booking-chip">30 min deep dive</span>
                <span class="booking-chip">Phone or video</span>
              </div>

              <div class="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  :href="bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="booking-primary-btn"
                >
                  Open Booking Calendar
                  <IconExternalLink class="w-4 h-4" />
                </a>
                <a
                  href="tel:+447404090458"
                  class="booking-secondary-btn"
                >
                  Need urgent help? Call now
                </a>
              </div>
            </div>

            <div class="grid sm:grid-cols-3 gap-2.5">
              <article class="booking-step">
                <p class="booking-step-title">1. Pick a slot</p>
                <p class="booking-step-copy">Choose a time that fits your schedule.</p>
              </article>
              <article class="booking-step">
                <p class="booking-step-title">2. Share context</p>
                <p class="booking-step-copy">Add your goals or issue summary in the booking notes.</p>
              </article>
              <article class="booking-step">
                <p class="booking-step-title">3. Meet and plan</p>
                <p class="booking-step-copy">We align on next actions and response time immediately.</p>
              </article>
            </div>

            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-xs text-neutral-400">
                <IconCheck class="w-4 h-4 text-emerald-400" />
                Opens in a new tab so this site stays clean and fast.
              </li>
              <li class="flex items-center gap-2 text-xs text-neutral-400">
                <IconCheck class="w-4 h-4 text-emerald-400" />
                No account needed to request a slot.
              </li>
            </ul>
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
          <IconVcf class="w-4 h-4" />
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

.booking-hero {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 15% 15%, rgba(52, 211, 153, 0.16), transparent 45%),
    radial-gradient(circle at 88% 82%, rgba(59, 130, 246, 0.14), transparent 45%),
    rgba(17, 24, 39, 0.55);
  border-radius: 0.875rem;
  padding: 1rem;
}

.booking-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.22);
  color: rgb(229, 229, 229);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.65rem;
}

.booking-primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(3, 7, 18);
  background: linear-gradient(90deg, rgb(52, 211, 153), rgb(96, 165, 250));
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.booking-primary-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(52, 211, 153, 0.22);
}

.booking-secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(229, 229, 229);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(17, 24, 39, 0.45);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.booking-secondary-btn:hover {
  border-color: rgba(255, 255, 255, 0.26);
  background: rgba(17, 24, 39, 0.7);
}

.booking-step {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(17, 24, 39, 0.35);
  border-radius: 0.75rem;
  padding: 0.7rem 0.75rem;
}

.booking-step-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
}

.booking-step-copy {
  margin-top: 0.2rem;
  font-size: 0.75rem;
  color: rgb(163, 163, 163);
  line-height: 1.35;
}
</style>
