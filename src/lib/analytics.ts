export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const GTM_CONTAINER_ID = 'GTM-TLZV3F9Q'
const GTM_SCRIPT_ID = 'gtm-script'
const GTM_DISABLE_FLAG = `ga-disable-${GTM_CONTAINER_ID}`

// Replace with your Clarity Project ID from https://clarity.microsoft.com/
const CLARITY_PROJECT_ID = 'vjco5wzg5x'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __gaInitialized?: boolean
    __clarityInitialized?: boolean
    clarity?: (...args: unknown[]) => void
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

// ─── GA4 Core ───────────────────────────────────────────────

function ensureAnalyticsScript(): void {
  if (document.getElementById(GTM_SCRIPT_ID)) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  const script = document.createElement('script')
  script.id = GTM_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`
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

// ─── Microsoft Clarity ──────────────────────────────────────

function enableClarity(): void {
  if (typeof window === 'undefined' || window.__clarityInitialized) {
    return
  }

  // Set up the Clarity command queue before loading the SDK
  // This is the equivalent of what the IIFE does, but without inline script execution
  if (!window.clarity) {
    const clarityQueue: unknown[][] = []
    window.clarity = (...args: unknown[]) => {
      clarityQueue.push(args)
    }
      // Expose the queue so the SDK can drain it on load
      ; (window.clarity as unknown as { q: unknown[][] }).q = clarityQueue
  }

  // Load the Clarity SDK via external script (CSP-safe, no inline execution needed)
  const script = document.createElement('script')
  script.id = 'clarity-script'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`
  document.head.appendChild(script)

  // Link Clarity sessions
  window.clarity('set', 'gaId', 'G-S5QEQ38Y9M') // Retaining original GA4 ID for clarity linking

  window.__clarityInitialized = true
}

function disableClarity(): void {
  if (typeof window === 'undefined') {
    return
  }

  const script = document.getElementById('clarity-script')
  if (script) {
    script.remove()
  }
  window.__clarityInitialized = false
}

// ─── Enable / Disable (consent-gated) ───────────────────────

export function enableAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  window[GTM_DISABLE_FLAG] = false
  ensureAnalyticsScript()

  if (!window.__gaInitialized) {
    ensureGtagQueue()
    window.gtag?.('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    })
    window.gtag?.('js', new Date())
    window.__gaInitialized = true
  }

  enableClarity()
}

export function disableAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  window[GTM_DISABLE_FLAG] = true
  disableClarity()
}

// ─── GA4 Event Tracking ─────────────────────────────────────

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }
  window.gtag('event', eventName, params)
}

export function trackFormSubmission(formName: string): void {
  trackEvent('form_submission', {
    form_name: formName,
    form_type: 'mailto'
  })
}

export function trackPhoneClick(location: string): void {
  trackEvent('phone_click', {
    link_location: location
  })
}

export function trackCTAClick(ctaName: string): void {
  trackEvent('cta_click', {
    cta_name: ctaName
  })
}

// ─── Cookie Utilities ───────────────────────────────────────

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

