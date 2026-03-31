<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '../composables/useToast'
import { trackFormSubmission } from '../lib/analytics'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')
const { show: showToast } = useToast()

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
    trackFormSubmission('contact_quick')
    
    // Show success toast
    showToast('Email client opened! Thanks for reaching out.', 4000)
    
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
  <div class="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
    <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-3">
      <span class="w-2 h-6 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,0.6)]"></span>
      Quick Message
    </h3>
    <p class="text-neutral-400 text-sm mb-6">Prefer a form? No problem.</p>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <input 
          v-model="form.name"
          type="text" 
          placeholder="Your Name"
          class="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300"
        />
      </div>
      <div>
        <input 
          v-model="form.email"
          type="email" 
          placeholder="Your Email"
          class="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300"
        />
      </div>
      <div>
        <textarea 
          v-model="form.message"
          placeholder="How can I help?"
          rows="4"
          class="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
        ></textarea>
      </div>
      
      <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
      
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-bold tracking-wide rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
      
      <p v-if="isSubmitted" class="text-green-400 text-sm text-center">
        ✓ Opening your email client...
      </p>
    </form>
  </div>
</template>
