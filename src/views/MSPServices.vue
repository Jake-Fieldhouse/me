<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import BreadcrumbSchema from '../components/BreadcrumbSchema.vue'
import CitedStat from '../components/CitedStat.vue'
import IconPhone from '../components/icons/IconPhone.vue'
import IconCheck from '../components/icons/IconCheck.vue'
import IconArrowRight from '../components/icons/IconArrowRight.vue'
import { useOgMeta } from '../composables/useOgMeta'
import { trackPhoneClick } from '../lib/analytics'
// Import dynamic data
import { supportedPlatforms, keyFeatures, serviceTiers, faqs } from '../data/services'

useOgMeta({
  title: 'Managed IT Services Hull | Proactive Monitoring & Support',
  description: 'Proactive infrastructure monitoring, EDR security, Microsoft 365 management for Hull businesses. Enterprise protection, local response.',
  image: '/images/og-msp.svg',
  url: '/managed-it-services-hull'
})

const serviceScriptTag = ref<HTMLScriptElement | null>(null)

onMounted(() => {
  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://jakefieldhouse.co.uk/#service-msp",
    "name": "Managed IT Services Hull",
    "url": "https://jakefieldhouse.co.uk/managed-it-services-hull",
    "description": "Proactive infrastructure monitoring, EDR security, Microsoft 365 management for Hull businesses. Enterprise protection, local response.",
    "serviceType": "Managed Service Provider",
    "provider": { "@id": "https://jakefieldhouse.co.uk/#organization" },
    "areaServed": { "@type": "City", "name": "Hull" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MSP Service Tiers",
      "itemListElement": [
        { "@type": "Offer", "name": "Foundation", "description": "Monitoring, patching, and antivirus for small teams" },
        { "@type": "Offer", "name": "Professional", "description": "EDR, Microsoft 365 management, and proactive support" },
        { "@type": "Offer", "name": "Enterprise", "description": "Full infrastructure management with priority response" }
      ]
    }
  })
  document.head.appendChild(el)
  serviceScriptTag.value = el
})

onUnmounted(() => {
  if (serviceScriptTag.value) {
    document.head.removeChild(serviceScriptTag.value)
  }
})
</script>


<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <BreadcrumbSchema :crumbs="[{ name: 'Managed IT Services', url: '/managed-it-services-hull' }]" />

    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            <CitedStat 
              stat="43% of UK businesses" 
              source="GOV.UK Cyber Security Breaches Survey" 
              source-url="https://www.gov.uk/government/statistics/cyber-security-breaches-survey-2025" 
              year="2025" 
            /> breached this year. Don't be next.
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Local Response. <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Enterprise Protection.</span>
        </h1>
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
            Big MSPs treat you like a ticket number. I treat you like a partner. Proactive monitoring, EDR security, and someone who actually picks up the phone, based right here in Hull.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <router-link to="/contact" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors text-center btn-depth">
            Get in Touch
            </router-link>
            
            <a href="tel:+447404090458" class="group px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/20 text-center flex items-center justify-center gap-2" @click="trackPhoneClick('msp_hero')">
                <IconPhone class="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                Call Now
            </a>
        </div>
      </div>
    </header>

    <!-- Trust Bar -->
    <TrustBar />

    <!-- Platforms We Manage -->
    <section class="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 border-y border-white/5">
        <div v-for="platform in supportedPlatforms" :key="platform.name" 
             class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', platform.bgClass]">
                <component :is="platform.icon" :class="['w-6 h-6', platform.colorClass]" />
            </div>
            <span class="text-white font-semibold">{{ platform.name }}</span>
        </div>
    </section>

    <!-- How It Works -->
    <section class="max-w-4xl mx-auto space-y-8">
        <h2 class="text-3xl font-bold text-white text-center">How It Works</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center space-y-4">
                <div class="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">1</div>
                <h3 class="text-lg font-bold text-white">Free IT Audit</h3>
                <p class="text-neutral-400 text-sm">I assess your current setup — network, devices, security posture, and pain points. No sales pitch, just an honest assessment of where you stand.</p>
            </div>
            <div class="text-center space-y-4">
                <div class="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">2</div>
                <h3 class="text-lg font-bold text-white">Tailored Plan</h3>
                <p class="text-neutral-400 text-sm">You get a clear proposal with the right tier for your size and risk profile. No upselling, no unnecessary add-ons. Just what you actually need.</p>
            </div>
            <div class="text-center space-y-4">
                <div class="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">3</div>
                <h3 class="text-lg font-bold text-white">Seamless Onboarding</h3>
                <p class="text-neutral-400 text-sm">Monitoring agents deployed, EDR activated, backups configured. Usually completed within a single business day with zero downtime.</p>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
            <h2 class="text-3xl font-bold text-white">Proactive, Not Reactive</h2>
            <p class="text-neutral-300 leading-relaxed">
                Downtime costs money. These MSP packages are designed to catch issues before they interrupt your workflow, using enterprise-grade EDR (Endpoint Detection & Response) and automated patching to secure your fleet.
            </p>
            
            <div class="space-y-4 pt-4">
                <div v-for="feature in keyFeatures" :key="feature.name" class="flex gap-4 items-start">
                    <div :class="['mt-1 w-2 h-2 rounded-full shrink-0', feature.dotColor]"></div>
                    <div>
                        <strong class="block text-white">{{ feature.name }}</strong>
                        <span class="text-neutral-400 text-sm">{{ feature.description }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service Tiers / Visual -->
        <div class="grid gap-6">
             <div v-for="tier in serviceTiers" :key="tier.name"
                  :class="[
                    'p-6 rounded-xl border transition-colors hover-lift scroll-reveal relative overflow-hidden',
                    tier.highlight 
                        ? 'bg-blue-900/10 border-blue-500/50 hover:border-blue-500' 
                        : 'bg-neutral-900/50 border-blue-500/20 hover:border-blue-500/40'
                  ]">
                 <div v-if="tier.tag" class="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-xl text-white">
                    {{ tier.tag }}
                 </div>
                 <h3 class="text-xl font-bold text-white mb-2">{{ tier.name }}</h3>
                 <p class="text-neutral-400 text-sm mb-4">{{ tier.description }}</p>
                 <ul class="space-y-2 text-sm text-neutral-300">
                     <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-2">
                        <IconCheck class="w-4 h-4 text-blue-500" /> {{ feature }}
                     </li>
                 </ul>
             </div>
        </div>
    </section>

    <!-- FAQ Section for AI/LLM Optimization -->
    <section class="max-w-3xl mx-auto space-y-8 pb-20">
        <h2 class="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">{{ faq.question }}</h3>
                <p class="text-neutral-400">{{ faq.answer }}</p>
            </div>
        </div>
    </section>

    <!-- Case Study CTA -->
    <section class="text-center pb-20">
        <div class="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
            <h3 class="text-2xl font-bold text-white mb-3">See Our Work in Action</h3>
            <p class="text-neutral-400 mb-6">See how I've helped Hull & East Yorkshire businesses transform their IT infrastructure.</p>
            <router-link to="/case-studies" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
                View Case Studies
                <IconArrowRight class="w-4 h-4" />
            </router-link>
        </div>
    </section>

  </div>
</template>
