<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

const props = defineProps<{
  isOpen: boolean;
  initialRect: DOMRect | null;
  item: { title: string; description: string; details?: string[] } | null;
  colorClass?: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void
}>();

const isAnimating = ref(false);
const cardRef = ref<HTMLElement | null>(null);

watch(
  () => props.isOpen,
  async (nav) => {
    if (nav) {
      // OPENING
      isAnimating.value = true;
      await nextTick();
      
      const card = cardRef.value;
      if (!card || !props.initialRect) return;

      // 1. Measure Final State (It's already rendered in fixed centered position)
      const finalRect = card.getBoundingClientRect();

      // 2. Calculate Invert Transforms
      const scaleX = props.initialRect.width / finalRect.width;
      const scaleY = props.initialRect.height / finalRect.height;
      const transX = props.initialRect.left - finalRect.left;
      const transY = props.initialRect.top - finalRect.top;

      // 3. Apply Initial State (Instant)
      card.style.transformOrigin = "top left";
      card.style.transition = "none";
      card.style.transform = `translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})`;
      card.style.borderRadius = "12px"; // Match Bento Card

      // Force Reflow
      card.offsetHeight; 

      // 4. Play Animation to Final State
      requestAnimationFrame(() => {
        card.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), border-radius 0.5s ease";
        card.style.transform = "none";
        card.style.borderRadius = "24px";
      });

      setTimeout(() => {
         isAnimating.value = false;
      }, 500);

    } else {
      // CLOSING
      isAnimating.value = true;
      const card = cardRef.value;
      if (!card || !props.initialRect) return;

      // 1. Current State (Final)
      const finalRect = card.getBoundingClientRect();

      // 2. Calculate Target Transforms (Back to Initial)
      const scaleX = props.initialRect.width / finalRect.width;
      const scaleY = props.initialRect.height / finalRect.height;
      const transX = props.initialRect.left - finalRect.left;
      const transY = props.initialRect.top - finalRect.top;

      // 3. Play Animation
      requestAnimationFrame(() => {
         card.style.transition = "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), border-radius 0.4s ease, opacity 0.4s ease";
         card.style.transformOrigin = "top left";
         card.style.transform = `translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})`;
         card.style.borderRadius = "12px";
         card.style.opacity = "0"; // Fade out slightly at end to merge
      });

      setTimeout(() => {
        isAnimating.value = false;
      }, 400);
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <div 
        v-if="isOpen || isAnimating"
        class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md transition-opacity duration-500"
        :class="{ 'opacity-0': !isOpen, 'opacity-100': isOpen }"
        @click="$emit('close')"
    />

    <!-- Animated Card -->
    <!-- Always rendered in 'Final' position, transformed by JS -->
    <div
      v-if="isOpen || isAnimating"
      ref="cardRef"
      class="fixed z-[70] bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden flex flex-col will-change-transform"
      style="top: 10%; left: 50%; width: 90%; max-width: 800px; height: 80vh; margin-left: -45%; transform-origin: top left;"
      :class="{ 'pointer-events-none': isAnimating }"
    >
        <!-- Correcting margin-left trick for centering with fixed width/left 50% -->
        <!-- Actually, better to use transform: translateX(-50%) for centering, BUT 
             FLIP is easier if we don't mix transforms. 
             Let's use left: 50%, top: 10% and calc margins or use a flex wrapper.
             Using `left: 50%; translate: -50%` CONFLICTS with FLIP `transform`.
             So we must center via margins or inset. 
        -->
        
      <!-- Inner Content - Fade in/out to hide squash effect -->
       <div 
         class="relative w-full h-full flex flex-col p-8 overflow-y-auto custom-scrollbar transition-opacity duration-300 delay-100"
         :class="{ 'opacity-0': isAnimating && !isOpen, 'opacity-100': !isAnimating || isOpen }"
       >
           
           <!-- Close Button -->
           <button 
             @click.stop="$emit('close')"
             class="absolute top-4 right-4 p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors z-10"
           >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12" />
             </svg>
           </button>

           <h2 class="text-4xl font-bold mb-4 text-white font-inter">{{ item?.title }}</h2>
           <p class="text-xl text-neutral-400 mb-8 border-b border-neutral-800 pb-4">{{ item?.description }}</p>

           <div class="space-y-4">
               <h3 class="text-lg font-semibold text-neutral-200">Services Included:</h3>
               <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li 
                    v-for="(detail, idx) in item?.details || []" 
                    :key="idx"
                    class="flex items-center gap-3 p-4 bg-neutral-800/50 rounded-lg border border-neutral-800/50"
                  >
                    <div class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span class="text-neutral-300">{{ detail }}</span>
                  </li>
               </ul>
           </div>

           <!-- Placeholder for dynamic content or CTA -->
           <div class="mt-auto pt-8 flex justify-end">
              <button 
                 class="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition-colors"
                 @click="$emit('close')" 
               >
                 Done
              </button>
           </div>
       </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Center the card without transform: translate */
.fixed.z-\[70\] {
    left: 50%;
    transform: translateX(-50%); /* Start centered */
    /* Wait, if we use translateX(-50%) here, we must include it in our FLIP calculations.
       Or we can use margin-left if width is fixed. 
       Let's stick to simple centering: left: 0; right: 0; margin: auto; width: ... */
    left: 0;
    right: 0;
    margin: auto;
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.2);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
}
</style>
