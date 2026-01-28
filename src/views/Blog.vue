<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const heroRef = ref<HTMLElement | null>(null)
const postsRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(postsRef, { delay: 0.2 })

// Placeholder blog posts - replace with CMS or static data later
const posts = ref([
  {
    slug: 'why-ai-cant-find-your-business',
    title: 'Why ChatGPT Can\'t Find Your Business (And How to Fix It)',
    excerpt: 'Most Hull businesses are invisible to AI search. Here\'s the technical reason why, and the 5 steps to fix it.',
    date: '2026-01-28',
    category: 'AI Search',
    readTime: '5 min read'
  },
  {
    slug: 'macbook-repair-vs-replace-guide',
    title: 'MacBook Won\'t Turn On? Repair vs Replace Guide for 2026',
    excerpt: 'When Apple says "unrepairable", there\'s often a £150 fix. Here\'s how to know which option is right for you.',
    date: '2026-01-25',
    category: 'Repair',
    readTime: '4 min read'
  },
  {
    slug: 'weee-regulations-2025-business-guide',
    title: 'WEEE Regulations 2025: What Hull Businesses Need to Know',
    excerpt: 'New November 2025 WEEE regulations affect how you dispose of e-waste. Here\'s your compliance checklist.',
    date: '2026-01-20',
    category: 'Compliance',
    readTime: '6 min read'
  }
])

const categoryColors: Record<string, string> = {
  'AI Search': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Repair': 'bg-red-500/10 text-red-400 border-red-500/20',
  'Compliance': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'IT Support': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
}
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16">
    
    <!-- Hero -->
    <header ref="heroRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
        Insights & Guides
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        The <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Blog</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
        Practical tech advice for Hull businesses. No fluff, just actionable insights from the field.
      </p>
    </header>

    <!-- Posts Grid -->
    <section ref="postsRef" class="space-y-6">
      <article 
        v-for="post in posts" 
        :key="post.slug"
        class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group"
      >
        <div class="flex flex-wrap items-center gap-4 mb-4">
          <span :class="['px-3 py-1 rounded-full text-xs font-medium border', categoryColors[post.category]]">
            {{ post.category }}
          </span>
          <span class="text-neutral-500 text-sm">{{ post.date }}</span>
          <span class="text-neutral-500 text-sm">• {{ post.readTime }}</span>
        </div>
        
        <router-link 
          :to="`/blog/${post.slug}`"
          class="block"
        >
          <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {{ post.title }}
          </h2>
          <p class="text-neutral-400 leading-relaxed">
            {{ post.excerpt }}
          </p>
        </router-link>

        <router-link 
          :to="`/blog/${post.slug}`"
          class="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read More 
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </article>
    </section>

    <!-- Back Link -->
    <div class="text-center">
      <router-link to="/" class="text-neutral-500 hover:text-white transition-colors">
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>
