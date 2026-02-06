import { promises as fs } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distOutputDir = process.env.STATIC_ROUTES_DIST_DIR || 'dist';
const distDir = path.join(rootDir, distOutputDir);
const indexHtmlPath = path.join(distDir, 'index.html');

function normalizeRoute(route) {
  if (!route || route === '/') return '/';
  return '/' + route.replace(/^\/+|\/+$/g, '');
}

async function readText(filePath) {
  return fs.readFile(filePath, 'utf8');
}

function extractStaticRouterRoutes(routerSource) {
  const matches = [...routerSource.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]);
  return matches
    .filter((route) => route.startsWith('/'))
    .filter((route) => !route.includes(':'))
    .filter((route) => !route.includes('*'))
    .filter((route) => !route.includes('(.*)'))
    .map(normalizeRoute)
    .filter((route) => route !== '/');
}

function extractArrayBlock(source, constName) {
  const marker = `export const ${constName}`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return '';

  const equalsIndex = source.indexOf('=', markerIndex);
  if (equalsIndex === -1) return '';

  const bracketStart = source.indexOf('[', equalsIndex);
  if (bracketStart === -1) return '';

  let depth = 0;
  for (let i = bracketStart; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(bracketStart, i + 1);
      }
    }
  }
  return '';
}

function extractSlugsFromArrayBlock(arrayBlock) {
  return [...arrayBlock.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
}

async function generateRouteFiles() {
  const indexExists = await fs
    .access(indexHtmlPath)
    .then(() => true)
    .catch(() => false);

  if (!indexExists) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }

  const routerSource = await readText(path.join(rootDir, 'src', 'router', 'index.ts'));
  const blogSource = await readText(path.join(rootDir, 'src', 'data', 'blogPosts.ts'));
  const localSeoSource = await readText(path.join(rootDir, 'src', 'data', 'localSeo.ts'));

  const staticRoutes = extractStaticRouterRoutes(routerSource);

  const blogSlugs = [...blogSource.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  const blogRoutes = blogSlugs.map((slug) => normalizeRoute(`/blog/${slug}`));

  const locationBlock = extractArrayBlock(localSeoSource, 'locations');
  const serviceBlock = extractArrayBlock(localSeoSource, 'services');
  const locations = extractSlugsFromArrayBlock(locationBlock);
  const services = extractSlugsFromArrayBlock(serviceBlock);

  const localServiceRoutes = [];
  for (const location of locations) {
    for (const service of services) {
      localServiceRoutes.push(normalizeRoute(`/${location}-${service}`));
    }
  }

  const allRoutes = new Set([...staticRoutes, ...blogRoutes, ...localServiceRoutes]);
  const sortedRoutes = [...allRoutes].sort();

  await Promise.all(
    sortedRoutes.map(async (route) => {
      const targetDir = path.join(distDir, ...route.slice(1).split('/'));
      const targetFile = path.join(targetDir, 'index.html');
      await fs.mkdir(targetDir, { recursive: true });
      await fs.copyFile(indexHtmlPath, targetFile);
    }),
  );

  console.log(`[static-routes] Generated ${sortedRoutes.length} route files in ${distOutputDir}/.`);
}

generateRouteFiles().catch((err) => {
  console.error('[static-routes] Failed:', err.message);
  process.exit(1);
});
