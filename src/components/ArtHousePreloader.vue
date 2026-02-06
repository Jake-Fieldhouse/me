<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div
    class="fixed inset-0 z-[9999] overflow-hidden bg-black transition-[opacity,transform] duration-300 ease-out will-change-transform will-change-opacity"
    :class="loading ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-[1.01] pointer-events-none'"
  >
    <div class="absolute inset-0 preloader-sheen" aria-hidden="true" />
    <div class="absolute inset-0 preloader-vignette" aria-hidden="true" />

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
    transform: translateX(-130%);
    opacity: 0.35;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(260%);
    opacity: 0.35;
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
  width: 40%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.15));
  animation: preloaderProgress 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
