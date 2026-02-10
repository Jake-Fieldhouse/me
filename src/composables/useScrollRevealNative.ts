import { onMounted, onUnmounted, type Ref } from 'vue'

interface ScrollRevealOptions {
    y?: number
    duration?: number
    delay?: number
    stagger?: number
}

// Inject scroll-reveal stylesheet once globally
let styleInjected = false
function injectScrollRevealStyles(y: number, duration: number) {
    if (styleInjected) return
    styleInjected = true
    const style = document.createElement('style')
    style.textContent = `
        .sr-initial {
            opacity: 0;
            transform: translateY(${y}px);
            transition: opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1),
                        transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sr-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .sr-reduced {
            opacity: 1;
            transform: none;
        }
    `
    document.head.appendChild(style)
}

/**
 * Native CSS scroll-driven reveal animation
 * Zero-dependency replacement for GSAP ScrollTrigger
 * Uses IntersectionObserver + CSS class toggles for performance
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

        injectScrollRevealStyles(y, duration)

        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            elementRef.value.classList.add('sr-reduced')
            return
        }

        // Set initial state via class (single reflow) + per-element delay via inline style
        elementRef.value.classList.add('sr-initial')
        if (delay) elementRef.value.style.transitionDelay = `${delay}s`

        // Handle staggered children — batch class additions
        const children = elementRef.value.querySelectorAll('.scroll-reveal')
        children.forEach((child, index) => {
            const el = child as HTMLElement
            el.classList.add('sr-initial')
            el.style.transitionDelay = `${delay + (index * stagger)}s`
        })

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement
                        el.classList.add('sr-visible')

                        // Also reveal staggered children
                        const children = el.querySelectorAll('.scroll-reveal')
                        children.forEach((child) => {
                            (child as HTMLElement).classList.add('sr-visible')
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
