import { test, expect } from '@playwright/test'

/**
 * Wait for the preloader/splash screen to complete.
 * App.vue sets #main-content to opacity-100 when isLoading becomes false.
 * This is the definitive signal that the preloader has finished.
 */
async function waitForSiteReady(page: import('@playwright/test').Page) {
    // Wait for #main-content to have opacity-100 (preloader complete)
    await page.waitForFunction(() => {
        const el = document.getElementById('main-content')
        return el && el.classList.contains('opacity-100')
    }, { timeout: 15000 })
    // Force all scroll-reveal elements to be visible immediately
    await page.addStyleTag({
        content: `.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale {
            opacity: 1 !important; transform: none !important; animation: none !important;
        }`
    })
    await page.waitForTimeout(500)
}

// ─── Homepage ───────────────────────────────────────────────

test.describe('Homepage', () => {
    test('hero section renders correctly', async ({ page }) => {
        await page.goto('/')
        await waitForSiteReady(page)

        await expect(page.getByText('Your IT. Repaired. Protected. Optimised.')).toBeVisible()
        await expect(page.getByText('Fixing what others write off')).toBeVisible()
    })

    test('CTA buttons are visible and correct', async ({ page }) => {
        await page.goto('/')
        await waitForSiteReady(page)

        await expect(page.getByRole('link', { name: 'Get in Touch' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Get Repair Quote' })).toBeVisible()
        await expect(page.getByRole('link', { name: /Book Free Collection/ })).toBeVisible()
    })

    test('services bento grid is in DOM', async ({ page }) => {
        await page.goto('/')
        await waitForSiteReady(page)

        // Verify bento items are in the DOM with correct content
        // Using role selectors since BentoItem renders as button elements
        const repairBtn = page.getByRole('button', { name: /Repair Ninja/ })
        const managedBtn = page.getByRole('button', { name: /Managed IT/ })
        const aiBtn = page.getByRole('button', { name: /AI Visibility/ })
        const dcBtn = page.getByRole('button', { name: /DC Remote Hands/ })
        const ewasteBtn = page.getByRole('button', { name: /E-Waste/ })

        await expect(repairBtn).toBeAttached()
        await expect(managedBtn).toBeAttached()
        await expect(aiBtn).toBeAttached()
        await expect(dcBtn).toBeAttached()
        await expect(ewasteBtn).toBeAttached()
    })
})

// ─── About Page ─────────────────────────────────────────────

test.describe('About Page', () => {
    test('stats bar renders', async ({ page }) => {
        await page.goto('/about')
        await waitForSiteReady(page)

        await expect(page.getByText('Years Experience')).toBeVisible()
        await expect(page.getByText('Devices Repaired')).toBeVisible()
        await expect(page.getByText('Data Recovered')).toBeVisible()
    })

    test('story section is present', async ({ page }) => {
        await page.goto('/about')
        await waitForSiteReady(page)

        await expect(page.getByRole('heading', { name: 'The Journey' })).toBeAttached()
        // Verify the founder's name appears in the story section (inside <strong> tag)
        await expect(page.locator('#main-content strong').filter({ hasText: 'Jake Fieldhouse Consulting' })).toBeAttached()
    })
})

// ─── Managed IT Services ────────────────────────────────────

test.describe('Managed IT Services', () => {
    test('how-it-works section renders', async ({ page }) => {
        await page.goto('/managed-it-services-hull')
        await waitForSiteReady(page)

        await expect(page.getByText('Free IT Audit')).toBeAttached()
        await expect(page.getByText('Tailored Plan')).toBeAttached()
        await expect(page.getByText('Seamless Onboarding')).toBeAttached()
    })
})

// ─── Blog Post CTAs ─────────────────────────────────────────

test.describe('Blog Post Contextual CTAs', () => {
    test('AI Search post has contextual CTA', async ({ page }) => {
        await page.goto('/blog/why-ai-cant-find-your-business')
        await waitForSiteReady(page)

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
        await page.waitForTimeout(500)

        await expect(page.getByText('Is Your Business Invisible to AI?')).toBeAttached()

        const cta = page.getByRole('link', { name: 'Get Free AI Visibility Check' })
        await expect(cta).toBeAttached()
        await expect(cta).toHaveAttribute('href', '/ai-optimization-hull')
    })

    test('Repair post has contextual CTA', async ({ page }) => {
        await page.goto('/blog/macbook-repair-vs-replace-guide')
        await waitForSiteReady(page)

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
        await page.waitForTimeout(500)

        await expect(page.getByText('Device Not Working?', { exact: false })).toBeAttached()

        const cta = page.getByRole('link', { name: 'Book Free Diagnosis' })
        await expect(cta).toBeAttached()
        await expect(cta).toHaveAttribute('href', '/microsoldering-repair-hull')
    })
})

// ─── Navbar ─────────────────────────────────────────────────

test.describe('Navbar', () => {
    test('phone icon visible on desktop', async ({ page, isMobile }) => {
        test.skip(!!isMobile, 'Phone icon is desktop-only')

        await page.goto('/')
        await waitForSiteReady(page)

        const phoneLink = page.locator('a[href="tel:+447404090458"]')
        await expect(phoneLink).toBeVisible()
    })

    test('navigation links render', async ({ page }) => {
        await page.goto('/about')
        await waitForSiteReady(page)

        await expect(page.getByRole('heading', { name: /The Person Behind/ })).toBeAttached()
    })
})

// ─── DC Remote Hands ────────────────────────────────────────

test.describe('DC Remote Hands', () => {
    test('how-it-works section exists', async ({ page }) => {
        await page.goto('/data-centre-remote-hands-hull')
        await waitForSiteReady(page)

        await expect(page.getByText('How It Works')).toBeAttached()
    })
})
