<script setup lang="ts">
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import ContactForm from '../components/ContactForm.vue'
import { useOgMeta } from '../composables/useOgMeta'
import IconChevronDown from '../components/icons/IconChevronDown.vue'

useOgMeta({
  title: 'Jake Fieldhouse Consulting | Hardware & IT Strategist',
  description: 'Hull & East Yorkshire. I fix what others won\'t. Component-level repair, zero-landfill e-waste, embedded IT, and AI optimization.',
  image: '/images/og-image.png',
  url: '/'
})
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-32">
    
    <!-- Hero (Minimalist) -->
    <section class="min-h-[70vh] flex flex-col justify-center items-start space-y-8 relative">
      <div class="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium tracking-wide">
        Hull & East Yorkshire • UK Nationwide
      </div>
      
      <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1]">
        Jake Fieldhouse
      </h1>
      
      <p class="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed text-readable">
        Hardware restoration, zero-landfill e-waste, and strategic IT. <br class="hidden md:block" />
        <span class="text-white font-medium">I fix what others won't.</span>
      </p>

      <div class="pt-8 w-full flex flex-wrap gap-6 items-center">
        <a href="#contact" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors btn-depth">
          Get in Touch
        </a>
        <a href="#expertise" class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
          View Capabilities <IconChevronDown class="w-4 h-4" />
        </a>
      </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="scroll-mt-32 space-y-12">
        <h2 class="text-3xl font-bold text-white border-b border-white/10 pb-4">Capabilities</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Hardware / Repair -->
            <div class="bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 transition-colors hover-lift">
                <div class="text-3xl mb-6">🔬</div>
                <h3 class="text-xl font-bold text-white mb-3">Hardware Restoration</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">
                    15+ years of component-level microsoldering. If the manufacturer says "replace it", I say "fix it". Dead logic boards, torn traces, liquid damage. I recover what's lost.
                </p>
            </div>

            <!-- E-Waste -->
            <div class="bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 transition-colors hover-lift">
                <div class="text-3xl mb-6">♻️</div>
                <h3 class="text-xl font-bold text-white mb-3">IT Asset Disposal</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">
                    EA Licensed (CBDL620098) zero-landfill e-waste collection. I process, wipe (NIST 800-88), and refurbish your dead assets. Free collection for businesses.
                </p>
            </div>

            <!-- IT & AI -->
            <div class="bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 transition-colors hover-lift">
                <div class="text-3xl mb-6">🌐</div>
                <h3 class="text-xl font-bold text-white mb-3">Embedded IT & AEO</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">
                    From enterprise-grade infrastructure to making your business visible to frontier AI. I don't just maintain networks; I future-proof them for the generative web.
                </p>
            </div>
        </div>
    </section>

    <!-- Trust Signals -->
    <section class="max-w-4xl mx-auto w-full">
        <TrustBar />
    </section>

    <!-- About / Story -->
    <section id="about" class="scroll-mt-32 bg-neutral-900/30 p-8 md:p-12 rounded-3xl border border-white/5 space-y-8">
      <h2 class="text-3xl font-bold text-white">The Story</h2>
      <div class="text-neutral-300 space-y-6 leading-relaxed max-w-3xl">
        <p>
          I started out at 15, fixing early iPhones and hand-delivering flyers in Hull. Before delivery apps took over the city, I built <strong class="text-white">Sweet Tooth</strong> — Hull's first sweet delivery business, scaling it organically through a deep understanding of social media tech before the market caught on.
        </p>
        <p>
          Today, I work as an IT Engineer at KCOM, diagnosing datacentre infrastructure, scripting automations, and configuring enterprise networks. On the side, I run <strong class="text-white">Jake Fieldhouse Consulting</strong> to bring that capability back down to earth for individuals and SMBs.
        </p>
        <p>
          My sweetest spot? Being the guy you call for a fingerprint reader who ends up auditing your entire network, deploying remote orchestration, and securing the estate. No agencies. No call centers. Just capability.
        </p>
      </div>
      
      <!-- Stats highlight -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 mt-6">
        <div>
            <div class="text-2xl font-bold text-white">15+</div>
            <div class="text-xs text-neutral-500 uppercase tracking-widest mt-1">Years Active</div>
        </div>
        <div>
            <div class="text-2xl font-bold text-white">1k+</div>
            <div class="text-xs text-neutral-500 uppercase tracking-widest mt-1">Devices Fixed</div>
        </div>
        <div>
            <div class="text-2xl font-bold text-white">DBS</div>
            <div class="text-xs text-neutral-500 uppercase tracking-widest mt-1">Checked</div>
        </div>
        <div>
            <div class="text-2xl font-bold text-white">Hiscox</div>
            <div class="text-xs text-neutral-500 uppercase tracking-widest mt-1">Insured</div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="scroll-mt-32 pt-12 border-t border-white/5">
        <div class="max-w-xl mx-auto w-full space-y-8">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-white">Get in Touch</h2>
                <p class="text-neutral-400">Whether it's a dead logic board, a rack of servers, or an office clearance — tell me what you need.</p>
            </div>
            
            <ContactForm />
        </div>
    </section>

  </div>
</template>
