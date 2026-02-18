<script setup lang="ts">
import { computed } from 'vue'
import { MapPin, Wrench, Server, Recycle, Shield, Clock, Phone, ArrowRight } from 'lucide-vue-next'
import { trackPhoneClick } from '../lib/analytics'

const props = defineProps<{
    location: string
}>()

// Service area data - unique content per location
const serviceAreas: Record<string, {
    name: string
    region: string
    intro: string
    travelTime: string
    landmarks: string[]
    localContext: string
}> = {
    'hull': {
        name: 'Hull',
        region: 'Hull City Centre & Surrounding Areas',
        intro: 'As a Hull-based IT consultant, we\'re at the heart of the city\'s business community. From the Old Town to the Avenues, from St Andrew\'s Quay to Kingswood, we provide rapid on-site support across the entire city.',
        travelTime: 'Same-day service available',
        landmarks: ['Hull City Centre', 'Victoria Dock', 'Kingswood', 'Bransholme', 'The Avenues'],
        localContext: 'Hull\'s growing tech scene and established businesses deserve local IT support that understands the unique challenges of operating in our city.'
    },
    'beverley': {
        name: 'Beverley',
        region: 'Beverley & East Riding',
        intro: 'Just 20 minutes from our Hull base, Beverley\'s thriving market town businesses benefit from professional IT support without city prices. We regularly serve businesses around the Minster, Flemingate, and the industrial estates.',
        travelTime: '20-25 minute response',
        landmarks: ['Beverley Minster', 'Flemingate', 'Swinemoor', 'Beverley Westwood'],
        localContext: 'From independent retailers in the Saturday Market to professional services firms, Beverley businesses need reliable IT that doesn\'t disrupt their operations.'
    },
    'cottingham': {
        name: 'Cottingham',
        region: 'Cottingham Village',
        intro: 'One of England\'s largest villages, Cottingham has a strong business community ranging from healthcare providers to retail and professional services. We\'re just 10 minutes away for rapid support.',
        travelTime: '10-15 minute response',
        landmarks: ['Cottingham Village Centre', 'Castle Hill Hospital', 'Harland Way'],
        localContext: 'Cottingham\'s mix of established village businesses and modern enterprises need IT support that respects their professional standards.'
    },
    'hessle': {
        name: 'Hessle',
        region: 'Hessle & The Humber Bridge Area',
        intro: 'Located at the foot of the iconic Humber Bridge, Hessle\'s business community benefits from our proximity to the A63 corridor. We provide quick response times to businesses throughout the town and foreshore area.',
        travelTime: '15-20 minute response',
        landmarks: ['Hessle Square', 'Humber Bridge', 'Hessle Foreshore', 'Priory Park'],
        localContext: 'Hessle businesses, from the high street to the marina, deserve IT support that can respond quickly when issues arise.'
    },
    'anlaby': {
        name: 'Anlaby',
        region: 'Anlaby & Anlaby Common',
        intro: 'A key suburb on Hull\'s western edge, Anlaby hosts numerous businesses along the A164 corridor. Our rapid response times mean minimal disruption to your operations.',
        travelTime: '10-15 minute response',
        landmarks: ['Anlaby Common', 'Springhead Park', 'A164 Corridor'],
        localContext: 'From retail parks to local enterprises, Anlaby businesses need IT support that understands suburban commercial operations.'
    },
    'driffield': {
        name: 'Driffield',
        region: 'Driffield & The Wolds',
        intro: 'The capital of the Yorkshire Wolds, Driffield\'s agricultural and market town businesses often struggle to find quality IT support locally. We bridge that gap with regular visits and responsive remote support.',
        travelTime: '30-35 minute response',
        landmarks: ['Driffield Market', 'Showground', 'Industrial Estate'],
        localContext: 'Driffield\'s businesses - from agricultural suppliers to professional services - deserve the same quality IT support as city-based companies.'
    },
    'brough': {
        name: 'Brough',
        region: 'Brough & Elloughton',
        intro: 'Home to major aerospace employers and a growing business park community, Brough understands the importance of reliable technology. We provide professional IT services to businesses throughout the area.',
        travelTime: '20-25 minute response',
        landmarks: ['Brough Business Park', 'Elloughton', 'Welton'],
        localContext: 'With BAE Systems and numerous SMEs, Brough has a sophisticated business community that expects professional IT support.'
    }
}

