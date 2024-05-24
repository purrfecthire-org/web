import * as fs from 'fs';
import { URL } from 'url';

const domain = 'https://purrfecthire.com';

const pages = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/careers'
];

const createSitemap = (domain: string, pages: string[]): string => {
  const urlSet = pages.map(page => {
    const url = new URL(page, domain).href;
    return `
      <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlSet}
</urlset>`;
};

const sitemap = createSitemap(domain, pages).trim();

fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
console.log('Sitemap generated and saved to public/sitemap.xml');
