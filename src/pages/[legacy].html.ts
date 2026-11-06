import type { APIRoute, GetStaticPaths } from 'astro';
import { legacy } from '../lib/routes';
export const getStaticPaths = (() => legacy.map(([old, to]) => ({ params: { legacy: old }, props: { to } }))) satisfies GetStaticPaths;
export const GET: APIRoute = ({ props, site }) => {
  const to = props.to as string;
  const canonical = new URL(to.split('#')[0], site || 'https://www.parc.ie');
  return new Response('<!doctype html><html lang="en-IE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>This PARC page has moved</title><meta name="robots" content="noindex"><link rel="canonical" href="' + canonical.href + '"><meta http-equiv="refresh" content="0;url=' + to + '"></head><body><main><h1>This PARC page has moved.</h1><p><a href="' + to + '">Continue to the new page</a></p></main></body></html>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
