<script setup lang="ts">
import CircuitPattern from '../components/CircuitPattern.vue'
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 relative">
    <CircuitPattern />
    
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <header class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
          <span class="text-emerald-400 font-medium text-sm">Responsible Disclosure</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Security <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Acknowledgments</span>
        </h1>
        <p class="text-xl text-neutral-400 max-w-2xl mx-auto">
          Recognizing security researchers who help keep our systems and customers safe.
        </p>
      </header>

      <!-- Main Content -->
      <div class="space-y-12">
        
        <!-- Hall of Fame Section -->
        <section class="bg-neutral-900/50 rounded-2xl border border-white/5 p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span class="text-3xl">🏆</span> Hall of Fame
          </h2>
          
          <div class="text-center py-12 text-neutral-400">
            <div class="text-6xl mb-4">🔒</div>
            <p class="text-lg">No vulnerabilities reported yet.</p>
            <p class="text-sm mt-2">Be the first to responsibly disclose a security issue!</p>
          </div>
        </section>

        <!-- How to Report Section -->
        <section class="bg-neutral-900/50 rounded-2xl border border-white/5 p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span class="text-3xl">📧</span> Report a Vulnerability
          </h2>
          
          <div class="space-y-4 text-neutral-300">
            <p>
              If you've discovered a security vulnerability in our systems, we want to hear from you. 
              We appreciate responsible disclosure and will acknowledge your contribution here.
            </p>
            
            <div class="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h3 class="font-semibold text-white mb-3">Contact Methods</h3>
              <ul class="space-y-2">
                <li class="flex items-center gap-3">
                  <span class="text-emerald-400">→</span>
                  <a href="mailto:security@jakefieldhouse.co.uk" class="text-emerald-400 hover:underline">security@jakefieldhouse.co.uk</a>
                  <span class="text-neutral-400 text-sm">(preferred)</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-emerald-400">→</span>
                  <a href="mailto:jake@jakefieldhouse.co.uk" class="text-neutral-300 hover:underline">jake@jakefieldhouse.co.uk</a>
                </li>
              </ul>
            </div>

            <div class="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <h3 class="font-semibold text-white mb-3">What to Include</h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">✓</span>
                  <span>Description of the vulnerability and its potential impact</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">✓</span>
                  <span>Steps to reproduce the issue</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">✓</span>
                  <span>Any relevant screenshots or proof-of-concept code</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">✓</span>
                  <span>Your preferred name/handle for acknowledgment</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Our Commitment Section -->
        <section class="bg-neutral-900/50 rounded-2xl border border-white/5 p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span class="text-3xl">🤝</span> Our Commitment
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <h3 class="font-semibold text-white">Response Time</h3>
              <p class="text-neutral-400 text-sm">We will acknowledge your report within 48 hours and provide a timeline for resolution.</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-semibold text-white">No Legal Action</h3>
              <p class="text-neutral-400 text-sm">We will not pursue legal action against researchers who follow responsible disclosure practices.</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-semibold text-white">Recognition</h3>
              <p class="text-neutral-400 text-sm">Valid reports will be acknowledged on this page with your preferred name or handle.</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-semibold text-white">Transparency</h3>
              <p class="text-neutral-400 text-sm">We'll keep you informed throughout the remediation process.</p>
            </div>
          </div>
        </section>

        <!-- Related Links -->
        <div class="flex flex-wrap justify-center gap-4 pt-8">
          <router-link to="/cybersecurity" class="px-6 py-3 bg-neutral-800 rounded-xl text-white hover:bg-neutral-700 transition-colors border border-neutral-700">
            Cybersecurity Statement
          </router-link>
          <router-link to="/privacy" class="px-6 py-3 bg-neutral-800 rounded-xl text-white hover:bg-neutral-700 transition-colors border border-neutral-700">
            Privacy Policy
          </router-link>
          <router-link to="/policies" class="px-6 py-3 bg-neutral-800 rounded-xl text-white hover:bg-neutral-700 transition-colors border border-neutral-700">
            All Policies
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
