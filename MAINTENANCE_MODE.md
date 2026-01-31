# ⚠️ MAINTENANCE MODE ACTIVE

## Current Site State
**The site is currently LOCKED IN MAINTENANCE MODE.**

Human visitors see an **endless preloader** and cannot access any pages. This is intentional.

## Why?
Jake is reviewing and correcting data accuracy and claims across the site before making it publicly visible again.

## What's Still Working
| Resource | Accessible? | Purpose |
|----------|-------------|---------|
| `/llms.txt` | ✅ Yes | AI crawler knowledge file |
| `/llms-full.txt` | ✅ Yes | Extended AI documentation |
| `/knowledge.json` | ✅ Yes | JSON-LD entity graph |
| `/api/availability.json` | ✅ Yes | Agentic commerce endpoint |
| `/.well-known/ai-plugin.json` | ✅ Yes | OpenAI plugin manifest |
| `/robots.txt` | ✅ Yes | Crawler directives |
| `/sitemap.xml` | ✅ Yes | Page index |
| `/feed.xml` | ✅ Yes | RSS feed |
| All Vue pages | ❌ No | Blocked by maintenance mode |

## How It's Implemented
1. `src/App.vue` - contains `MAINTENANCE_MODE = true` flag
2. When true, the preloader loops infinitely and Vue app never mounts
3. All static files in `/public/` remain directly accessible

## To Disable Maintenance Mode
1. Open `src/App.vue`
2. Find `const MAINTENANCE_MODE = true`
3. Change to `const MAINTENANCE_MODE = false`
4. Build and deploy: `npm run build && git add -A && git commit -m "Disable maintenance mode" && git push`

## Last Updated
2026-01-31 by Jake (via AI assistant)
