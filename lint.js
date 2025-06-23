const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'lintconfig.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const errors = [];

function lintFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  if (config.requireDoctype) {
    const trimmed = content.trimStart().toLowerCase();
    if (!trimmed.startsWith('<!doctype html>')) {
      errors.push(`${file}: missing <!DOCTYPE html>`);
    }
  }
  if (config.tagNameLowercase) {
    const regex = /<\/?\s*([A-Z][A-Za-z0-9-]*)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      errors.push(`${file}: tag <${match[1]}> should be lowercase`);
    }
  }
  if (config.imgAltRequired) {
    const imgRegex = /<img\b[^>]*>/gi;
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
      const imgTag = match[0];
      if (!/\balt\s*=/.test(imgTag)) {
        errors.push(`${file}: <img> tag missing alt attribute`);
      }
    }
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.git')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      lintFile(fullPath);
    }
  }
}

walk(process.cwd());

if (errors.length) {
  console.error('Lint errors found:');
  for (const err of errors) console.error(` - ${err}`);
  process.exit(1);
} else {
  console.log('All HTML files pass lint');
}
