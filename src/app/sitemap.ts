// pages/sitemap.js

export async function getServerSideProps({ res }) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->
      <url>
        <loc>https://purrfecthire.com/</loc>
        <lastmod>2024-05-16T17:36:06+00:00</lastmod>
      </url>
    </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default function Sitemap() {
    return null;
  }
  