<script setup lang="ts">
import TrustBar from '../components/TrustSignals/TrustBar.vue'
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-4">
            Managed Service Provider (MSP)
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Enterprise Reliability, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Small Business Agility</span>
        </h1>
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Professional IT infrastructure management without the corporate bloat. From 24/7 monitoring to endpoint security, we keep your business running while you sleep.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <router-link to="/contact" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors text-center">
            Book Consultation
            </router-link>
            <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10 text-center">
            Back to Home
            </router-link>
        </div>
      </div>
    </header>

    <!-- Trust Bar -->
    <TrustBar />

    <!-- Services Grid -->
    <section class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
            <h2 class="text-3xl font-bold text-white">Proactive, Not Reactive</h2>
            <p class="text-neutral-300 leading-relaxed">
                Downtime costs money. Our MSP packages are designed to catch issues before they interrupt your workflow. using enterprise-grade EDR (Endpoint Detection & Response) and automated patching to secure your fleet.
            </p>
            
            <div class="space-y-4 pt-4">
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">24/7 Remote Monitoring</strong>
                        <span class="text-neutral-400 text-sm">We watch your servers and workstations so you don't have to. Disk space alerts, CPU spikes, and offline warnings.</span>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">Cybersecurity First</strong>
                        <span class="text-neutral-400 text-sm">Next-gen antivirus, ransomware protection, and email filtering included as standard.</span>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">Backup & Disaster Recovery</strong>
                        <span class="text-neutral-400 text-sm">Automated cloud backups ensure your critical business data is never lost, even in a catastrophe.</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service Tiers / Visual -->
        <div class="grid gap-6">
             <div class="bg-neutral-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                 <h3 class="text-xl font-bold text-white mb-2">Essential</h3>
                 <p class="text-neutral-400 text-sm mb-4">For solopreneurs and small teams.</p>
                 <ul class="space-y-2 text-sm text-neutral-300">
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Remote Support</li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Windows/Mac Patching</li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Basic Antivirus</li>
                 </ul>
             </div>
             
             <div class="bg-blue-900/10 p-6 rounded-xl border border-blue-500/50 hover:border-blue-500 transition-colors relative overflow-hidden">
                 <div class="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-xl text-white">MOST POPULAR</div>
                 <h3 class="text-xl font-bold text-white mb-2">Growth</h3>
                 <p class="text-neutral-400 text-sm mb-4">For growing agencies and offices.</p>
                 <ul class="space-y-2 text-sm text-neutral-300">
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> <strong>Everything in Essential</strong></li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Microsoft 365 Management</li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Cloud Backups (1TB)</li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Priority SLA Response</li>
                 </ul>
             </div>
        </div>
    </section>

  </div>
</template>
