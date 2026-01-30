import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
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
        // ==================== CORE SERVICES (Hyper-Local) ====================
        {
            path: '/managed-it-services-hull',
            name: 'managed-it-services-hull',
            component: () => import('../views/MSPServices.vue'),
            meta: {
                title: 'Managed IT Services Hull | 24/7 Monitoring & Support',
                description: 'Proactive IT infrastructure management, cybersecurity EDR, and Microsoft 365 solutions for Hull & East Yorkshire businesses.'
            }
        },
        {
            path: '/microsoldering-repair-hull',
            name: 'microsoldering-repair-hull',
            component: () => import('../views/RepairNinja.vue'),
            meta: {
                title: 'Microsoldering & Logic Board Repair Hull | Repair Ninja',
                description: 'Component-level repair for MacBook, iPhone, PS5, and Xbox. No fix, no fee. We fix what others can\'t.'
            }
        },
        {
            path: '/secure-data-disposal-hull',
            name: 'secure-data-disposal-hull',
            component: () => import('../views/SustainableTech.vue'),
            meta: {
                title: 'Secure Data Disposal & E-Waste Collection Hull | GDPR Compliant',
                description: 'GDPR-compliant IT asset disposal for businesses. Free collection in Hull & East Yorkshire. Certificate of Destruction provided.'
            }
        },
        {
            path: '/ai-optimization-hull',
            name: 'ai-optimization-hull',
            component: () => import('../views/AISearchOptimization.vue'),
            meta: {
                title: 'AI Search Optimization Hull | Get Found by ChatGPT & Perplexity',
                description: 'Generative Engine Optimization (GEO) to make your Hull business visible in ChatGPT, Perplexity, Claude, and Google AI Overviews.'
            }
        },
        // ==================== LEGACY REDIRECTS ====================
        {
            path: '/msp-services',
            redirect: '/managed-it-services-hull'
        },
        {
            path: '/repair-ninja',
            redirect: '/microsoldering-repair-hull'
        },
        {
            path: '/sustainable-tech',
            redirect: '/secure-data-disposal-hull'
        },
        {
            path: '/e-waste',
            redirect: '/secure-data-disposal-hull'
        },
        {
            path: '/ai-search',
            redirect: '/ai-optimization-hull'
        },
        // ==================== SERVICE AREAS (Local SEO) ====================
        {
            path: '/it-support-hull',
            name: 'it-support-hull',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Hull | Computer Repair & Business IT Services',
                description: 'Local IT support and computer repair services in Hull. Same-day response, DBS checked, fully insured. On-site and remote support available.'
            },
            props: { location: 'hull' }
        },
        {
            path: '/it-support-beverley',
            name: 'it-support-beverley',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Beverley | Computer Repair & Business IT Services',
                description: 'Professional IT support and computer repair in Beverley. 20-minute response time from Hull. DBS checked, fully insured.'
            },
            props: { location: 'beverley' }
        },
        {
            path: '/it-support-cottingham',
            name: 'it-support-cottingham',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Cottingham | Computer Repair & Business IT Services',
                description: 'Fast IT support and computer repair in Cottingham. 10-minute response from Hull. On-site and remote support for homes and businesses.'
            },
            props: { location: 'cottingham' }
        },
        {
            path: '/it-support-hessle',
            name: 'it-support-hessle',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Hessle | Computer Repair & Business IT Services',
                description: 'IT support and computer repair services in Hessle. Quick response times, professional service. DBS checked and fully insured.'
            },
            props: { location: 'hessle' }
        },
        {
            path: '/it-support-anlaby',
            name: 'it-support-anlaby',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Anlaby | Computer Repair & Business IT Services',
                description: 'Reliable IT support and computer repair in Anlaby. 10-minute response from Hull base. Home and business IT services.'
            },
            props: { location: 'anlaby' }
        },
        {
            path: '/it-support-driffield',
            name: 'it-support-driffield',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Driffield | Computer Repair & Business IT Services',
                description: 'Professional IT support and computer repair in Driffield & The Wolds. Regular visits, responsive remote support. DBS checked.'
            },
            props: { location: 'driffield' }
        },
        {
            path: '/it-support-brough',
            name: 'it-support-brough',
            component: () => import('../views/ServiceArea.vue'),
            meta: {
                title: 'IT Support Brough | Computer Repair & Business IT Services',
                description: 'IT support and computer repair in Brough & Elloughton. 20-minute response from Hull. Business and home IT services.'
            },
            props: { location: 'brough' }
        },
        // ==================== OTHER SERVICES ====================
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
        // ==================== COMPANY PAGES ====================
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue'),
            meta: {
                title: 'About Jake Fieldhouse | IT Consultant Hull',
                description: 'The person behind the tech. A full-stack IT partner helping Hull businesses with setup, repair, and sustainable disposal.'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue'),
            meta: {
                title: 'Contact Us | Book IT Consultation Hull',
                description: 'Get a quote for repair, schedule an MSP consultation, or book an e-waste collection. Response within 24 hours.'
            }
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('../views/Feedback.vue'),
            meta: {
                title: 'Share Your Experience | Jake Fieldhouse Consulting',
                description: 'Your feedback helps us improve. Share your experience working with Jake Fieldhouse Consulting.'
            }
        },
        {
            path: '/case-studies',
            name: 'case-studies',
            component: () => import('../views/CaseStudies.vue'),
            meta: {
                title: 'Case Studies | IT Solutions Hull | Jake Fieldhouse',
                description: 'Real IT transformation projects in Hull & East Yorkshire. See how we\'ve helped local businesses with infrastructure, security, and digital solutions.'
            }
        },
        // ==================== BLOG ====================
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/Blog.vue'),
            meta: {
                title: 'Blog | IT Insights & Guides for Hull Businesses',
                description: 'Practical tech advice, repair guides, and AI search insights from Jake Fieldhouse. No fluff, just actionable knowledge.'
            }
        },
        {
            path: '/blog/:slug',
            name: 'blog-post',
            component: () => import('../views/BlogPost.vue'),
            meta: {
                title: 'Blog | Jake Fieldhouse Consulting',
                description: 'Tech insights and guides for Hull businesses.'
            }
        },
        // ==================== LEGAL & POLICIES ====================
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
            path: '/cookies',
            name: 'cookies',
            component: () => import('../views/CookiePolicy.vue'),
            meta: {
                title: 'Cookie Policy | Jake Fieldhouse Consulting',
                description: 'How we use cookies on our website and your consent options.'
            }
        },
        {
            path: '/refunds',
            name: 'refunds',
            component: () => import('../views/RefundPolicy.vue'),
            meta: {
                title: 'Refund & Cancellation Policy | Jake Fieldhouse Consulting',
                description: 'Our refund policy for repairs, MSP services, and cancellation terms.'
            }
        },
        {
            path: '/service-commitment',
            name: 'service-commitment',
            component: () => import('../views/ServiceCommitment.vue'),
            meta: {
                title: 'Service Level Commitment | Jake Fieldhouse Consulting',
                description: 'Our service targets and response time commitments for MSP clients.'
            }
        },
        {
            path: '/complaints',
            name: 'complaints',
            component: () => import('../views/ComplaintsPolicy.vue'),
            meta: {
                title: 'Complaints Policy | Jake Fieldhouse Consulting',
                description: 'How to raise a complaint and our dispute resolution process.'
            }
        },
        {
            path: '/environmental-policy',
            name: 'environmental-policy',
            component: () => import('../views/EnvironmentalPolicy.vue'),
            meta: {
                title: 'Environmental Policy | Jake Fieldhouse Consulting',
                description: 'Our commitment to sustainability and responsible e-waste handling.'
            }
        },
        {
            path: '/disclaimer',
            name: 'disclaimer',
            component: () => import('../views/Disclaimer.vue'),
            meta: {
                title: 'Website Disclaimer | Jake Fieldhouse Consulting',
                description: 'Legal disclaimer for the use of this website.'
            }
        },
        // ==================== LOCAL SEO ====================
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
