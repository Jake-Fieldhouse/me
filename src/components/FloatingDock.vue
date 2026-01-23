<script setup lang="ts">
import { ref } from "vue";
import { cn } from "../lib/utils";

interface Item {
  title: string;
  icon: string | any;
  href: string;
}

interface Props {
  items: Item[];
  desktopClassName?: string;
  mobileClassName?: string;
}

const props = defineProps<Props>();

const hoveredIndex = ref<number | null>(null);


function getWidth(index: number) {
  if (hoveredIndex.value === null) return "w-10";
  const diff = Math.abs(hoveredIndex.value - index);
  if (diff === 0) return "w-16";
  if (diff === 1) return "w-12";
  return "w-10";
}

</script>

<template>
  <div :class="cn('mx-auto flex gap-4 items-end mb-8', props.desktopClassName)">
    <div
      v-for="(item, index) in props.items"
      :key="item.title"
      class="relative flex flex-col items-center justify-center transition-all duration-300 ease-out cursor-pointer"
      :class="getWidth(index)"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
    >
      <a
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center w-full aspect-square overflow-hidden shadow-xl hover:bg-neutral-700 transition-colors"
      >
        <img :src="item.icon" :alt="item.title" class="w-1/2 h-1/2 invert" />
      </a>
    </div>
  </div>
</template>
