<script setup lang="ts">
import { cn } from "../lib/utils";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  title: {
    type: String, // Allow string or other type if passed via slot logic logic
    required: false,  
  },
  description: {
    type: String,
    required: false,
  },
  header: {
    type: Object, // VNode or Component
    required: false,
  },
  icon: {
    type: Object, // VNode or Component
    required: false,
  },
});
</script>

<template>
  <div
    :class="
      cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        props.class,
      )
    "
  >
    <slot name="header"></slot>
    <div class="group-hover/bento:translate-x-2 transition duration-200">
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
