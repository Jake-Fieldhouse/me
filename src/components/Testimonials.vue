<script setup lang="ts">
// Testimonials Component with B2B/B2C split
// Ready to be populated with real testimonials when available
import { ref, computed } from 'vue'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  category: 'b2b' | 'consumer' // MSP/Business vs Repair Ninja
}

const activeTab = ref<'all' | 'b2b' | 'consumer'>('all')

const testimonials: Testimonial[] = []

const filteredTestimonials = computed(() => {
  if (activeTab.value === 'all') return testimonials
  return testimonials.filter(t => t.category === activeTab.value)
})

const showPlaceholder = testimonials.length === 0

const categoryLabels = {
  all: 'All Reviews',
  b2b: 'Business Clients',
  consumer: 'Repair Customers'
}
</script>

<template>
  <!-- Only render if testimonials exist -->
  <section v-if="!showPlaceholder" class="w-full py-16">
    <h2 class="text-3xl font-bold text-white text-center mb-4">What Our Clients Say</h2>
    
    <!-- Category Tabs -->
    <div class="flex justify-center gap-2 mb-12">
      <button 
        v-for="(label, key) in categoryLabels" 
        :key="key"
        @click="activeTab = key as 'all' | 'b2b' | 'consumer'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="activeTab === key 
          ? 'bg-white text-black' 
          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'"
      >
        {{ label }}
      </button>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
      <div 
        v-for="(testimonial, index) in filteredTestimonials" 
        :key="index"
        class="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
      >
        <!-- Category Badge -->
        <div class="flex items-center justify-between mb-4">
          <span 
            class="text-xs font-semibold px-2 py-1 rounded-full"
            :class="testimonial.category === 'b2b' 
              ? 'bg-blue-500/20 text-blue-400' 
              : 'bg-red-500/20 text-red-400'"
          >
            {{ testimonial.category === 'b2b' ? 'MSP Services' : 'Repair Ninja' }}
          </span>
          
          <!-- Stars -->
          <div class="flex gap-0.5">
            <svg 
              v-for="star in 5" 
              :key="star"
              class="w-4 h-4"
              :class="star <= testimonial.rating ? 'text-amber-400' : 'text-neutral-700'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
        </div>
        
        <!-- Quote -->
        <blockquote class="text-neutral-300 mb-4 leading-relaxed text-sm">
          "{{ testimonial.quote }}"
        </blockquote>
        
        <!-- Attribution -->
        <div class="pt-4 border-t border-neutral-800">
          <div class="font-semibold text-white text-sm">{{ testimonial.name }}</div>
          <div class="text-xs text-neutral-500">{{ testimonial.role }}, {{ testimonial.company }}</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 
    PLACEHOLDER: This component is ready to receive testimonials.
    
    To add testimonials, populate the testimonials array above with objects like:
    
    B2B Example:
    {
      name: "Sarah Thompson",
      role: "IT Director",
      company: "Hull Manufacturing Ltd",
      quote: "24/7 monitoring caught a ransomware attempt...",
      rating: 5,
      category: 'b2b'
    }
    
    Consumer Example:
    {
      name: "Mark Wilson",
      role: "PS5 HDMI Repair",
      company: "Hull",
      quote: "Sony wanted £300+ for a new console...",
      rating: 5,
      category: 'consumer'
    }
  -->
</template>
