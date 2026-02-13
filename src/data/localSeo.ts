// Location and Service Data for Programmatic Local SEO
// Cross-product of Location × Service generates all local landing page routes

export interface Location {
    slug: string
    name: string
    postcode: string
    region: string
}

export interface ServiceType {
    slug: string
    name: string
    category: 'repair' | 'msp' | 'ewaste' | 'datacenter'
    keywords: string[]
}

export const locations: Location[] = [
    { slug: 'hull', name: 'Hull', postcode: 'HU1-HU9', region: 'City Core' },
    { slug: 'beverley', name: 'Beverley', postcode: 'HU17', region: 'East Riding' },
    { slug: 'driffield', name: 'Driffield', postcode: 'YO25', region: 'East Riding' },
    { slug: 'bridlington', name: 'Bridlington', postcode: 'YO15-YO16', region: 'East Coast' },
    { slug: 'goole', name: 'Goole', postcode: 'DN14', region: 'West Humberside' },
    { slug: 'withernsea', name: 'Withernsea', postcode: 'HU19', region: 'East Coast' },
    { slug: 'hornsea', name: 'Hornsea', postcode: 'HU18', region: 'East Coast' },
]

export const services: ServiceType[] = [
    // Repair Services
    { slug: 'computer-repair', name: 'Computer Repair', category: 'repair', keywords: ['PC repair', 'laptop repair', 'desktop repair'] },
    { slug: 'laptop-repair', name: 'Laptop Repair', category: 'repair', keywords: ['laptop screen', 'laptop keyboard', 'laptop battery'] },
    { slug: 'macbook-repair', name: 'MacBook Repair', category: 'repair', keywords: ['MacBook Pro', 'MacBook Air', 'logic board'] },
    { slug: 'ps5-repair', name: 'PS5 Repair', category: 'repair', keywords: ['PlayStation 5', 'HDMI port', 'disc drive'] },
    { slug: 'console-repair', name: 'Console Repair', category: 'repair', keywords: ['Xbox', 'Nintendo Switch', 'gaming console'] },
    { slug: 'phone-repair', name: 'Phone Repair', category: 'repair', keywords: ['iPhone', 'Samsung', 'screen replacement'] },

    // MSP Services
    { slug: 'it-support', name: 'IT Support', category: 'msp', keywords: ['business IT', 'IT helpdesk', 'tech support'] },
    { slug: 'managed-it-services', name: 'Managed IT Services', category: 'msp', keywords: ['MSP', 'IT management', 'proactive monitoring'] },
    { slug: 'cybersecurity', name: 'Cybersecurity Services', category: 'msp', keywords: ['EDR', 'antivirus', 'ransomware protection'] },

    // E-Waste Services
    { slug: 'e-waste-collection', name: 'E-Waste Collection', category: 'ewaste', keywords: ['IT disposal', 'computer recycling', 'WEEE'] },
    { slug: 'it-disposal', name: 'IT Disposal', category: 'ewaste', keywords: ['secure disposal', 'data destruction', 'asset disposal'] },

    // Data Centre Services
    { slug: 'remote-hands', name: 'Data Centre Remote Hands', category: 'datacenter', keywords: ['remote hands', 'smart hands', 'DC support', 'server racking'] },
]

// Generate all local page routes
export function generateLocalRoutes() {
    const routes: Array<{ path: string; location: Location; service: ServiceType }> = []

    for (const location of locations) {
        for (const service of services) {
            routes.push({
                path: `/${location.slug}-${service.slug}`,
                location,
                service
            })
        }
    }

    return routes
}

// Get meta tags for a specific local page
export function getLocalPageMeta(location: Location, service: ServiceType) {
    const categoryTitles = {
        repair: 'Expert Repair Services',
        msp: 'Business IT Services',
        ewaste: 'Secure IT Disposal',
        datacenter: 'Data Centre Support'
    }

    return {
        title: `${service.name} ${location.name} | Jake Fieldhouse Consulting`,
        description: `Professional ${service.name.toLowerCase()} in ${location.name}, ${location.region}. Serving ${location.postcode} and surrounding areas. ${categoryTitles[service.category]}. Call today for a free quote.`
    }
}

// Get content snippets for local pages
export function getLocalPageContent(location: Location, service: ServiceType) {
    const categoryContent = {
        repair: {
            intro: `Looking for reliable ${service.name.toLowerCase()} in ${location.name}? Jake Fieldhouse Consulting provides expert component-level repair services with a No Fix, No Fee guarantee.`,
            cta: 'Book Your Repair',
            link: '/repair-ninja'
        },
        msp: {
            intro: `Need professional ${service.name.toLowerCase()} in ${location.name}? We provide enterprise-grade IT infrastructure management for businesses in the ${location.postcode} area.`,
            cta: 'Get IT Support',
            link: '/msp-services'
        },
        ewaste: {
            intro: `Free, GDPR-compliant ${service.name.toLowerCase()} in ${location.name}. We serve businesses in ${location.postcode} with secure data destruction and zero-landfill disposal.`,
            cta: 'Book Free Collection',
            link: '/sustainable-tech'
        },
        datacenter: {
            intro: `Professional ${service.name.toLowerCase()} in ${location.name}. On-site data centre support for businesses in the ${location.postcode} area — racking, cabling, hardware swaps, and vendor escort.`,
            cta: 'Get a Quote',
            link: '/data-centre-remote-hands-hull'
        }
    }

    return categoryContent[service.category]
}
