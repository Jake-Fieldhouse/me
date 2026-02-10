<script setup lang="ts">
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import BreadcrumbSchema from '../components/BreadcrumbSchema.vue'
import IconPhone from '../components/icons/IconPhone.vue'
import IconCheck from '../components/icons/IconCheck.vue'
import IconArrowRight from '../components/icons/IconArrowRight.vue'
import { useOgMeta } from '../composables/useOgMeta'
import { remoteHandsTasks, faqs } from '../data/remoteHands'

useOgMeta({
  title: 'Data Centre Remote Hands Hull | On-Site DC Support',
  description: 'Professional remote hands and smart hands support for data centres in Hull & East Yorkshire. Racking, cabling, hardware swap, vendor escort. DBS checked.',
  image: '/images/og-remote-hands.svg',
  url: '/data-centre-remote-hands-hull'
})
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <BreadcrumbSchema :crumbs="[{ name: 'Data Centre Remote Hands', url: '/data-centre-remote-hands-hull' }]" />

    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            DBS Checked • Fully Insured • Photo-Verified Reports
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Your Hands <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400">In the Data Centre.</span>
        </h1>
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
            Need someone to rack a server, swap a drive, or escort a vendor at your colo? I'm based in Hull and can be on-site in hours — not days.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <router-link to="/contact" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors text-center btn-depth">
            Get a Quote
            </router-link>
            
            <a href="tel:+447404090458" class="group px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/20 text-center flex items-center justify-center gap-2">
                <IconPhone class="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                Call Now
            </a>
        </div>
      </div>
    </header>

    <!-- Trust Bar -->
    <TrustBar />

    <!-- What We Do -->
    <section class="space-y-8">
        <div class="text-center space-y-3">
            <h2 class="text-3xl font-bold text-white">What We Cover</h2>
            <p class="text-neutral-400 max-w-2xl mx-auto">From routine racking to complex hardware swaps — every job includes a written report with photographic evidence.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
                v-for="task in remoteHandsTasks" 
                :key="task.name"
                class="p-6 rounded-2xl bg-neutral-900/50 border border-teal-900/30 hover:border-teal-500/50 transition-colors group hover-lift scroll-reveal"
            >
                <div class="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-teal-400">
                    <component :is="task.icon" class="w-6 h-6" />
                </div>
                <h3 class="text-lg font-bold text-white mb-2">{{ task.name }}</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">{{ task.description }}</p>
            </div>
        </div>
    </section>

    <!-- Remote Hands vs Smart Hands -->
    <section class="grid md:grid-cols-2 gap-8">
        <div class="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-teal-500/30 transition-colors">
            <div class="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold mb-4">REMOTE HANDS</div>
            <h3 class="text-2xl font-bold text-white mb-3">Physical Tasks, Done Right</h3>
            <p class="text-neutral-400 text-sm mb-6">Routine operations that need a reliable, methodical pair of hands on-site.</p>
            <ul class="space-y-3">
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-teal-500 mt-0.5 shrink-0" /> Racking, stacking, and decommissioning
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-teal-500 mt-0.5 shrink-0" /> Cable runs, patching, and labelling
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-teal-500 mt-0.5 shrink-0" /> Server reboots and power cycling
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-teal-500 mt-0.5 shrink-0" /> LED checks and visual verification
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-teal-500 mt-0.5 shrink-0" /> Shipping, receiving, and inventory
                </li>
            </ul>
        </div>

        <div class="p-8 rounded-2xl bg-teal-900/10 border border-teal-500/30 hover:border-teal-500/50 transition-colors relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-teal-500 text-xs font-bold px-3 py-1 rounded-bl-xl text-white">ADVANCED</div>
            <div class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-4">SMART HANDS</div>
            <h3 class="text-2xl font-bold text-white mb-3">Diagnostic & Complex Work</h3>
            <p class="text-neutral-400 text-sm mb-6">When you need more than hands — you need someone who understands the stack.</p>
            <ul class="space-y-3">
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" /> Network troubleshooting and diagnostics
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" /> Firmware and BIOS updates
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" /> OS-level fault isolation
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" /> Complex hardware fault diagnosis
                </li>
                <li class="flex items-start gap-3 text-sm text-neutral-300">
                    <IconCheck class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" /> Cross-connect and circuit testing
                </li>
            </ul>
        </div>
    </section>

    <!-- How It Works -->
    <section class="max-w-4xl mx-auto space-y-8">
        <h2 class="text-3xl font-bold text-white text-center">How It Works</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center space-y-4">
                <div class="w-12 h-12 mx-auto rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg">1</div>
                <h3 class="text-lg font-bold text-white">Request</h3>
                <p class="text-neutral-400 text-sm">Submit your request by email, phone, or the contact form. Include the facility, task scope, and any access requirements.</p>
            </div>
            <div class="text-center space-y-4">
                <div class="w-12 h-12 mx-auto rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg">2</div>
                <h3 class="text-lg font-bold text-white">Dispatch</h3>
                <p class="text-neutral-400 text-sm">I attend the facility within the agreed SLA, check in with security, and complete the work to your specifications.</p>
            </div>
            <div class="text-center space-y-4">
                <div class="w-12 h-12 mx-auto rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg">3</div>
                <h3 class="text-lg font-bold text-white">Report</h3>
                <p class="text-neutral-400 text-sm">You receive a full written report with photographs, confirmation of completed tasks, and any observations or recommendations.</p>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="max-w-3xl mx-auto space-y-8">
        <h2 class="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">{{ faq.question }}</h3>
                <p class="text-neutral-400">{{ faq.answer }}</p>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="text-center pb-20">
        <div class="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 border border-teal-500/20">
            <h3 class="text-2xl font-bold text-white mb-3">Need Hands On-Site?</h3>
            <p class="text-neutral-400 mb-6">Whether it's a one-off rack job or ongoing support, drop me a message and I'll get back to you within 24 hours.</p>
            <router-link to="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
                Get in Touch
                <IconArrowRight class="w-4 h-4" />
            </router-link>
        </div>
    </section>

  </div>
</template>
