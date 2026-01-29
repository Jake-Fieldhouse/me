<script setup lang="ts">
// Testimonials Placeholder Component
// Ready to be populated with real testimonials when available

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
}

// Placeholder - replace with real testimonials when available
const testimonials: Testimonial[] = [
  // Example structure:
  // {
  //   name: "John Smith",
  //   role: "IT Director",
  //   company: "Hull Manufacturing Ltd",
  //   quote: "Jake's team transformed our IT infrastructure. 24/7 monitoring caught a ransomware attempt before it spread.",
  //   rating: 5
  // }
]

const showPlaceholder = testimonials.length === 0
</script>

<template>
  <!-- Only render if testimonials exist or in dev mode for preview -->
  <section v-if="!showPlaceholder" class="w-full py-16">
    <h2 class="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
      <div 
        v-for="(testimonial, index) in testimonials" 
        :key="index"
        class="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
      >
        <!-- Stars -->
        <div class="flex gap-1 mb-4">
          <svg 
            v-for="star in 5" 
            :key="star"
            class="w-5 h-5"
            :class="star <= testimonial.rating ? 'text-amber-400' : 'text-neutral-700'"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        
        <!-- Quote -->
        <blockquote class="text-neutral-300 mb-4 leading-relaxed">
          "{{ testimonial.quote }}"
        </blockquote>
        
        <!-- Attribution -->
        <div class="pt-4 border-t border-neutral-800">
          <div class="font-semibold text-white">{{ testimonial.name }}</div>
          <div class="text-sm text-neutral-500">{{ testimonial.role }}, {{ testimonial.company }}</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 
    PLACEHOLDER: This component is ready to receive testimonials.
    
    To add testimonials, populate the testimonials array above with objects like:
    {
      name: "Client Name",
      role: "Their Role",
      company: "Company Name",
      quote: "Their testimonial text...",
      rating: 5
    }
    
    Once you have 2-3 testimonials, remove this comment and the showPlaceholder logic.
  -->
</template>
