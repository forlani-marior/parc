import type { APIRoute } from 'astro';
import { pages } from '../lib/routes';
export const GET: APIRoute = ({ site }) => {
  const origin = site || 'https://www.parc.ie';
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + pages.map(path => '\n<url><loc>' + new URL(path, origin).href + '</loc></url>').join('') + '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
