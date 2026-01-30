<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CookiePreferences {
    necessary: boolean
    analytics: boolean
    marketing: boolean
}

const showBanner = ref(false)
const showSettings = ref(false)

const preferences = ref<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
})

onMounted(() => {
    const stored = localStorage.getItem('cookie-preferences')
    if (!stored) {
        showBanner.value = true
    } else {
        preferences.value = JSON.parse(stored)
    }
})

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
    showBanner.value = false
    showSettings.value = false
    
    // If analytics is enabled and GA4 exists, enable it
    if (preferences.value.analytics && typeof window !== 'undefined') {
        // GA4 is already loaded, no action needed
    }
}

const openSettings = () => {
    showSettings.value = true
}

const closeSettings = () => {
    showSettings.value = false
}
</script>

<template>
    <!-- Main Banner -->
    <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform translate-y-full opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-full opacity-0"
    >
        <div 
            v-if="showBanner && !showSettings" 
            class="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 z-50 bg-neutral-900/95 border border-neutral-700 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-md"
        >
            <div class="space-y-4">
                <div>
                    <h3 class="text-white font-semibold text-base">Cookie Preferences</h3>
                    <p class="text-sm text-neutral-400 mt-1">
                        We use cookies to analyse traffic and improve your experience. 
                        <router-link to="/cookies" class="text-blue-400 hover:underline">Learn more</router-link>
                    </p>
                </div>
                
                <div class="flex flex-wrap gap-2">
                    <button 
                        @click="acceptAll" 
                        class="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors"
                    >
                        Accept All
                    </button>
                    <button 
                        @click="acceptNecessary" 
                        class="bg-neutral-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors border border-neutral-600"
                    >
                        Necessary Only
                    </button>
                    <button 
                        @click="openSettings" 
                        class="text-neutral-400 hover:text-white px-3 py-2 text-sm transition-colors"
                    >
                        Customise
                    </button>
                </div>
            </div>
        </div>
    </transition>

    <!-- Settings Modal -->
    <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div 
            v-if="showSettings" 
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            @click.self="closeSettings"
        >
            <div class="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-bold text-white">Cookie Settings</h2>
                    <button @click="closeSettings" class="text-neutral-400 hover:text-white text-2xl">&times;</button>
                </div>

                <div class="space-y-4">
                    <!-- Necessary -->
                    <div class="flex items-center justify-between p-4 bg-neutral-800/50 rounded-xl">
                        <div>
                            <h4 class="font-semibold text-white">Essential Cookies</h4>
                            <p class="text-xs text-neutral-400 mt-1">Required for the site to function. Cannot be disabled.</p>
                        </div>
                        <div class="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full font-medium">
                            Always On
                        </div>
                    </div>

                    <!-- Analytics -->
                    <div class="flex items-center justify-between p-4 bg-neutral-800/50 rounded-xl">
                        <div class="flex-1">
                            <h4 class="font-semibold text-white">Analytics</h4>
                            <p class="text-xs text-neutral-400 mt-1">Help us understand how visitors use the site (Google Analytics).</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer ml-4">
                            <input type="checkbox" v-model="preferences.analytics" class="sr-only peer">
                            <div class="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>

                    <!-- Marketing -->
                    <div class="flex items-center justify-between p-4 bg-neutral-800/50 rounded-xl">
                        <div class="flex-1">
                            <h4 class="font-semibold text-white">Marketing</h4>
                            <p class="text-xs text-neutral-400 mt-1">Used for remarketing and advertising purposes.</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer ml-4">
                            <input type="checkbox" v-model="preferences.marketing" class="sr-only peer">
                            <div class="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                </div>

                <div class="flex gap-3 mt-6">
                    <button 
                        @click="savePreferences" 
                        class="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
                    >
                        Save Preferences
                    </button>
                    <button 
                        @click="acceptAll" 
                        class="flex-1 bg-neutral-800 text-white py-3 rounded-xl font-medium hover:bg-neutral-700 transition-colors border border-neutral-600"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>
