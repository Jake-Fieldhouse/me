<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 800,
  },
  class: {
    type: String,
    default: '',
  },
  animateOnLoad: {
    type: Boolean,
    default: true,
  },
});

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const displayText = ref(props.text.split(''));
const iterations = ref(0);

function getRandomChar() {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}

function triggerAnimation() {
  iterations.value = 0;
  const interval = setInterval(() => {
    if (iterations.value >= props.text.length) {
      clearInterval(interval);
      displayText.value = props.text.split(''); 
      return;
    }

    displayText.value = props.text
      .split('')
      .map((_char, index) => {
        if (index < iterations.value) {
          return props.text[index];
        }
        return getRandomChar();
      });

    iterations.value += 1 / 3; 
  }, props.duration / (props.text.length * 4)); 
}

onMounted(() => {
  if (props.animateOnLoad) {
    triggerAnimation();
  }
});

watch(() => props.text, () => {
  triggerAnimation();
});
</script>

<template>
  <div
    class="flex overflow-hidden cursor-default py-2"
    :class="props.class"
    @mouseenter="triggerAnimation"
  >
    <div class="flex">
      <span
        v-for="(char, index) in displayText"
        :key="index"
        class="inline-block"
        :class="{ 'text-white': index < iterations, 'text-gray-500': index >= iterations }"
      >
        {{ char }}
      </span>
    </div>
  </div>
</template>
