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

    <div class="relative z-10 h-full w-full flex items-center justify-center">
      <div class="flex flex-col items-center">
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase text-center leading-none text-readable-strong">
          Jake<br>Fieldhouse
        </h1>

        <p class="mt-5 text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.45em] text-neutral-200 uppercase text-center px-4">
          ENTERPRISE IT • HARDWARE REPAIR • EWASTE
        </p>

        <div class="mt-6 h-[2px] w-24 bg-white/25 rounded-full overflow-hidden">
          <div class="h-full bg-white origin-left animate-progress-once"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes preloaderShift {
  0% { transform: translateX(-25%); }
  100% { transform: translateX(25%); }
}

@keyframes progressOnce {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

.preloader-sheen {
  background:
    radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.12), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.08), transparent 45%);
  animation: preloaderShift 1.1s linear infinite alternate;
}

.animate-progress-once {
  animation: progressOnce 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>
