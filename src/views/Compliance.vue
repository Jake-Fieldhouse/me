<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Recycle, ShieldCheck, FileText, Lock } from 'lucide-vue-next'

const containerRef = ref<HTMLElement | null>(null)
useScrollReveal(containerRef)

const complianceItems = ref([
    {
        title: 'Registered Waste Carrier',
        description: 'Officially registered with the Environment Agency as a Carrier, Dealer, and Broker of controlled waste. Authorized to transport and handle e-waste.',
        status: 'active', // Options: active, pending, expired
        color: 'text-green-500',
        icon: Recycle,
        regNumber: 'CBDL620098',
        expiry: 'Indefinite (Lower Tier)',
        proofUrl: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers'
    },
    {
        title: 'Information Commissioner\'s Office (ICO)',
        description: 'Registered Data Controller (ZC002956). Ensuring full compliance with GDPR and Data Protection Act 2018 requirements.',
        status: 'active',
        color: 'text-purple-500',
        icon: Lock,
        regNumber: 'ZC002956',
        expiry: 'Tier 1 Controller',
        proofUrl: '/documents/ICO_Certificate_ZC002956.pdf'
    },
    {
        title: 'NIST 800-88 Purge Standard',
        description: 'All storage media is sanitized to NIST 800-88 "Purge" Level. Certificates of Destruction provided for every batch.',
        status: 'active',
        color: 'text-emerald-500',
        icon: FileText,
        regNumber: 'Self-Certified Process',
        expiry: 'Standard Operating Procedure',
        proofUrl: '/documents/certificate_of_destruction_example.html'
    },
    {
        title: 'ADISA Certification',
        description: 'Asset Disposal & Information Security Alliance certification for data sanitization. We adhere to ADISA standards while formal audit is pending.',
        status: 'pending',
        color: 'text-amber-500',
        icon: ShieldCheck,
        regNumber: 'Pending Audit',
        expiry: null,
        proofUrl: null
    },
    {
        title: 'DBS Enhanced Check',
        description: 'Full Enhanced Disclosure & Barring Service check. Active subscription to the Update Service for real-time status verification. Full certificate available on request.',
        status: 'active',
        color: 'text-sky-500',
        icon: ShieldCheck,
        regNumber: 'XXXX-XXXX-1873',
        expiry: 'Live Subscription',
        proofUrl: 'https://secure.crbonline.gov.uk/crsc/check'
    },
    {
        title: 'Public Liability Insurance',
        description: 'Comprehensive business insurance coverage protecting our clients and operations.',
        status: 'active',
        color: 'text-blue-500',
        icon: FileText,
        regNumber: 'Available on Request',
        expiry: 'Active',
        proofUrl: null
    }
])

const isExpired = (dateStr: string | null) => {
    if (!dateStr || dateStr === 'Rolling Renewal') return false
    // Simple check, in reality parse date
    return false
}

const getStatusBorderColor = (status: string) => {
    if (status === 'active') return 'border-green-500/20 shadow-[0_0_30px_-10px_rgba(34,197,94,0.1)]'
    if (status === 'pending') return 'border-amber-500/20 border-dashed'
    return 'border-white/5 opacity-50'
}

const getStatusPillColor = (status: string) => {
    if (status === 'active') return 'bg-green-500/10 text-green-500 border border-green-500/20'
    if (status === 'pending') return 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
    return 'bg-neutral-800 text-neutral-500'
}
</script>

<template>
  <div ref="containerRef" class="relative z-10 min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
    <h1 class="text-4xl font-bold mb-12">Compliance & Certifications</h1>
    
    <div class="space-y-6">
        <div v-for="item in complianceItems" :key="item.title" 
             class="bg-neutral-900/50 p-8 rounded-2xl border transition-colors group relative overflow-hidden"
             :class="getStatusBorderColor(item.status)">
            
            <!-- Status Pill -->
            <div class="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                 :class="getStatusPillColor(item.status)">
                <span v-if="item.status === 'active'" class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                </span>
                <span v-else class="h-2 w-2 rounded-full bg-current"></span>
                {{ item.status === 'active' ? 'Live & Verified' : 'Pending Verification' }}
            </div>

            <h2 class="text-2xl font-bold mb-4 flex items-center gap-3" :class="item.color">
                <component :is="item.icon" class="w-6 h-6" />
                {{ item.title }}
            </h2>
            
            <p class="text-neutral-300 mb-6 max-w-2xl">{{ item.description }}</p>
            
            <div class="grid md:grid-cols-2 gap-4 text-sm">
                <!-- Registration Data -->
                <div v-if="item.regNumber" class="bg-neutral-800/50 px-4 py-3 rounded-lg border border-white/5 flex justify-between items-center">
                    <span class="text-neutral-400">Registration ID</span>
                    <span class="font-mono text-white select-all">{{ item.regNumber }}</span>
                </div>
                
                <div v-if="item.expiry" class="bg-neutral-800/50 px-4 py-3 rounded-lg border border-white/5 flex justify-between items-center">
                    <span class="text-neutral-400">Valid Until</span>
                    <span class="font-mono" :class="isExpired(item.expiry) ? 'text-red-400' : 'text-green-400'">
                        {{ item.expiry }}
                    </span>
                </div>

                <!-- Proof Link -->
                <div class="md:col-span-2 mt-2">
                    <a v-if="item.proofUrl" :href="item.proofUrl" target="_blank" class="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm group/link">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        View Official Certificate / Registry
                    </a>
                    <span v-else class="text-neutral-500 italic text-sm flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Certificate document pending upload
                    </span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="mt-12 text-center">
        <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
    </div>
  </div>
</template>
