import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

// Basic view transition support
export const useNativeViewTransition = true

// Core Routes (Single Page + Legal)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compliance',
    name: 'Compliance',
    component: () => import('../views/Compliance.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue')
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: () => import('../views/CookiePolicy.vue')
  },
  {
    path: '/policies',
    name: 'Policies',
    component: () => import('../views/Policies.vue')
  },
  // Catch-all 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    // Hash routing for single page scrolling
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for sticky navbar
      }
    }
    return { top: 0 }
  }
})

// Analytics tracking
router.afterEach((to) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('config', 'G-Q4ZZ8E0G0Y', {
      page_path: to.path
    })
  }
})

export default router
