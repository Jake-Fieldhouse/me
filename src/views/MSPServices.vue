<script setup lang="ts">
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import CitedStat from '../components/CitedStat.vue'
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
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
            Big MSPs treat you like a ticket number. We treat you like a partner. 24/7 monitoring, AI-threat detection, and someone who actually picks up the phone—based right here in Hull.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <router-link to="/contact" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors text-center btn-depth">
            Get in Touch
            </router-link>
            <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10 text-center">
            Back to Home
            </router-link>
        </div>
      </div>
    </header>

    <!-- Trust Bar -->
    <TrustBar />

    <!-- Platforms We Manage -->
    <section class="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 border-y border-white/5">
        <div class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11H1V1h10v10zm2-10v10h10V1H13zM1 23h10V13H1v10zm12 0h10V13H13v10z"/></svg>
            </div>
            <span class="text-white font-semibold">Microsoft 365</span>
        </div>
        <div class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <div class="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M22.379 23.343a1.62 1.62 0 0 1-1.082-.453c-.319-.385-.319-.7-.319-1.343v-3.835c0-2.108-1.03-3.772-3.413-3.772-1.4 0-2.88.453-3.573 1.925l2.5.646c.253-.575.825-.961 1.392-.961.888 0 1.271.519 1.271 1.474v.389c-.51-.13-.894-.194-1.592-.194-2.179 0-4.358.896-4.358 3.322 0 2.169 1.72 3.02 3.267 3.02 1.271 0 2.054-.649 2.683-1.428v1.234h2.181c.123 0 .223-.063.223-.186v-.06a1.34 1.34 0 0 1-.78.222zm-4.8-1.417c-.699 0-1.144-.389-1.144-.961 0-.779.699-1.039 1.525-1.039.444 0 .888.067 1.271.194-.062 1.17-.826 1.806-1.652 1.806zm-5.07 1.417c.316 0 .572-.256.572-.572v-.06c-.194.128-.447.195-.76.195h-.064a1.626 1.626 0 0 1-1.082-.453c-.32-.388-.32-.701-.32-1.346v-5.632c0-.643 0-.958.32-1.346a1.626 1.626 0 0 1 1.082-.453h.064c.313 0 .566.067.76.195v-.06a.572.572 0 1 0-1.144 0v.06c-.25.188-.443.463-.465.81-.028-.448-.094-.81-.51-.81h-.064a1.626 1.626 0 0 0-1.082.453c-.32.388-.32.703-.32 1.346v5.632c0 .645 0 .958.32 1.346.27.326.656.453 1.082.453h.064c.416 0 .482-.362.51-.81.022.347.215.622.465.81v.06c0 .316.256.572.572.572zM.786 13.063c0-.316.257-.572.572-.572h.063c.426 0 .813.127 1.082.453.32.388.32.703.32 1.346v5.632c0 .645 0 .958-.32 1.346-.269.326-.656.453-1.082.453H1.358a.572.572 0 0 1-.572-.572v.06c.193-.128.446-.195.76-.195h.063c.283 0 .568-.092.78-.35.187-.228.243-.498.243-.742V14.29c0-.244-.056-.514-.243-.742-.212-.258-.497-.35-.78-.35h-.063c-.314 0-.567.067-.76.195v-.06c0-.145.054-.276.143-.382.068-.081.148-.155.238-.2v-.004c.1-.047.212-.073.333-.073h9.79c.121 0 .233.026.333.073v.004a.748.748 0 0 1 .381.582v.06c-.193-.128-.446-.195-.76-.195h-.063a1.626 1.626 0 0 0-1.082.453c-.32.388-.32.703-.32 1.346v5.632c0 .645 0 .958.32 1.346.27.326.656.453 1.082.453h.063c.314 0 .567-.067.76-.195v.06a.572.572 0 0 1-1.144 0v-.06c-.193.128-.446.195-.76.195H9.89a1.626 1.626 0 0 1-1.082-.453c-.32-.388-.32-.701-.32-1.346v-5.632c0-.643 0-.958.32-1.346a1.626 1.626 0 0 1 1.082-.453h.063c.314 0 .567.067.76.195v-.06a.572.572 0 0 0-1.144 0v.06c.193-.128.446-.195.76-.195h.063c.426 0 .813-.127 1.082-.453.32-.388.32-.703.32-1.346V8.78c0-.645 0-.958-.32-1.346a1.626 1.626 0 0 0-1.082-.453h-.063c-.314 0-.567.067-.76.195v-.06a.572.572 0 0 1 1.144 0v.06c.25-.188.443-.463.465-.81.028.448.094.81.51.81h.063a1.626 1.626 0 0 0 1.082-.453c.32-.388.32-.703.32-1.346V.572A.572.572 0 0 0 11.58 0h-.057c-.427 0-.813.127-1.082.453-.32.388-.32.703-.32 1.346v4.78c0 .645 0 .958.32 1.346.27.326.655.453 1.082.453h.063c.314 0 .567-.067.76-.195v.06a.572.572 0 0 1-.572.572H1.984a1.747 1.747 0 0 0-.595.105c-.11.04-.214.09-.31.15a.748.748 0 0 0-.238.2.57.57 0 0 0-.143.382zM6.43 6.858l4.86-4.715V6.86H6.43z"/></svg>
            </div>
            <span class="text-white font-semibold">Azure</span>
        </div>
        <div class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <div class="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            </div>
            <span class="text-white font-semibold">Windows</span>
        </div>
        <div class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <div class="w-10 h-10 rounded-lg bg-neutral-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
            </div>
            <span class="text-white font-semibold">macOS</span>
        </div>
    </section>

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
                        <span class="text-neutral-400 text-sm">EDR that catches AI-generated phishing and ransomware—the top threats UK SMEs face in 2026.</span>
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
             <div class="bg-neutral-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors hover-lift scroll-reveal">
                 <h3 class="text-xl font-bold text-white mb-2">Essential</h3>
                 <p class="text-neutral-400 text-sm mb-4">For solopreneurs and small teams.</p>
                 <ul class="space-y-2 text-sm text-neutral-300">
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Remote Support</li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Windows/Mac Patching</li>
                     <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Basic Antivirus</li>
                 </ul>
             </div>
             
             <div class="bg-blue-900/10 p-6 rounded-xl border border-blue-500/50 hover:border-blue-500 transition-colors relative overflow-hidden hover-lift scroll-reveal">
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
                    I offer Managed IT Services for small businesses across Hull and East Yorkshire. 
                    Depending on what you need, that can include 24/7 monitoring, EDR cybersecurity, 
                    Microsoft 365 setup, cloud backups, and straightforward support when things go wrong.
                </p>
            </div>
            
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">How much does managed IT support cost for a small business?</h3>
                <p class="text-neutral-400">
                    Pricing depends on your setup—whether that's per-device or per-user. I keep things flexible 
                    with Essential and Growth tiers so you're not paying for stuff you don't need. Drop me a message for a quote.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Do you offer cybersecurity services for businesses in East Yorkshire?</h3>
                <p class="text-neutral-400">
                    Yes—security is baked into everything I do. That means Endpoint Detection & Response (EDR), 
                    ransomware protection, and keeping an eye on things so problems get caught early, not after the damage is done.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Can you help migrate our business to Microsoft 365 or Azure?</h3>
                <p class="text-neutral-400">
                    Definitely. I've moved plenty of businesses from clunky on-premise setups to Microsoft 365 and Azure. 
                    I handle the migration properly so you're not stuck with downtime or lost emails.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">What areas do you cover for on-site IT support?</h3>
                <p class="text-neutral-400">
                    I'm based in Hull and cover Beverley, Driffield, Bridlington, Goole, Cottingham, Hessle, 
                    and the rest of East Yorkshire for on-site work. Remote support is available anywhere in the UK.
                </p>
            </div>
        </div>
    </section>

    <!-- Case Study CTA -->
    <section class="text-center pb-20">
        <div class="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
            <h3 class="text-2xl font-bold text-white mb-3">See Our Work in Action</h3>
            <p class="text-neutral-400 mb-6">Discover how we've helped Hull & East Yorkshire businesses transform their IT infrastructure.</p>
            <router-link to="/case-studies" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
                View Case Studies
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
        </div>
    </section>

  </div>
</template>
