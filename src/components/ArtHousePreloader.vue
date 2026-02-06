<script setup lang="ts">
import FluidCursor from './FluidCursor.vue'

defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div
    class="fixed inset-0 z-[9999] overflow-hidden bg-black transition-[opacity,transform] duration-300 ease-out will-change-transform will-change-opacity"
    :class="loading ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-[1.01] pointer-events-none'"
  >
    <!-- Fluid Cursor Background - z-[1] so it's above bg-black but below text -->
    <FluidCursor 
      class="absolute inset-0 z-[1]" 
      :intro-mode="true"
      :splat-radius="0.2"
      :curl="6"
      :color-update-speed="12"
      :density-dissipation="4"
    />
    
    <!-- Subtle overlay effects -->
    <div class="absolute inset-0 z-[2] preloader-sheen" aria-hidden="true" />
    <div class="absolute inset-0 z-[3] preloader-vignette" aria-hidden="true" />

    <div class="relative z-10 h-full w-full flex items-center justify-center">
      <div class="flex flex-col items-center">
        <h1 class="animate-preloader-title text-6xl md:text-8xl font-black tracking-tighter text-white uppercase text-center leading-none text-readable-strong">
          Jake<br>Fieldhouse
        </h1>

        <p class="animate-preloader-tagline mt-5 text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.45em] text-neutral-200 uppercase text-center px-4">
          ENTERPRISE IT • HARDWARE REPAIR • EWASTE
        </p>

        <div class="mt-6 h-[2px] w-28 md:w-32 bg-white/25 rounded-full overflow-hidden">
          <div class="preloader-progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes preloaderShift {
  0% { transform: translateX(-20%); }
  100% { transform: translateX(20%); }
}

@keyframes preloaderGlow {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.45; }
}

@keyframes preloaderTitleIn {
  0% {
    opacity: 0;
    transform: translateY(12px) scale(0.985);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes preloaderTaglineIn {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes preloaderProgress {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.preloader-sheen {
  background:
    radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.12), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.08), transparent 45%);
  animation: preloaderShift 2.4s linear infinite alternate;
}

.preloader-vignette {
  background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.45) 100%);
  animation: preloaderGlow 2.8s ease-in-out infinite;
}

.animate-preloader-title {
  animation: preloaderTitleIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.animate-preloader-tagline {
  animation: preloaderTaglineIn 0.55s ease-out 0.18s both;
}

.preloader-progress {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5));
  animation: preloaderProgress 3.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>
