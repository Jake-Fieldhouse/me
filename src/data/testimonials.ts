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

// B2B Example:
// {
//   name: "Sarah Thompson",
//   role: "IT Director",
//   company: "Hull Manufacturing Ltd",
//   quote: "24/7 monitoring caught a ransomware attempt...",
//   rating: 5,
//   category: 'b2b'
// }

// Consumer Example:
// {
//   name: "Mark Wilson",
//   role: "PS5 HDMI Repair",
//   company: "Hull",
//   quote: "Sony wanted £300+ for a new console...",
//   rating: 5,
//   category: 'consumer'
// }

export const testimonials: Testimonial[] = []
