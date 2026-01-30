import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/',
  build: {
    // Security: No source maps in production
    sourcemap: false,
    // Minify with terser for better obfuscation
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log in production
        drop_debugger: true  // Remove debugger statements
      },
      mangle: true  // Obfuscate variable names
    },
    // Security: Don't expose build metadata
    reportCompressedSize: false
  }
})
