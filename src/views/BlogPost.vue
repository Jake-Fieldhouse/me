<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScrollReveal } from '../composables/useScrollReveal'

const route = useRoute()
const router = useRouter()
const heroRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef)
useScrollReveal(contentRef, { delay: 0.2 })

// Placeholder post data - replace with CMS or static data later
const posts: Record<string, any> = {
  'why-ai-cant-find-your-business': {
    title: 'Why ChatGPT Can\'t Find Your Business (And How to Fix It)',
    date: '2026-01-28',
    category: 'AI Search',
    readTime: '5 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">If you search for "IT support in Hull" on ChatGPT or Perplexity, does your business appear? For most Hull SMBs, the answer is no. Here's why, and how to fix it.</p>
      
      <h2>The Problem: AI Doesn't Crawl Like Google</h2>
      <p>Google's been crawling the web for 25 years. It knows every page, every link, every mention. AI systems like ChatGPT are different—they're trained on snapshots of web data, and they prioritize structured, authoritative content.</p>
      
      <h2>What AI Actually Looks For</h2>
      <p>To get cited by AI, your website needs:</p>
      <ul>
        <li><strong>Schema Markup:</strong> JSON-LD structured data that tells AI exactly what you do</li>
        <li><strong>llms.txt:</strong> A dedicated file summarizing your business for AI crawlers</li>
        <li><strong>FAQ Architecture:</strong> Question-based content AI can directly quote</li>
        <li><strong>Trust Signals:</strong> Credentials, registrations, and third-party validation</li>
      </ul>
      
      <h2>The 5-Step Fix</h2>
      <ol>
        <li>Add Organization schema with your credentials (Companies House, ICO, etc.)</li>
        <li>Create /llms.txt and /llms-full.txt files</li>
        <li>Build FAQPage schema around common questions</li>
        <li>Add HowTo schema for your key services</li>
        <li>Monitor AI responses and iterate</li>
      </ol>
      
      <p>We implemented all of this on our own site—that's why we appear when you ask AI about IT support in Hull. <a href="/ai-optimization-hull">Want us to do the same for you?</a></p>
    `
  },
  'macbook-repair-vs-replace-guide': {
    title: 'MacBook Won\'t Turn On? Repair vs Replace Guide for 2026',
    date: '2026-01-25',
    category: 'Repair',
    readTime: '4 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">Apple quotes you £700+ for a "logic board replacement". Before you bin your MacBook or buy new, there's often a £150-350 fix available.</p>
      
      <h2>Why Apple Says "Unrepairable"</h2>
      <p>Apple's repair model is based on module replacement, not component-level diagnosis. If any chip on the logic board fails, they replace the entire board. It's fast for them, but expensive for you.</p>
      
      <h2>What We Actually Fix</h2>
      <ul>
        <li><strong>Power Management ICs:</strong> A £15 chip often causes no-power issues</li>
        <li><strong>USB-C Controllers:</strong> Charging problems are usually one component</li>
        <li><strong>Liquid Damage:</strong> Corrosion can be ultrasonically cleaned if caught early</li>
        <li><strong>GPU Issues:</strong> Sometimes a reball or single component swap</li>
      </ul>
      
      <h2>When to Repair vs Replace</h2>
      <p><strong>Repair if:</strong> Your Mac is 1-5 years old, has 16GB+ RAM, or contains irreplaceable data</p>
      <p><strong>Replace if:</strong> It's 7+ years old, repair cost exceeds 60% of replacement value</p>
      
      <p><a href="/microsoldering-repair-hull">Request a free diagnosis</a> and we'll give you an honest assessment.</p>
    `
  },
  'weee-regulations-2025-business-guide': {
    title: 'WEEE Regulations 2025: What Hull Businesses Need to Know',
    date: '2026-01-20',
    category: 'Compliance',
    readTime: '6 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">The new WEEE regulations effective November 2025 change how UK businesses must dispose of electronic waste. Here's your compliance checklist.</p>
      
      <h2>What Changed</h2>
      <p>The updated regulations increase producer responsibility and tighten requirements for business e-waste disposal. Key changes:</p>
      <ul>
        <li>Stricter documentation requirements for Waste Transfer Notes</li>
        <li>Enhanced data destruction certification requirements</li>
        <li>Higher penalties for non-compliance</li>
      </ul>
      
      <h2>Your Compliance Checklist</h2>
      <ol>
        <li>Use only Environment Agency registered waste carriers</li>
        <li>Obtain Certificate of Destruction for data-bearing devices</li>
        <li>Keep Waste Transfer Notes for 2+ years</li>
        <li>Verify your disposal provider's registration (check CBDL number)</li>
      </ol>
      
      <h2>GDPR Intersection</h2>
      <p>Remember: improper data disposal can result in fines up to £17.5 million under UK GDPR. Data destruction certification isn't optional—it's essential.</p>
      
      <p><a href="/secure-data-disposal-hull">Our free e-waste collection</a> includes NIST 800-88 data destruction and full documentation.</p>
    `
  }
}

const currentPost = computed(() => {
  const slug = route.params.slug as string
  return posts[slug] || null
})

const categoryColors: Record<string, string> = {
  'AI Search': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Repair': 'bg-red-500/10 text-red-400 border-red-500/20',
  'Compliance': 'bg-amber-500/10 text-amber-400 border-amber-500/20'
}

// If post doesn't exist, redirect to blog
onMounted(() => {
  if (!currentPost.value) {
    router.push('/blog')
  }
})
</script>

<template>
  <div v-if="currentPost" class="relative w-full max-w-3xl mx-auto px-6 py-20 flex flex-col gap-12">
    
    <!-- Article Header -->
    <header ref="heroRef" class="space-y-6 mt-10">
      <router-link to="/blog" class="text-neutral-500 hover:text-white transition-colors text-sm">
        ← Back to Blog
      </router-link>
      
      <div class="flex flex-wrap items-center gap-4">
        <span :class="['px-3 py-1 rounded-full text-xs font-medium border', categoryColors[currentPost.category]]">
          {{ currentPost.category }}
        </span>
        <span class="text-neutral-500 text-sm">{{ currentPost.date }}</span>
        <span class="text-neutral-500 text-sm">• {{ currentPost.readTime }}</span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
        {{ currentPost.title }}
      </h1>
      
      <p class="text-neutral-400">
        By <span class="text-white">{{ currentPost.author }}</span>
      </p>
    </header>

    <!-- Article Content -->
    <article 
      ref="contentRef" 
      class="prose prose-invert prose-lg max-w-none
             prose-headings:font-bold prose-headings:text-white
             prose-p:text-neutral-300 prose-p:leading-relaxed
             prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300
             prose-strong:text-white
             prose-ul:text-neutral-300 prose-ol:text-neutral-300
             prose-li:marker:text-neutral-500"
      v-html="currentPost.content"
    />

    <!-- CTA -->
    <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
      <h3 class="text-xl font-bold text-white mb-4">Need Help With This?</h3>
      <p class="text-neutral-400 mb-6">
        Whether it's AI optimization, device repair, or e-waste disposal—I respond within 24 hours.
      </p>
      <router-link 
        to="/contact"
        class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
      >
        Get in Touch
      </router-link>
    </div>

    <!-- Back Link -->
    <div class="text-center">
      <router-link to="/blog" class="text-neutral-500 hover:text-white transition-colors">
        ← Back to Blog
      </router-link>
    </div>
  </div>
</template>
