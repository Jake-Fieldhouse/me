<script setup lang="ts">
import IconExternalLink from './icons/IconExternalLink.vue'

defineProps<{
  stat: string
  source: string
  sourceUrl: string
  year?: string
}>()
</script>

<template>
  <span class="cited-stat group relative inline">
    <span class="font-semibold text-white">{{ stat }}</span>
    <a 
      :href="sourceUrl" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-flex items-center ml-1 text-neutral-500 hover:text-neutral-300 transition-colors"
      :title="`Source: ${source}${year ? ` (${year})` : ''}`"
      :aria-label="`Source: ${source}${year ? ` (${year})` : ''}`"
    >
      <IconExternalLink class="w-3.5 h-3.5" />
    </a>
    <!-- Tooltip on hover -->
    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-neutral-800 text-neutral-300 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-neutral-700 shadow-lg z-50">
      Source: {{ source }}<span v-if="year"> ({{ year }})</span>
    </span>
  </span>
</template>
