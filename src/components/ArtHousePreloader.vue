<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import FluidCursor from './FluidCursor.vue'

const props = defineProps<{
  loading: boolean
}>()

const containerRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const roleRef = ref<HTMLElement | null>(null)

// Animation timeline
onMounted(() => {
  const tl = gsap.timeline()

  // Initial clean state
  gsap.set([nameRef.value, roleRef.value], { 
    opacity: 0, 
    y: 40,
    filter: 'blur(10px)'
  })

  // Cinematic reveal
  tl.to(nameRef.value, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 1.2,
    ease: "power3.out",
    delay: 0.5
  })
  .to(roleRef.value, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 1.0,
    ease: "power3.out"
  }, "-=0.8")
})

watch(() => props.loading, (newVal) => {
  if (!newVal) {
    // Exit sequence
    gsap.to(containerRef.value, {
      opacity: 0,
      scale: 1.05, // Subtle zoom out feel
      duration: 1.2,
      ease: "power3.inOut",
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
    class="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
  >
    <!-- 
       MOONSHOT CHANGE: 
       Full screen fluid cursor. No opacity reduction.
       High z-index to be main background but behind text.
    -->
    <FluidCursor 
      class="absolute inset-0 z-0" 
      :splat-radius="0.25"
      :curl="8"
      :color-update-speed="15"
      :density-dissipation="3.5"
    />
    
    <!-- Content Overlay -->
    <!-- Pointer events none so clicks go through to fluid if needed, though fluid is z-0 -->
    <div class="relative z-10 flex flex-col items-center pointer-events-none mix-blend-screen">
      
      <h1 
        ref="nameRef"
        class="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase text-center leading-none"
        style="font-family: 'Inter', system-ui, sans-serif; text-shadow: 0 0 40px rgba(255,255,255,0.3);"
      >
        Jake<br>Fieldhouse
      </h1>
      
      <div 
        ref="roleRef"
        class="mt-6 md:mt-10 flex items-center gap-4"
      >
        <!-- Minimal loading bar -->
        <div class="h-[2px] w-24 bg-white/20 rounded-full overflow-hidden">
          <div class="h-full bg-white animate-progress origin-left"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes progress {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

.animate-progress {
  animation: progress 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}
</style>
