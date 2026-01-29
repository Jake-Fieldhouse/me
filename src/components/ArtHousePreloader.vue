<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  loading: boolean
}>()

const containerRef = ref<HTMLElement | null>(null)
const word1Ref = ref<HTMLElement | null>(null)
const word2Ref = ref<HTMLElement | null>(null)

const firstName = "JAKE".split("")
const lastName = "FIELDHOUSE".split("")

onMounted(() => {
  const tl = gsap.timeline()
  
  // Random staggered reveal for a "decoding" feel
  // Select all chars from both words
  const chars = [
    ...(word1Ref.value?.children || []),
    ...(word2Ref.value?.children || [])
  ]

  // Initial State
  gsap.set(chars, { 
      opacity: 0,
      filter: 'blur(15px)',
      y: 40,
      scale: 1.5
  })

  // Reveal Animation
  tl.to(chars, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
      duration: 1.5,
      stagger: {
          amount: 1,
          from: "random" // "Bleeding edge" random pixelation effect
      },
      ease: "power3.out"
  })
})

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    // Elegant fade out
    gsap.to(containerRef.value, {
      opacity: 0,
      duration: 2, // Slow, cinematic fade
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
    <!-- Cinematic Typography Container -->
    <div class="relative z-10 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mix-blend-exclusion">
        
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

    <!-- Subtext -->
    <div class="absolute bottom-12 text-center mix-blend-difference">
         <p class="text-neutral-500 font-mono text-xs tracking-[0.5em] uppercase opacity-50 animate-pulse">
            Consulting • Engineering • Intelligence
         </p>
    </div>

    <!-- Noise Texture Overlay (Filmic Grain) -->
    <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');">
    </div>

  </div>
</template>
