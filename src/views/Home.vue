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
  title: 'Jake Fieldhouse Consulting | Hardware & IT Strategist',
  description: 'Hull & East Yorkshire. Component-level repair, zero-landfill e-waste, embedded IT, and home automation.',
  image: '/images/og-image.png',
  url: '/'
})
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 flex flex-col gap-40">
    
    <!-- Hero (Obsidian Glass) -->
    <section class="flex flex-col justify-start items-start space-y-10 relative scroll-reveal pt-4 md:pt-12">
      <div class="inline-block px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-neutral-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        Hull & East Yorkshire • UK Nationwide
      </div>
      
      <h1 class="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 leading-[1.1] pb-2">
        Jake Fieldhouse
      </h1>
      
      <p class="text-xl md:text-3xl text-neutral-400 max-w-3xl leading-relaxed font-light">
        Bespoke technology services for homes and businesses. <br class="hidden md:block" />
        <span class="text-white font-normal">Complex hardware repair, secure IT disposal, and smart home automation.</span>
      </p>

      <div class="pt-8 w-full flex flex-wrap gap-4 items-center">
        <a href="#contact" class="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Get in Touch
        </a>
        <a href="#expertise" class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group tracking-wide text-sm uppercase ml-2">
          Capabilities <IconChevronDown class="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="scroll-mt-32 space-y-16">
        <div class="flex items-center gap-6 scroll-reveal">
          <h2 class="text-3xl font-bold text-white tracking-tight">Capabilities</h2>
          <div class="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Hardware / Repair -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal">
                <div class="text-4xl mb-8 opacity-80">🔬</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">Hardware Restoration</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    15+ years of component-level microsoldering and recovery. Focusing on extending the lifespan of premium devices, repairing logic boards, and recovering data when conventional replacement isn't desirable.
                </p>
            </div>

            <!-- E-Waste -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal" style="animation-delay: 100ms;">
                <div class="text-4xl mb-8 opacity-80">♻️</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">IT Asset Disposal</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    Fully licensed (CBDL620098) zero-landfill e-waste processing. Secure data wiping (NIST 800-88 compliance) and asset lifecycle management tailored for homes and businesses.
                </p>
            </div>

            <!-- Home & Enterprise Automation -->
            <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] scroll-reveal" style="animation-delay: 200ms;">
                <div class="text-4xl mb-8 opacity-80">⚡</div>
                <h3 class="text-xl font-bold text-white mb-4 tracking-tight">Home & Enterprise IT</h3>
                <p class="text-neutral-400 leading-relaxed font-light">
                    From deploying high-end local smart home orchestration (Home Assistant) for significant power and efficiency savings, to securing and mapping enterprise-level networks.
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
            I began at 15, diagnosing early-generation iPhones and physically distributing flyers across Hull. Long before modern delivery platforms saturated the market, I built <strong class="text-white font-medium">Sweet Tooth</strong> — the city's first sweet delivery service, scaling entirely organically.
          </p>
          <p>
            Currently, I operate embedded within enterprise IT infrastructure for a major digital services provider, diagnosing datacentre systems and engineering automated deployments. 
          </p>
          <p>
            <strong class="text-white font-medium">Jake Fieldhouse Consulting</strong> exists to bring that tier of capability back down to earth. Whether you need an elite smart home orchestration system driving down your power consumption, or a delicate component-level repair on a device vital to your life, you deal directly with the engineer.
          </p>
        </div>
        
        <!-- Stats highlight -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 mt-8">
          <div>
              <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">15+</div>
              <div class="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Years Active</div>
          </div>
          <div>
              <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">1k+</div>
              <div class="text-xs text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Devices Fixed</div>
          </div>
          <div>
              <div class="text-3xl font-black text-white">DBS</div>
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
                <p class="text-neutral-400 font-light text-lg">Whether you are looking for custom home automation, a complex board repair, or an office IT clearance, let's discuss your requirements.</p>
            </div>

            <!-- Elegant Contact Grid -->
            <div class="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 pb-12 scroll-reveal" style="animation-delay: 150ms;">
              <a href="https://wa.me/447404090458" target="_blank" rel="noopener noreferrer" class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#25D366] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(37,211,102,0.15)] group" aria-label="WhatsApp">
                <IconWhatsApp class="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="tel:+447404090458" class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(255,255,255,0.1)] group" aria-label="Call Mobile">
                <IconPhone class="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://signal.me/#p/+447404090458" target="_blank" rel="noopener noreferrer" class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#3a76f0] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(58,118,240,0.15)] group" aria-label="Signal">
                <IconSignal class="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://t.me/jakefieldhouse" target="_blank" rel="noopener noreferrer" class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#0088cc] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,136,204,0.15)] group" aria-label="Telegram">
                <IconTelegram class="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="mailto:jake@jakefieldhouse.co.uk" class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#60a5fa] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(96,165,250,0.15)] group" aria-label="Email">
                <IconEmail class="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://uk.linkedin.com/in/jake-fieldhouse" target="_blank" rel="noopener noreferrer" class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-[#0077b5] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,119,181,0.15)] group" aria-label="LinkedIn">
                <IconLinkedIn class="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            
            <div class="max-w-2xl mx-auto w-full">
              <ContactForm />
            </div>
        </div>
    </section>

  </div>
</template>
