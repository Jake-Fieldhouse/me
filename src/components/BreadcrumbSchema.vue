<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Crumb {
  name: string
  url: string
}

const props = defineProps<{
  crumbs: Crumb[]
}>()

const scriptTag = ref<HTMLScriptElement | null>(null)

const schema = computed(() => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jakefieldhouse.co.uk/" },
    ...props.crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 2,
      "name": crumb.name,
      "item": `https://jakefieldhouse.co.uk${crumb.url}`
    }))
  ]
}))

onMounted(() => {
  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.textContent = schema.value
  document.head.appendChild(el)
  scriptTag.value = el
})

onUnmounted(() => {
  if (scriptTag.value) {
    document.head.removeChild(scriptTag.value)
  }
})
</script>

<template>
  <!-- Visual breadcrumb (optional — can be hidden if design doesn't need it) -->
  <nav aria-label="Breadcrumb" class="text-sm text-neutral-500 mb-4">
    <ol class="flex items-center gap-1.5 flex-wrap">
      <li>
        <router-link to="/" class="hover:text-white transition-colors">Home</router-link>
      </li>
      <li v-for="(crumb, i) in crumbs" :key="crumb.url" class="flex items-center gap-1.5">
        <span class="text-neutral-700">/</span>
        <router-link 
          v-if="i < crumbs.length - 1" 
          :to="crumb.url" 
          class="hover:text-white transition-colors"
        >
          {{ crumb.name }}
        </router-link>
        <span v-else class="text-neutral-400">{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>
