<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { blogPosts, categoryColors } from '../data/blogPosts'
import IconArrowRight from '../components/icons/IconArrowRight.vue'
import BreadcrumbSchema from '../components/BreadcrumbSchema.vue'

const heroRef = ref<HTMLElement | null>(null)
const postsRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(postsRef, { delay: 0.2 })

// Posts from centralized data layer
const posts = ref(blogPosts)
</script>

<template>
  <div class="relative w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16">
    
    <!-- Hero -->
    <BreadcrumbSchema :crumbs="[{ name: 'Blog', url: '/blog' }]" />

    <header ref="heroRef" class="text-center space-y-6 mt-10">
      <div class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
        Insights & Guides
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white">
        The <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Blog</span>
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-readable">
        Practical tech advice for Hull businesses. No fluff, just actionable insights from the field.
      </p>
    </header>

    <!-- Posts Grid -->
    <section ref="postsRef" class="space-y-6">
      <article 
        v-for="post in posts" 
        :key="post.slug"
        class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group hover-lift scroll-reveal"
      >
        <div class="flex flex-wrap items-center gap-4 mb-4">
          <span :class="['px-3 py-1 rounded-full text-xs font-medium border', categoryColors[post.category]]">
            {{ post.category }}
          </span>
          <span class="text-neutral-400 text-sm">{{ post.date }}</span>
          <span class="text-neutral-400 text-sm">• {{ post.readTime }}</span>
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
          <IconArrowRight class="w-4 h-4" />
        </router-link>
      </article>
    </section>

    <!-- Back Link -->
    <div class="text-center">
      <router-link to="/" class="text-neutral-400 hover:text-white transition-colors">
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>
