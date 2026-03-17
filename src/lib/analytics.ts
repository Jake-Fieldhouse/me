export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const GTM_CONTAINER_ID = 'GTM-TLZV3F9Q'
const GTM_SCRIPT_ID = 'gtm-script'
const GTM_DISABLE_FLAG = `ga-disable-${GTM_CONTAINER_ID}`

declare global {
  interface Window {
    dataLayer?: unknown[]
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

// ─── Enable / Disable (consent-gated) ───────────────────────

export function enableAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  window[GTM_DISABLE_FLAG] = false
  ensureAnalyticsScript()
}

export function disableAnalytics(): void {
  if (typeof window === 'undefined') {
    return
  }

  window[GTM_DISABLE_FLAG] = true
}

// ─── GA4 Event Tracking ─────────────────────────────────────

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined' || !window.dataLayer) {
    return
  }
  window.dataLayer.push({
    event: eventName,
    ...params
  })
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

