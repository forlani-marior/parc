import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(
  import.meta.env.PUBLIC_PARC_LAUNCH === 'true'
    ? 'User-agent: *\nAllow: /\nSitemap: ' + new URL('/sitemap.xml', site || 'https://www.parc.ie').href + '\n'
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
