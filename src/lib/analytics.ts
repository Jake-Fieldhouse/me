export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const GA_MEASUREMENT_ID = 'G-S5QEQ38Y9M'
const GA_SCRIPT_ID = 'ga4-script'
const GA_DISABLE_FLAG = `ga-disable-${GA_MEASUREMENT_ID}`

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __gaInitialized?: boolean
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

function ensureAnalyticsScript(): void {
  if (document.getElementById(GA_SCRIPT_ID)) {
    return
  }

  const script = document.createElement('script')
  script.id = GA_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

function ensureGtagQueue(): void {
  window.dataLayer = window.dataLayer || []

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
  }
}

export function enableAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  window[GA_DISABLE_FLAG] = false
  ensureAnalyticsScript()

  if (window.__gaInitialized) {
    return
  }

  ensureGtagQueue()
  window.gtag?.('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  })
  window.gtag?.('js', new Date())
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    transport_type: 'beacon'
  })
  window.__gaInitialized = true
}

export function disableAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  window[GA_DISABLE_FLAG] = true
}

export function parseCookiePreferences(raw: string | null): CookiePreferences | null {
  if (!raw) {
    return null
  }

  try {
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>

    if (
      typeof parsed.necessary !== 'boolean'
      || typeof parsed.analytics !== 'boolean'
      || typeof parsed.marketing !== 'boolean'
    ) {
      return null
    }

    return {
      necessary: parsed.necessary,
      analytics: parsed.analytics,
      marketing: parsed.marketing
    }
  } catch {
    return null
  }
}
