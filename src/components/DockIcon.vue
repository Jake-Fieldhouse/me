<script setup lang="ts">
import { ref, computed, toRef } from "vue";
import { useElementBounding } from "@vueuse/core"; 

// Since we might not have vueuse, let's write a vanilla composition.
// Actually, let's do it purely in this component with a ref.

const props = defineProps<{
  item: { title: string; icon: string; href: string };
  mouseX: number;
}>();

const iconRef = ref<HTMLElement | null>(null);

// Calculate distance and scale
const width = computed(() => {
  if (!iconRef.value || props.mouseX === Infinity) return 40; // Base width 40px (w-10)

  const rect = iconRef.value.getBoundingClientRect();
  const iconCenterX = rect.left + rect.width / 2;
  const distance = Math.abs(props.mouseX - iconCenterX);

  // Gaussian-ish decay
  // Max width = 80px ? (w-20)
  // Distance where effect matches base = 150px
  
  if (distance > 150) return 40;

  const maxScale = 80;
  const minScale = 40;
  
  // Cosine interpolation for smoother bell curve than linear
  // or simple linear interpolation 
  // let scale = minScale + (maxScale - minScale) * (1 - distance / 150);
  
  // True fancy curve:
  const val = distance / 150;
  const scale = minScale + (maxScale - minScale) * Math.cos(val * Math.PI / 2);

  return scale; 
});

const style = computed(() => {
    return {
        width: `${width.value}px`,
        height: `${width.value}px`,
    }
})

</script>

<template>
  <div 
    ref="iconRef"
    class="relative flex flex-col items-center justify-center transition-all duration-75 ease-out cursor-pointer"
    :style="{ width: `${width}px` }" 
  >
      <!-- We animate the anchor tag wrapper size -->
      <a
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center w-full h-full p-2 shadow-xl hover:bg-neutral-700 transition-colors overflow-hidden"
      >
        <img :src="item.icon" :alt="item.title" class="w-1/2 h-1/2 invert" />
      </a>
  </div>
</template>
