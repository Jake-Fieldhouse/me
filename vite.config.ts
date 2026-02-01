import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/',

  // Force production mode settings
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,  // Disable Vue DevTools in production
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },

  build: {
    // Security: No source maps in production
    sourcemap: false,
    // Minify with terser for maximum obfuscation
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // Remove console.log in production
        drop_debugger: true,     // Remove debugger statements
        dead_code: true,         // Remove unreachable code
        passes: 2                // Multiple compression passes
      },
      mangle: {
        properties: false        // Don't mangle property names (breaks Vue)
      },
      format: {
        comments: false          // Remove all comments
      }
    },
    // Security: Don't expose build metadata
    reportCompressedSize: false,
    // Chunk splitting for better caching
    chunkSizeWarningLimit: 1000,
    // Manual chunking for cache efficiency
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          gsap: ['gsap']
        }
      }
    }
  },

  // Ensure no server options leak into production
  server: {
    // Only used in dev - production uses static files
  }
})
