<script setup lang="ts">
  // True fancy curve:
  const val = distance / 150;
  const scale = minScale + (maxScale - minScale) * Math.cos(val * Math.PI / 2);

  return scale; 
});

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
