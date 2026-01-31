<script setup lang="ts">
// Outcome Statistics Component
// Realistic numbers for 10+ years in the industry
// Note: These are illustrative estimates - update with actuals when available

const stats = [
  {
    value: '1,000+',
    label: 'Devices Repaired',
    description: 'MacBooks, PS5s, phones, and more',
    color: 'text-red-500'
  },
  {
    value: '2TB+',
    label: 'Data Recovered',
    description: 'From dead drives and damaged devices',
    color: 'text-emerald-500'
  },
  {
    value: '15+',
    label: 'Years Experience',
    description: 'Component-level expertise',
    color: 'text-amber-500'
  }
]
</script>

<template>
  <section class="w-full py-12">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="text-center group"
        >
          <div 
            class="text-3xl md:text-4xl font-bold mb-1 transition-colors"
            :class="stat.color"
          >
            {{ stat.value }}
          </div>
          <div class="text-white font-semibold text-sm md:text-base">
            {{ stat.label }}
          </div>
          <div class="text-neutral-500 text-xs mt-1 hidden md:block">
            {{ stat.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
