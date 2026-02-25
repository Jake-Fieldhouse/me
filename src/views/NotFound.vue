<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home, ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-20">
    <!-- Background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-auto aspect-square bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
    
    <div class="relative z-10 text-center max-w-lg">
      <!-- Error code -->
      <div class="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 mb-4">
        404
      </div>
      
      <!-- Message -->
      <h1 class="text-3xl font-bold text-white mb-4">Page Not Found</h1>
      <p class="text-neutral-400 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <!-- Actions -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <RouterLink 
          to="/" 
          class="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
        >
          <Home class="w-4 h-4" />
          Go Home
        </RouterLink>
        <button 
          @click="$router.back()" 
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white hover:bg-white/10 transition-colors border border-white/20"
        >
          <ArrowLeft class="w-4 h-4" />
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>
