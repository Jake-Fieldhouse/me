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
    :class="cn('mx-auto hidden md:flex gap-4 items-end mb-8 h-24 justify-center', props.desktopClassName)"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <DockIcon 
        v-for="item in props.items" 
        :key="item.title"
        :item="item"
        :mouseX="mouseX"
    />
  </div>
</template>
