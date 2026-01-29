<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  loading: boolean
}>()

const containerRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Cinematic Reveal
  // Start with wide tracking and blur
  gsap.set(textRef.value, { 
      filter: 'blur(20px)', 
      letterSpacing: '0.5em', 
      opacity: 0,
      scale: 1.1
  })

  gsap.to(textRef.value, {
      filter: 'blur(0px)',
      letterSpacing: '0em',
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.out"
  })
})

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    // Elegant fade out
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
    class="fixed inset-0 z-[40] bg-black flex flex-col items-center justify-center cursor-none"
  >
    <!-- Cinematic Typography -->
    <h1 
      ref="textRef" 
      class="text-4xl md:text-6xl font-light text-white tracking-tight mix-blend-exclusion"
    >
      JAKE FIELDHOUSE
    </h1>
  </div>
</template>
