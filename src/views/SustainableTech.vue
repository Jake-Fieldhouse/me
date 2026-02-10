<script setup lang="ts">
import { ref } from 'vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'
import BreadcrumbSchema from '../components/BreadcrumbSchema.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useToast } from '../composables/useToast'
import { useOgMeta } from '../composables/useOgMeta'
import IconFileCheck from '../components/icons/IconFileCheck.vue'
import IconRecycle from '../components/icons/IconRecycle.vue'
import IconShieldCheck from '../components/icons/IconShieldCheck.vue'
import IconCheck from '../components/icons/IconCheck.vue'

useOgMeta({
  title: 'E-Waste Collection Hull | Free Business IT Disposal',
  description: 'Free GDPR-compliant e-waste collection for Hull businesses. EA licensed. NIST 800-88 data destruction. Zero landfill.',
  image: '/images/og-ewaste.svg',
  url: '/secure-data-disposal-hull'
})

const headerRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const processRef = ref<HTMLElement | null>(null)
const quoteRef = ref<HTMLElement | null>(null)

useScrollReveal(headerRef)
useScrollReveal(statsRef, { delay: 0.2, stagger: 0.1 })
useScrollReveal(processRef, { delay: 0.2, stagger: 0.2 })
useScrollReveal(quoteRef, { delay: 0.2 })

const { show: showToast } = useToast()

const form = ref({
  company: '',
  contact: '',
  email: '',
  phone: '',
  type: 'regular'
})

const submitForm = () => {
  const subject = encodeURIComponent(`B2B E-Waste Collection Request: ${form.value.company}`)
  const body = encodeURIComponent(`
Hi Jake,

We'd like to arrange a collection for:

Company: ${form.value.company}
Contact: ${form.value.contact}
Email: ${form.value.email}${form.value.phone ? `\r\nPhone: ${form.value.phone}` : ''}
Estimated Volume: ${form.value.type}

Please get back to us with a schedule.

Thanks!
  `.trim())

  window.location.href = `mailto:jake@jakefieldhouse.co.uk?subject=${subject}&body=${body}`
  
  // Show success toast
  showToast('Email client opened! We\'ll respond within 24 hours.', 4000)
}

