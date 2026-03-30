<script setup lang="ts">
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import ContactForm from '../components/ContactForm.vue'
import { useOgMeta } from '../composables/useOgMeta'
import IconWhatsApp from '../components/icons/IconWhatsApp.vue'
import IconPhone from '../components/icons/IconPhone.vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconSignal from '../components/icons/IconSignal.vue'
import IconTelegram from '../components/icons/IconTelegram.vue'
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconChevronDown from '../components/icons/IconChevronDown.vue'
useOgMeta({
  title: 'Jake Fieldhouse Consulting | Hardware Specialist & Tech Consultant',
  description: 'Hull & East Yorkshire. Component-level repair, zero-landfill e-waste, remote IT support, and AI / LLM integration.',
  image: '/images/og-image.png',
  url: '/'
})
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 flex flex-col gap-48 md:gap-64 pb-32">
    
    <!-- Hero (Obsidian Glass) -->
    <section class="min-h-[82vh] flex flex-col justify-start items-start space-y-10 relative scroll-reveal pt-4 md:pt-12">
      <div class="inline-block px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-neutral-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        Hull & East Yorkshire • UK Nationwide
      </div>
      
      <h1 class="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 leading-[1.1] pb-2">
        Jake Fieldhouse
      </h1>
      
      <p class="text-xl md:text-3xl text-neutral-400 max-w-3xl leading-relaxed font-light">
        Premium technology services for consumers and businesses. <br class="hidden md:block" />
        <span class="text-white font-normal">Complex hardware repair, zero-landfill eWaste, remote IT support, and AI / LLM integration.</span>
      </p>

      <div class="pt-8 w-full flex flex-col gap-6 items-start">
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium text-neutral-400 uppercase tracking-widest">Reach me directly via</span>
          <div class="h-px bg-white/10 w-12"></div>
        </div>
        
        <div class="flex flex-wrap items-center gap-3 sm:gap-4">
          <!-- Elegant Contact Icons -->
          <a href="https://wa.me/447404090458" target="_blank" rel="noopener noreferrer" class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#25D366] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(37,211,102,0.15)] group" aria-label="WhatsApp">
            <IconWhatsApp class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="tel:+447404090458" class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(255,255,255,0.1)] group" aria-label="Call Mobile">
            <IconPhone class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://signal.me/#p/+447404090458" target="_blank" rel="noopener noreferrer" class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#3a76f0] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(58,118,240,0.15)] group" aria-label="Signal">
            <IconSignal class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://t.me/jakefieldhouse" target="_blank" rel="noopener noreferrer" class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#0088cc] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,136,204,0.15)] group" aria-label="Telegram">
            <IconTelegram class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="mailto:jake@jakefieldhouse.co.uk" class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#60a5fa] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(96,165,250,0.15)] group" aria-label="Email">
            <IconEmail class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://uk.linkedin.com/in/jake-fieldhouse" target="_blank" rel="noopener noreferrer" class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#0077b5] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,119,181,0.15)] group" aria-label="LinkedIn">
            <IconLinkedIn class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>

          <a href="#expertise" class="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group tracking-wide text-sm uppercase ml-4 sm:ml-6">
            Capabilities <IconChevronDown class="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="scroll-mt-32 space-y-16">
        <div class="flex items-center gap-6 scroll-reveal">
          <h2 class="text-3xl font-bold text-white tracking-tight">Capabilities</h2>
          <div class="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Hardware / Repair -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal">
                <div class="text-4xl mb-8 opacity-80">🔬</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">Hardware Specialist</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    The industry standard is "Replace-First" — shops swapping entire expensive parts and passing the cost to you. I offer a radically different approach: 15+ years of complex, component-level microsoldering. From phone screens and vacuums to dead logic boards, I fix the actual fault to save you money and extend the lifespan of your device.
                </p>
            </div>

            <!-- E-Waste -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal" style="animation-delay: 100ms;">
                <div class="text-4xl mb-8 opacity-80">♻️</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">eWaste Solutions</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    Fully licensed (CBDL620098) zero-landfill e-waste processing. Secure data wiping (NIST 800-88 compliance available upon request) and ethical asset lifecycle management for homes and businesses.
                </p>
            </div>

            <!-- IT Support -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal" style="animation-delay: 200ms;">
                <div class="text-4xl mb-8 opacity-80">⚡</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">Complex IT Support</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    Reliable technical support and automation tailored for small-to-medium businesses, high-end smart homes, and everyday households. For SMBs, this means deploying custom automation that can save thousands in power and efficiency—delivered with extreme rigor, minus the bloat of traditional managed services.
                </p>
            </div>

            <!-- AI Integration -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal" style="animation-delay: 300ms;">
                <div class="text-4xl mb-8 opacity-80">🤖</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">AI & LLM Integration</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    Helping you navigate the rapidly changing AI landscape. From Generative Search Optimization to custom LLM integration and general usage guidance, I help bridge the knowledge gap for your business.
                </p>
            </div>
        </div>
    </section>

    <!-- Trust Signals -->
    <section class="max-w-5xl mx-auto w-full scroll-reveal">
        <TrustBar />
    </section>

    <!-- About / Story -->
    <section id="about" class="scroll-mt-32 relative scroll-reveal">
      <!-- Glassmorphic container -->
      <div class="absolute inset-0 bg-white/[0.02] backdrop-blur-2xl rounded-[3rem] border border-white/10"></div>
      
      <div class="relative p-10 md:p-16 space-y-10">
        <h2 class="text-3xl font-bold text-white tracking-tight">The Story</h2>
        
        <div class="text-neutral-300 space-y-6 leading-relaxed max-w-4xl text-lg font-light">
          <p>
            I first touched a PC at age 6, navigating DOS games and early operating systems. By 11, long before the modern internet provided easy answers, I was building systems and deep-diving into early tech forums. That foundational obsession evolved into my first business, hand-delivering tech flyers across Hull at 16, and eventually into advanced component-level logic board recovery.
          </p>
          <p>
            Today, I bring over 15 years of hands-on technical experience—paired with the extreme rigor demanded by my 7-year background working within enterprise infrastructures.
          </p>
          <p>
            <strong class="text-white font-medium">Jake Fieldhouse Consulting</strong> exists to provide radically honest, premium technical capability directly to the consumer and small business. I operate on an extreme customer-first philosophy: if it is cheaper for you to buy a second-hand replacement than for me to repair your current device, I will tell you to do that. You always deal directly with the engineer.
          </p>
        </div>
        
        <!-- Stats highlight -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 mt-8">
          <div>
              <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">20+</div>
              <div class="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Years Active</div>
          </div>
          <div>
              <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">1k+</div>
              <div class="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Devices Fixed</div>
          </div>
          <div>
              <div class="text-3xl font-black text-white">Enhanced DBS</div>
              <div class="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Checked</div>
          </div>
          <div>
              <div class="text-3xl font-black text-white">Hiscox</div>
              <div class="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Insured</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="scroll-mt-32 pt-16 border-t border-white/5 scroll-reveal">
        <div class="max-w-4xl mx-auto w-full space-y-12">
            <div class="text-center space-y-4">
                <h2 class="text-4xl font-bold text-white tracking-tight">Start a Dialogue</h2>
                <p class="text-neutral-400 font-light text-lg">Whether you need a simple phone repair, complex logic board recovery, licensed asset disposal, or help navigating AI and LLMs for your business workflow—let's discuss your requirements.</p>
            </div>

            <!-- Contact Form only at the bottom, without redundant grids -->
            <div class="max-w-2xl mx-auto w-full pt-4 pb-12">
              <ContactForm />
            </div>
        </div>
    </section>

  </div>
</template>
