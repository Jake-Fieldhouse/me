import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * Wait for the preloader/splash screen to complete.
 */
async function waitForSiteReady(page: import('@playwright/test').Page) {
    try {
        await page.waitForFunction(() => {
            const preloader = document.querySelector('[class*="preloader"], [class*="Preloader"]')
            if (!preloader) return true
            const styles = window.getComputedStyle(preloader)
            return styles.opacity === '0' || styles.display === 'none' || styles.visibility === 'hidden'
        }, { timeout: 8000 })
    } catch {
        // Continue if preloader doesn't exist
    }
    await page.waitForTimeout(500)
}

/**
 * Pages to audit for accessibility.
 * Covers all major routes on the site.
 */
const pagesToAudit = [
    { name: 'Homepage', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog Index', path: '/blog' },
    { name: 'Managed IT Services', path: '/managed-it-services-hull' },
    { name: 'Microsoldering Repair', path: '/microsoldering-repair-hull' },
    { name: 'AI Optimization', path: '/ai-optimization-hull' },
    { name: 'DC Remote Hands', path: '/data-centre-remote-hands-hull' },
    { name: 'Secure Data Disposal', path: '/secure-data-disposal-hull' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Case Studies', path: '/case-studies' },
]

for (const { name, path } of pagesToAudit) {
    test(`${name} (${path}) passes WCAG 2.1 AA`, async ({ page }) => {
        await page.goto(path)
        await waitForSiteReady(page)

        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
            .analyze()

        // Log violations for debugging
        if (results.violations.length > 0) {
            console.log(`\n⚠️  Accessibility violations on ${name}:`)
            for (const v of results.violations) {
                console.log(`  [${v.impact}] ${v.id}: ${v.description}`)
                for (const node of v.nodes) {
                    console.log(`    → ${node.html.substring(0, 100)}`)
                }
            }
        }

        expect(results.violations).toEqual([])
    })
}
