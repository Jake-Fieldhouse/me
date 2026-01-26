<script setup lang="ts">

// ... (keep existing imports)

// ... (keep existing imports)
import BentoGrid from '../components/BentoGrid.vue'
import BentoItem from '../components/BentoItem.vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import BentoDetailOverlay from '../components/BentoDetailOverlay.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import FloatingDock from '../components/FloatingDock.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const headerRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const dockRef = ref<HTMLElement | null>(null)

useScrollReveal(headerRef, { delay: 2.2 }) // Wait for preloader
useScrollReveal(trustRef, { delay: 2.5 })
useScrollReveal(gridRef, { delay: 0.2, y: 100 })
useScrollReveal(dockRef, { delay: 0.5 })

const socialItems = [
  { title: 'Email', icon: '/images/email.png', href: 'mailto:jke.contact.me@gmail.com' },
  { title: 'Phone', icon: '/images/phone-ringing.png', href: 'tel:+447400052962' },
  { title: 'Instagram', icon: '/images/instagram.png', href: 'https://www.instagram.com/jkeinks' },
  { title: 'Facebook', icon: '/images/facebook.png', href: 'https://www.facebook.com/jake.fieldhouse/' },
  { title: 'WhatsApp', icon: '/images/whatsapp.png', href: 'https://wa.me/447400052962' },
  { title: 'GitHub', icon: '/images/github.png', href: 'https://github.com/Jake-Fieldhouse' },
  { title: 'LinkedIn', icon: '/images/linkedin.png', href: 'https://www.linkedin.com/in/jake-fieldhouse' },
]

// Expansion Logic
const isOverlayOpen = ref(false);
const selectedItem = ref<any>(null);
const initialRect = ref<DOMRect | null>(null);
const selectedColor = ref("bg-white");

const serviceDetails: Record<string, string[]> = {
  "Repair Ninja": [
    "HDMI Port Replacement (PS5, Xbox, Laptops)",
    "Micro-soldering & Trace Repair",
    "Liquid Damage Ultrasonic Cleaning",
    "Component Level Diagnostics",
    "Screen & Battery Replacements",
    "Custom modding & upgrades"
  ],
  "MSP Services": [
    "24/7 Remote Monitoring & Maintenance",
    "Endpoint Detection & Response (EDR)",
    "Cloud Backups & Disaster Recovery",
    "Network Infrastructure Design",
    "Helpdesk Support Packages",
    "Microsoft 365 Management"
  ],
  "Data Recovery": [
    "Mechanical HDD Failure Recovery",
    "SSD & Flash Controller Repair",
    "Logic Board Transplant",
    "Forensic Data Extraction",
    "RAID Rebuilds",
    "Secure Chain of Custody"
  ],
  "Sustainable Tech": [
    "Free Corporate E-Waste Collection",
    "DoD Standard Data Destruction",
    "Certified Zero-Landfill Recycling",
    "Asset Value Recovery (Buybacks)",
    "Carbon Offset Reporting",
    "Circular Economy Integration"
  ]
};

const serviceColors: Record<string, string> = {
  "Repair Ninja": "bg-red-500",
  "MSP Services": "bg-blue-500",
  "Data Recovery": "bg-emerald-500",
  "Sustainable Tech": "bg-amber-500"
};

const handleCardClick = (e: MouseEvent, title: string, description: string) => {
  const target = (e.currentTarget as HTMLElement);
  initialRect.value = target.getBoundingClientRect();
  selectedItem.value = {
    title,
    description,
    details: serviceDetails[title] || []
  };
  selectedColor.value = serviceColors[title] || "bg-white";
  isOverlayOpen.value = true;
};
</script>

<template>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center gap-32">
      
      <!-- Header -->
      <header ref="headerRef" class="text-center space-y-4 w-full mt-20">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            class="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" 
            />
        </div>
        <p class="text-2xl text-neutral-300 font-light max-w-2xl mx-auto">
          Your Full-Stack Tech Partner
        </p>
        <p class="text-lg text-neutral-500 max-w-xl mx-auto">
          From setup to sunset—I handle IT infrastructure, repairs, and sustainable disposal.
        </p>
      </header>
      
      <!-- Trust Signals -->
      <TrustBar ref="trustRef" class="w-full max-w-4xl mx-auto rounded-xl border border-white/5" />

      <!-- Services Grid -->
      <main ref="gridRef" class="w-full">
        <BentoGrid class="max-w-4xl mx-auto">
          <BentoItem
            title="Repair Ninja"
            description="Specializing in component-level electronics repair, microsoldering, and hardware diagnostics. Bringing dead tech back to life."
            class="md:col-span-2 group hover:border-red-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/repair-ninja')"
          >
             <template #header>
                <div class="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-900/50 to-neutral-900 overflow-hidden">
                    <CircuitPattern class="text-red-500/30" />
                </div>
             </template>
          </BentoItem>
          
          <BentoItem
            title="MSP Services"
            description="Comprehensive Managed IT Services for business. Network infrastructure, security monitoring, and proactive support."
            class="md:col-span-1 group hover:border-blue-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="(e: any) => handleCardClick(e, 'MSP Services', 'Comprehensive Managed IT Services for business. Network infrastructure, security monitoring, and proactive support.')"
          >
            <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-900/50 to-neutral-900" />
            </template>
          </BentoItem>

          <BentoItem
            title="Data Recovery"
            description="Professional data retrieval from damaged drives and devices. Forensic analysis and secure data handling."
            class="md:col-span-1 group hover:border-emerald-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="(e: any) => handleCardClick(e, 'Data Recovery', 'Professional data retrieval from damaged drives and devices. Forensic analysis and secure data handling.')"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-900/50 to-neutral-900" />
             </template>
          </BentoItem>

          <BentoItem
            title="Sustainable Tech"
            description="Zero-cost corporate e-waste solutions. We handle logistics and secure data destruction, helping your business meet sustainability goals effortlessly."
            class="md:col-span-2 group hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/sustainable-tech')"
          >
             <template #header>
                <div class="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-900/50 to-neutral-900" />
             </template>
          </BentoItem>
        </BentoGrid>
      </main>

      <!-- Overlay -->
      <BentoDetailOverlay 
        :isOpen="isOverlayOpen" 
        :initialRect="initialRect" 
        :item="selectedItem"
        :colorClass="selectedColor"
        @close="isOverlayOpen = false"
      />

      <!-- Social Dock (Desktop) -->
      <section ref="dockRef" class="text-center space-y-8 w-full pb-20 hidden md:block">
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
        <nav class="flex justify-center gap-6 flex-wrap">
          <router-link to="/about" class="hover:text-white transition-colors">About</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link>
          <span class="text-neutral-700">|</span>
          <router-link to="/privacy" class="hover:text-white transition-colors">Privacy Policy</router-link>
          <router-link to="/terms" class="hover:text-white transition-colors">Terms</router-link>
        </nav>
      </footer>
    </div>
</template>
