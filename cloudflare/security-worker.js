/**
 * Cloudflare Worker: Security Headers for GitHub Pages
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Go to Cloudflare Dashboard > Workers & Pages > Create Worker
 * 2. Paste this code and deploy
 * 3. Go to your domain's DNS settings
 * 4. Add a Worker Route: jakefieldhouse.co.uk/* -> [this worker]
 * 
 * This adds enterprise-grade security headers that GitHub Pages cannot set.
 */

const SECURITY_HEADERS = {
    // Strict Transport Security - Force HTTPS for 2 years + preload list
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',

    // Content Security Policy - Strict, no inline scripts
    'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu",
        "frame-src https://cal.com https://*.cal.com https://cal.eu https://*.cal.eu",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self' mailto:",
        "upgrade-insecure-requests"
    ].join('; '),

    // Prevent clickjacking
    'X-Frame-Options': 'DENY',

    // Prevent MIME-sniffing
    'X-Content-Type-Options': 'nosniff',

    // Control referrer info
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Restrict browser features
    'Permissions-Policy': [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'payment=()',
        'usb=()',
        'magnetometer=()',
        'gyroscope=()',
        'accelerometer=()',
        'interest-cohort=()'  // Block FLoC
    ].join(', '),

    // Cross-Origin policies
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',

    // XSS Protection (legacy browsers)
    'X-XSS-Protection': '1; mode=block',

    // Prevent DNS prefetching for privacy
    'X-DNS-Prefetch-Control': 'off'
};

// Headers to remove (information disclosure)
const HEADERS_TO_REMOVE = [
    'X-Powered-By',
    'Server',
    'X-AspNet-Version',
    'X-AspNetMvc-Version'
];

async function handleRequest(request) {
    // Fetch the original response from GitHub Pages
    const response = await fetch(request);

    // Clone so we can modify headers
    const newResponse = new Response(response.body, response);

    // Check if request is HTTPS
    const isHTTPS = new URL(request.url).protocol === 'https:';

    // Add security headers
    Object.entries(SECURITY_HEADERS).forEach(([header, value]) => {
        // Only add HSTS over HTTPS (it's ignored over HTTP anyway)
        if (header === 'Strict-Transport-Security' && !isHTTPS) {
            return;
        }
        newResponse.headers.set(header, value);
    });

    // Remove information disclosure headers
    HEADERS_TO_REMOVE.forEach(header => {
        newResponse.headers.delete(header);
    });

    return newResponse;
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});