const areaData = computed(() => serviceAreas[props.location] || serviceAreas['hull'])

const services = [
    {
        icon: Wrench,
        title: 'Computer & Laptop Repair',
        description: 'Expert diagnosis and repair of hardware and software issues. Microsoldering, data recovery, and component-level repairs.'
    },
    {
        icon: Server,
        title: 'Business IT Support',
        description: 'Managed IT services, infrastructure setup, and ongoing support tailored for small to medium businesses.'
    },
    {
        icon: Recycle,
        title: 'E-Waste & Data Disposal',
        description: 'GDPR-compliant data destruction and sustainable e-waste collection. Certificates of destruction provided.'
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Cybersecurity audits, access control systems, and compliance consulting for regulated industries.'
    }
]
</script>

<template>
    <div class="relative z-10 min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto text-white">
        
        <!-- Hero -->
        <div class="mb-16">
            <div class="flex items-center gap-3 mb-4 text-emerald-500">
                <MapPin class="w-5 h-5" />
                <span class="text-sm font-medium uppercase tracking-wider">Serving {{ areaData.region }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                IT Support & Repair in {{ areaData.name }}
            </h1>
            <p class="text-xl text-neutral-400 max-w-2xl">
                {{ areaData.intro }}
            </p>
        </div>

        <!-- Quick Stats -->
        <div class="grid sm:grid-cols-3 gap-4 mb-16">
            <div class="bg-neutral-900/50 rounded-xl p-5 border border-white/5">
                <Clock class="w-6 h-6 text-emerald-500 mb-2" />
                <p class="text-sm text-neutral-400">Response Time</p>
                <p class="text-lg font-bold text-white">{{ areaData.travelTime }}</p>
            </div>
            <div class="bg-neutral-900/50 rounded-xl p-5 border border-white/5">
                <Shield class="w-6 h-6 text-blue-500 mb-2" />
                <p class="text-sm text-neutral-400">Certifications</p>
                <p class="text-lg font-bold text-white">DBS Checked & Insured</p>
            </div>
            <div class="bg-neutral-900/50 rounded-xl p-5 border border-white/5">
                <Phone class="w-6 h-6 text-violet-500 mb-2" />
                <p class="text-sm text-neutral-400">Support</p>
                <p class="text-lg font-bold text-white">On-site & Remote</p>
            </div>
        </div>

        <!-- Local Context -->
        <div class="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-white/5 mb-16">
            <h2 class="text-2xl font-bold mb-4">Why Local IT Support Matters in {{ areaData.name }}</h2>
            <p class="text-neutral-300 leading-relaxed mb-6">{{ areaData.localContext }}</p>
            <div class="flex flex-wrap gap-2">
                <span 
                    v-for="landmark in areaData.landmarks" 
                    :key="landmark"
                    class="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-400"
                >
                    {{ landmark }}
                </span>
            </div>
        </div>

        <!-- Services -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-8">Services Available in {{ areaData.name }}</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div 
                    v-for="service in services" 
                    :key="service.title"
                    class="bg-neutral-900/50 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors"
                >
                    <component :is="service.icon" class="w-8 h-8 text-emerald-500 mb-4" />
                    <h3 class="text-lg font-bold text-white mb-2">{{ service.title }}</h3>
                    <p class="text-neutral-400 text-sm">{{ service.description }}</p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <div class="text-center bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border border-emerald-500/20">
            <h3 class="text-2xl font-bold mb-4">Need IT Support in {{ areaData.name }}?</h3>
            <p class="text-neutral-400 mb-6 max-w-lg mx-auto">
                Get in touch for a free consultation. We'll discuss your needs and provide a clear quote with no hidden fees.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <router-link 
                    to="/contact" 
                    class="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
                >
                    Get in Touch
                    <ArrowRight class="w-4 h-4" />
                </router-link>
                <a 
                    href="tel:+447404090458" 
                    class="inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-700 transition-colors border border-neutral-600"
                    @click="trackPhoneClick('service_area')"
                >
                    <Phone class="w-4 h-4" />
                    Call Now
                </a>
            </div>
        </div>

        <div class="mt-12 text-center">
            <router-link to="/" class="text-neutral-400 hover:text-white transition-colors">← Back to Home</router-link>
        </div>
    </div>
</template>