const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToComparison = () => {
    document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
    
    <BreadcrumbSchema :crumbs="[{ name: 'E-Waste Collection', url: '/secure-data-disposal-hull' }]" />
    <!-- Hero -->
    <header ref="headerRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          Zero Landfill Policy • 100% Free Service
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        Business IT Recycling <br class="hidden md:block" /> & <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Collection</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
        Stop paying to dispose of your IT assets. We offer a superior, zero-landfill service with full Waste Transfer documentation, completely free of charge.
      </p>
      <div class="flex justify-center gap-4 pt-4">
        <button @click="scrollToQuote" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors btn-depth">
          Get in Touch
        </button>
        <button @click="scrollToComparison" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/20">
          Why It's Free?
        </button>
      </div>
    </header>

    <!-- Trust Signals -->
    <router-link to="/compliance" class="block w-full cursor-pointer hover:opacity-90 transition-opacity">
        <TrustBar />
    </router-link>

    <!-- Service Area Callout -->
    <section class="bg-gradient-to-r from-amber-500/5 to-emerald-500/5 border border-white/5 rounded-2xl p-6 md:p-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
                <div class="p-3 bg-amber-500/10 rounded-xl">
                    <span class="text-2xl">🚛</span>
                </div>
                <div>
                    <h2 class="text-lg font-bold text-white">Collection Coverage</h2>
                    <p class="text-neutral-400 text-sm">Hull, East Yorkshire & nationwide via trusted courier partners</p>
                </div>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-sm">
                <span class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-neutral-300">Hull & HU postcodes</span>
                <span class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-neutral-300">East Yorkshire</span>
                <span class="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-medium">Nationwide Available</span>
            </div>
        </div>
    </section>

    <!-- Stats Grid -->
    <section ref="statsRef" class="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12">
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">100%</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">Zero Landfill</div>
        </div>
        <div class="text-center space-y-2">
            <div class="text-4xl font-bold text-white">NIST</div>
            <div class="text-sm text-neutral-500 uppercase tracking-widest">800-88 Standard</div>
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
            <div class="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500 hover-lift scroll-reveal">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                <div class="text-6xl font-black text-neutral-800 mb-6 group-hover:text-amber-500/20 transition-colors">01</div>
                <h3 class="text-2xl font-bold text-white mb-4">Book Collection</h3>
                <p class="text-neutral-400">Fill out our simple form or call us. We align with your schedule for a hassle-free pickup.</p>
            </div>
            <div class="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500 hover-lift scroll-reveal">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                <div class="text-6xl font-black text-neutral-800 mb-6 group-hover:text-amber-500/20 transition-colors">02</div>
                <h3 class="text-2xl font-bold text-white mb-4">Secure Transit</h3>
                <p class="text-neutral-400">Your assets are tracked from your door to our facility using secure, GPS-tracked logistics.</p>
            </div>
            <div class="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500 hover-lift scroll-reveal">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                <div class="text-6xl font-black text-neutral-800 mb-6 group-hover:text-amber-500/20 transition-colors">03</div>
                <h3 class="text-2xl font-bold text-white mb-4">Destruction & Audit</h3>
                <p class="text-neutral-400">Data is wiped (Blancco) or physically destroyed. You receive a full Certificate of Destruction.</p>
            </div>
        </div>
    </section>

    <!-- Our Impact -->
    <section class="relative bg-neutral-900 overflow-hidden py-24 border-y border-white/5">
         <div class="absolute inset-0 bg-[url('/images/circuit-bg.webp')] opacity-5"></div>
         <div class="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
             <div class="space-y-4">
                 <h2 class="text-3xl font-bold text-white">Your Environmental Impact</h2>
                 <p class="text-neutral-400 max-w-2xl mx-auto">By choosing us, you aren't just clearing space. You're actively contributing to the circular economy and reducing global e-waste.</p>
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

    <!-- FAQ / Addressing Skepticism -->
    <section class="max-w-3xl mx-auto space-y-8">
        <h2 class="text-3xl font-bold text-white text-center">Common Questions</h2>
        
        <div class="space-y-4">
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">How can you offer this for free? What's the catch?</h3>
                <p class="text-neutral-400">
                    No catch. I operate on a <strong>"Refurbish First"</strong> model. 
                    Most IT companies charge you to crush your old laptops. I collect them for free, wipe the data securely, and refurbish viable units for resale or donation. 
                    The recovered value covers logistics and data destruction. You get a free service; I get stock. Simple.
                </p>
            </div>
            
            <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">Are you fully licensed?</h3>
                <p class="text-neutral-400">
                    Yes. Registered Tier 1 Waste Carrier with the Environment Agency (Reg: <strong>CBDL620098</strong>). 
                    Every collection comes with a full Waste Transfer Note, so your legal "Duty of Care" is completely satisfied.
                </p>
            </div>

             <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                <h3 class="text-lg font-bold text-white mb-2">I'm in Hull, but my head office is in London. Can you help?</h3>
                <p class="text-neutral-400">
                    Absolutely. I'm based in East Yorkshire but can arrange nationwide collection through trusted courier partners. 
                    Whether it's one pallet in Hull or fifty laptops in Shoreditch, it gets handled.
                </p>
            </div>
        </div>
    </section>

    <!-- Us vs Them Comparison -->
    <section id="comparison" class="border-t border-white/5 pt-20">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-xl">
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
                        <td class="p-6 text-green-400 font-bold bg-neutral-900/50 border-x border-white/5">NIST 800-88 Wiping</td>
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
                We understand that your data is your most valuable asset, and your biggest liability. With GDPR fines reaching <strong>£17.5 million</strong>, taking chances with "man & van" clearance is a risk you can't afford.
            </p>
            <ul class="space-y-4 pt-4">
                <li class="flex items-start gap-3">
                    <div class="p-1 rounded bg-green-500/10 text-green-500 mt-1">
                        <IconShieldCheck class="w-5 h-5" />
                    </div>
                    <div>
                        <strong class="text-white block">Blancco Data Erasure</strong>
                        <span class="text-sm text-neutral-500">Industry-standard 3-pass wipe for functioning drives. Certificates provided per serial number.</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <div class="p-1 rounded bg-red-500/10 text-red-500 mt-1">
                        <IconRecycle class="w-5 h-5" />
                    </div>
                    <div>
                        <strong class="text-white block">Physical Destruction</strong>
                        <span class="text-sm text-neutral-500">For non-functional media, we physically shred or drill drives to ensure 100% unrecoverability.</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <div class="p-1 rounded bg-blue-500/10 text-blue-500 mt-1">
                        <IconFileCheck class="w-5 h-5" />
                    </div>
                    <div>
                        <strong class="text-white block">Full Audit Trail</strong>
                        <span class="text-sm text-neutral-500">You receive a complete asset report and Waste Transfer Note proving legal compliance.</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg-gradient-to-br from-neutral-800 to-black p-8 rounded-2xl border border-white/5 flex items-center justify-center min-h-96">
           <div class="w-full max-w-xs">
               <!-- Certificate mockup -->
               <div class="bg-white rounded-xl p-6 shadow-2xl shadow-green-500/10 border border-neutral-200">
                   <!-- Header -->
                   <div class="text-center border-b border-neutral-200 pb-4 mb-4">
                       <div class="w-10 h-10 bg-green-500/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                           <IconShieldCheck class="w-5 h-5 text-green-600" />
                       </div>
                       <h4 class="text-sm font-bold text-neutral-900 tracking-wide uppercase">Certificate of Destruction</h4>
                       <p class="text-xs text-neutral-500 mt-1">Jake Fieldhouse Consulting Ltd</p>
                   </div>
                   <!-- Body -->
                   <div class="space-y-3 text-xs">
                       <div class="flex justify-between">
                           <span class="text-neutral-500">Certificate No.</span>
                           <span class="font-mono text-neutral-800">JFC-2026-0042</span>
                       </div>
                       <div class="flex justify-between">
                           <span class="text-neutral-500">Method</span>
                           <span class="font-mono text-neutral-800">NIST 800-88 Purge</span>
                       </div>
                       <div class="flex justify-between">
                           <span class="text-neutral-500">Serial No.</span>
                           <span class="font-mono text-neutral-800">████████1847</span>
                       </div>
                       <div class="flex justify-between">
                           <span class="text-neutral-500">Status</span>
                           <span class="font-bold text-green-600">DESTROYED ✓</span>
                       </div>
                   </div>
                   <!-- Footer badges -->
                   <div class="flex gap-2 mt-4 pt-4 border-t border-neutral-200">
                       <span class="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">NIST 800-88</span>
                       <span class="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">GDPR Compliant</span>
                   </div>
               </div>
               <p class="text-neutral-500 text-xs text-center mt-4">Sample — redacted for privacy</p>
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
                        <label for="ewaste-company" class="block text-sm font-medium text-neutral-400 mb-1">Company Name</label>
                        <input id="ewaste-company" v-model="form.company" type="text" required autocomplete="organization" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="Acme Corp" />
                    </div>
                    <div>
                        <label for="ewaste-contact" class="block text-sm font-medium text-neutral-400 mb-1">Contact Name</label>
                        <input id="ewaste-contact" v-model="form.contact" type="text" required autocomplete="name" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label for="ewaste-email" class="block text-sm font-medium text-neutral-400 mb-1">Email Address</label>
                        <input id="ewaste-email" v-model="form.email" type="email" required autocomplete="email" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="jane@acme.com" />
                    </div>
                    <div>
                        <label for="ewaste-phone" class="block text-sm font-medium text-neutral-400 mb-1">Phone <span class="text-neutral-600">(Optional)</span></label>
                        <input id="ewaste-phone" v-model="form.phone" type="tel" autocomplete="tel" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500" placeholder="07xxx xxxxxx" />
                        <p class="text-xs text-neutral-600 mt-1">For urgent same-day scheduling</p>
                    </div>
                     <div>
                        <label for="ewaste-volume" class="block text-sm font-medium text-neutral-400 mb-1">Estimated Volume</label>
                        <select id="ewaste-volume" v-model="form.type" class="w-full bg-neutral-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-amber-500">
                            <option value="regular">Small (1-10 items)</option>
                            <option value="medium">Medium (10-50 items)</option>
                            <option value="large">Large/Office Clearance (50+ items)</option>
                        </select>
                    </div>

                    <!-- Asset Value Toggle -->
                    <div class="p-4 bg-neutral-800/50 rounded-xl border border-white/5">
                        <div class="flex items-start gap-3">
                            <div class="mt-1 p-1 bg-green-500/10 rounded-full text-green-500">
                                <IconCheck class="w-4 h-4" />
                            </div>
                            <div>
                                <strong class="text-sm text-white block">100% Free Collection</strong>
                                <p class="text-xs text-neutral-400 mt-1">
                                    Subject to minimum volume or location. (We'll confirm upon booking)
                                </p>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        Get Free Schedule
                    </button>
                    <p class="text-center text-xs text-neutral-500">
                        No Credit Card Required • No Obligations
                    </p>
                </form>
            </div>
        </div>
    </section>

    <!-- What Happens Next -->
    <section class="bg-neutral-900/50 rounded-3xl p-8 md:p-12 border border-white/5 space-y-8">
        <h2 class="text-3xl font-bold text-white text-center">What Happens Next</h2>
        <p class="text-neutral-400 text-center max-w-2xl mx-auto">After you submit the form above, here's exactly what to expect.</p>
        <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center space-y-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">1</div>
                <h3 class="font-bold text-white text-sm">24hr Response</h3>
                <p class="text-xs text-neutral-500">We confirm your request and propose collection dates within one business day.</p>
            </div>
            <div class="text-center space-y-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">2</div>
                <h3 class="font-bold text-white text-sm">Scheduled Pickup</h3>
                <p class="text-xs text-neutral-500">We arrive on-site at the agreed time. You hand over equipment — that's it.</p>
            </div>
            <div class="text-center space-y-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">3</div>
                <h3 class="font-bold text-white text-sm">WTN Issued</h3>
                <p class="text-xs text-neutral-500">You receive a legal Waste Transfer Note proving your Duty of Care compliance.</p>
            </div>
            <div class="text-center space-y-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-bold">✓</div>
                <h3 class="font-bold text-white text-sm">Certificate Delivered</h3>
                <p class="text-xs text-neutral-500">Full Certificate of Destruction with serial numbers, methods, and compliance evidence.</p>
            </div>
        </div>
    </section>

    <!-- Downloads & Quick Links -->
    <section class="bg-neutral-900/50 rounded-3xl p-8 md:p-12 border border-white/5 space-y-6">
        <h2 class="text-2xl font-bold text-white text-center">Downloads & Resources</h2>
        <p class="text-neutral-400 text-center text-sm max-w-xl mx-auto">Everything you need to justify the collection internally and prove compliance to your team.</p>
        <div class="grid md:grid-cols-2 gap-4">
            <a href="/documents/e-waste-service-brief.html" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group">
                <div class="p-2.5 bg-amber-500/10 rounded-lg shrink-0">
                    <IconFileCheck class="w-5 h-5 text-amber-400" />
                </div>
                <div>
                    <h3 class="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">Service Brief (1-Page Summary)</h3>
                    <p class="text-xs text-neutral-500 mt-1">Print-ready overview with credentials — forward to your manager or facilities team.</p>
                </div>
            </a>
            <a href="/documents/waste-transfer-note-template.html" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group">
                <div class="p-2.5 bg-emerald-500/10 rounded-lg shrink-0">
                    <IconRecycle class="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                    <h3 class="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">Waste Transfer Note Template</h3>
                    <p class="text-xs text-neutral-500 mt-1">Legal WTN template issued on every collection — satisfies Duty of Care obligations.</p>
                </div>
            </a>
            <a href="/documents/collector-authorization-form.html" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group">
                <div class="p-2.5 bg-blue-500/10 rounded-lg shrink-0">
                    <IconShieldCheck class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                    <h3 class="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">Collector Authorization Form</h3>
                    <p class="text-xs text-neutral-500 mt-1">Hand to reception/facilities to pre-authorize the collection on the agreed date.</p>
                </div>
            </a>
            <a href="/documents/certificate_of_destruction_example.html" target="_blank" rel="noopener" class="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/30 hover:bg-green-500/5 transition-all group">
                <div class="p-2.5 bg-green-500/10 rounded-lg shrink-0">
                    <IconCheck class="w-5 h-5 text-green-400" />
                </div>
                <div>
                    <h3 class="font-bold text-white text-sm group-hover:text-green-400 transition-colors">Sample Certificate of Destruction</h3>
                    <p class="text-xs text-neutral-500 mt-1">Example of the certificate you'll receive with serial numbers and destruction methods.</p>
                </div>
            </a>
        </div>
        <div class="text-center pt-2">
            <router-link to="/compliance" class="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors">
                <IconShieldCheck class="w-4 h-4" />
                View all insurance & compliance certificates →
            </router-link>
        </div>
    </section>

  </div>
</template>
