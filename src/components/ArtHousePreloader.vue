<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  loading: boolean
}>()

const containerRef = ref<HTMLElement | null>(null)
const word1Ref = ref<HTMLElement | null>(null)
const word2Ref = ref<HTMLElement | null>(null)
const arcRef = ref<HTMLElement | null>(null)

const firstName = "JAKE".split("")
const lastName = "FIELDHOUSE".split("")

onMounted(() => {
  const tl = gsap.timeline()
  
  const chars = [
    ...(word1Ref.value?.children || []),
    ...(word2Ref.value?.children || [])
  ]

  // Initial State
  gsap.set(chars, { 
      opacity: 0,
      filter: 'blur(8px)',
      y: 20
  })

  // Arc initial state - start off screen left
  if (arcRef.value) {
    gsap.set(arcRef.value, {
      opacity: 0,
      scale: 0.5
    })
  }

  // Text Reveal Animation
  tl.to(chars, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.8,
      stagger: {
          amount: 0.6,
          from: "start"
      },
      ease: "power2.out"
  })

  // Arc animation - smooth sweep around text
  if (arcRef.value) {
    tl.to(arcRef.value, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    
    // Continuous arc motion
    gsap.to(arcRef.value, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    })
  }
})

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    gsap.to(containerRef.value, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
          if (containerRef.value) containerRef.value.style.display = 'none'
      }
    })
  }
})
</script>

<template>
  <div 
    ref="containerRef"
    class="fixed inset-0 z-[40] bg-black flex flex-col items-center justify-center cursor-none overflow-hidden"
  >
    <!-- Cinematic Typography Container - NO blend mode -->
    <div class="relative z-10 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
        
        <!-- JAKE -->
        <div ref="word1Ref" class="flex overflow-hidden">
            <span 
                v-for="(char, index) in firstName" 
                :key="`f-${index}`"
                class="text-5xl md:text-8xl font-black tracking-tighter text-white inline-block"
            >
                {{ char }}
            </span>
        </div>

        <!-- FIELDHOUSE -->
        <div ref="word2Ref" class="flex overflow-hidden">
            <span 
                v-for="(char, index) in lastName" 
                :key="`l-${index}`"
                class="text-5xl md:text-8xl font-black tracking-tighter text-white inline-block"
            >
                {{ char }}
            </span>
        </div>
    </div>

    <!-- Orbital Arc Element -->
    <div 
      ref="arcRef"
      class="absolute pointer-events-none"
      style="width: 600px; height: 600px; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    >
      <svg viewBox="0 0 200 200" class="w-full h-full">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="transparent" />
            <stop offset="50%" stop-color="rgba(255,255,255,0.4)" />
            <stop offset="100%" stop-color="transparent" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#arcGradient)"
          stroke-width="0.5"
          stroke-dasharray="60 200"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Noise Texture Overlay -->
    <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');">
    </div>

  </div>
</template>
