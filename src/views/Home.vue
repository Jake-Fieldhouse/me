<script setup lang="ts">

// ... (keep existing imports)

// ... (keep existing imports)
import BentoGrid from '../components/BentoGrid.vue'
import BentoItem from '../components/BentoItem.vue'
import CircuitPattern from '../components/CircuitPattern.vue'
import BentoDetailOverlay from '../components/BentoDetailOverlay.vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const headerRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(headerRef, { delay: 2.2 }) // Wait for preloader
useScrollReveal(trustRef, { delay: 2.5 })
useScrollReveal(gridRef, { delay: 0.2, y: 100 })

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
  "Managed IT": [
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
  "E-Waste & ITAD": [
    "Free Business E-Waste Collection",
    "NIST 800-88 Data Destruction",
    "Certificate of Destruction",
    "Zero-Landfill Policy",
    "WEEE 2025 Compliant",
    "Nationwide Service Available"
  ]
};

const serviceColors: Record<string, string> = {
  "Repair Ninja": "bg-red-500",
  "Managed IT": "bg-blue-500",
  "Data Recovery": "bg-emerald-500",
  "E-Waste & ITAD": "bg-amber-500"
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
      <header ref="headerRef" class="text-center space-y-6 w-full mt-20">
        <div class="flex justify-center">
            <HyperText
            text="Jake Fieldhouse"
            class="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" 
            />
        </div>
        <p class="text-2xl md:text-3xl text-neutral-300 font-light max-w-2xl mx-auto">
          Enterprise IT. Component-Level Repair. Zero Compromise.
        </p>
        <p class="text-lg text-neutral-500 max-w-xl mx-auto">
          From 24/7 managed services to microsoldering dead boards—I handle the full stack, Hull to worldwide.
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <router-link 
            to="/contact" 
            class="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
            Book Free Consultation
          </router-link>
          <router-link 
            to="/about" 
            class="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Learn More
          </router-link>
        </div>
      </header>
      
      <!-- Trust Signals -->
      <TrustBar ref="trustRef" class="w-full max-w-4xl mx-auto rounded-xl border border-white/5" />

      <!-- Services Grid -->
      <main ref="gridRef" class="w-full">
        <BentoGrid class="max-w-4xl mx-auto">
          <BentoItem
            title="Repair Ninja"
            description="Manufacturer says unrepairable? We disagree. Component-level microsoldering for MacBooks, PS5s, and phones. No Fix, No Fee."
            class="md:col-span-2 group hover:border-red-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/microsoldering-repair-hull')"
          >
             <template #header>
                <div class="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-900/50 to-neutral-900 overflow-hidden">
                    <CircuitPattern class="text-red-500/30" />
                </div>
             </template>
          </BentoItem>
          
          <BentoItem
            title="Managed IT"
            description="43% of UK businesses were breached this year. Local response, enterprise protection, 24/7 monitoring."
            class="md:col-span-1 group hover:border-blue-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/managed-it-services-hull')"
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
            title="E-Waste & ITAD"
            description="Free collection. NIST 800-88 data destruction. Certificate of Destruction included. WEEE 2025 compliant."
            class="md:col-span-2 group hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer"
            @click="() => $router.push('/secure-data-disposal-hull')"
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



    </div>
</template>
