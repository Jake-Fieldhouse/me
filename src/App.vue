<script setup lang="ts">
import FluidCursor from './components/FluidCursor.vue'
import HyperText from './components/HyperText.vue'
import ParticlesBg from './components/ParticlesBg.vue'
import { ref } from 'vue'

const showCookies = ref(true)

const acceptCookies = () => {
  showCookies.value = false
  localStorage.setItem('cookies-accepted', 'true')
}

if (localStorage.getItem('cookies-accepted')) {
  showCookies.value = false
}
</script>

<template>
  <div class="relative min-h-screen bg-black text-white font-inter selection:bg-white/20">
    <ParticlesBg
      class="fixed inset-0 z-0 pointer-events-none opacity-50"
      :quantity="50"
      :staticity="30"
      :ease="50"
      color="#ffffff"
    />

    <FluidCursor class="fixed inset-0 z-50 pointer-events-none" />

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-24">
      <header class="text-center space-y-4 w-full">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400" 
            />
        </div>
        <p class="text-xl text-neutral-400 max-w-2xl mx-auto">
          Business and technology consulting services
        </p>
      </header>

      <main class="grid md:grid-cols-3 gap-8 w-full">
        <section class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm">
          <h2 class="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">IT Professional</h2>
          <p class="text-neutral-400 leading-relaxed">
            Passionate IT professional with over 10 years of experience in the
            industry. Specializing in delivering innovative solutions and
            optimizing systems.
          </p>
        </section>

        <section class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm">
          <h2 class="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Hardware Specialist</h2>
          <p class="text-neutral-400 leading-relaxed">
            Skilled in hardware diagnostics, repairs, and custom PC builds.
            Providing tailored hardware solutions to meet client needs.
          </p>
        </section>

        <section class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm">
          <h2 class="text-2xl font-semibold mb-4 text-white group-hover:text-amber-400 transition-colors">AI Advocate</h2>
          <p class="text-neutral-400 leading-relaxed">
            Enthusiastic about artificial intelligence and its potential to
            transform industries. Actively exploring AI applications to enhance
            business processes.
          </p>
        </section>
      </main>

      <section class="text-center space-y-8 w-full">
        <h3 class="text-3xl font-semibold">Connect</h3>
        <div class="flex justify-center gap-6 flex-wrap">
          <a href="mailto:jke.contact.me@gmail.com" title="Email" class="hover:scale-110 transition-transform">
            <img src="/images/email.png" alt="Email" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="tel:+447400052962" title="Phone" class="hover:scale-110 transition-transform">
            <img src="/images/phone-ringing.png" alt="Phone" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://www.instagram.com/jkeinks" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <img src="/images/instagram.png" alt="Instagram" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://www.facebook.com/jake.fieldhouse/" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <img src="/images/facebook.png" alt="Facebook" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://wa.me/447400052962" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <img src="/images/whatsapp.png" alt="WhatsApp" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://github.com/Jake-Fieldhouse" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <img src="/images/github.png" alt="GitHub" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/jake-fieldhouse" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform">
            <img src="/images/linkedin.png" alt="LinkedIn" class="w-12 h-12 invert opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      <footer class="w-full border-t border-white/10 pt-8 text-center text-neutral-500 text-sm">
        <p class="mb-2">Jake Fieldhouse Consulting Ltd | Company No. 16536646</p>
        <nav class="flex justify-center gap-4">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms</a>
        </nav>
      </footer>
    </div>

    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div v-if="showCookies" class="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-sm">
        <p class="text-sm text-neutral-300">This site uses cookies to enhance your experience.</p>
        <button 
          @click="acceptCookies" 
          class="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap"
        >
          Got it
        </button>
      </div>
    </transition>
  </div>
</template>

<style>
/* Remove local styles in favor of Tailwind classes where possible */
/* Keep any critical layout fix if Tailwind fails, but for now we rely on utility classes */
</style>
