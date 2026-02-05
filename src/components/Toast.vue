<script setup lang="ts">
import { ref, watch } from 'vue'
import IconCheck from './icons/IconCheck.vue'

const props = defineProps<{
  message: string
  show: boolean
  duration?: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isVisible = ref(false)

watch(() => props.show, (newVal) => {
  if (newVal) {
    isVisible.value = true
    setTimeout(() => {
      isVisible.value = false
      emit('close')
    }, props.duration || 3000)
  }
})
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="isVisible"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl"
      >
        <div class="flex items-center gap-3">
          <IconCheck class="w-5 h-5 text-green-400" />
          <span class="text-sm text-white font-medium">{{ message }}</span>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
