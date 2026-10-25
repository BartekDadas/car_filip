// Po `vite build`: tworzy build/<ścieżka>/index.html dla podstron usług i polityki,
// każdy z własnym <title>, opisem i tagami Open Graph — widocznymi bez uruchamiania JS
// (Google, podgląd linków na Facebooku/Messengerze/WhatsAppie). Treść nadal renderuje React.
// Gdy SITE_URL jest ustawiony w src/data/site.js, dodaje też canonical i build/sitemap.xml.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { services } from '../src/data/services.js';
import { BUSINESS, SERVICE_SEO, SITE_URL } from '../src/data/site.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'build');
const template = readFileSync(join(buildDir, 'index.html'), 'utf8');

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pages = [
  ...services.map((service) => ({
    path: `/uslugi/${SERVICE_SEO[service.id].slug}`,
    title: SERVICE_SEO[service.id].title,
    description: SERVICE_SEO[service.id].description,
    image: service.images?.[0]?.src,
    index: true,
  })),
  {
    path: '/polityka-prywatnosci',
    title: `Polityka prywatności | ${BUSINESS.name}`,
    description: `Polityka prywatności strony ${BUSINESS.name}.`,
    index: false,
  },
];

const renderHead = (page) => {
  const url = SITE_URL ? `${SITE_URL}${page.path}` : null;
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pl_PL" />`,
    `<meta property="og:site_name" content="${escapeHtml(BUSINESS.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
  ];
  if (url) {
    tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`);
    if (page.image) tags.push(`<meta property="og:image" content="${SITE_URL}${encodeURI(page.image)}" />`);
  }
  if (!page.index) tags.push(`<meta name="robots" content="noindex, follow" />`);
  return tags.join('\n    ');
};

for (const page of pages) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapeHtml(page.description)}" />`);
  if (html === template) throw new Error(`Nie znaleziono <title>/description w build/index.html (${page.path})`);
  html = html.replace('</head>', `    ${renderHead(page)}\n  </head>`);

  const outDir = join(buildDir, page.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
}

if (SITE_URL) {
  const urls = ['/', ...pages.filter((page) => page.index).map((page) => page.path)];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}
</urlset>
`;
  writeFileSync(join(buildDir, 'sitemap.xml'), sitemap);
  writeFileSync(join(buildDir, 'robots.txt'), `User-agent: *\nDisallow:\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

console.log(`SEO: ${pages.length} podstron${SITE_URL ? ' + sitemap.xml' : ' (bez sitemap — ustaw SITE_URL w src/data/site.js)'}`);
