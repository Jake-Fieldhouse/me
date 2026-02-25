<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useOgMeta } from '../composables/useOgMeta'
import { trackFormSubmission } from '../lib/analytics'
import { useToast } from '../composables/useToast'

useOgMeta({
  title: 'Share Your Feedback | Jake Fieldhouse Consulting',
  description: 'Had a great experience with Jake Fieldhouse Consulting? Share your testimonial and help other businesses find trusted IT support in Hull.',
  image: '/images/og-image.png',
  url: '/feedback'
})

const route = useRoute()

// Pre-fill from URL params (e.g., /feedback?name=John&service=repair)
const clientName = ref('')
const serviceName = ref('')
const rating = ref(5)
const testimonialText = ref('')
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const { show: showToast } = useToast()

// Store timeout for cleanup
let submitTimeout: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
    if (route.query.name) {
        clientName.value = decodeURIComponent(route.query.name as string)
    }
    if (route.query.service) {
        serviceName.value = decodeURIComponent(route.query.service as string)
    }
})

onUnmounted(() => {
    if (submitTimeout) clearTimeout(submitTimeout)
})

const stars = computed(() => {
    return Array.from({ length: 5 }, (_, i) => i < rating.value)
})

const handleSubmit = async () => {
    if (!testimonialText.value.trim()) return
    
    isSubmitting.value = true
    
    // Build mailto link with pre-filled content
    const subject = encodeURIComponent(`Testimonial from ${clientName.value || 'Client'}`)
    const body = encodeURIComponent(
        `Name: ${clientName.value || 'Anonymous'}\n` +
        `Service: ${serviceName.value || 'General'}\n` +
        `Rating: ${rating.value}/5 stars\n\n` +
        `Testimonial:\n"${testimonialText.value}"\n\n` +
        `---\nSubmitted via jakefieldhouse.co.uk/feedback`
    )
    
    // Open email client
    window.location.href = `mailto:jake@jakefieldhouse.co.uk?subject=${subject}&body=${body}`
    trackFormSubmission('feedback')
    
    // Show success toast
    showToast('Email client opened! Please send to complete submission.', 4000)
    
    // Show success state
    if (submitTimeout) clearTimeout(submitTimeout)
    submitTimeout = setTimeout(() => {
        isSubmitted.value = true
        isSubmitting.value = false
    }, 500)
}
</script>

<template>
    <div class="relative z-10 w-full max-w-4xl mx-auto px-6 py-20">
        <!-- Header -->
        <header class="text-center space-y-4 mb-16 mt-10">
            <div class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span>💬</span>
                <span>Share Your Experience</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Your Feedback Matters
            </h1>
            <p class="text-xl text-neutral-400 max-w-2xl mx-auto">
                Thank you for choosing Jake Fieldhouse Consulting. Your testimonial helps other businesses find trusted IT support.
            </p>
        </header>

        <!-- Success State -->
        <div v-if="isSubmitted" class="text-center space-y-6 py-20">
            <div class="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl">
                ✓
            </div>
            <h2 class="text-2xl font-bold text-white">Thank You!</h2>
            <p class="text-neutral-400">
                Your testimonial has been prepared. Please send the email that just opened to complete your submission.
            </p>
            <router-link to="/" class="inline-block mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all">
                Return Home
            </router-link>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Name & Service (Pre-filled if from link) -->
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <label for="fb-name" class="block text-sm text-neutral-400 mb-2">Your Name (Optional)</label>
                    <input 
                        id="fb-name"
                        v-model="clientName"
                        type="text" 
                        autocomplete="name"
                        placeholder="John Smith"
                        class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none transition-all"
                    />
                </div>
                <div>
                    <label for="fb-service" class="block text-sm text-neutral-400 mb-2">Service Received</label>
                    <select 
                        id="fb-service"
                        v-model="serviceName"
                        class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500/50 focus:outline-none transition-all"
                    >
                        <option value="">Select a service...</option>
                        <option value="Managed IT">Managed IT Support</option>
                        <option value="Hardware Repair">Hardware Repair (Repair Ninja)</option>
                        <option value="E-Waste Collection">E-Waste Collection</option>
                        <option value="Data Destruction">Data Destruction</option>
                        <option value="AI Optimization">AI Search Optimization</option>
                        <option value="General Consulting">General Consulting</option>
                    </select>
                </div>
            </div>

            <!-- Star Rating -->
            <div>
                <label class="block text-sm text-neutral-400 mb-3">Your Rating</label>
                <div class="flex gap-2">
                    <button 
                        v-for="(filled, index) in stars" 
                        :key="index"
                        type="button"
                        @click="rating = index + 1"
                        :aria-label="`Rate ${index + 1} out of 5 stars`"
                        class="text-3xl transition-transform hover:scale-110"
                    >
                        {{ filled ? '⭐' : '☆' }}
                    </button>
                </div>
            </div>

            <!-- Testimonial Text -->
            <div>
                <label for="fb-testimonial" class="block text-sm text-neutral-400 mb-2">Your Testimonial</label>
                <textarea 
                    id="fb-testimonial"
                    v-model="testimonialText"
                    rows="5"
                    placeholder="Tell us about your experience working with Jake Fieldhouse Consulting..."
                    class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none transition-all resize-none"
                    required
                ></textarea>
                <p class="text-xs text-neutral-400 mt-2">
                    By submitting, you agree that your testimonial may be displayed on our website.
                </p>
            </div>

            <!-- Submit -->
            <button 
                type="submit"
                :disabled="isSubmitting || !testimonialText.trim()"
                class="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ isSubmitting ? 'Preparing...' : 'Submit Testimonial' }}
            </button>
        </form>

        <!-- What's New Section (The "Sneaky" Business Update) -->
        <section class="mt-20 pt-12 border-t border-white/10">
            <h2 class="text-xl font-bold text-white mb-6">What's New at Jake Fieldhouse Consulting</h2>
            <div class="grid md:grid-cols-3 gap-4">
                <div class="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div class="text-2xl mb-2">🏢</div>
                    <h3 class="font-semibold text-white">Now a Limited Company</h3>
                    <p class="text-sm text-neutral-400">Formally registered as Jake Fieldhouse Consulting Ltd.</p>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div class="text-2xl mb-2">♻️</div>
                    <h3 class="font-semibold text-white">Free E-Waste Collection</h3>
                    <p class="text-sm text-neutral-400">Now offering free business IT recycling for Hull & Yorkshire.</p>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div class="text-2xl mb-2">🤖</div>
                    <h3 class="font-semibold text-white">AI Search Optimization</h3>
                    <p class="text-sm text-neutral-400">Helping businesses get found by ChatGPT & AI search.</p>
                </div>
            </div>
        </section>
    </div>
</template>
