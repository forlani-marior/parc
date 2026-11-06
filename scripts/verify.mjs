import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const files = new Set((await readdir(dist, { recursive: true, withFileTypes: true }))
  .filter(entry => entry.isFile())
  .map(entry => join(entry.parentPath, entry.name).replaceAll('\\', '/').split('/dist/').at(-1)));
const routes = [
  '/', '/discover/', '/about/', '/services/', '/services/accident-repairs/', '/services/body-and-paint/',
  '/services/mechanical-diagnostics/', '/services/customer-support/', '/our-work/', '/contact/',
  '/advice/', '/testimonials/', '/privacy/',
];
const legacy = ['about', 'work', 'services', 'testimonial', 'tenthings', 'contact', 'faq'];
const asFile = pathname => pathname.endsWith('/') ? pathname.slice(1) + 'index.html' : pathname.slice(1);
const get = async file => readFile(new URL(file, dist), 'utf8');
const htmlFiles = new Map(await Promise.all([...files].filter(file => file.endsWith('.html')).map(async file => [file, await get(file)])));
let inspected = 0;
for (const route of routes) {
  const document = htmlFiles.get(asFile(route));
  assert.ok(document, route + ' is missing');
  assert.match(document, /<html lang="en-IE"/, route);
  assert.match(document, /<meta name="description" content="[^"]+"/, route);
  assert.equal((document.match(/<h1(?:\s|>)/g) || []).length, 1, route + ' should have one H1');
  for (const [, reference] of document.matchAll(/\b(?:href|src|poster|data-video)="([^"]+)"/g)) {
    if (!reference.startsWith('/') && !reference.startsWith('#')) continue;
    const url = new URL(reference.replaceAll('&amp;', '&'), 'https://parc.local' + route);
    if (url.host !== 'parc.local') continue;
    const file = asFile(url.pathname);
    assert.ok(files.has(file), route + ' links to missing ' + reference);
    if (url.hash && htmlFiles.has(file)) {
      assert.ok(htmlFiles.get(file).includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), route + ' links to missing anchor ' + reference);
    }
    inspected++;
  }
}
for (const old of legacy) {
  const page = htmlFiles.get(old + '.html');
  assert.ok(page, 'Missing static fallback for ' + old);
  assert.match(page, /http-equiv="refresh"/, old);
}
const home = htmlFiles.get('index.html');
const sceneLinks = home.match(/<a[^>]*\bdata-chapter-cta\b[^>]*>/g) || [];
assert.equal(sceneLinks.length, 5, 'Five chapters');
assert.ok(sceneLinks.every(link => /\shidden[\s>]/.test(link)), 'Scrolling reveals chapter links');
assert.match(home, /data-chapter-cta[^>]*href="\/about\/"[^>]*>\s*Discover Our Story/);
assert.doesNotMatch(home, /<footer\b|id="meet-parc"|<nav\b/);
assert.doesNotMatch(home, /<video[^>]*\bautoplay\b/);
const video = await stat(new URL('assets/toyota-yaris-cross.mp4', dist));
assert.ok(video.size > 1_000_000 && video.size < 6_000_000, 'Optimised video should be below 6 MB');
for (const name of ['sitemap.xml', 'robots.txt', '_redirects', '.htaccess']) assert.ok(files.has(name), name + ' missing');
console.log('Verified ' + routes.length + ' pages, ' + inspected + ' local references, seven legacy fallbacks, and the scroll video assets.');
