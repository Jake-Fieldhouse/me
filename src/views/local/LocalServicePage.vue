<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { locations, services, getLocalPageContent, type Location, type ServiceType } from '../../data/localSeo'
import TrustBar from '../../components/TrustSignals/TrustBar.vue'

const route = useRoute()
const router = useRouter()

// Parse location and service from route params
const locationSlug = computed(() => route.params.location as string)
const serviceSlug = computed(() => route.params.service as string)

const location = computed<Location | undefined>(() => 
  locations.find(l => l.slug === locationSlug.value)
)

const service = computed<ServiceType | undefined>(() => 
  services.find(s => s.slug === serviceSlug.value)
)

const content = computed(() => {
  if (!location.value || !service.value) return null
  return getLocalPageContent(location.value, service.value)
})

// Redirect to 404 if location or service is invalid
const validateRoute = () => {
  if (!location.value || !service.value) {
    router.replace({ name: 'not-found' })
  }
}

onMounted(validateRoute)
watch([locationSlug, serviceSlug], validateRoute)

const categoryColors = {
  repair: { 
    gradient: 'from-red-500 to-orange-600',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    text: 'text-red-500',
    button: 'bg-red-600 hover:bg-red-500'
  },
  msp: { 
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-500',
    button: 'bg-blue-600 hover:bg-blue-500'
  },
  ewaste: { 
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-500',
    button: 'bg-amber-600 hover:bg-amber-500'
  }
}

const colors = computed(() => {
  if (!service.value) return categoryColors.repair
  return categoryColors[service.value.category]
})

// Nearby locations for internal linking
const nearbyLocations = computed(() => {
  if (!location.value) return []
  return locations
    .filter(l => l.slug !== location.value?.slug)
    .filter(l => l.region === location.value?.region || l.region === 'City Core')
    .slice(0, 4)
})

