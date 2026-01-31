# AI Visibility Monitor

A professional tool to track your business's visibility across AI search engines.

## Overview

This tool queries AI platforms (ChatGPT, Perplexity, Claude, Google AI) with your target search queries and checks whether your business is being cited in responses. It generates a beautiful dark-mode HTML dashboard you can use to:

1. **Track your own visibility** - See how well your GEO optimization is working
2. **Demo to clients** - Show prospects the power of AI search optimization
3. **Monitor competitors** - Adapt the queries to track any business

## Quick Start

```bash
# Navigate to this directory
cd tools/geo-monitor

# Run without API keys (limited functionality)
python monitor.py

# Run with API keys (full functionality)
python monitor.py --api
```

## API Keys (Optional but Recommended)

For accurate results, set these environment variables:

```bash
# Windows PowerShell
$env:OPENAI_API_KEY = "sk-..."
$env:ANTHROPIC_API_KEY = "sk-ant-..."
$env:PERPLEXITY_API_KEY = "pplx-..."

# Then run
python monitor.py --api
```

## Output

After running, you'll find:
- `results/report_YYYY-MM-DD.html` - Beautiful visual dashboard
- `results/data_YYYY-MM-DD.json` - Raw data for further analysis

## Customization

Edit `monitor.py` to change:
- `CONFIG["business_name"]` - Your business name
- `CONFIG["brand_variations"]` - Alternative names/URLs to detect
- `CONFIG["test_queries"]` - Questions to test against AI platforms

## Dashboard Features

The generated HTML report includes:
- **Metrics Overview** - Total citations, citation rate, platforms checked
- **Platform Breakdown** - Progress bars showing citation rate per AI engine
- **Detailed Results** - Query-by-query breakdown with snippets

## Use Cases

### Client Demos
1. Run the monitor before and after implementing GEO
2. Show the before/after reports demonstrating improvement
3. Use specific queries relevant to the client's industry

### Competitive Analysis
1. Add competitor brand names to `brand_variations`
2. Run queries relevant to both businesses
3. Compare citation rates

### Ongoing Monitoring
1. Schedule weekly runs via cron/Task Scheduler
2. Track citation rate trends over time
3. Identify which queries need more optimization

---

*Part of Jake Fieldhouse Consulting's GEO toolkit*
