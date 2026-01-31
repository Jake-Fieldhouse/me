<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    error.value = 'Please fill in all fields'
    return
  }
  
  error.value = ''
  isSubmitting.value = true
  
  try {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Enquiry from ${form.value.name}`)
    const body = encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)
    
    window.location.href = `mailto:jake@jakefieldhouse.co.uk?subject=${subject}&body=${body}`
    
    isSubmitted.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-neutral-900/50 p-6 md:p-8 rounded-3xl border border-white/5">
    <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-3">
      <span class="w-2 h-6 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></span>
      Quick Message
    </h3>
    <p class="text-neutral-400 text-sm mb-6">Prefer a form? No problem.</p>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <input 
          v-model="form.name"
          type="text" 
          placeholder="Your Name"
          class="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
        />
      </div>
      <div>
        <input 
          v-model="form.email"
          type="email" 
          placeholder="Your Email"
          class="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
        />
      </div>
      <div>
        <textarea 
          v-model="form.message"
          placeholder="How can I help?"
          rows="4"
          class="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
        ></textarea>
      </div>
      
      <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
      
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
      
      <p v-if="isSubmitted" class="text-green-400 text-sm text-center">
        ✓ Opening your email client...
      </p>
    </form>
  </div>
</template>