// Related services for internal linking
const relatedServices = computed(() => {
  if (!service.value) return []
  return services
    .filter(s => s.slug !== service.value?.slug)
    .filter(s => s.category === service.value?.category)
    .slice(0, 3)
})
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-16">
    
    <!-- Hero Section -->
    <header class="text-center space-y-6 mt-10 relative" v-if="location && service && content">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 rounded-full blur-[100px] pointer-events-none"
           :class="colors.bg"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
             :class="[colors.bg, colors.border, colors.text, 'border']">
          Serving {{ location.postcode }} & Surrounding Areas
        </div>
        
        <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
          {{ service.name }} in 
          <span class="text-transparent bg-clip-text bg-gradient-to-r" :class="colors.gradient">
            {{ location.name }}
          </span>
        </h1>
        
        <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mt-6">
          {{ content.intro }}
        </p>
        
        <div class="flex flex-col md:flex-row justify-center gap-4 pt-6">
          <router-link :to="content.link" 
                       class="text-white px-8 py-4 rounded-xl font-bold transition-colors text-center"
                       :class="colors.button">
            {{ content.cta }}
          </router-link>
          <router-link to="/contact" 
                       class="px-8 py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/10 text-center">
            Contact Us
          </router-link>
        </div>
      </div>
    </header>

    <!-- Trust Section -->
    <TrustBar />

    <!-- Service Details -->
    <section class="grid md:grid-cols-2 gap-12" v-if="location && service">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-white">
          Why Choose Us for {{ service.name }} in {{ location.name }}?
        </h2>
        <div class="space-y-4 text-neutral-300">
          <p>
            Based in Hull and serving the entire {{ location.region }} region, Jake Fieldhouse Consulting 
            has been a trusted provider of professional IT services for over a decade.
          </p>
          <p v-if="service.category === 'repair'">
            Our expert technicians specialize in component-level microsoldering, fixing devices that 
            other repair shops declare "unrepairable". With our <strong class="text-white">No Fix, No Fee</strong> 
            guarantee, you only pay if we successfully repair your device.
          </p>
          <p v-else-if="service.category === 'msp'">
            We provide enterprise-grade IT infrastructure management without the enterprise price tag. 
            From 24/7 monitoring to EDR security and cloud solutions, we keep your business running 
            while you focus on growth.
          </p>
          <p v-else>
            Our GDPR-compliant e-waste collection service is <strong class="text-white">completely free</strong> 
            for businesses. We provide full documentation including Waste Transfer Notes and 
            Certificates of Destruction to satisfy your legal compliance requirements.
          </p>
        </div>
        
        <!-- Keywords/Features -->
        <div class="flex flex-wrap gap-2 pt-4">
          <span v-for="keyword in service.keywords" :key="keyword"
                class="px-3 py-1 rounded-full text-sm font-medium"
                :class="[colors.bg, colors.border, colors.text, 'border']">
            {{ keyword }}
          </span>
        </div>
      </div>
      
      <!-- Quick Stats -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-neutral-900/50 p-6 rounded-xl border border-white/5 text-center">
          <div class="text-3xl font-bold text-white">24h</div>
          <div class="text-sm text-neutral-500 uppercase tracking-widest">Response Time</div>
        </div>
        <div class="bg-neutral-900/50 p-6 rounded-xl border border-white/5 text-center">
          <div class="text-3xl font-bold text-white">5k+</div>
          <div class="text-sm text-neutral-500 uppercase tracking-widest">Jobs Completed</div>
        </div>
        <div class="bg-neutral-900/50 p-6 rounded-xl border border-white/5 text-center">
          <div class="text-3xl font-bold text-white">12mo</div>
          <div class="text-sm text-neutral-500 uppercase tracking-widest">Warranty</div>
        </div>
        <div class="bg-neutral-900/50 p-6 rounded-xl border border-white/5 text-center">
          <div class="text-3xl font-bold text-white">Free</div>
          <div class="text-sm text-neutral-500 uppercase tracking-widest">Diagnostics</div>
        </div>
      </div>
    </section>

    <!-- FAQ Section for LLM/AI Optimization -->
    <section class="max-w-3xl mx-auto space-y-8" v-if="location && service">
      <h2 class="text-3xl font-bold text-white text-center">
        {{ service.name }} in {{ location.name }} - FAQs
      </h2>
      
      <div class="space-y-4">
        <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
          <h3 class="text-lg font-bold text-white mb-2">
            Where can I get {{ service.name.toLowerCase() }} in {{ location.name }}?
          </h3>
          <p class="text-neutral-400">
            Jake Fieldhouse Consulting provides professional {{ service.name.toLowerCase() }} services 
            in {{ location.name }} and the {{ location.postcode }} postcode area. We offer both on-site 
            visits and mail-in services depending on your needs.
          </p>
        </div>
        
        <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
          <h3 class="text-lg font-bold text-white mb-2">
            How much does {{ service.name.toLowerCase() }} cost in {{ location.name }}?
          </h3>
          <p class="text-neutral-400">
            Pricing varies based on the specific requirements of your {{ service.category === 'repair' ? 'repair' : 'project' }}. 
            We offer free initial assessments and provide transparent quotes with no hidden fees. 
            Contact us today for a personalized quote.
          </p>
        </div>
        
        <div class="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
          <h3 class="text-lg font-bold text-white mb-2">
            Do you serve areas near {{ location.name }}?
          </h3>
          <p class="text-neutral-400">
            Yes! We serve {{ location.name }} and all surrounding areas in {{ location.region }}. 
            Our service area includes Hull, Beverley, Driffield, Bridlington, Goole, and the 
            entire East Yorkshire region.
          </p>
        </div>
      </div>
    </section>

    <!-- Internal Linking: Nearby Locations -->
    <section class="border-t border-white/5 pt-12" v-if="nearbyLocations.length > 0 && service">
      <h2 class="text-2xl font-bold text-white mb-6">{{ service.name }} in Other Areas</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <router-link v-for="loc in nearbyLocations" :key="loc.slug"
                     :to="`/${loc.slug}-${service.slug}`"
                     class="p-4 bg-neutral-900/50 rounded-xl border border-white/5 hover:border-white/20 transition-colors text-center">
          <div class="font-bold text-white">{{ loc.name }}</div>
          <div class="text-sm text-neutral-500">{{ loc.postcode }}</div>
        </router-link>
      </div>
    </section>

    <!-- Internal Linking: Related Services -->
    <section class="border-t border-white/5 pt-12" v-if="relatedServices.length > 0 && location">
      <h2 class="text-2xl font-bold text-white mb-6">Other Services in {{ location.name }}</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <router-link v-for="svc in relatedServices" :key="svc.slug"
                     :to="`/${location.slug}-${svc.slug}`"
                     class="p-6 bg-neutral-900/50 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
          <div class="font-bold text-white mb-2">{{ svc.name }}</div>
          <div class="text-sm text-neutral-400">{{ svc.keywords.join(', ') }}</div>
        </router-link>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="text-center py-12 bg-neutral-900/30 rounded-3xl border border-white/5" v-if="location && content">
      <h2 class="text-3xl font-bold text-white mb-4">
        Ready for {{ service?.name }} in {{ location.name }}?
      </h2>
      <p class="text-neutral-400 mb-6 max-w-xl mx-auto">
        Get a free quote today. We respond within 24 hours.
      </p>
      <router-link :to="content.link"
                   class="inline-block text-white px-8 py-4 rounded-xl font-bold transition-colors"
                   :class="colors.button">
        {{ content.cta }}
      </router-link>
    </section>

  </div>
</template>
