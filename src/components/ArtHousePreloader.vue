<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import FluidCursor from './FluidCursor.vue'

const props = defineProps<{
  loading: boolean
}>()

const containerRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)
const maskRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline()
  
  // Initial states
  gsap.set(lineRef.value, { scaleX: 0 })
  gsap.set(nameRef.value, { opacity: 0, y: 30 })
  gsap.set(maskRef.value, { x: '-100%' })

  // Elegant sweep line
  tl.to(lineRef.value, {
    scaleX: 1,
    duration: 0.8,
    ease: "power3.inOut"
  })
  
  // Name reveals with mask sweep
  .to(maskRef.value, {
    x: '100%',
    duration: 1,
    ease: "power3.inOut"
  }, "-=0.3")
  
  // Name fades in beautifully
  .to(nameRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.8")
  
  // Hold for a moment
  .to({}, { duration: 0.5 })
})

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    // Elegant exit - sweep up
    const tl = gsap.timeline()
    
    tl.to(nameRef.value, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    })
    .to(lineRef.value, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.in"
    }, "-=0.3")
    .to(containerRef.value, {
      y: '-100%',
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        if (containerRef.value) containerRef.value.style.display = 'none'
      }
    }, "-=0.2")
  }
})
</script>

<template>
  <div 
    ref="containerRef"
    class="fixed inset-0 z-[9999] bg-neutral-950 flex items-center justify-center overflow-hidden"
  >
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black opacity-50"></div>
    
    <!-- Fluid cursor visual behind content -->
    <FluidCursor class="absolute inset-0 z-0 opacity-40" />
    
    <!-- Content container -->
    <div class="relative z-10 flex flex-col items-center gap-6">
      
      <!-- Animated line -->
      <div 
        ref="lineRef"
        class="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent origin-center"
      ></div>
      
      <!-- Name with reveal mask -->
      <div class="relative overflow-hidden">
        <h1 
          ref="nameRef"
          class="text-4xl md:text-6xl font-light tracking-[0.3em] text-white uppercase"
          style="font-family: system-ui, -apple-system, sans-serif;"
        >
          Jake Fieldhouse
        </h1>
        
        <!-- Sweep mask -->
        <div 
          ref="maskRef"
          class="absolute inset-0 bg-neutral-950"
        ></div>
      </div>
      
      <!-- Subtle loading bar -->
      <div class="w-32 h-[2px] bg-neutral-800 rounded-full overflow-hidden mt-4">
        <div class="h-full bg-gradient-to-r from-emerald-500 to-blue-500 animate-loading-sweep"></div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
@keyframes loading-sweep {
  0% { transform: translateX(-100%); width: 50%; }
  50% { transform: translateX(50%); width: 50%; }
  100% { transform: translateX(200%); width: 50%; }
}

.animate-loading-sweep {
  animation: loading-sweep 1.5s ease-in-out infinite;
}
</style>
