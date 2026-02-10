import { onMounted, onUnmounted } from 'vue'

interface OgMeta {
    title: string
    description: string
    image: string
    url: string
}

/**
 * Composable to inject per-page Open Graph meta tags.
 * Overwrites the default OG tags from index.html and restores them on unmount.
 */
export function useOgMeta(meta: OgMeta) {
    const baseUrl = 'https://jakefieldhouse.co.uk'
    const imageUrl = meta.image.startsWith('http') ? meta.image : `${baseUrl}${meta.image}`
    const pageUrl = meta.url.startsWith('http') ? meta.url : `${baseUrl}${meta.url}`

    const selectors = {
        'og:title': meta.title,
        'og:description': meta.description,
        'og:image': imageUrl,
        'og:url': pageUrl,
        'twitter:title': meta.title,
        'twitter:description': meta.description,
        'twitter:image': imageUrl,
        'twitter:url': pageUrl
    }

    const originals: Record<string, string> = {}

    onMounted(() => {
        for (const [property, content] of Object.entries(selectors)) {
            const tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
            if (tag) {
                originals[property] = tag.content
                tag.content = content
            }
        }

        // Also update the page title
        const originalTitle = document.title
        document.title = meta.title
        originals['__title__'] = originalTitle
    })

    onUnmounted(() => {
        // Restore original meta tags
        for (const [property, content] of Object.entries(originals)) {
            if (property === '__title__') {
                document.title = content
                continue
            }
            const tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
            if (tag) {
                tag.content = content
            }
        }
    })
}
