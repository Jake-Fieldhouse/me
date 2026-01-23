<script setup lang="ts">
import { ref, computed } from "vue";
import { cn } from "../lib/utils";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const cardRef = ref<HTMLElement | null>(null);
const rotation = ref({ x: 0, y: 0 });

const transformStyle = computed(() => {
  return `perspective(1000px) rotateX(${rotation.value.x}deg) rotateY(${rotation.value.y}deg) scale3d(1, 1, 1)`;
});

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return;

  const rect = cardRef.value.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xPct = mouseX / width - 0.5;
  const yPct = mouseY / height - 0.5;

  rotation.value = {
    x: yPct * -10, // Max tilt deg
    y: xPct * 10,
  };
};

const handleMouseLeave = () => {
  rotation.value = { x: 0, y: 0 };
};
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="{ transform: transformStyle }"
    :class="
      cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-200 ease-out shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        props.class,
      )
    "
  >
    <slot name="header"></slot>
    <div class="group-hover/bento:translate-x-2 transition duration-200 pointer-events-none">
      <slot name="icon"></slot>
      <div class="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        {{ title }}
        <slot name="title"></slot>
      </div>
      <div class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {{ description }}
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>
