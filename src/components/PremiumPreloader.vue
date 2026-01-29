<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  loading: boolean
}>()

const preloaderRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const progressRef = ref<HTMLElement | null>(null)
const subtextRef = ref<HTMLElement | null>(null)

const systemMessages = [
  "INITIALIZING SECURE CONNECTION...",
  "VERIFYING INTEGRITY...",
  "LOADING ASSETS...",
  "ESTABLISHING UPLINK...",
  "SYSTEM OPERATIONAL"
]

onMounted(() => {
  const tl = gsap.timeline()
  
  // Initial State
  gsap.set(preloaderRef.value, { opacity: 1 })
  gsap.set(textRef.value, { y: 20, opacity: 0 })
  gsap.set(progressRef.value, { scaleX: 0 })
  gsap.set(subtextRef.value, { opacity: 0 })

  // Animation Sequence
  tl.to(textRef.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
  })
  .to(subtextRef.value, {
    opacity: 1,
    duration: 0.5,
    onStart: () => {
      // Message cycling logic would go here if not using simple css animation
    }
  }, "-=0.4")
  .to(progressRef.value, {
    scaleX: 1,
    duration: 1.5,
    ease: "expo.inOut"
  }, "-=0.2")
})

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    const tl = gsap.timeline()

    // Exit Animation
    tl.to([textRef.value, subtextRef.value, progressRef.value], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.in"
    })
    .to(preloaderRef.value, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.2")
    .set(preloaderRef.value, { display: 'none' })
  }
})
</script>

<template>
  <div 
    ref="preloaderRef"
    class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center cursor-none"
  >
    <!-- Name/Logo -->
    <div class="overflow-hidden mb-8">
      <h1 
        ref="textRef" 
        class="text-4xl md:text-5xl font-black tracking-tighter text-white"
      >
        JAKE FIELDHOUSE
      </h1>
    </div>

    <!-- Progress Bar -->
    <div class="w-64 h-1 bg-neutral-900 rounded-full overflow-hidden mb-4 relative">
      <div 
        ref="progressRef"
        class="absolute inset-0 bg-white origin-left"
      ></div>
    </div>

    <!-- System Messages -->
    <div 
      ref="subtextRef"
      class="h-4 font-mono text-xs text-neutral-500 tracking-widest"
    >
      <span class="animate-pulse">INITIALIZING SYSTEM...</span>
    </div>
    
     <!-- Background Grid Effect (Optional subtle texture) -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
  </div>
</template>
