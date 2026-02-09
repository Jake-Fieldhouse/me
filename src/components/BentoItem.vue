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
  to: {
    type: String,
    required: false,
    default: null,
  },
});

const cardRef = ref<HTMLElement | null>(null);
const rotation = ref({ x: 0, y: 0 });

const transformStyle = computed(() => {
  return `perspective(1000px) rotateX(${rotation.value.x}deg) rotateY(${rotation.value.y}deg) scale3d(1, 1, 1)`;
});

const spotlightPos = ref({ x: 0, y: 0 });

const getEl = (): HTMLElement | null => {
  if (!cardRef.value) return null;
  // When rendered as router-link, cardRef is a component instance — grab its $el
  const raw = cardRef.value as any;
  return raw.$el instanceof HTMLElement ? raw.$el : raw instanceof HTMLElement ? raw : null;
};

const handleMouseMove = (e: MouseEvent) => {
  // RAF-throttled spotlight/tilt effect calculation
  if (!cardRef.value) return;
  
  requestAnimationFrame(() => {
     const el = getEl();
     if (!el) return;
     const rect = el.getBoundingClientRect();
     const mouseX = e.clientX - rect.left;
     const mouseY = e.clientY - rect.top;
     
     spotlightPos.value = { x: mouseX, y: mouseY };

     const xPct = mouseX / rect.width - 0.5;
     const yPct = mouseY / rect.height - 0.5;
    
     rotation.value = {
        x: yPct * -10, 
        y: xPct * 10,
     };
  });
};

const handleMouseLeave = () => {
  rotation.value = { x: 0, y: 0 };
};
</script>

<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @keydown.enter="$emit('click', $event)"
    @keydown.space.prevent="$emit('click', $event)"
    role="button"
    tabindex="0"
    :style="{ transform: transformStyle }"
    :class="
      cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-200 ease-out shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        props.class,
      )
    "
  >
    <div
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/bento:opacity-100"
      :style="{
        background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255,255,255,0.1), transparent 40%)`
      }"
    />
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
  </component>
</template>
