import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/sustainable-tech', // SEO friendly URL
            name: 'sustainable-tech',
            component: () => import('../views/SustainableTech.vue')
        },
        {
            path: '/e-waste', // Legacy Redirect
            redirect: '/sustainable-tech'
        },
        {
            path: '/repair-ninja',
            name: 'repair-ninja',
            component: () => import('../views/RepairNinja.vue')
        },
        {
            path: '/repair-services',
            name: 'repair-services',
            component: () => import('../views/RepairServices.vue')
        },
        {
            path: '/compliance',
            name: 'compliance',
            component: () => import('../views/Compliance.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('../views/Privacy.vue')
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('../views/Terms.vue')
        }
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
