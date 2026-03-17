import { promises as fs } from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const SITE_ORIGIN = 'https://jakefieldhouse.co.uk';
const FALLBACK_TITLE = 'Jake Fieldhouse | IT Consulting & Repair Hull';
const FALLBACK_DESCRIPTION =
  'Hardware restoration, zero-landfill e-waste, and strategic IT. I fix what others won\'t.';

const rootDir = process.cwd();
const distOutputDir = process.env.STATIC_ROUTES_DIST_DIR || 'dist';
const distDir = path.join(rootDir, distOutputDir);
const indexHtmlPath = path.join(distDir, 'index.html');

function normalizeRoute(route) {
  if (!route || route === '/') return '/';
  return '/' + route.replace(/^\/+|\/+$/g, '');
}

function routeToCanonicalPath(route) {
  return route === '/' ? '/' : `${route}/`;
}

function isStaticRoute(route) {
  return route.startsWith('/') && !route.includes(':') && !route.includes('*') && !route.includes('(.*)');
}

function htmlEscape(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function getPropertyName(propName) {
  if (ts.isIdentifier(propName)) return propName.text;
  if (ts.isStringLiteral(propName)) return propName.text;
  return null;
}

function getObjectProperty(objectLiteral, name) {
  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const propName = getPropertyName(prop.name);
    if (propName === name) return prop;
  }
  return null;
}

function getStringInitializer(property) {
  if (!property) return null;
  const node = property.initializer;
  if (ts.isStringLiteralLike(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return null;
}

function parseRouterStaticMeta(routerSource) {
  const sourceFile = ts.createSourceFile('router-index.ts', routerSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const staticRoutes = new Set();
  const routeMeta = new Map();

  function visit(node) {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'createRouter') {
      const routerConfig = node.arguments.find((arg) => ts.isObjectLiteralExpression(arg));
      if (!routerConfig || !ts.isObjectLiteralExpression(routerConfig)) return;

      const routesProp = getObjectProperty(routerConfig, 'routes');
      if (!routesProp || !ts.isArrayLiteralExpression(routesProp.initializer)) return;

      for (const element of routesProp.initializer.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue;

        const pathProp = getObjectProperty(element, 'path');
        const rawPath = getStringInitializer(pathProp);
        if (!rawPath || !isStaticRoute(rawPath)) continue;

        const route = normalizeRoute(rawPath);
        staticRoutes.add(route);

        const metaProp = getObjectProperty(element, 'meta');
        if (!metaProp || !ts.isObjectLiteralExpression(metaProp.initializer)) continue;

        const title = getStringInitializer(getObjectProperty(metaProp.initializer, 'title'));
        const description = getStringInitializer(getObjectProperty(metaProp.initializer, 'description'));

        if (title || description) {
          routeMeta.set(route, { title, description });
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return {
    staticRoutes: [...staticRoutes].filter((route) => route !== '/'),
    routeMeta,
  };
}

function replaceTag(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html;
}

function applyRouteMeta(baseHtml, route, meta) {
  const canonicalUrl = `${SITE_ORIGIN}${routeToCanonicalPath(route)}`;
  const title = htmlEscape(meta.title || FALLBACK_TITLE);
  const description = htmlEscape(meta.description || FALLBACK_DESCRIPTION);
  const canonical = htmlEscape(canonicalUrl);

  let html = baseHtml;
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = replaceTag(html, /<meta\s+name="title"[\s\S]*?\/>/i, `<meta name="title" content="${title}" />`);
  html = replaceTag(html, /<meta\s+name="description"[\s\S]*?\/>/i, `<meta name="description" content="${description}" />`);
  html = replaceTag(html, /<link\s+rel="canonical"[\s\S]*?\/?>/i, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(html, /<meta\s+property="og:title"[\s\S]*?\/>/i, `<meta property="og:title" content="${title}" />`);
  html = replaceTag(html, /<meta\s+property="og:description"[\s\S]*?\/>/i, `<meta property="og:description" content="${description}" />`);
  html = replaceTag(html, /<meta\s+property="og:url"[\s\S]*?\/>/i, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta\s+property="twitter:title"[\s\S]*?\/>/i, `<meta property="twitter:title" content="${title}" />`);
  html = replaceTag(
    html,
    /<meta\s+property="twitter:description"[\s\S]*?\/>/i,
    `<meta property="twitter:description" content="${description}" />`,
  );
  html = replaceTag(html, /<meta\s+property="twitter:url"[\s\S]*?\/>/i, `<meta property="twitter:url" content="${canonical}" />`);

  return html;
}

async function readText(filePath) {
  return fs.readFile(filePath, 'utf8');
}

function extractTitleFromHtml(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match?.[1]?.trim() || FALLBACK_TITLE;
}

function extractDescriptionFromHtml(html) {
  const match = html.match(/<meta\s+name="description"[\s\S]*?content="([^"]+)"[\s\S]*?\/>/i);
  return match?.[1]?.trim() || FALLBACK_DESCRIPTION;
}

async function generateRouteFiles() {
  const indexExists = await fs
    .access(indexHtmlPath)
    .then(() => true)
    .catch(() => false);

  if (!indexExists) throw new Error(`${distOutputDir}/index.html not found. Run vite build first.`);

  const [routerSource, baseHtml] = await Promise.all([
    readText(path.join(rootDir, 'src', 'router', 'index.ts')),
    readText(indexHtmlPath),
  ]);

  const homeTitle = extractTitleFromHtml(baseHtml);
  const homeDescription = extractDescriptionFromHtml(baseHtml);

  const { staticRoutes, routeMeta } = parseRouterStaticMeta(routerSource);
  const allRoutes = new Set([...staticRoutes]);
  const sortedRoutes = [...allRoutes].sort();

  function buildRouteMeta(route) {
    const staticMeta = routeMeta.get(route);
    if (staticMeta) {
      return {
        title: staticMeta.title || homeTitle,
        description: staticMeta.description || homeDescription,
      };
    }
    return { title: homeTitle, description: homeDescription };
  }

  await Promise.all(
    sortedRoutes.map(async (route) => {
      const targetDir = path.join(distDir, ...route.slice(1).split('/'));
      const targetFile = path.join(targetDir, 'index.html');
      const routeHtml = applyRouteMeta(baseHtml, route, buildRouteMeta(route));
      await fs.mkdir(targetDir, { recursive: true });
      await fs.writeFile(targetFile, routeHtml, 'utf8');
    }),
  );

  console.log(`[static-routes] Generated ${sortedRoutes.length} route files in ${distOutputDir}/.`);
}

generateRouteFiles().catch((err) => {
  console.error('[static-routes] Failed:', err.message);
  process.exit(1);
});
