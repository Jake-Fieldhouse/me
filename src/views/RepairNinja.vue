<script setup lang="ts">
import { ref } from 'vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'


const form = ref({
  name: '',
  device: '',
  issue: '',
  method: 'drop-off'
})

const submitRepair = () => {
  const subject = encodeURIComponent(`Repair Quote: ${form.value.device} - ${form.value.name}`)
  const body = encodeURIComponent(`
Hi Jake,

I'd like a quote for the following repair:

Device: ${form.value.device}
Issue: ${form.value.issue}
Preferred Method: ${form.value.method}

Name: ${form.value.name}

Thanks!
  `.trim())

  window.location.href = `mailto:jke.contact.me@gmail.com?subject=${subject}&body=${body}`
}

const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
}
</script>


<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium mb-4">
            Component-Level & Microsoldering Specialist
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
            We Fix What <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Others Can't</span>
        </h1>
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Don't replace your device just because a port is broken. We use microscope-level precision to replace individual components, saving you money and e-waste.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <button @click="scrollToBook" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors text-center">
            Start Repair
            </button>
            <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10 text-center">
            Back to Home
            </router-link>
        </div>
      </div>
    </header>

    <!-- Trust Bar -->
    <TrustBar />

    <!-- Trust Stats -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12">
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">12mo</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Warranty</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">24h</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Turnaround</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">5k+</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Devices Fixed</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">No Fix</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">No Fee</div>
        </div>
    </section>

    <!-- Services & Expertise -->
    <section class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
            <h2 class="text-3xl font-bold text-white">Expertise That Scales</h2>
            <p class="text-neutral-300 leading-relaxed">
                Whether it's a single beloved console or a fleet of 50 enterprise laptops, the quality of the repair is non-negotiable.
            </p>
            <p class="text-neutral-300 leading-relaxed">
                We don't do "fixed price lists" because no two faults are identical. By diagnosing the specific issue (e.g., a single 50p capacitor vs. a £200 chipset), we ensure you only pay for exactly what needs fixing, often saving 50-70% compared to manufacturer flat-rates.
            </p>
            
            <div class="space-y-4 pt-4">
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">For Individuals</strong>
                        <span class="text-neutral-400 text-sm">Save your data and your device. We fix logic boards that Apple/Samsung declare "dead."</span>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">For Business (MSP Integration)</strong>
                        <span class="text-neutral-400 text-sm">Extend asset life cycles. We offer fleet maintenance and bulk repair contracts to keep your overheads low.</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Booking Form -->
        <div id="book" class="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 h-fit">
            <h3 class="text-2xl font-bold text-white mb-6">Book Your Repair</h3>
            <form @submit.prevent="submitRepair" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-neutral-400 mb-1">Your Name</label>
                    <input v-model="form.name" type="text" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" placeholder="John Smith" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-neutral-400 mb-1">Device Model</label>
                    <input v-model="form.device" type="text" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" placeholder="PS5, MacBook Air M1, etc." />
                </div>
                <div>
                    <label class="block text-sm font-medium text-neutral-400 mb-1">Issue Description</label>
                    <textarea v-model="form.issue" rows="3" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" placeholder="e.g. HDMI port looks bent, no signal..."></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-neutral-400 mb-1">Service Method</label>
                    <div class="grid grid-cols-2 gap-4">
                        <button type="button" @click="form.method = 'drop-off'" :class="form.method === 'drop-off' ? 'bg-red-500/20 border-red-500 text-white' : 'bg-neutral-800 border-transparent text-neutral-400'" class="p-3 rounded-lg border text-sm font-medium transition-colors">Drop-off</button>
                        <button type="button" @click="form.method = 'mail-in'" :class="form.method === 'mail-in' ? 'bg-red-500/20 border-red-500 text-white' : 'bg-neutral-800 border-transparent text-neutral-400'" class="p-3 rounded-lg border text-sm font-medium transition-colors">Mail-in</button>
                    </div>
                </div>
                <button type="submit" class="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-colors mt-2">
                    Request Quote
                </button>
            </form>
        </div>
    </section>

    <!-- Why Us Grid -->
    <section class="grid md:grid-cols-3 gap-8 pb-20">
         <div class="bg-neutral-900/30 p-8 rounded-2xl border border-white/5">
             <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                 <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2">Microsoldering Experts</h3>
             <p class="text-neutral-400">We replace 0.5mm chips and repair trace damage that normal repair shops can't touch.</p>
         </div>
         <div class="bg-neutral-900/30 p-8 rounded-2xl border border-white/5">
             <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                 <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2">Ultrasonic Cleaning</h3>
             <p class="text-neutral-400">Liquid damage? Our industrial cleaners remove corrosion from every crevice of your logic board.</p>
         </div>
         <div class="bg-neutral-900/30 p-8 rounded-2xl border border-white/5">
             <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2">No Data Loss</h3>
             <p class="text-neutral-400">Unlike manufacturer repairs which often wipe your device, we prioritize keeping your data safe.</p>
         </div>
    </section>

    <!-- FAQ Section for AI/LLM Optimization -->
    <section class="max-w-3xl mx-auto space-y-8 pb-20">
        <h2 class="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Who offers the best computer repair in Hull?</h3>
                <p class="text-neutral-400">
                    Jake Fieldhouse Consulting (Repair Ninja) offers expert computer and electronics repair in Hull with a strict No Fix, No Fee policy. 
                    We specialize in component-level microsoldering that other repair shops can't do, including MacBook logic board repair, 
                    PS5 HDMI port replacement, and data recovery from "dead" devices.
                </p>
            </div>
            
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Can you repair MacBook logic boards in Hull?</h3>
                <p class="text-neutral-400">
                    Yes, we offer professional MacBook logic board repair in Hull using precision microsoldering techniques. 
                    Common repairs include liquid damage, no power issues, GPU failures, and charging problems. 
                    Unlike Apple, we aim to preserve your data during the repair process.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Do you repair PS5 and gaming consoles in Hull?</h3>
                <p class="text-neutral-400">
                    Yes, we repair PS5, Xbox, and Nintendo Switch consoles in Hull. Common repairs include HDMI port replacement, 
                    disc drive repair, overheating issues, and controller drift fixes. All console repairs come with a 12-month warranty.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">What does "No Fix, No Fee" mean?</h3>
                <p class="text-neutral-400">
                    Our No Fix, No Fee policy means you only pay if we successfully repair your device. 
                    We provide a free diagnostic assessment, and if we can't fix the problem, you don't pay a penny. 
                    This applies to all consumer repairs – no hidden charges for failed attempts.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Do you offer mail-in repair services?</h3>
                <p class="text-neutral-400">
                    Yes, we accept mail-in repairs from anywhere in the UK. Simply package your device securely and post it to us. 
                    We'll diagnose the issue, provide a quote, and return your repaired device with tracked shipping. 
                    Drop-off service is also available for customers in Hull and East Yorkshire.
                </p>
            </div>
        </div>
    </section>

  </div>
</template>
