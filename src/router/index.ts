import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue'),
            meta: {
                title: 'Jake Fieldhouse | IT Consulting & Repair Hull',
                description: 'Expert IT support, microsoldering repairs, and B2B e-waste solutions in Hull & East Yorkshire. Your full-stack tech partner.'
            }
        },
        {
            path: '/sustainable-tech', // SEO friendly URL
            name: 'sustainable-tech',
            component: () => import('../views/SustainableTech.vue'),
            meta: {
                title: 'Free E-Waste Collection Hull | Zero Landfill',
                description: 'Secure, GDPR-compliant IT asset disposal for businesses. Free collection in Hull & Nationwide. Certificate of Destruction provided.'
            }
        },
        {
            path: '/e-waste', // Legacy Redirect
            redirect: '/sustainable-tech'
        },
        {
            path: '/repair-ninja',
            name: 'repair-ninja',
            component: () => import('../views/RepairNinja.vue'),
            meta: {
                title: 'Microsoldering & Console Repair Hull | Repair Ninja',
                description: 'Component-level repair for PS5, MacBook, and logic boards. No fix, no fee. We fix what others can\'t.'
            }
        },
        {
            path: '/msp-services',
            name: 'msp-services',
            component: () => import('../views/MSPServices.vue'),
            meta: {
                title: 'Managed IT Services Hull | 24/7 Monitoring',
                description: 'Proactive IT infrastructure management, cybersecurity EDR, and cloud solutions for growing agencies in East Yorkshire.'
            }
        },
        {
            path: '/repair-services',
            name: 'repair-services',
            component: () => import('../views/RepairServices.vue'),
            meta: {
                title: 'Expert Device Repair Services | Hull',
                description: 'Professional repair services for laptops, game consoles, and mobile devices. Quick turnaround and warranty included.'
            }
        },
        {
            path: '/compliance',
            name: 'compliance',
            component: () => import('../views/Compliance.vue'),
            meta: {
                title: 'Compliance & Licenses | Registered Waste Carrier',
                description: 'Verified Environment Agency Waste Carrier (CBDL620098). View our data destruction standards and insurance details.'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue'),
            meta: {
                title: 'About Jake Fieldhouse | IT Consultant',
                description: 'The person behind the tech. A full-stack IT partner helping businesses with setup, repair, and sustainable disposal.'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue'),
            meta: {
                title: 'Contact Us | Book Consultation',
                description: 'Get a quote for repair, schedule an MSP consultation, or book an e-waste collection. Response within 24 hours.'
            }
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('../views/Privacy.vue'),
            meta: {
                title: 'Privacy Policy | Jake Fieldhouse Consulting',
                description: 'Our commitment to protecting your data. GDPR compliance and privacy information.'
            }
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('../views/Terms.vue'),
            meta: {
                title: 'Terms of Service | Jake Fieldhouse Consulting',
                description: 'Service terms, repair warranties, and business agreements.'
            }
        },
        {
            path: '/service-areas',
            name: 'service-areas',
            component: () => import('../views/ServiceAreas.vue'),
            meta: {
                title: 'Service Areas | IT Services East Yorkshire',
                description: 'Professional IT support, computer repair, and e-waste collection across Hull, Beverley, Driffield, Bridlington, and East Yorkshire.'
            }
        },
        {
            path: '/:location-:service',
            name: 'local-service',
            component: () => import('../views/local/LocalServicePage.vue'),
            props: true,
            meta: {
                title: 'Local IT Services | Jake Fieldhouse Consulting',
                description: 'Professional IT services in your local area.'
            }
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

// Dynamic SEO Tags
router.beforeEach((to, _from, next) => {
    // Update Title
    document.title = (to.meta.title as string) || 'Jake Fieldhouse Consulting';

    // Update Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', (to.meta.description as string) || 'Expert IT Services and Secure Disposal in Hull.');
    }

    next();
});

export default router
