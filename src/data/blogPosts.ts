/**
 * Blog Posts Data Layer
 * Centralized content for blog posts - easily extensible for CMS integration
 */

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    date: string
    category: 'AI Search' | 'Repair' | 'Compliance' | 'IT Support' | 'E-Waste'
    readTime: string
    author?: string
    image?: string
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'why-ai-cant-find-your-business',
        title: "Why ChatGPT Can't Find Your Business (Yet)",
        excerpt: "Most Hull businesses are invisible to AI search. Here's why that matters, and what you can do about it.",
        date: '2026-01-28',
        category: 'AI Search',
        readTime: '5 min read',
        author: 'Jake Fieldhouse'
    },
    {
        slug: 'macbook-repair-vs-replace-guide',
        title: "MacBook Won't Turn On? When Repair Makes More Sense Than Replace",
        excerpt: 'When Apple says "unrepairable", there\'s often a component-level fix available. Here\'s how to know which option is right for you.',
        date: '2026-01-25',
        category: 'Repair',
        readTime: '4 min read',
        author: 'Jake Fieldhouse'
    },
    {
        slug: 'weee-regulations-2025-business-guide',
        title: 'WEEE Regulations 2025: What Hull Businesses Need to Know',
        excerpt: "New November 2025 WEEE regulations affect how you dispose of e-waste. Here's your compliance checklist.",
        date: '2026-01-20',
        category: 'Compliance',
        readTime: '6 min read',
        author: 'Jake Fieldhouse'
    },
    {
        slug: 'check-it-provider-ea-licensed',
        title: 'How to Check if Your IT Provider Is EA Licensed for E-Waste',
        excerpt: "Before handing over old IT equipment, verify the collector is legally authorised. Here's a step-by-step guide to checking EA registration.",
        date: '2026-02-10',
        category: 'Compliance',
        readTime: '5 min read',
        author: 'Jake Fieldhouse'
    },
    {
        slug: 'what-happens-to-your-old-laptop',
        title: 'What Happens to Your Old Laptop After We Collect It',
        excerpt: "You've booked a free collection. We've loaded the van. But what actually happens to your old hardware next? Here's the full process.",
        date: '2026-02-10',
        category: 'E-Waste',
        readTime: '6 min read',
        author: 'Jake Fieldhouse'
    }
]

export const categoryColors: Record<string, string> = {
    'AI Search': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    'Repair': 'bg-red-500/10 text-red-400 border-red-500/20',
    'Compliance': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'IT Support': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'E-Waste': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
}

/**
 * Get a blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug)
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
    return blogPosts.filter(post => post.category === category)
}

/**
 * Get recent posts
 */
export function getRecentPosts(count: number = 3): BlogPost[] {
    return [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count)
}
