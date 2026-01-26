<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";

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
const isExpanded = ref(false);

const style = computed(() => {
  if (!props.initialRect || !props.isOpen) return {};

  if (isExpanded.value) {
    return {
      top: "10%",
      left: "50%",
      width: "90%",
      maxWidth: "800px",
      height: "80vh",
      transform: "translateX(-50%)",
      borderRadius: "24px",
    };
  }

  // Initial state (matching the card)
  return {
    top: `${props.initialRect.top}px`,
    left: `${props.initialRect.left}px`,
    width: `${props.initialRect.width}px`,
    height: `${props.initialRect.height}px`,
    transform: "none",
    borderRadius: "12px",
  };
});

watch(
  () => props.isOpen,
  async (val) => {
    if (val) {
      isAnimating.value = true;
      // Force initial state render
      isExpanded.value = false;
      
      await nextTick();
      
      // Trigger expansion next frame
      requestAnimationFrame(() => {
        isExpanded.value = true;
        setTimeout(() => {
           isAnimating.value = false;
        }, 500); // Match transition duration
      });
    } else {
      isExpanded.value = false;
      isAnimating.value = true;
       setTimeout(() => {
           isAnimating.value = false;
        }, 500);
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
    <div
      v-if="isOpen || isAnimating"
      class="fixed z-[70] bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 cubic-bezier(0.25, 0.8, 0.25, 1)"
      :style="style"
    >
      <!-- Content Wrapper -->
       <div class="relative w-full h-full flex flex-col p-8 overflow-y-auto custom-scrollbar">
           
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
.cubic-bezier {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
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
