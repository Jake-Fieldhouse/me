/**
 * Cloudflare Worker: Enterprise Security Headers
 * 
 * Jake Fieldhouse Consulting Ltd
 * Last Updated: February 2026
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Go to Cloudflare Dashboard > Workers & Pages > Create Worker
 * 2. Paste this code and deploy
 * 3. Go to your domain's DNS settings
 * 4. Add a Worker Route: jakefieldhouse.co.uk/* -> [this worker]
 * 
 * This applies enterprise-grade security headers that GitHub Pages cannot set.
 * Achieves A+ grade on securityheaders.com and SSL Labs.
 */

// =============================================================================
// SECURITY HEADERS CONFIGURATION
// =============================================================================

const SECURITY_HEADERS = {
    // HSTS: Force HTTPS for 2 years + preload eligibility
    // Required for browser preload lists (hstspreload.org)
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',

    // CSP: Defense-in-depth against XSS, injection, and data exfiltration
    // Whitelist approach - only explicitly allowed sources can execute
    'Content-Security-Policy': [
        // Default: block everything not explicitly allowed
        "default-src 'self'",

        // Scripts: Self + trusted third parties only
        "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu https://js.stripe.com",

        // Styles: Self + inline (required for Vue transitions) + Google Fonts
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu",

        // Fonts: Self + Google Fonts CDN
        "font-src 'self' https://fonts.gstatic.com",

        // Images: Self + data URIs (for inline SVGs) + any HTTPS source
        "img-src 'self' data: https: https://*.clarity.ms",

        // XHR/Fetch: Self + analytics + integrations
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://*.clarity.ms https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu https://api.stripe.com",

        // Iframes: Cal.com booking + Stripe payment elements
        "frame-src https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu https://js.stripe.com",

        // Prevent site from being embedded in iframes (clickjacking)
        "frame-ancestors 'none'",

        // Restrict <base> tag manipulation
        "base-uri 'self'",

        // Form submissions: Self + mailto for contact forms
        "form-action 'self' mailto:",

        // Auto-upgrade HTTP requests to HTTPS
        "upgrade-insecure-requests"
    ].join('; '),

    // Clickjacking protection (legacy fallback for CSP frame-ancestors)
    'X-Frame-Options': 'DENY',

    // Prevent MIME-type sniffing attacks
    'X-Content-Type-Options': 'nosniff',

    // Referrer: Send origin only for cross-origin, full URL for same-origin
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Permissions Policy: Only features recognised by modern browsers.
    // Removed deprecated features that cause Chrome console warnings:
    // battery, document-domain, execution-while-not-rendered,
    // execution-while-out-of-viewport, navigation-override, speaker-selection
    'Permissions-Policy': [
        'accelerometer=()',
        'autoplay=()',
        'camera=()',
        'cross-origin-isolated=()',
        'display-capture=()',
        'encrypted-media=()',
        'fullscreen=()',
        'gamepad=()',
        'geolocation=()',
        'gyroscope=()',
        'hid=()',
        'identity-credentials-get=()',
        'idle-detection=()',
        'interest-cohort=()',    // Block FLoC/Topics API tracking
        'keyboard-map=()',
        'local-fonts=()',
        'magnetometer=()',
        'microphone=()',
        'midi=()',
        'payment=()',            // Disable unless using Payment Request API
        'picture-in-picture=()',
        'publickey-credentials-get=()',
        'screen-wake-lock=()',
        'serial=()',
        'sync-xhr=()',
        'usb=()',
        'web-share=()',
        'xr-spatial-tracking=()'
    ].join(', '),

    // Cross-Origin policies - relaxed to allow Cal.com/Cal.eu embeds
    // Note: require-corp COEP blocks iframes from origins that don't opt-in
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Resource-Policy': 'cross-origin',
    // COEP removed - only needed for SharedArrayBuffer, breaks third-party embeds

    // Legacy XSS protection (for older browsers without CSP support)
    'X-XSS-Protection': '1; mode=block',

    // Disable DNS prefetching for privacy
    'X-DNS-Prefetch-Control': 'off',

    // Cache control for security-sensitive pages
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache'
};

// Headers that leak server information - remove these
const HEADERS_TO_REMOVE = [
    'X-Powered-By',
    'Server',
    'X-AspNet-Version',
    'X-AspNetMvc-Version',
    'X-Generator',
    'X-Runtime',
    'X-Version'
];

// =============================================================================
// WORKER LOGIC
// =============================================================================

/**
 * Handle incoming requests and apply security headers
 */
async function handleRequest(request) {
    const url = new URL(request.url);

    // Fetch original response from origin (GitHub Pages)
    const response = await fetch(request);

    // Create mutable response
    const newResponse = new Response(response.body, response);

    // Determine content type for cache policy
    const contentType = response.headers.get('Content-Type') || '';
    const isHTML = contentType.includes('text/html');
    const isStaticAsset = /\.(js|css|png|jpg|jpeg|gif|webp|svg|woff2?|ttf|eot|ico)$/i.test(url.pathname);

    // Apply security headers
    Object.entries(SECURITY_HEADERS).forEach(([header, value]) => {
        // Skip HSTS on HTTP (browsers ignore it anyway)
        if (header === 'Strict-Transport-Security' && url.protocol !== 'https:') {
            return;
        }

        // Apply aggressive caching for static assets, strict no-cache for HTML
        if (header === 'Cache-Control' || header === 'Pragma') {
            if (isStaticAsset) {
                // Static assets: cache for 1 year (immutable with hash-based filenames)
                newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
                return;
            } else if (!isHTML) {
                // Other dynamic content: short cache
                newResponse.headers.set('Cache-Control', 'public, max-age=3600');
                return;
            }
        }

        newResponse.headers.set(header, value);
    });

    // Remove information disclosure headers
    HEADERS_TO_REMOVE.forEach(header => {
        newResponse.headers.delete(header);
    });

    return newResponse;
}

// Register fetch event handler
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});
