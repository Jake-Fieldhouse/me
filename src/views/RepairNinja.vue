<script setup lang="ts">
import { ref } from 'vue'
import TrustBar from '../components/TrustSignals/TrustBar.vue'

const commonRepairs = [
  { device: 'Console (PS5/Xbox)', service: 'HDMI Port Replacement', price: '£60', time: '24h' },
  { device: 'Nintendo Switch', service: 'USB-C Charging Port', price: '£45', time: '24h' },
  { device: 'Laptop', service: 'DC Jack Repair', price: '£50+', time: '48h' },
  { device: 'MacBook', service: 'Logic Board Repair', price: '£150+', time: '3-5 Days' },
  { device: 'Data Recovery', service: 'Level 1 (Logical)', price: '£90', time: '24-48h' },
  { device: 'Data Recovery', service: 'Level 2 (Board Repair)', price: '£250+', time: '5-10 Days' },
]

const form = ref({
  name: '',
  device: '',
  issue: '',
  method: 'drop-off'
})

const submitRepair = () => {
  alert('Repair request received! We will contact you shortly.')
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
        <div class="flex justify-center gap-4 pt-4">
            <a href="#book" class="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
            Start Repair
            </a>
            <router-link to="/" class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10">
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

    <!-- Services & Pricing -->
    <section class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
            <h2 class="text-3xl font-bold text-white">Common Repairs</h2>
            <div class="overflow-hidden rounded-2xl border border-white/10">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-neutral-900 border-b border-white/10">
                        <tr>
                            <th class="p-4 text-neutral-400 font-medium">Device / Issue</th>
                            <th class="p-4 text-neutral-400 font-medium">Est. Price</th>
                            <th class="p-4 text-neutral-400 font-medium">Time</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/10 bg-neutral-900/50">
                        <tr v-for="(item, i) in commonRepairs" :key="i" class="hover:bg-neutral-800/50 transition-colors">
                            <td class="p-4">
                                <div class="text-white font-medium">{{ item.device }}</div>
                                <div class="text-sm text-neutral-500">{{ item.service }}</div>
                            </td>
                            <td class="p-4 text-red-400 font-bold">{{ item.price }}</td>
                            <td class="p-4 text-neutral-400 text-sm">{{ item.time }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-sm text-neutral-500 italic">* Prices are estimates. Final quote provided after free diagnosis.</p>
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

  </div>
</template>
