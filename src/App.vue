<script setup lang="ts">
import FluidCursor from './components/FluidCursor.vue'
import HyperText from './components/HyperText.vue'
import AuroraBackground from './components/AuroraBackground.vue'
import BentoGrid from './components/BentoGrid.vue'
import BentoItem from './components/BentoItem.vue'
import FloatingDock from './components/FloatingDock.vue'
import { ref } from 'vue'

const showCookies = ref(true)

const acceptCookies = () => {
  showCookies.value = false
  localStorage.setItem('cookies-accepted', 'true')
}

if (localStorage.getItem('cookies-accepted')) {
  showCookies.value = false
}

const socialItems = [
  { title: 'Email', icon: '/images/email.png', href: 'mailto:jke.contact.me@gmail.com' },
  { title: 'Phone', icon: '/images/phone-ringing.png', href: 'tel:+447400052962' },
  { title: 'Instagram', icon: '/images/instagram.png', href: 'https://www.instagram.com/jkeinks' },
  { title: 'Facebook', icon: '/images/facebook.png', href: 'https://www.facebook.com/jake.fieldhouse/' },
  { title: 'WhatsApp', icon: '/images/whatsapp.png', href: 'https://wa.me/447400052962' },
  { title: 'GitHub', icon: '/images/github.png', href: 'https://github.com/Jake-Fieldhouse' },
  { title: 'LinkedIn', icon: '/images/linkedin.png', href: 'https://www.linkedin.com/in/jake-fieldhouse' },
]
</script>

<template>
  <div class="relative min-h-screen bg-black text-white font-inter selection:bg-white/20 overflow-x-hidden">
    
    <!-- Hero Layer -->
    <AuroraBackground class="fixed inset-0 z-0">
        <!-- Aurora handles its own visuals -->
    </AuroraBackground>

    <!-- Cursor Layer -->
    <FluidCursor class="fixed inset-0 z-50 pointer-events-none" />

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center gap-32">
      
      <!-- Header -->
      <header class="text-center space-y-4 w-full mt-20">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            class="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" 
            />
        </div>
        <p class="text-2xl text-neutral-300 font-light max-w-2xl mx-auto">
          Business and technology consulting services
        </p>
      </header>

      <!-- Services Grid -->
      <main class="w-full">
        <BentoGrid class="max-w-4xl mx-auto">
          <BentoItem
            title="IT Professional"
            description="Passionate IT professional with over 10 years of experience. Specializing in delivering innovative solutions and optimizing systems."
            class="md:col-span-2 group hover:border-blue-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
             </template>
             <template #icon>
                <!-- Add icon component here if needed -->
             </template>
          </BentoItem>
          
          <BentoItem
            title="Hardware Specialist"
            description="Skilled in hardware diagnostics, repairs, and custom PC builds. Tailored hardware solutions."
            class="md:col-span-1 group hover:border-purple-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
          >
            <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
            </template>
          </BentoItem>

          <BentoItem
            title="AI Advocate"
            description="Enthusiastic about artificial intelligence and its potential to transform industries. Actively exploring AI applications."
            class="md:col-span-3 group hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
             </template>
          </BentoItem>
        </BentoGrid>
      </main>

      <!-- Social Dock (Desktop) -->
      <section class="text-center space-y-8 w-full pb-20 hidden md:block">
        <h3 class="text-3xl font-semibold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">Connect</h3>
        <FloatingDock 
            :items="socialItems"
            desktopClassName="" 
        />
      </section>

      <!-- Social Grid (Mobile) -->
      <section class="text-center space-y-8 w-full pb-20 md:hidden">
        <h3 class="text-3xl font-semibold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">Connect</h3>
        <div class="flex flex-wrap justify-center gap-6">
            <a 
                v-for="item in socialItems" 
                :key="item.title" 
                :href="item.href"
                class="bg-neutral-900 p-4 rounded-full border border-neutral-800"
            >
                <img :src="item.icon" :alt="item.title" class="w-8 h-8 invert" />
            </a>
        </div>
      </section>

      <footer class="w-full border-t border-white/5 pt-8 text-center text-neutral-500 text-sm">
        <p class="mb-2">Jake Fieldhouse Consulting Ltd | Company No. 16536646</p>
        <nav class="flex justify-center gap-4">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms</a>
        </nav>
      </footer>
    </div>

    <!-- Cookies -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div v-if="showCookies" class="fixed bottom-6 right-6 z-50 bg-neutral-900/90 border border-neutral-800 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl">
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
</style>
