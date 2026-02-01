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

const spotlightPos = ref({ x: 0, y: 0 });

const handleMouseMove = (e: MouseEvent) => {
  // Use offsetX/Y if possible, fallback to manual calc if cached dimensions exist
  // We use cached width/height to avoid reading DOM, but we need position.
  // Actually, standard event offsetX/Y is relative to the target, which might be a child.
  // Safe approach: Capture rect ONCE on Enter, assume it doesn't change size/pos continuously during hover.
  
  // If we rely on offsetX, it breaks if we hover children.
  // Best approach: Use the cached width/height, but for X/Y, we still need reliable coords.
  // If we cache rect on Enter, and the user Scrolls, the rect is invalid.
  // BUT: The Tilt effect is only valid while hovering.
  // Optimization: Only call getBoundingClientRect if we track scroll?
  // OR: Use requestAnimationFrame to throttle the read/write.
  
  // Let's go with requestAnimationFrame to unblock the main thread.
  // AND cache dimensions.
  
  if (!cardRef.value) return;
  
  // We can't easily avoid getBoundingClientRect for absolute precision without observers.
  // But we CAN throttle it.
  requestAnimationFrame(() => {
     if (!cardRef.value) return;
     const rect = cardRef.value.getBoundingClientRect();
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
  <div
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
  </div>
</template>
