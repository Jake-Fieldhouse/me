<script setup lang="ts">
import { locations, services } from '../data/localSeo'
import TrustBar from '../components/TrustSignals/TrustBar.vue'

// Group services by category
const repairServices = services.filter(s => s.category === 'repair')
const mspServices = services.filter(s => s.category === 'msp')
const ewasteServices = services.filter(s => s.category === 'ewaste')
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-16">
    
    <!-- Hero -->
    <header class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
        Hull Born & Based • On-Site Coverage Across East Yorkshire & Beyond
      </div>
      <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
        Service Areas in <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">East Yorkshire & Beyond</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        Local knowledge. Same-day response. From HU1 to the Wolds and across the North of England: 
        we know the infrastructure, the businesses, and the unique challenges of operating in your area.
      </p>
    </header>

    <!-- Trust Section -->
    <TrustBar />

    <!-- Locations Grid -->
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-white text-center">Areas We Serve</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="location in locations" :key="location.slug"
             class="p-4 bg-neutral-900/50 rounded-xl border border-white/5 text-center hover:border-white/20 transition-colors">
          <div class="font-bold text-white">{{ location.name }}</div>
          <div class="text-sm text-neutral-500">{{ location.postcode }}</div>
          <div class="text-xs text-neutral-600 mt-1">{{ location.region }}</div>
        </div>
      </div>
    </section>

    <!-- Services by Category -->
    <section class="space-y-12">
      
      <!-- Repair Services -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-red-500"></span>
          Repair Services
        </h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="service in repairServices" :key="service.slug"
               class="p-6 bg-neutral-900/50 rounded-xl border border-white/5">
            <h3 class="font-bold text-white mb-3">{{ service.name }}</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="kw in service.keywords" :key="kw"
                    class="px-2 py-0.5 rounded-full text-xs bg-red-500/10 border border-red-500/20 text-red-500">
                {{ kw }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <router-link v-for="loc in locations.slice(0, 3)" :key="loc.slug"
                           :to="`/${loc.slug}-${service.slug}`"
                           class="text-xs text-neutral-400 hover:text-white transition-colors">
                {{ loc.name }}
              </router-link>
              <span class="text-xs text-neutral-600">+ {{ locations.length - 3 }} more</span>
            </div>
          </div>
        </div>
      </div>

      <!-- MSP Services -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-blue-500"></span>
          IT Support & MSP Services
        </h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="service in mspServices" :key="service.slug"
               class="p-6 bg-neutral-900/50 rounded-xl border border-white/5">
            <h3 class="font-bold text-white mb-3">{{ service.name }}</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="kw in service.keywords" :key="kw"
                    class="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 border border-blue-500/20 text-blue-500">
                {{ kw }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <router-link v-for="loc in locations.slice(0, 3)" :key="loc.slug"
                           :to="`/${loc.slug}-${service.slug}`"
                           class="text-xs text-neutral-400 hover:text-white transition-colors">
                {{ loc.name }}
              </router-link>
              <span class="text-xs text-neutral-600">+ {{ locations.length - 3 }} more</span>
            </div>
          </div>
        </div>
      </div>

      <!-- E-Waste Services -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-amber-500"></span>
          E-Waste & IT Disposal
        </h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="service in ewasteServices" :key="service.slug"
               class="p-6 bg-neutral-900/50 rounded-xl border border-white/5">
            <h3 class="font-bold text-white mb-3">{{ service.name }}</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="kw in service.keywords" :key="kw"
                    class="px-2 py-0.5 rounded-full text-xs bg-amber-500/10 border border-amber-500/20 text-amber-500">
                {{ kw }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <router-link v-for="loc in locations.slice(0, 3)" :key="loc.slug"
                           :to="`/${loc.slug}-${service.slug}`"
                           class="text-xs text-neutral-400 hover:text-white transition-colors">
                {{ loc.name }}
              </router-link>
              <span class="text-xs text-neutral-600">+ {{ locations.length - 3 }} more</span>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Quick Links: All Combinations -->
    <section class="border-t border-white/5 pt-12 space-y-6">
      <h2 class="text-2xl font-bold text-white text-center">All Service Areas</h2>
      <p class="text-neutral-400 text-center max-w-2xl mx-auto">
        We provide comprehensive IT services across Hull and East Yorkshire. 
        Click any combination below to learn more about our services in your area.
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
        <router-link v-for="loc in locations" :key="loc.slug"
                     :to="`/${loc.slug}-it-support`"
                     class="p-3 bg-neutral-900/30 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors text-center">
          <span class="text-white">IT Support</span>
          <span class="text-neutral-500 block">{{ loc.name }}</span>
        </router-link>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-12 bg-neutral-900/30 rounded-3xl border border-white/5">
      <h2 class="text-3xl font-bold text-white mb-4">
        Can't Find Your Area?
      </h2>
      <p class="text-neutral-400 mb-6 max-w-xl mx-auto">
        We serve all of East Yorkshire, the wider North of England, and offer nationwide 
        mail-in repair and e-waste collection. Contact us to discuss your requirements.
      </p>
      <router-link to="/contact"
                   class="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
        Get in Touch
      </router-link>
    </section>

  </div>
</template>
