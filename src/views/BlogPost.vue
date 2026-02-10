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

interface BlogPost {
  title: string
  date: string
  category: string
  readTime: string
  author: string
  content: string
}

// Blog post data - replace with CMS integration when needed
const posts: Record<string, BlogPost> = {
  'why-ai-cant-find-your-business': {
    title: 'Why ChatGPT Can\'t Find Your Business (Yet)',
    date: '2026-01-28',
    category: 'AI Search',
    readTime: '5 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">Open ChatGPT. Ask it to recommend an IT company in Hull. If your business doesn't appear, you're invisible to a growing segment of customers who've stopped using Google.</p>
      
      <h2>How Big Is the Shift from Google to AI?</h2>
      <p>Industry analysts predict traditional search volume will decline significantly as users shift to AI assistants. ChatGPT, Perplexity, and similar tools now handle <strong>hundreds of millions of queries daily</strong>, and that number keeps growing. These aren't niche tools anymore; they're how a meaningful portion of your potential customers find services.</p>
      <p>The difference? AI doesn't show ten blue links. It gives one answer. If you're not in that answer, you don't exist.</p>
      
      <h2>Why Are Most Websites Invisible to AI?</h2>
      <p>Google crawls your pages and indexes keywords. AI systems work differently. They rely on:</p>
      <ul>
        <li><strong>Structured data (JSON-LD)</strong>: explicit metadata that tells AI what you do, where you operate, and what services you offer</li>
        <li><strong>Entity authority</strong>: citations from trusted sources that establish you as a real business</li>
        <li><strong>llms.txt files</strong>: machine-readable summaries specifically designed for AI crawlers</li>
        <li><strong>FAQ-structured content</strong>: answer-first formatting that AI can quote directly</li>
      </ul>
      <p>A business ranking #1 on Google can be completely absent from AI responses. Traditional SEO and GEO (Generative Engine Optimization) are different disciplines.</p>
      
      <h2>What Makes AI Optimization Complex?</h2>
      <p>This isn't a one-time plugin install. It requires JSON-LD schema implementation, semantic HTML structure, llms.txt specification compliance, and continuous monitoring. The rules change monthly as models update their training data.</p>
      
      <h2>Are Competitors Already Doing This?</h2>
      <p>GEO is still in its infancy. Most businesses haven't touched it. That's the opportunity. Early movers will dominate AI search for their niches before the industry catches up.</p>
      
      <p>Curious whether AI can currently find your business? <a href="/ai-optimization-hull">Request a free visibility audit</a> and you'll see exactly what's missing and what it would take to fix.</p>
    `
  },
  'macbook-repair-vs-replace-guide': {
    title: 'MacBook Won\'t Turn On? When Repair Makes More Sense Than Replace',
    date: '2026-01-25',
    category: 'Repair',
    readTime: '4 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">Apple quotes you for a full "logic board replacement." The actual fault? Often a single component that can be sourced for a few pounds. Here's why component-level repair often makes more sense than paying Apple's prices or binning a perfectly good machine.</p>
      
      <h2>Why Does Apple Say "Unrepairable"?</h2>
      <p>Apple doesn't diagnose to component level. Their model is module replacement: if a single chip fails, they swap the entire logic board. It's efficient for their workflow, but expensive for you. The faulty component often costs a fraction of what they charge for the board.</p>
      
      <h2>What Does Component-Level Repair Look Like?</h2>
      <p>Under a stereo microscope at 40x magnification, using hot air rework stations and precision soldering equipment, individual chips can be removed, tested, and replaced. Common examples:</p>
      <ul>
        <li><strong>Power Management ICs (CD3215, ISL9240)</strong>: the usual suspects behind no-power and no-charge symptoms</li>
        <li><strong>USB-C Port Controllers</strong>: often fixable without replacing the entire I/O board</li>
        <li><strong>Liquid Damage Corrosion</strong>: ultrasonic cleaning can recover boards that Apple writes off</li>
        <li><strong>GPU BGA Failures</strong>: sometimes a reball or replacement chip, not a new board</li>
      </ul>
      <p>This isn't DIY territory. It requires years of training, significant equipment investment, and access to board schematics. But it is possible, and it saves machines that Apple would have you replace.</p>
      
      <h2>When Should You Repair vs Replace?</h2>
      <p><strong>Repair makes sense if:</strong> Your Mac is 1-6 years old, has 16GB+ RAM or Apple Silicon, or contains irreplaceable data on a soldered SSD.</p>
      <p><strong>Replace makes sense if:</strong> The machine is 8+ years old, or the repair cost exceeds 60% of replacement value.</p>
      
      <p><a href="/microsoldering-repair-hull">Request a free diagnosis</a> and you'll get an honest assessment of whether repair is viable before committing to anything.</p>
    `
  },
  'weee-regulations-2025-business-guide': {
    title: 'WEEE Regulations 2025: What Hull Businesses Need to Know',
    date: '2026-01-20',
    category: 'Compliance',
    readTime: '6 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">November 2025 marks a major update to UK e-waste law. The WEEE 2013 Regulations are being replaced by the new Electrical and Electronic Equipment (EEE) Regulations, and the compliance bar is going up.</p>
      
      <h2>What's Changing in November 2025?</h2>
      <p>The new EEE Regulations take a "designing out waste" approach. For businesses disposing of IT equipment, the key changes are:</p>
      <ul>
        <li><strong>Expanded scope</strong>: smart devices, vapes, products with integrated batteries, and solar-powered equipment are now explicitly covered</li>
        <li><strong>Wider producer responsibility</strong>: manufacturers and importers must finance the entire lifecycle of their products</li>
        <li><strong>Stricter enforcement</strong>: enhanced reporting requirements and higher penalties for non-compliance</li>
        <li><strong>Repair and reuse emphasis</strong>: eco-design principles encouraging spare parts availability and software support</li>
      </ul>
      
      <h2>What's the Business Compliance Checklist?</h2>
      <p>When disposing of old IT equipment, ensure:</p>
      <ol>
        <li><strong>Use a registered waste carrier</strong>: verify their Environment Agency CBDL registration number</li>
        <li><strong>Obtain a Certificate of Destruction</strong>: mandatory for any device containing personal or business data</li>
        <li><strong>Keep Waste Transfer Notes</strong>: retain documentation for a minimum of 2 years</li>
        <li><strong>Verify data destruction standards</strong>: NIST 800-88 is the current baseline for defensible wiping</li>
      </ol>
      
      <h2>How Does GDPR Intersect with E-Waste Disposal?</h2>
      <p>Improper data disposal is a GDPR breach. The ICO can issue fines up to <strong>£17.5 million or 4% of global annual turnover</strong>, whichever is higher. A 50-laptop disposal where one drive wasn't properly wiped is all it takes. Data destruction certification isn't bureaucracy; it's risk mitigation.</p>
      
      <p><a href="/secure-data-disposal-hull">Free e-waste collection</a> includes NIST 800-88 data destruction, Certificates of Destruction, and full Waste Transfer Notes. Everything you need for audit-ready compliance.</p>
    `
  },
  'check-it-provider-ea-licensed': {
    title: 'How to Check if Your IT Provider Is EA Licensed for E-Waste',
    date: '2026-02-10',
    category: 'Compliance',
    readTime: '5 min read',
    author: 'Jake Fieldhouse',
    content: `
      <p class="lead">Before handing over old computers, servers, or printers to anyone, you need to verify they're legally allowed to handle them. Unlicensed disposal is your liability, not theirs. Here's exactly how to check.</p>
      
      <h2>Why Does It Matter?</h2>
      <p>Under the Environmental Protection Act 1990 and the Waste (England and Wales) Regulations 2011, businesses have a <strong>Duty of Care</strong> to ensure their waste is handled by an authorised person. If your "IT recycler" dumps electronics illegally, the Environment Agency traces the waste back to <em>you</em>. Fines start at £5,000 for a fixed penalty notice and can reach <strong>unlimited fines and imprisonment</strong> for serious cases.</p>
      
      <h2>Step 1: Ask for Their Registration Number</h2>
      <p>Any legitimate waste carrier will have a CBDL (Carrier, Broker, Dealer, Licence) registration number. It looks like <strong>CBDU/CBDL followed by numbers</strong> (e.g., CBDU508692). If they can't produce this on request, walk away.</p>
      
      <h2>Step 2: Verify on the EA Public Register</h2>
      <p>Go to the <a href="https://environment.data.gov.uk/public-register/waste-carriers-and-brokers" target="_blank" rel="noopener">Environment Agency Public Register</a> and search their registration number or company name. You'll see:</p>
      <ul>
        <li><strong>Registration status</strong>: Active, expired, or revoked</li>
        <li><strong>Type</strong>: Upper tier (required for most IT waste) or lower tier</li>
        <li><strong>Company details</strong>: Registered name and address</li>
        <li><strong>Expiry date</strong>: Registrations must be renewed — an expired one is as bad as none</li>
      </ul>
      
      <h2>Step 3: Check for Upper Tier Registration</h2>
      <p>There are two tiers of waste carrier registration. <strong>Lower tier</strong> is for businesses carrying their own non-construction waste — it's free and basic. <strong>Upper tier</strong> is required for anyone carrying other people's waste commercially. If your IT provider is collecting your equipment for disposal, they need upper tier registration.</p>
      
      <h2>Step 4: Request Documentation Upfront</h2>
      <p>Before any collection, a compliant provider should offer:</p>
      <ol>
        <li><strong>Waste Transfer Note (WTN)</strong>: legally required for every transfer of waste between parties</li>
        <li><strong>Certificate of Data Destruction</strong>: not legally required but essential for GDPR compliance</li>
        <li><strong>Asset register</strong>: a list of exactly what was collected, with serial numbers where possible</li>
      </ol>
      <p>If they can't provide all three, they're cutting corners.</p>
      
      <h2>Red Flags to Watch For</h2>
      <ul>
        <li>No registration number when asked</li>
        <li>Offering to "just take it off your hands" with no paperwork</li>
        <li>Cash-in-hand operations or Facebook Marketplace-style pickups</li>
        <li>No fixed business address or company registration</li>
        <li>Refusing to provide a WTN</li>
      </ul>
      
      <p>Our registration number is <strong>CBDU508692</strong> and you can verify it on the EA public register any time. We provide WTNs, Certificates of Destruction, and asset registers as standard on every collection. <a href="/secure-data-disposal-hull">Book a free collection</a> and see the difference a properly licensed operator makes.</p>
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
  'Compliance': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'IT Support': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
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
        Whether it's AI optimization, device repair, or e-waste disposal, I respond within 24 hours.
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
