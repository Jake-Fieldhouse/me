import { onMounted, onUnmounted, type Ref } from 'vue'

interface ScrollRevealOptions {
    y?: number
    duration?: number
    delay?: number
    stagger?: number
}

/**
 * Native CSS scroll-driven reveal animation
 * Zero-dependency replacement for GSAP ScrollTrigger
 * Uses IntersectionObserver + CSS animations for performance
 */
export function useScrollReveal(elementRef: Ref<HTMLElement | null>, options: ScrollRevealOptions = {}) {
    let observer: IntersectionObserver | null = null

    const {
        y = 50,
        duration = 0.8,
        delay = 0,
        stagger = 0.1
    } = options

    onMounted(() => {
        if (!elementRef.value) return

        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            elementRef.value.style.opacity = '1'
            elementRef.value.style.transform = 'none'
            return
        }

        // Set initial state
        elementRef.value.style.opacity = '0'
        elementRef.value.style.transform = `translateY(${y}px)`
        elementRef.value.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`
        elementRef.value.style.transitionDelay = `${delay}s`

        // Handle staggered children
        const children = elementRef.value.querySelectorAll('.scroll-reveal')
        children.forEach((child, index) => {
            const el = child as HTMLElement
            el.style.opacity = '0'
            el.style.transform = `translateY(${y}px)`
            el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`
            el.style.transitionDelay = `${delay + (index * stagger)}s`
        })

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement
                        el.style.opacity = '1'
                        el.style.transform = 'translateY(0)'

                        // Also reveal staggered children
                        const children = el.querySelectorAll('.scroll-reveal')
                        children.forEach((child) => {
                            const childEl = child as HTMLElement
                            childEl.style.opacity = '1'
                            childEl.style.transform = 'translateY(0)'
                        })
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -15% 0px'
            }
        )

        observer.observe(elementRef.value)
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })
}
