<script setup lang="ts">
import { ref } from 'vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import BreadcrumbSchema from '../components/BreadcrumbSchema.vue'
import { useToast } from '../composables/useToast'
import { useOgMeta } from '../composables/useOgMeta'
import IconChip from '../components/icons/IconChip.vue'

useOgMeta({
  title: 'Repair Ninja | Microsoldering & Board Repair Hull',
  description: 'Component-level microsoldering for MacBooks, PS5s, and smartphones. No Fix, No Fee. Based in Hull.',
  image: '/images/og-repair.svg',
  url: '/microsoldering-repair-hull'
})
import IconDroplet from '../components/icons/IconDroplet.vue'
import IconShieldCheck from '../components/icons/IconShieldCheck.vue'

const { show: showToast } = useToast()


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

  window.location.href = `mailto:jake@jakefieldhouse.co.uk?subject=${subject}&body=${body}`
  
  // Show success toast
  showToast('Email client opened! We\'ll get back to you soon.', 4000)
}

const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
}
</script>


<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <BreadcrumbSchema :crumbs="[
      { name: 'Repair Services', url: '/repair-services' },
      { name: 'Microsoldering', url: '/microsoldering-repair-hull' }
    ]" />
    <header class="text-center space-y-6 mt-10 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-auto aspect-square bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium mb-4">
            Manufacturer says "replace it"? We say "fix it."
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
            We Fix What <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Others Won't</span>
        </h1>
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
            80% of consumers now prioritize repairability. Repair Ninja is on your side, microsoldering dead boards back to life while Apple charges you for a whole new device.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <button @click="scrollToBook" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors text-center btn-depth">
            Get in Touch
            </button>
            <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/20 text-center">
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
            <div class="text-4xl font-bold text-white">1k+</div>
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
                There's no "fixed price list" here because no two faults are identical. By diagnosing the specific issue (a single failed capacitor vs. a larger chipset) you only pay for exactly what needs fixing. Often a fraction of what the manufacturer quotes.
            </p>
            
            <div class="space-y-4 pt-4">
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">For Individuals</strong>
                        <span class="text-neutral-400 text-sm">Manufacturer quoted hundreds for a replacement? The underlying fault often gets fixed for a fraction of that cost. Same expertise, fraction of the price.</span>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                        <strong class="block text-white">For Business (MSP Integration)</strong>
                        <span class="text-neutral-400 text-sm">Extend asset life cycles. Fleet maintenance and bulk repair contracts available to keep your overheads low.</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Booking Form -->
        <div id="book" class="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 h-fit">
            <h3 class="text-2xl font-bold text-white mb-6">Book Your Repair</h3>
            <form @submit.prevent="submitRepair" class="space-y-4">
                <div>
                    <label for="rn-name" class="block text-sm font-medium text-neutral-400 mb-1">Your Name</label>
                    <input id="rn-name" v-model="form.name" type="text" autocomplete="name" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" placeholder="John Smith" />
                </div>
                <div>
                    <label for="rn-device" class="block text-sm font-medium text-neutral-400 mb-1">Device Model</label>
                    <input id="rn-device" v-model="form.device" type="text" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" placeholder="PS5, MacBook Air M1, etc." />
                </div>
                <div>
                    <label for="rn-issue" class="block text-sm font-medium text-neutral-400 mb-1">Issue Description</label>
                    <textarea id="rn-issue" v-model="form.issue" rows="3" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500" placeholder="e.g. HDMI port looks bent, no signal..."></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-neutral-400 mb-1">Service Method</label>
                    <div class="grid grid-cols-2 gap-4" role="radiogroup" aria-label="Service method">
                        <button type="button" @click="form.method = 'drop-off'" :aria-pressed="form.method === 'drop-off'" :class="form.method === 'drop-off' ? 'bg-red-500/20 border-red-500 text-white' : 'bg-neutral-800 border-transparent text-neutral-400'" class="p-3 rounded-lg border text-sm font-medium transition-colors">Drop-off</button>
                        <button type="button" @click="form.method = 'mail-in'" :aria-pressed="form.method === 'mail-in'" :class="form.method === 'mail-in' ? 'bg-red-500/20 border-red-500 text-white' : 'bg-neutral-800 border-transparent text-neutral-400'" class="p-3 rounded-lg border text-sm font-medium transition-colors">Mail-in</button>
                    </div>
                </div>
                <button type="submit" class="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-colors mt-2 btn-depth hover-glow">
                    Get in Touch
                </button>
            </form>
        </div>
    </section>

    <!-- Why Us Grid -->
    <section class="grid md:grid-cols-3 gap-8 pb-20">
         <div class="bg-neutral-900/30 p-8 rounded-2xl border border-white/5 hover-lift scroll-reveal">
             <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                 <IconChip class="w-6 h-6 text-red-500" />
             </div>
             <h3 class="text-xl font-bold text-white mb-2">Microsoldering Experts</h3>
             <p class="text-neutral-400">Repair Ninja replaces 0.5mm chips and repairs trace damage that normal repair shops can't touch.</p>
         </div>
         <div class="bg-neutral-900/30 p-8 rounded-2xl border border-white/5 hover-lift scroll-reveal">
             <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                 <IconDroplet class="w-6 h-6 text-red-500" />
             </div>
             <h3 class="text-xl font-bold text-white mb-2">Ultrasonic Cleaning</h3>
             <p class="text-neutral-400">Liquid damage? Industrial ultrasonic cleaners remove corrosion from every crevice of your logic board.</p>
         </div>
         <div class="bg-neutral-900/30 p-8 rounded-2xl border border-white/5 hover-lift scroll-reveal">
             <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                <IconShieldCheck class="w-6 h-6 text-red-500" />
             </div>
             <h3 class="text-xl font-bold text-white mb-2">No Data Loss</h3>
             <p class="text-neutral-400">Unlike manufacturer repairs which often wipe your device, your data stays safe throughout the repair process.</p>
         </div>
    </section>

    <!-- Gallery Section -->
    <section class="pb-20">
        <h2 class="text-3xl font-bold text-white text-center mb-8">The Work</h2>
        <p class="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
            Macro photography of real repairs. Proof of the precision microsoldering work that sets this service apart.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div class="aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center group hover:border-red-500/50 transition-colors">
                <div class="text-center text-neutral-500 group-hover:text-neutral-400 transition-colors">
                    <div class="text-3xl mb-2">🔬</div>
                    <span class="text-xs">Photo 1</span>
                </div>
            </div>
            <div class="aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center group hover:border-red-500/50 transition-colors">
                <div class="text-center text-neutral-500 group-hover:text-neutral-400 transition-colors">
                    <div class="text-3xl mb-2">🔧</div>
                    <span class="text-xs">Photo 2</span>
                </div>
            </div>
            <div class="aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center group hover:border-red-500/50 transition-colors">
                <div class="text-center text-neutral-500 group-hover:text-neutral-400 transition-colors">
                    <div class="text-3xl mb-2">💻</div>
                    <span class="text-xs">Photo 3</span>
                </div>
            </div>
            <div class="aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center group hover:border-red-500/50 transition-colors">
                <div class="text-center text-neutral-500 group-hover:text-neutral-400 transition-colors">
                    <div class="text-3xl mb-2">🎮</div>
                    <span class="text-xs">Photo 4</span>
                </div>
            </div>
        </div>
        <p class="text-neutral-500 text-center text-sm mt-6">
            Precision repairs on phones, consoles, and laptops
        </p>
    </section>

    <!-- FAQ Section for AI/LLM Optimization -->
    <section class="max-w-3xl mx-auto space-y-8 pb-20">
        <h2 class="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Who offers the best computer repair in Hull?</h3>
                <p class="text-neutral-400">
                    Jake Fieldhouse Consulting (Repair Ninja) offers expert computer and electronics repair in Hull with a strict No Fix, No Fee policy. 
                    The service specializes in component-level microsoldering that other repair shops can't do, including MacBook logic board repair, 
                    PS5 HDMI port replacement, and data recovery from "dead" devices.
                </p>
            </div>
            
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Can you repair MacBook logic boards in Hull?</h3>
                <p class="text-neutral-400">
                    Yes, professional MacBook logic board repair is available in Hull using precision microsoldering techniques. 
                    Common repairs include liquid damage, no power issues, GPU failures, and charging problems. 
                    Unlike Apple, your data is preserved during the repair process.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Do you repair PS5 and gaming consoles in Hull?</h3>
                <p class="text-neutral-400">
                    Yes, PS5, Xbox, and Nintendo Switch console repairs are available in Hull. Common repairs include HDMI port replacement, 
                    disc drive repair, overheating issues, and controller drift fixes. All console repairs come with a 12-month warranty.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">What does "No Fix, No Fee" mean?</h3>
                <p class="text-neutral-400">
                    The No Fix, No Fee policy means you only pay if your device is successfully repaired. 
                    You receive a free diagnostic assessment, and if the problem can't be fixed, you don't pay a penny. 
                    This applies to all consumer repairs - no hidden charges for failed attempts.
                </p>
            </div>

            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Do you offer mail-in repair services?</h3>
                <p class="text-neutral-400">
                    Yes, mail-in repairs are accepted from anywhere in the UK. Simply package your device securely and post it. 
                    You'll receive a diagnosis, a quote, and your repaired device returned with tracked shipping. 
                    Drop-off service is also available for customers in Hull and East Yorkshire.
                </p>
            </div>
        </div>
    </section>

  </div>
</template>
