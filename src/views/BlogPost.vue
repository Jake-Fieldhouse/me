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
    title: 'Why ChatGPT Can\'t Find Your Business (Yet)',
    date: '2026-01-28',
    category: 'AI Search',
    readTime: '5 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">Search for your business in ChatGPT or Perplexity. Does it recommend you? For most Hull SMBs, the answer is no. Here's why that matters in 2026.</p>
      
      <h2>How Big Is the Shift from Google to AI?</h2>
      <p>Gartner predicts a <strong>25% drop in traditional search engine volume by 2026</strong> as users increasingly turn to generative AI assistants. ChatGPT now processes over 140 million queries daily, and AI-powered search tools collectively capture 2-17% of query share depending on how you measure it. That's a significant chunk of potential customers who may never see your Google listing.</p>
      
      <h2>Why Are Most Websites Invisible to AI?</h2>
      <p>AI systems like ChatGPT don't crawl websites the way Google does. They rely on:</p>
      <ul>
        <li><strong>Structured data</strong> that explicitly communicates what you do</li>
        <li><strong>Entity authority</strong> from trusted sources linking to you</li>
        <li><strong>AI-specific files</strong> (like llms.txt) that describe your business in machine-readable format</li>
        <li><strong>Question-based content</strong> formatted for direct citation</li>
      </ul>
      <p>Traditional SEO doesn't address any of this. That's why businesses ranking well on Google can be completely invisible to AI.</p>
      
      <h2>What Makes AI Optimization Complex?</h2>
      <p>Getting AI visibility right requires deep technical knowledge: JSON-LD schema implementation, llms.txt specification compliance, semantic HTML structure, and ongoing monitoring of how AI systems cite your content. It's not a one-time fix—it's an evolving strategy.</p>
      
      <h2>Are Competitors Already Doing This?</h2>
      <p>GEO (Generative Engine Optimization) is so new that less than 1% of businesses have implemented it properly. That's an opportunity for early movers—but it won't last forever.</p>
      
      <p>If you're curious whether AI can currently find your business, <a href="/ai-optimization-hull">request a free AI visibility audit</a> and you'll see exactly what's missing.</p>
    `
  },
  'macbook-repair-vs-replace-guide': {
    title: 'MacBook Won\'t Turn On? When Repair Makes More Sense Than Replace',
    date: '2026-01-25',
    category: 'Repair',
    readTime: '4 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">Apple quotes you for a full "logic board replacement". But often, the actual fault is a single component that can be repaired at a fraction of the cost.</p>
      
      <h2>Why Does Apple Say "Unrepairable"?</h2>
      <p>Apple's repair model is based on module replacement, not component-level diagnosis. If any chip on the logic board fails, they replace the entire board. It's fast for them, but expensive for you.</p>
      
      <h2>What Does Component-Level Repair Look Like?</h2>
      <ul>
        <li><strong>Power Management ICs:</strong> A single chip often causes no-power issues</li>
        <li><strong>USB-C Controllers:</strong> Charging problems are typically one component</li>
        <li><strong>Liquid Damage:</strong> Corrosion can be ultrasonically cleaned if caught early</li>
        <li><strong>GPU Issues:</strong> Sometimes a reball or single component swap</li>
      </ul>
      <p>This requires specialized equipment (microscopes, hot air stations, pre-heaters) and years of experience. It's not a DIY job—but it is possible.</p>
      
      <h2>When Should You Repair vs Replace?</h2>
      <p><strong>Repair if:</strong> Your Mac is 1-5 years old, has 16GB+ RAM, or contains irreplaceable data</p>
      <p><strong>Replace if:</strong> It's 7+ years old, or repair cost approaches replacement value</p>
      
      <p><a href="/microsoldering-repair-hull">Request a free diagnosis</a> and you'll get an honest assessment before committing to anything.</p>
    `
  },
  'weee-regulations-2025-business-guide': {
    title: 'WEEE Regulations 2025: What Hull Businesses Need to Know',
    date: '2026-01-20',
    category: 'Compliance',
    readTime: '6 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">The new WEEE regulations effective November 2025 are being replaced by the Electrical and Electronic Equipment (EEE) Regulations. Here's what UK businesses need to know.</p>
      
      <h2>What's Changing in November 2025?</h2>
      <p>The WEEE 2013 Regulations are being modernized with a "designing out waste" approach. Key changes include:</p>
      <ul>
        <li>Clearer definitions of what constitutes EEE (including smart devices, e-cigarettes, products with integrated batteries)</li>
        <li>Wider producer responsibility covering the entire product lifecycle</li>
        <li>Stricter reporting requirements and enhanced enforcement</li>
        <li>Emphasis on repair, reuse, and eco-design principles</li>
      </ul>
      
      <h2>What's the Business Compliance Checklist?</h2>
      <ol>
        <li>Use only Environment Agency registered waste carriers</li>
        <li>Obtain Certificate of Destruction for data-bearing devices</li>
        <li>Keep Waste Transfer Notes for 2+ years</li>
        <li>Verify your disposal provider's registration (check CBDL number)</li>
      </ol>
      
      <h2>How Does GDPR Intersect with E-Waste Disposal?</h2>
      <p>Improper data disposal can result in fines up to <strong>£17.5 million or 4% of global turnover</strong> under UK GDPR—whichever is higher. Data destruction certification isn't optional—it's essential.</p>
      
      <p><a href="/secure-data-disposal-hull">Free e-waste collection</a> includes NIST 800-88 data destruction and full documentation.</p>
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
