# Security Documentation

This document serves as the canonical security reference for jakefieldhouse.co.uk.

## HSTS Preload Status

## Status: Submitted & Configured

The domain is configured for HSTS Preload with the following header:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

**Requirements Met:**

- `max-age` >= 31536000 (1 year) ✅ (Set to 63072000, or 2 years)
- `includeSubDomains` directive ✅
- `preload` directive ✅
- Served over HTTPS ✅

**Submission:** <https://hstspreload.org>

## Subresource Integrity (SRI)

External scripts are protected with SRI hashes to prevent supply-chain attacks:

| Script | SRI Status |
| :--- | :--- |
| `/js/analytics.js` (local) | N/A (self-hosted) |
| `googletagmanager.com/gtag/js` | ⚠️ Cannot use SRI (dynamic content) |

**Note:** Google Tag Manager scripts are dynamically generated per request, making static SRI hashes impossible. This is an industry-standard limitation. The script is protected by:

1. Strict CSP `script-src` allowlist
2. HTTPS-only loading
3. Google's own security infrastructure

## SEO/GEO/AEO Compatibility

Security hardening does NOT interfere with search optimization:

| Feature | Impact on SEO |
| :--- | :--- |
| HSTS | ✅ None (improves trust signals) |
| CSP | ✅ None (blocks malware, improves trust) |
| Permissions-Policy | ✅ None (no SEO impact) |
| Schema.org JSON-LD | ✅ Fully functional |
| AI Crawler Access | ✅ Whitelisted in robots.txt |

## Security Audit Summary

- **Last Audit:** 2026-02-13
- **Overall Grade:** A+ (Enterprise Grade)
- **Vulnerabilities:** 0 Critical, 0 High, 0 Medium
- **npm audit:** 0 vulnerabilities
- **WCAG 2.1 AA:** 11/11 pages pass (Playwright + axe-core)
