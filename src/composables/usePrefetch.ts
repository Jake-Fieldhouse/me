import { useRouter } from 'vue-router'

/**
 * Prefetches a route's component chunk on hover/focus.
 *
 * Works by calling router.resolve() and then triggering the lazy import
 * via router.getRoutes(). This is hash-agnostic — it uses the same
 * dynamic import() paths defined in the router config, so chunk filenames
 * with content hashes work automatically.
 *
 * Usage: const { prefetch } = usePrefetch()
 *        <router-link @mouseenter="prefetch('/about')" ...>
 */
const prefetched = new Set<string>()

export function usePrefetch() {
    const router = useRouter()

    function prefetch(path: string) {
        if (prefetched.has(path)) return

        const resolved = router.resolve(path)
        if (!resolved?.matched?.length) return

        // Each matched route has a components map; trigger the lazy import
        for (const record of resolved.matched) {
            for (const component of Object.values(record.components ?? {})) {
                if (typeof component === 'function') {
                    // This is the lazy () => import('./views/X.vue') — calling it
                    // triggers the network fetch without rendering the component
                    ; (component as () => Promise<unknown>)()
                }
            }
        }

        prefetched.add(path)
    }

    return { prefetch }
}
