import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
    y?: number
    opacity?: number
    duration?: number
    ease?: string
    stagger?: number
    delay?: number
    scrollTrigger?: {
        trigger?: HTMLElement | null
        start?: string
        toggleActions?: string
    }
}

export function useScrollReveal(elementRef: Ref<HTMLElement | null>, options: ScrollRevealOptions = {}) {
    let animation: gsap.core.Tween | null = null

    onMounted(() => {
        if (!elementRef.value) return

        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const defaults = {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: elementRef.value,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }

            const config = { ...defaults, ...options }

            // Slight delay to allow Vue transitions to complete/DOM to settle
            requestAnimationFrame(() => {
                // Set fallback in case GSAP fails
                if (elementRef.value) {
                    elementRef.value.style.opacity = '1' // Ensure visible by default, let GSAP override
                }

                setTimeout(() => {
                    if (elementRef.value) {
                        // Reset to 0 for animation
                        gsap.set(elementRef.value, { opacity: 0, y: 50 })
                        animation = gsap.to(elementRef.value, {
                            ...config,
                            scrollTrigger: config.scrollTrigger,
                            opacity: 1,
                            y: 0
                        })
                    }
                }, 100)
            })
        })

        // Fallback for reduced motion - ensure visibility without animation
        mm.add("(prefers-reduced-motion: reduce)", () => {
            if (elementRef.value) {
                gsap.set(elementRef.value, { opacity: 1, y: 0 })
            }
        })
    })

    onUnmounted(() => {
        if (animation) {
            animation.scrollTrigger?.kill();
            animation.kill();
        }
    })
}
