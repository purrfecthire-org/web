const fs = require('fs');
const glob = require('glob');
const { create } = require('xmlbuilder2');

const pages = glob.sync('pages/**/*.js', { cwd: __dirname });

const urlSet = create({ version: '1.0' }).ele('urlset', {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
});

pages.forEach((page) => {
  const path = page
    .replace(/^pages/, '')
    .replace(/\.js$/, '')
    .replace(/\/index$/, '');

  const url = urlSet.ele('url');
  url.ele('loc').txt(`https://purrfecthire.com${path}`);
  url.ele('changefreq').txt('monthly');
  url.ele('priority').txt('0.5');
});

const xml = urlSet.end({ prettyPrint: true });

fs.writeFileSync('public/sitemap.xml', xml);
