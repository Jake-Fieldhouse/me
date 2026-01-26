<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  loading: boolean
}>()

const preloaderRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const barRef = ref<HTMLElement | null>(null)

onMounted(() => {
    // Initial entrance animation
    gsap.from(textRef.value, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    
    gsap.to(barRef.value, {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut"
    })
})

// Exit animation when loading becomes false
const emit = defineEmits(['complete'])

// Watch for loading prop change
import { watch } from 'vue'
watch(() => props.loading, (newVal) => {
    if (!newVal) {
        const tl = gsap.timeline({
            onComplete: () => emit('complete')
        })
        
        tl.to(textRef.value, {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
        })
        .to(barRef.value, {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.5,
            ease: "power2.in"
        }, "-=0.3")
        .to(preloaderRef.value, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut"
        })
    }
})
</script>

<template>
  <div ref="preloaderRef" class="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
    <div class="overflow-hidden mb-4">
        <h1 ref="textRef" class="text-white font-black text-4xl tracking-tighter">
            AG
        </h1>
    </div>
    <div class="w-48 h-[2px] bg-neutral-800 rounded-full overflow-hidden">
        <div ref="barRef" class="w-full h-full bg-white origin-left scale-x-0"></div>
    </div>
  </div>
</template>
