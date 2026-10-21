// Usage: node scripts/seo-audit.mjs https://faithnte.com /tmp/seo-audit.json
// Read-only crawl of sitemap pages, metadata, structured data and internal links.
import { writeFileSync } from 'node:fs';
const origin = (process.argv[2] || 'https://faithnte.com').replace(/\/$/, '');
const output = process.argv[3] || '/tmp/faithnte-seo-audit.json';
const canonicalOrigin = 'https://faithnte.com';
const errors = [];
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1], m[2].replace(/&amp;/g, '&')]));
const get = async path => { const response = await fetch(origin + path, { redirect: 'manual' }); return { status: response.status, location: response.headers.get('location'), html: await response.text() }; };
const sitemap = await get('/sitemap.xml');
const urls = [...sitemap.html.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
if (sitemap.status !== 200 || urls.length < 10) errors.push('Sitemap unavailable or missing expected pages');
const pages = await Promise.all(urls.map(async url => {
  const path = new URL(url).pathname;
  const { status, html } = await get(path);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0]));
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0]));
  const canonical = links.find(x => x.rel === 'canonical')?.href;
  const description = metas.find(x => x.name === 'description')?.content;
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => m[1].replace(/<[^>]*>/g, ''));
  const schemas = [];
  for (const m of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { const d = JSON.parse(m[1]); schemas.push(...(d['@graph'] || [d])); } catch { errors.push(`${path}: invalid JSON-LD`); }
  }
  const ids = new Set([...html.matchAll(/\bid="([^"]*)"/g)].map(m => m[1]));
  const anchors = [...html.matchAll(/<a\b[^>]*>/g)].map(m => attrs(m[0]).href).filter(Boolean);
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map(m => attrs(m[0]));
  const missingAlt = imgs.filter(x => !Object.hasOwn(x, 'alt')).length;
  const robots = metas.filter(x => ['robots','googlebot'].includes(x.name)).map(x => x.content).join(';');
  if (status !== 200 || h1s.length !== 1 || !title || !description || !canonical || /noindex/.test(robots)) errors.push(`${path}: status/headings/metadata/indexability failure`);
  if (canonical && new URL(canonical).pathname.replace(/\/$/,'') !== path.replace(/\/$/,'')) errors.push(`${path}: canonical mismatch`);
  if (missingAlt) errors.push(`${path}: ${missingAlt} images missing alt attributes`);
  if (path.startsWith('/blog/') && !schemas.some(x=>x['@type']==='BlogPosting')) errors.push(`${path}: missing BlogPosting schema`);
  const articleBody = (html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] || html).replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ');
  return { path, status, title, description, canonical, h1s, robots, schemaTypes: schemas.map(x=>x['@type']), words: articleBody.split(/\s+/).filter(Boolean).length, bytes: Buffer.byteLength(html), images: imgs.length, missingAlt, anchors, ids: [...ids] };
}));
const byPath = new Map(pages.map(p=>[p.path.replace(/\/$/,'') || '/',p]));
for (const page of pages) {
  for (const href of page.anchors) {
    let url; try { url = new URL(href,canonicalOrigin+page.path); } catch { errors.push(`${page.path}: invalid link ${href}`); continue; }
    if (url.origin !== canonicalOrigin) continue;
    const target = byPath.get(url.pathname.replace(/\/$/,'') || '/');
    if (!target) { if (!/\.[a-z0-9]+$/i.test(url.pathname)) errors.push(`${page.path}: internal link outside sitemap ${href}`); continue; }
    if (url.hash && !target.ids.includes(decodeURIComponent(url.hash.slice(1)))) errors.push(`${page.path}: broken anchor ${href}`);
  }
}
for (const key of ['title','description','canonical']) {
  const values=pages.map(p=>p[key]); if(new Set(values).size!==values.length)errors.push(`Duplicate ${key}`);
}
const redirects = [];
for (const [path,target] of [['/posts','/blog'],['/posts/authors','/about'],['/posts/categories','/blog'],['/posts/tags','/blog'],['/posts/hermes-agent-n8n-save-credits','/blog/hermes-agent-n8n-save-credits']]) {
  const result=await get(path); redirects.push({path,status:result.status,location:result.location});
  if (![301,308].includes(result.status) || !result.location?.endsWith(target))errors.push(`${path}: expected permanent redirect to ${target}`);
}
const missing=await get('/blog/this-article-does-not-exist-seo-audit');
if(missing.status!==404)errors.push('Unknown article does not return HTTP 404');
const robots=await get('/robots.txt');
if(!robots.html.includes('Sitemap: https://faithnte.com/sitemap.xml'))errors.push('Incorrect robots sitemap');
const report={ checkedAt:new Date().toISOString(), origin, pageCount:pages.length, pages:pages.map(({ids,anchors,...p})=>p), redirects, missingArticleStatus:missing.status, robots:robots.html, errors:[...new Set(errors)] };
writeFileSync(output,JSON.stringify(report,null,2));
console.log(JSON.stringify({output,pageCount:report.pageCount,errors:report.errors},null,2));
if(errors.length)process.exitCode=1;
