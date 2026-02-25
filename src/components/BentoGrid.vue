<script setup lang="ts">
import { cn } from "../lib/utils";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :class="
      cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
