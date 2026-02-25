<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {
    disableAnalytics,
    enableAnalytics,
    parseCookiePreferences,
    type CookiePreferences
} from '../lib/analytics'

const props = defineProps<{
    preloaderDone: boolean
}>()

const emit = defineEmits<{
    (e: 'consent-given'): void
}>()

const showGate = ref(false)
const showSettings = ref(false)
const gateVisible = ref(false) // controls CSS transition

const preferences = ref<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
})

onMounted(() => {
    const stored = localStorage.getItem('cookie-preferences')
    if (stored) {
        const parsed = parseCookiePreferences(stored)
        if (parsed) {
            preferences.value = parsed
            // Returning visitor — apply stored preferences, skip gate
            if (parsed.analytics) {
                enableAnalytics()
            } else {
                disableAnalytics()
            }
            emit('consent-given')
            return
        }
    }

    // First visit — show gate after preloader finishes
    if (props.preloaderDone) {
        showGate.value = true
        requestAnimationFrame(() => { gateVisible.value = true })
        lockBody()
    }
})

// Watch for preloader finishing (first visit scenario)
watch(() => props.preloaderDone, (done) => {
    if (done && showGate.value === false && !localStorage.getItem('cookie-preferences')) {
        showGate.value = true
        requestAnimationFrame(() => { gateVisible.value = true })
        lockBody()
    }
})

function lockBody(): void {
    document.body.style.overflow = 'hidden'
}

function unlockBody(): void {
    document.body.style.overflow = ''
}

const acceptAll = () => {
    preferences.value = {
        necessary: true,
        analytics: true,
        marketing: true
    }
    savePreferences()
}

const acceptNecessary = () => {
    preferences.value = {
        necessary: true,
        analytics: false,
        marketing: false
    }
    savePreferences()
}

const savePreferences = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences.value))

    if (preferences.value.analytics) {
        enableAnalytics()
    } else {
        disableAnalytics()
    }

    gateVisible.value = false
    // Wait for exit animation before removing from DOM
    setTimeout(() => {
        showGate.value = false
        showSettings.value = false
        unlockBody()
        emit('consent-given')
    }, 400)
}

const openSettings = () => {
    showSettings.value = true
}
</script>

<template>
    <teleport to="body">
        <div
            v-if="showGate"
            class="cookie-gate"
            :class="gateVisible ? 'cookie-gate--visible' : 'cookie-gate--hidden'"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie consent"
        >
            <!-- Backdrop: semi-transparent black — DOM content still in page for crawlers -->
            <div class="absolute inset-0 bg-black/85 backdrop-blur-md" aria-hidden="true" />

            <!-- Consent Card -->
            <div
                class="cookie-gate__card"
                :class="gateVisible ? 'cookie-gate__card--visible' : 'cookie-gate__card--hidden'"
            >
                <!-- Main Banner View -->
                <template v-if="!showSettings">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                            <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-lg font-bold text-white">Your Privacy Matters</h2>
                            <p class="text-xs text-neutral-400">Jake Fieldhouse Consulting Ltd</p>
                        </div>
                    </div>

                    <p class="text-sm text-neutral-300 leading-relaxed mb-6">
                        We use cookies and similar technologies to understand how visitors interact with our site.
                        Analytics are only enabled with your consent.
                        <router-link to="/cookies" class="text-blue-400 hover:underline" @click.stop>Read our cookie policy</router-link>
                        ·
                        <router-link to="/privacy" class="text-blue-400 hover:underline" @click.stop>Privacy policy</router-link>
                    </p>

                    <div class="space-y-3">
                        <button 
                            @click="acceptAll" 
                            class="w-full py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors text-sm"
                            id="cookie-accept-all"
                        >
                            Accept All Cookies
                        </button>
                        <button 
                            @click="acceptNecessary" 
                            class="w-full py-3 bg-neutral-800 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors border border-neutral-600 text-sm"
                            id="cookie-essential-only"
                        >
                            Essential Only
                        </button>
                        <button 
                            @click="openSettings" 
                            class="w-full py-2.5 text-neutral-400 hover:text-white text-sm transition-colors"
                            id="cookie-customise"
                        >
                            Customise Preferences
                        </button>
                    </div>
                </template>

                <!-- Settings View -->
                <template v-else>
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-bold text-white">Cookie Preferences</h2>
                    </div>

                    <div class="space-y-3">
                        <!-- Essential -->
                        <div class="flex items-center justify-between p-4 bg-neutral-800/50 rounded-xl">
                            <div>
                                <h4 class="font-semibold text-white text-sm">Essential Cookies</h4>
                                <p class="text-xs text-neutral-400 mt-1">Required for the site to function. Cannot be disabled.</p>
                            </div>
                            <div class="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium shrink-0 ml-3">
                                Always On
                            </div>
                        </div>

                        <!-- Analytics -->
                        <div class="flex items-center justify-between p-4 bg-neutral-800/50 rounded-xl">
                            <div class="flex-1">
                                <h4 class="font-semibold text-white text-sm">Analytics</h4>
                                <p class="text-xs text-neutral-400 mt-1">Google Analytics records page views and events (retained up to 14 months). Microsoft Clarity records anonymised session replays and heatmaps (retained up to 13 months).</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                                <input type="checkbox" v-model="preferences.analytics" class="sr-only peer">
                                <div class="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                            </label>
                        </div>

                        <!-- Marketing -->
                        <div class="flex items-center justify-between p-4 bg-neutral-800/50 rounded-xl">
                            <div class="flex-1">
                                <h4 class="font-semibold text-white text-sm">Marketing</h4>
                                <p class="text-xs text-neutral-400 mt-1">Used for remarketing and advertising purposes.</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                                <input type="checkbox" v-model="preferences.marketing" class="sr-only peer">
                                <div class="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                            </label>
                        </div>
                    </div>

                    <div class="flex gap-3 mt-6">
                        <button 
                            @click="savePreferences" 
                            class="flex-1 bg-emerald-500 text-black py-3 rounded-xl font-semibold hover:bg-emerald-400 transition-colors text-sm"
                        >
                            Save Preferences
                        </button>
                        <button 
                            @click="acceptAll" 
                            class="flex-1 bg-neutral-800 text-white py-3 rounded-xl font-medium hover:bg-neutral-700 transition-colors border border-neutral-600 text-sm"
                        >
                            Accept All
                        </button>
                    </div>
                </template>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.cookie-gate {
    position: fixed;
    inset: 0;
    z-index: 9998; /* Just below preloader (z-9999), above everything else */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: opacity 0.4s ease;
}

.cookie-gate--visible {
    opacity: 1;
    pointer-events: auto;
}

.cookie-gate--hidden {
    opacity: 0;
    pointer-events: none;
}

.cookie-gate__card {
    position: relative;
    z-index: 1;
    background: rgba(23, 23, 23, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1.25rem;
    padding: 1.75rem;
    max-width: 28rem;
    width: 100%;
    box-shadow:
        0 0 80px rgba(16, 185, 129, 0.06),
        0 25px 50px -12px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.cookie-gate__card--visible {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.cookie-gate__card--hidden {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
}

/* Ensure the gate doesn't block print */
@media print {
    .cookie-gate {
        display: none !important;
    }
}
</style>
