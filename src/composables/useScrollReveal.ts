import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(elementRef: any, options: any = {}) {
    let animation: gsap.core.Tween | null = null

    onMounted(() => {
        if (!elementRef.value) return

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

        animation = gsap.from(elementRef.value, config)
    })

    onUnmounted(() => {
        if (animation) animation.kill()
    })
}
