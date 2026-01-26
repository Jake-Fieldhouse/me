<script setup lang="ts">
import { ref } from 'vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const headerRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const processRef = ref<HTMLElement | null>(null)
const quoteRef = ref<HTMLElement | null>(null)

useScrollReveal(headerRef)
useScrollReveal(statsRef, { delay: 0.2, stagger: 0.1 })
useScrollReveal(processRef, { delay: 0.2, stagger: 0.2 })
useScrollReveal(quoteRef, { delay: 0.2 })

const form = ref({
  company: '',
  contact: '',
  email: '',
  type: 'regular',
  interestedInRebate: false
})

const submitForm = () => {
  // TODO: Hook up to backend or email service
  alert('Thanks! We will contact you shortly to arrange a collection.')
}
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <!-- Hero -->
    <header ref="headerRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
        B2B E-Waste Solutions
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        Start Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Zero-Landfill</span> Journey
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        Secure, compliant, and free IT asset disposal for UK businesses. 
        We handle everything from collection to data destruction, providing you with full audit trails.
      </p>
      <div class="flex justify-center gap-4 pt-4">
        <a href="#quote" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
          Book Free Collection
        </a>
        <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10">
          Back to Home
        </router-link>
      </div>
    </header>

    <!-- Trust Signals -->
    <router-link to="/compliance" class="block w-full cursor-pointer hover:opacity-90 transition-opacity">
        <TrustBar />
    </router-link>

    <!-- Stats Grid -->
    <section ref="statsRef" class="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12">
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">100%</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Zero Landfill</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">GDPR</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Compliant Wiping</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">FREE</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Collections</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">24h</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Response Time</div>
        </div>
    </section>

    <!-- Process -->
    <section ref="processRef" class="space-y-12">
        <h2 class="text-3xl font-bold text-white text-center">How It Works</h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                <div class="text-6xl font-black text-neutral-800 mb-6 group-hover:text-amber-500/20 transition-colors">01</div>
                <h3 class="text-2xl font-bold text-white mb-4">Book Collection</h3>
                <p class="text-neutral-400">Fill out our simple form or call us. We align with your schedule for a hassle-free pickup.</p>
            </div>
            <div class="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                <div class="text-6xl font-black text-neutral-800 mb-6 group-hover:text-amber-500/20 transition-colors">02</div>
                <h3 class="text-2xl font-bold text-white mb-4">Secure Transit</h3>
                <p class="text-neutral-400">Your assets are tracked from your door to our facility using secure, GPS-tracked logistics.</p>
            </div>
            <div class="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                <div class="text-6xl font-black text-neutral-800 mb-6 group-hover:text-amber-500/20 transition-colors">03</div>
                <h3 class="text-2xl font-bold text-white mb-4">Destruction & Audit</h3>
                <p class="text-neutral-400">Data is wiped (Blancco) or physically destroyed. You receive a full Certificate of Destruction.</p>
            </div>
        </div>
    </section>

    <!-- Our Impact -->
    <section class="relative bg-neutral-900 overflow-hidden py-24 border-y border-white/5">
         <div class="absolute inset-0 bg-[url('/images/circuit-bg.png')] opacity-5"></div>
         <div class="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
             <div class="space-y-4">
                 <h2 class="text-3xl font-bold text-white">Your Environmental Impact</h2>
                 <p class="text-neutral-400 max-w-2xl mx-auto">By choosing us, you aren't just clearing space—you're actively contributing to the circular economy and reducing global e-waste.</p>
             </div>
             
             <div class="grid md:grid-cols-3 gap-8">
                 <div class="p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/5 space-y-4">
                     <div class="text-5xl font-black text-green-500">0%</div>
                     <h3 class="font-bold text-white text-xl">Landfill Policy</h3>
                     <p class="text-sm text-neutral-500">Absolutely nothing goes to waste. We separate, refine, and recycle every gram of material.</p>
                 </div>
                 <div class="p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/5 space-y-4">
                     <div class="text-5xl font-black text-green-500">CO2</div>
                     <h3 class="font-bold text-white text-xl">Carbon Savings</h3>
                     <p class="text-sm text-neutral-500">Refurbishing one laptop saves ~270kg of CO2 compared to manufacturing a new one.</p>
                 </div>
                 <div class="p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/5 space-y-4">
                     <div class="text-5xl font-black text-green-500">95%</div>
                     <h3 class="font-bold text-white text-xl">Recovery Rate</h3>
                     <p class="text-sm text-neutral-500">Through our advanced refining partners, we recover 95% of precious metals like Gold and Copper.</p>
                 </div>
             </div>
         </div>
    </section>

    <!-- Us vs Them Comparison -->
    <section class="border-t border-white/5 pt-20">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr class="text-sm uppercase tracking-widest text-neutral-500 border-b border-white/10">
                        <th class="p-6 font-medium">Feature</th>
                        <th class="p-6 font-bold text-white bg-neutral-900/50 rounded-t-xl border-t border-x border-white/5">Jake Fieldhouse Consulting</th>
                        <th class="p-6 font-medium text-neutral-600">Typical Recycler</th>
                        <th class="p-6 font-medium text-neutral-600">Local "Man & Van"</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                    <tr class="group hover:bg-neutral-900/30 transition-colors">
                        <td class="p-6 font-medium text-white">Cost to You</td>
                        <td class="p-6 font-bold text-amber-500 bg-neutral-900/50 border-x border-white/5">£0.00 (Free)</td>
                        <td class="p-6 text-neutral-400">£150+ Collection Fee</td>
                        <td class="p-6 text-neutral-400">Varies / Cash</td>
                    </tr>
                    <tr class="group hover:bg-neutral-900/30 transition-colors">
                        <td class="p-6 font-medium text-white">Data Security</td>
                        <td class="p-6 text-green-400 font-bold bg-neutral-900/50 border-x border-white/5">DoD Standard Wiping</td>
                        <td class="p-6 text-neutral-400">Basic Format</td>
                        <td class="p-6 text-neutral-400">None / Risky</td>
                    </tr>
                    <tr class="group hover:bg-neutral-900/30 transition-colors">
                        <td class="p-6 font-medium text-white">Documentation</td>
                        <td class="p-6 text-white bg-neutral-900/50 border-x border-white/5">Full Waste Transfer Note</td>
                        <td class="p-6 text-neutral-400">Basic Receipt</td>
                        <td class="p-6 text-neutral-400">None</td>
                    </tr>
                    <tr class="group hover:bg-neutral-900/30 transition-colors">
                        <td class="p-6 font-medium text-white">Certificates</td>
                        <td class="p-6 text-white bg-neutral-900/50 border-x border-white/5 border-b rounded-b-xl">Certificate of Destruction</td>
                        <td class="p-6 text-neutral-400">Extra Charge</td>
                        <td class="p-6 text-neutral-400">None</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- Security Deep Dive -->
    <section class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
            <h2 class="text-3xl font-bold text-white">Bank-Grade Data Security</h2>
            <p class="text-neutral-400 leading-relaxed">
                We understand that your data is your most valuable asset. That's why we treat every hard drive, SSD, and memory stick as if it contains top-secret information.
            </p>
            <ul class="space-y-4 pt-4">
                <li class="flex items-start gap-3">
                    <div class="p-1 rounded bg-green-500/10 text-green-500 mt-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <strong class="text-white block">Blancco Data Erasure</strong>
                        <span class="text-sm text-neutral-500">Industry-standard 3-pass wipe for functioning drives. Certificates provided per serial number.</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <div class="p-1 rounded bg-red-500/10 text-red-500 mt-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </div>
                    <div>
                        <strong class="text-white block">Physical Destruction</strong>
                        <span class="text-sm text-neutral-500">For non-functional media, we physically shred or drill drives to ensure 100% unrecoverability.</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <div class="p-1 rounded bg-blue-500/10 text-blue-500 mt-1">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <div>
                        <strong class="text-white block">Full Audit Trail</strong>
                        <span class="text-sm text-neutral-500">You receive a complete asset report and Waste Transfer Note proving legal compliance.</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg-gradient-to-br from-neutral-800 to-black p-8 rounded-2xl border border-white/5 flex items-center justify-center min-h-[400px]">
           <!-- Placeholder for a graphic or certificate example -->
           <div class="text-center space-y-4">
               <div class="w-24 h-32 bg-white/10 mx-auto rounded border border-white/20 flex items-center justify-center">
                   <svg class="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
               </div>
               <p class="text-neutral-500 font-mono text-sm">Certificate_of_Destruction.pdf</p>
           </div>
        </div>
    </section>

    <!-- What We Accept -->
    <section ref="quoteRef" class="bg-neutral-900/30 rounded-3xl p-8 md:p-12 border border-white/5">
        <div class="md:flex justify-between items-start gap-12">
            <div class="md:w-1/2 space-y-6">
                <h2 class="text-3xl font-bold text-white">What We Accept</h2>
                <p class="text-neutral-400">We accept almost all IT and electrical equipment, regardless of condition. Working items are refurbished; non-working items are harvested for parts.</p>
                <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-neutral-300">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        Laptops, Desktops & Servers
                    </li>
                    <li class="flex items-center gap-3 text-neutral-300">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        Monitors & Screens
                    </li>
                    <li class="flex items-center gap-3 text-neutral-300">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        Mobile Phones & Tablets
                    </li>
                    <li class="flex items-center gap-3 text-neutral-300">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        Network Switches & Cables
                    </li>
                    <li class="flex items-center gap-3 text-neutral-300">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        Printers & Peripherals
                    </li>
                </ul>
            </div>
            
            <!-- Quote Form -->
            <div id="quote" class="md:w-1/2 bg-neutral-900 p-8 rounded-2xl border border-neutral-800 mt-12 md:mt-0 relative overflow-hidden">
                <!-- Badge -->
                <div class="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    Fast Track
                </div>

                <h3 class="text-2xl font-bold text-white mb-6">Request Free Collection</h3>
                <form @submit.prevent="submitForm" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-neutral-400 mb-1">Company Name</label>
                        <input v-model="form.company" type="text" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="Acme Corp" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-neutral-400 mb-1">Contact Name</label>
                        <input v-model="form.contact" type="text" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-neutral-400 mb-1">Email Address</label>
                        <input v-model="form.email" type="email" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="jane@acme.com" />
                    </div>
                     <div>
                        <label class="block text-sm font-medium text-neutral-400 mb-1">Estimated Volume</label>
                        <select v-model="form.type" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500">
                            <option value="regular">Small (1-10 items)</option>
                            <option value="medium">Medium (10-50 items)</option>
                            <option value="large">Large/Office Clearance (50+ items)</option>
                        </select>
                    </div>

                    <!-- Interest Checkbox -->
                    <div class="flex items-start gap-3 p-3 bg-neutral-800/50 rounded-lg border border-white/5">
                        <input type="checkbox" id="rebate" v-model="form.interestedInRebate" class="mt-1 w-4 h-4 rounded border-neutral-600 text-amber-500 focus:ring-amber-500 bg-neutral-700">
                        <label for="rebate" class="text-sm text-neutral-300">
                            Check eligibility for <strong>Asset Value Rebates</strong>.
                            <span class="block text-xs text-neutral-500 mt-0.5">We review newer hardware for potential residual value credit against your service.</span>
                        </label>
                    </div>

                    <button type="submit" class="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl transition-colors mt-2">
                        Get Quote
                    </button>
                </form>
            </div>
        </div>
    </section>

  </div>
</template>
