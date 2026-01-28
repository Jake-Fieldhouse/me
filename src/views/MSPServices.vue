<script setup lang="ts">
import TrustBar from '../components/TrustSignals/TrustBar.vue'
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            43% of UK businesses breached this year. Don't be next.
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Local Response. <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Enterprise Protection.</span>
        </h1>
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Big MSPs treat you like a ticket number. We treat you like a partner. 24/7 monitoring, AI-threat detection, and someone who actually picks up the phone—based right here in Hull.
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
                        <strong class="block text-white">AI-Powered Threat Defense</strong>
                        <span class="text-neutral-400 text-sm">EDR that catches AI-generated phishing and ransomware—the top threats UK SMEs face in 2025.</span>
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

    <!-- FAQ Section for AI/LLM Optimization -->
    <section class="max-w-3xl mx-auto space-y-8 pb-20">
        <h2 class="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">What IT support is available for small businesses in Hull?</h3>
                <p class="text-neutral-400">
                    Jake Fieldhouse Consulting offers comprehensive Managed IT Services (MSP) for small businesses in Hull and East Yorkshire. 
                    Our packages include 24/7 infrastructure monitoring, Endpoint Detection & Response (EDR) cybersecurity, 
                    Microsoft 365 management, cloud backups, and priority support with guaranteed SLA response times.
                </p>
            </div>
            
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">How much does managed IT support cost for a small business?</h3>
                <p class="text-neutral-400">
                    Our MSP packages are priced per-device or per-user, starting from affordable monthly rates tailored to your business size. 
                    We offer Essential, Growth, and Enterprise tiers to match your requirements. Contact us for a custom quote based on your infrastructure needs.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Do you offer cybersecurity services for businesses in East Yorkshire?</h3>
                <p class="text-neutral-400">
                    Yes, cybersecurity is core to our MSP offering. We provide next-generation Endpoint Detection & Response (EDR), 
                    ransomware protection, email filtering, and regular security audits. Our proactive approach catches threats before they impact your business.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Can you help migrate our business to Microsoft 365 or Azure?</h3>
                <p class="text-neutral-400">
                    Absolutely. We specialize in cloud migrations for SMBs. Whether you're moving from on-premise servers to Azure 
                    or transitioning to Microsoft 365 for email and collaboration, we handle the entire process with minimal disruption to your operations.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">What areas do you cover for on-site IT support?</h3>
                <p class="text-neutral-400">
                    We provide on-site IT support across Hull, Beverley, Driffield, Bridlington, Goole, Cottingham, Hessle, 
                    and the wider East Yorkshire region. Remote support is available nationwide for clients on our MSP plans.
                </p>
            </div>
        </div>
    </section>

  </div>
</template>
