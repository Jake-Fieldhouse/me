import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

let hasMounted = false

function mountApp() {
  if (!hasMounted) {
    app.mount('#app')
    hasMounted = true
  }
}

// Prefer mounting after the initial route is resolved, but never allow a blank shell.
router
  .isReady()
  .then(mountApp)
  .catch(() => {
    mountApp()
  })

setTimeout(mountApp, 1500)
