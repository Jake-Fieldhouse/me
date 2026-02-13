import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : 4,
    reporter: 'html',
    timeout: 60000,

    /* Dev server */
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173',
        reuseExistingServer: !process.env.CI,
        timeout: 30000,
    },

    /* Shared settings */
    use: {
        baseURL: 'http://localhost:5173',
        trace: 'on-first-retry',
        /* Emulate prefers-reduced-motion: reduce to disable scroll-reveal animations.
           The site already respects this media query with opacity: 1 !important. */
        reducedMotion: 'reduce',
    },

    /* Multi-viewport projects */
    projects: [
        // Desktop browsers
        {
            name: 'Desktop Chrome',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Desktop Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'Desktop Safari',
            use: { ...devices['Desktop Safari'] },
        },

        // Tablet
        {
            name: 'iPad Pro 11',
            use: { ...devices['iPad Pro 11'] },
        },

        // Mobile
        {
            name: 'iPhone 14',
            use: { ...devices['iPhone 14'] },
        },
        {
            name: 'Pixel 7',
            use: { ...devices['Pixel 7'] },
        },
    ],
})
