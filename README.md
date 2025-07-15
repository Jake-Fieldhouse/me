# Jake Fieldhouse - Portfolio Site

This repository contains a single page portfolio website for **Jake Fieldhouse**. The site introduces Jake as an IT professional, hardware specialist and AI advocate. It presents a minimal landing page with animated headings and contact links.

## Previewing the site locally

You can view the site directly by opening `index.html` in any modern web browser. If you prefer to serve it via a local server (useful for testing on mobile devices), run:

```bash
python3 -m http.server
```

This starts a simple web server on port `8000`. Navigate to `http://localhost:8000` in your browser to see the page.

## Deployment

The site is static HTML and can be hosted anywhere that serves static files. If using **GitHub Pages**, push the contents of this repository to your chosen branch (commonly `main`) and enable GitHub Pages for that branch in the repository settings. Pages will serve `index.html` from the repository root.

## Linting and validation

Run `npm run lint` to check HTML files using the custom linter. To validate the markup across all HTML files with [html-validate](https://github.com/html-validate/html-validate), run:

```bash
npm run html-validate
```

## Screenshot

Due to the limitations of this environment, a live screenshot could not be generated. When deploying the site, consider adding a screenshot of the landing page here for quick reference.
