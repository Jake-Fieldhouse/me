/**
 * 404 Route Validator
 * External script for GitHub Pages SPA routing with strict CSP
 * Only valid routes redirect to SPA; invalid routes show 404
 */
(function () {
    var loc = window.location;
    var search = loc.search;

    // If already redirected with ?p=, show 404 content
    if (search.indexOf('?p=') !== -1 || search.indexOf('&p=') !== -1) {
        document.getElementById('redirect-message').style.display = 'none';
        document.getElementById('not-found-content').style.display = 'block';
        return;
    }

    var path = loc.pathname.slice(1); // Remove leading slash
    if (!path) return;

    // Known valid route patterns (must match router/index.ts)
    var validRoutes = [
        '', // Root
        // Core Services
        'managed-it-services-hull',
        'microsoldering-repair-hull',
        'secure-data-disposal-hull',
        'ai-optimization-hull',
        // Legacy Redirects
        'msp-services',
        'repair-ninja',
        'sustainable-tech',
        'e-waste',
        'ai-search',
        // Service Areas
        'it-support-hull',
        'it-support-beverley',
        'it-support-cottingham',
        'it-support-hessle',
        'it-support-anlaby',
        'it-support-driffield',
        'it-support-brough',
        // Other Services
        'repair-services',
        'compliance',
        // Company Pages
        'about',
        'contact',
        'feedback',
        'case-studies',
        // Blog
        'blog',
        // Legal
        'privacy',
        'terms',
        'cookies',
        'refunds',
        'service-commitment',
        'complaints',
        'environmental-policy',
        'disclaimer',
        'accessibility',
        'cybersecurity',
        'security-acknowledgments',
        'policies',
        // Local SEO
        'service-areas'
    ];

    // Check if path matches a known route
    var isKnownRoute = validRoutes.indexOf(path) !== -1;

    // Check if path matches blog post pattern
    var isBlogPost = path.indexOf('blog/') === 0;

    // Check if path matches dynamic local service pattern (location-service)
    var validLocations = ['hull', 'beverley', 'driffield', 'bridlington', 'goole', 'withernsea', 'hornsea', 'cottingham', 'hessle', 'brough'];
    var validServices = ['computer-repair', 'laptop-repair', 'macbook-repair', 'ps5-repair', 'console-repair', 'phone-repair', 'it-support', 'managed-it-services', 'cybersecurity', 'e-waste-collection', 'it-disposal'];

    var isValidLocalService = false;
    var parts = path.split('-');
    if (parts.length >= 2) {
        var locSlug = parts[0];
        var service = parts.slice(1).join('-');
        isValidLocalService = validLocations.indexOf(locSlug) !== -1 && validServices.indexOf(service) !== -1;
    }

    if (isKnownRoute || isBlogPost || isValidLocalService) {
        // Valid route - redirect to SPA
        loc.replace(
            loc.protocol + '//' + loc.hostname + (loc.port ? ':' + loc.port : '') +
            '/?p=' + encodeURIComponent(path) +
            (loc.search ? '&q=' + encodeURIComponent(loc.search.slice(1)) : '') +
            loc.hash
        );
    } else {
        // Invalid route - show 404 content
        document.getElementById('redirect-message').style.display = 'none';
        document.getElementById('not-found-content').style.display = 'block';
    }
})();
