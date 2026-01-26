<script setup lang="ts">
import { ref } from "vue";
import { cn } from "../lib/utils";
import DockIcon from "./DockIcon.vue";

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

const mouseX = ref(Infinity);

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX;
};

const handleMouseLeave = () => {
  mouseX.value = Infinity;
};
</script>

<template>
  <div 
    :class="cn('flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 shadow-2xl transition-all duration-300', props.desktopClassName)"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <DockIcon 
      v-for="item in items" 
      :key="item.title"
      :item="item" 
      :mouseX="mouseX"
    />
  </div>
</template>
