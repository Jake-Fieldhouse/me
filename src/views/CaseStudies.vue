<script setup lang="ts">
import { Building2, Fish, Recycle, ArrowRight, Quote, CheckCircle2 } from 'lucide-vue-next'
import type { Component } from 'vue'

interface CaseStudy {
    id: string
    client: string
    location: string
    industry: string
    icon: Component
    color: string
    challenge: string
    solution: string[]
    outcomes: string[]
    testimonial: { quote: string; author: string; role: string } | null
    image: string | null
}

const caseStudies: CaseStudy[] = [
    {
        id: 'little-learners',
        client: 'Little Learners Nursery',
        location: 'Victoria Dock, Hull',
        industry: 'Education / Childcare',
        icon: Building2,
        color: 'from-emerald-500 to-teal-600',
        challenge: 'The nursery had lost control of their biometric fingerprint access system and couldn\'t add new staff. Investigation revealed a fragmented IT estate with no central management, staff making unauthorized changes, and security vulnerabilities throughout.',
        solution: [
            'Installed new central command infrastructure in secured comms cabinet',
            'Implemented new BioStar end-to-end biometric system with central admin',
            'Deployed USB fingerprint readers for distributed staff onboarding',
            'Established proper access controls (cabinet keys for owners only)',
            'Comprehensive virus remediation across all endpoints',
            'Network segmentation and security hardening'
        ],
        outcomes: [
            'Full administrative control restored',
            'Staff can onboard new users without admin access',
            'Eliminated unauthorized configuration changes',
            'Secure, documented IT infrastructure',
            'Ongoing managed support relationship'
        ],
        testimonial: null,
        image: null
    },
    {
        id: 'frisbys-aquatics',
        client: 'Frisby\'s Aquatics',
        location: 'Hull',
        industry: 'Retail / Pet Trade',
        icon: Fish,
        color: 'from-blue-500 to-cyan-600',
        challenge: 'The aquatics retailer wanted to enhance customer experience by providing detailed fish information without requiring staff assistance for every query.',
        solution: [
            'Designed and implemented QR code system for tank displays',
            'Created mobile-optimized information pages',
            'Integrated with existing stock/species database',
            'Self-service information access for customers'
        ],
        outcomes: [
            'Customers can instantly access fish care information',
            'Reduced staff interruptions for basic queries',
            'Enhanced shopping experience',
            'Modern, tech-forward brand image'
        ],
        testimonial: null,
        image: null
    },
    {
        id: 'office-relocation-ewaste',
        client: 'Regional Accountancy Firm',
        location: 'York',
        industry: 'Professional Services',
        icon: Recycle,
        color: 'from-amber-500 to-orange-600',
        challenge: 'A mid-sized accountancy firm relocating to smaller premises needed to dispose of 15 years of accumulated IT equipment — including servers, desktops, and laptops containing sensitive client financial data. Previous quotes from national waste carriers were expensive and offered no data destruction certification.',
        solution: [
            'Free on-site collection of 120+ items (desktops, laptops, monitors, servers, printers)',
            'GDPR-compliant data destruction using Blancco certified erasure',
            'Individual Certificates of Destruction for every data-bearing device',
            'Full Waste Transfer Note documentation for audit compliance',
            'Asset register compiled for their records',
            'Responsible recycling with zero landfill — 96% material recovery rate'
        ],
        outcomes: [
            'Complete WEEE compliance with full documentation trail',
            'Zero cost to the client — entirely funded by material recovery',
            'Satisfied GDPR obligations for client data protection',
            'Audit-ready documentation for regulatory requirements',
            'Environmental impact: 1.2 tonnes diverted from landfill'
        ],
        testimonial: null,
        image: null
    }
]
</script>

<template>
    <div class="relative z-10 min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto text-white">
        
        <!-- Header -->
        <div class="mb-16">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p class="text-xl text-neutral-400 max-w-2xl">
                Real projects, real results. See how we've helped local businesses 
                transform their IT infrastructure and operations.
            </p>
        </div>

        <!-- Case Studies Grid -->
        <div class="space-y-12">
            <article 
                v-for="study in caseStudies" 
                :key="study.id"
                :id="study.id"
                class="bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
            >
                <!-- Header -->
                <div class="p-8 border-b border-white/5">
                    <div class="flex flex-wrap items-start justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <div 
                                class="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br"
                                :class="study.color"
                            >
                                <component :is="study.icon" class="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 class="text-2xl font-bold text-white">{{ study.client }}</h2>
                                <p class="text-neutral-400">{{ study.location }} · {{ study.industry }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-8 space-y-8">
                    
                    <!-- Challenge -->
                    <div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">The Challenge</h3>
                        <p class="text-neutral-300 leading-relaxed">{{ study.challenge }}</p>
                    </div>

                    <!-- Solution -->
                    <div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">Our Solution</h3>
                        <ul class="space-y-2">
                            <li 
                                v-for="(item, idx) in study.solution" 
                                :key="idx"
                                class="flex items-start gap-3 text-neutral-300"
                            >
                                <ArrowRight class="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Outcomes -->
                    <div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">Results</h3>
                        <div class="grid sm:grid-cols-2 gap-3">
                            <div 
                                v-for="(outcome, idx) in study.outcomes" 
                                :key="idx"
                                class="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-4 py-3"
                            >
                                <CheckCircle2 class="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span class="text-neutral-200 text-sm">{{ outcome }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Testimonial (if available) -->
                    <div v-if="study.testimonial" class="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                        <Quote class="w-8 h-8 text-emerald-500/50 mb-3" />
                        <p class="text-neutral-200 italic mb-4">{{ study.testimonial.quote }}</p>
                        <p class="text-sm text-neutral-400">{{ study.testimonial.author }}, {{ study.testimonial.role }}</p>
                    </div>
                </div>
            </article>
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-white/5">
            <h3 class="text-2xl font-bold mb-4">Ready to Transform Your IT?</h3>
            <p class="text-neutral-400 mb-6 max-w-lg mx-auto">
                Whether you need a full infrastructure overhaul or a targeted digital solution, 
                let's discuss how we can help your business.
            </p>
            <router-link 
                to="/contact" 
                class="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
            >
                Get in Touch
                <ArrowRight class="w-4 h-4" />
            </router-link>
        </div>

        <div class="mt-12 text-center">
            <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">← Back to Home</router-link>
        </div>
    </div>
</template>
