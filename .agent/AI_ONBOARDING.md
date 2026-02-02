# AI Agent Onboarding

This document helps AI agents quickly find critical project documentation.

## 📋 Task Tracking (IMPORTANT)

**Outstanding tasks and roadmaps are tracked in the knowledge base, NOT in this repo:**

| Document | Purpose | Path |
|----------|---------|------|
| **Strategic Playbook** | Operational Roadmap with checkboxes (Section 13) | `~/.gemini/antigravity/knowledge/antigravity_portfolio_site/artifacts/business/strategic_playbook.md` |
| **Process & Governance** | User vs Agent task division (Section 4) | `~/.gemini/antigravity/knowledge/antigravity_portfolio_site/artifacts/workflow/process_and_governance.md` |

**Before creating new task files**, check these documents first.

## 🔑 Key Project Files

| File | Purpose |
|------|---------|
| `src/App.vue` | Main app entry, contains `MAINTENANCE_MODE` flag |
| `cloudflare/security-worker.js` | Cloudflare Worker for header injection |
| `public/llms.txt` | AI crawler knowledge file |
| `MAINTENANCE_MODE.md` | How to toggle maintenance mode |

## 📚 Full Knowledge Base

See `~/.gemini/antigravity/knowledge/antigravity_portfolio_site/artifacts/` for:
- `overview.md` - Project history and timeline
- `audits/master_audit_ledger.md` - All audit findings
- `business/strategic_playbook.md` - Business strategy and tasks
- `deployment/infrastructure_and_deployment_ledger.md` - DNS, Cloudflare, GitHub Pages setup
