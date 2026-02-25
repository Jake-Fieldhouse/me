<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  item: { title: string; icon: string; href: string };
  mouseX: number;
}>();

const iconRef = ref<HTMLElement | null>(null);

// Cache rect to avoid forced layout in computed (was calling getBoundingClientRect ~60x/sec)
const cachedRect = ref<{ left: number; width: number }>({ left: 0, width: 0 });

function updateCachedRect() {
  if (iconRef.value) {
    const rect = iconRef.value.getBoundingClientRect();
    cachedRect.value = { left: rect.left, width: rect.width };
  }
}

// Update cache on resize (layout changes)
onMounted(() => {
  window.addEventListener('resize', updateCachedRect, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('resize', updateCachedRect);
});

// Calculate distance and scale using cached rect (no forced layout)
const width = computed(() => {
  if (!iconRef.value || props.mouseX === Infinity) return 40;

  const iconCenterX = cachedRect.value.left + cachedRect.value.width / 2;
  const distance = Math.abs(props.mouseX - iconCenterX);

  if (distance > 150) return 40;

  const maxScale = 80;
  const minScale = 40;
  const val = distance / 150;
  const scale = minScale + (maxScale - minScale) * Math.cos(val * Math.PI / 2);

  return scale; 
});
</script>

<template>
  <div 
    ref="iconRef"
    class="relative flex flex-col items-center justify-center transition-all duration-75 ease-out cursor-pointer"
    :style="{ width: `${width}px`, height: `${width}px` }" 
    @mouseenter="updateCachedRect"
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
