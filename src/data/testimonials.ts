export interface Testimonial {
    name: string
    role: string
    company: string
    quote: string
    rating: number
    category: 'b2b' | 'consumer'
}

export const categoryLabels = {
    all: 'All Reviews',
    b2b: 'Business Clients',
    consumer: 'Repair Customers'
}

export const testimonials: Testimonial[] = []
