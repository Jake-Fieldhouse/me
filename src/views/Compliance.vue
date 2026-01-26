<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
    <h1 class="text-4xl font-bold mb-12">Compliance & Certifications</h1>
    
    <div class="space-y-12">
        <section class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
            <h2 class="text-2xl font-bold text-amber-500 mb-4">Environment Agency Waste Carrier</h2>
            <p class="text-neutral-300 mb-4">We are a registered Upper Tier Waste Carrier, Dealer and Broker.</p>
            <div class="flex gap-4">
               <div class="bg-neutral-800 px-4 py-2 rounded text-sm text-neutral-400">Registration: <span class="text-white font-mono">CBDU123456</span></div>
               <div class="bg-neutral-800 px-4 py-2 rounded text-sm text-neutral-400">Expiry: <span class="text-white font-mono">Jan 2029</span></div>
            </div>
        </section>

        <section class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
             <h2 class="text-2xl font-bold text-blue-500 mb-4">Data Protection (GDPR)</h2>
            <p class="text-neutral-300 mb-4">Registered with the Information Commissioner's Office (ICO) for Data Protection.</p>
             <div class="bg-neutral-800 px-4 py-2 rounded text-sm text-neutral-400 inline-block">Registration: <span class="text-white font-mono">ZB123456</span></div>
        </section>

        <section class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
             <h2 class="text-2xl font-bold text-emerald-500 mb-4">Insurance</h2>
            <p class="text-neutral-300 mb-2">Public Liability Insurance: £5,000,000</p>
            <p class="text-neutral-300">Professional Indemnity Insurance: £1,000,000</p>
        </section>
    </div>
    
    <div class="mt-12 text-center">
        <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
    </div>
  </div>
</template>
