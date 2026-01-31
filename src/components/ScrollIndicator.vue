<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
    <span class="text-xs text-neutral-400 uppercase tracking-widest">Scroll</span>
    <ChevronDown class="w-5 h-5 text-neutral-400" />
  </div>
</template>
