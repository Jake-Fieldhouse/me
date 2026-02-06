
<script setup lang="ts">
// Professional Trust Signals Component
import IconWasteCarrier from '../icons/IconWasteCarrier.vue'
import IconNIST from '../icons/IconNIST.vue'
import IconGDPR from '../icons/IconGDPR.vue'
import IconShieldCheck from '../icons/IconShieldCheck.vue'
</script>

<template>
  <div class="w-full bg-neutral-900/30 border-y border-white/5 backdrop-blur-md py-6 md:py-8 overflow-hidden relative group">
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16">
        
        <!-- Waste Carrier -->
        <div class="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300 cursor-help group" title="Registration Active">
            <div class="relative p-2 rounded-lg bg-green-500/10 border border-green-500/20 shadow-lg shadow-green-500/10 group-hover:shadow-green-500/20 transition-all">
                <IconWasteCarrier class="w-6 h-6 text-green-500" />
            </div>
            <div class="flex flex-col">
                <span class="text-xs text-neutral-400 uppercase tracking-wider font-semibold group-hover:text-green-400 transition-colors">Waste Carrier</span>
                <span class="text-white font-bold leading-none">CBDL620098</span>
            </div>
        </div>
        
        <!-- NIST Data Destruction -->
        <div class="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300 cursor-help group" title="Data Destruction Standard">
            <div class="relative p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/20 transition-all">
                <IconNIST class="w-6 h-6 text-emerald-500" />
            </div>
            <div class="flex flex-col">
                <span class="text-xs text-neutral-400 uppercase tracking-wider font-semibold group-hover:text-emerald-400 transition-colors">Data Safety</span>
                <span class="text-white font-bold leading-none">NIST 800-88</span>
            </div>
        </div>



         <!-- GDPR/ICO -->
         <div class="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div class="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <IconGDPR class="w-6 h-6 text-purple-500" />
            </div>
            <div class="flex flex-col">
                <span class="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Compliance</span>
                <span class="text-white font-bold leading-none">ICO Registered</span>
            </div>
        </div>

        <!-- Insurance -->
        <div class="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300 cursor-help group" title="Professional Indemnity & Public Liability">
            <div class="relative p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/20 transition-all">
                <IconShieldCheck class="w-6 h-6 text-amber-400" />
            </div>
            <div class="flex flex-col">
                <span class="text-xs text-neutral-400 uppercase tracking-wider font-semibold group-hover:text-amber-300 transition-colors">PI & PL</span>
                <span class="text-white font-bold leading-none">Insured by Hiscox</span>
            </div>
        </div>
    </div>
  </div>
</template>

