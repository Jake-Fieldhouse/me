/**
 * Generate per-service OG images as SVG cards
 * Usage: node scripts/generate-og-images.js
 */

import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = join(__dirname, '..', 'public', 'images')

const services = [
    {
        filename: 'og-repair.svg',
        title: 'Repair Ninja',
        subtitle: 'Component-Level Microsoldering',
        tagline: 'MacBook \u2022 PS5 \u2022 Smartphones \u2022 No Fix, No Fee',
        accentColor: '#ef4444',
        gradientFrom: '#7f1d1d',
        gradientTo: '#000000'
    },
    {
        filename: 'og-msp.svg',
        title: 'Managed IT Services',
        subtitle: 'Enterprise Protection, Local Response',
        tagline: '24/7 Monitoring \u2022 EDR Security \u2022 Microsoft 365',
        accentColor: '#3b82f6',
        gradientFrom: '#1e3a5f',
        gradientTo: '#000000'
    },
    {
        filename: 'og-ewaste.svg',
        title: 'E-Waste Collection',
        subtitle: 'Free Business Pickup &amp; ITAD',
        tagline: 'GDPR Data Destruction \u2022 Zero Landfill \u2022 EA Licensed',
        accentColor: '#10b981',
        gradientFrom: '#064e3b',
        gradientTo: '#000000'
    }
]

function generateSVG(service) {
    const dots = []
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 8; j++) {
            dots.push(`<circle cx="${80 + i * 80}" cy="${60 + j * 80}" r="2" fill="white" />`)
        }
    }

    return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${service.gradientFrom};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${service.gradientTo};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${service.accentColor};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${service.accentColor};stop-opacity:0.2" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="0" y="0" width="6" height="630" fill="url(#accent)" />
  <g opacity="0.08">
    ${dots.join('\n    ')}
  </g>
  <text x="80" y="240" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="72" font-weight="900" fill="white" letter-spacing="-2">${service.title}</text>
  <text x="80" y="300" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="32" font-weight="400" fill="rgba(255,255,255,0.7)">${service.subtitle}</text>
  <text x="80" y="360" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="22" font-weight="400" fill="${service.accentColor}">${service.tagline}</text>
  <rect x="80" y="400" width="120" height="3" rx="1.5" fill="${service.accentColor}" opacity="0.6" />
  <text x="80" y="560" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.5)">Jake Fieldhouse Consulting</text>
  <text x="80" y="590" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="400" fill="rgba(255,255,255,0.3)">jakefieldhouse.co.uk</text>
</svg>`
}

services.forEach(service => {
    const svg = generateSVG(service)
    const outputPath = join(outputDir, service.filename)
    writeFileSync(outputPath, svg, 'utf-8')
    console.log(`\u2713 Generated ${service.filename}`)
})

console.log('\nDone! SVG OG images generated in public/images/')
