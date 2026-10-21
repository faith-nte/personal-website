// Read-only semantic checks against Schema.org's published vocabulary.
// Usage: node scripts/schema-audit.mjs https://faithnte.com vocabulary.json report.json
import { readFileSync, writeFileSync } from 'node:fs';
const origin=(process.argv[2]||'https://faithnte.com').replace(/\/$/,'');
const vocab=JSON.parse(readFileSync(process.argv[3],'utf8'));
const output=process.argv[4]||'/tmp/schema-audit.json';
const defs=new Map(vocab['@graph'].map(x=>[x['@id'].replace('schema:',''),x]));
const arr=x=>x==null?[]:Array.isArray(x)?x:[x];
const refs=x=>arr(x).map(v=>v['@id']?.replace('schema:',''));
function ancestors(type,seen=new Set()) { if(seen.has(type))return seen;seen.add(type);for(const p of refs(defs.get(type)?.['rdfs:subClassOf']))ancestors(p,seen);return seen; }
const errors=[];let nodesChecked=0;
function inspect(node,page,graph){
 if(!node||typeof node!=='object')return;
 if(Array.isArray(node)){node.forEach(n=>inspect(n,page,graph));return;}
 const types=arr(node['@type']);
 const family=new Set(types.flatMap(t=>[...ancestors(t)]));
 if(types.length)nodesChecked++;
 for(const t of types)if(!defs.has(t))errors.push(`${page}: unknown type ${t}`);
 for(const [key,value] of Object.entries(node)){
  if(key.startsWith('@'))continue;
  const def=defs.get(key);
  if(!def)errors.push(`${page}: unknown property ${key}`);
  else {
   const domains=refs(def['schema:domainIncludes']);
   if(types.length&&domains.length&&!domains.some(t=>family.has(t)))errors.push(`${page}: ${key} not applicable to ${types}`);
   const ranges=refs(def['schema:rangeIncludes']);
   for(const v of arr(value)){
    if(v&&typeof v==='object'){
     const resolved=v['@type']?v:graph.get(v['@id']);
     if(resolved?.['@type']&&ranges.length&&!arr(resolved['@type']).some(t=>ranges.some(r=>ancestors(t).has(r))))errors.push(`${page}: ${key} has unexpected type ${resolved['@type']}`);
    }
   }
  }
  inspect(value,page,graph);
 }
 if(types.includes('BlogPosting')){
  for(const field of ['headline','description','author','publisher','mainEntityOfPage','datePublished','dateModified','image'])if(!node[field])errors.push(`${page}: article missing ${field}`);
  for(const field of ['datePublished','dateModified'])if(!/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(node[field])||!Number.isFinite(Date.parse(node[field])))errors.push(`${page}: invalid ${field}`);
  if(Date.parse(node.dateModified)<Date.parse(node.datePublished))errors.push(`${page}: modified before published`);
 }
 if(types.includes('BreadcrumbList'))node.itemListElement?.forEach((item,i)=>{if(item.position!==i+1||!item.name||!item.item?.startsWith('https://faithnte.com'))errors.push(`${page}: invalid breadcrumb ${i}`)});
 if(types.includes('Person')&&(!node.name||!node.url||!node.sameAs?.length))errors.push(`${page}: incomplete author identity`);
 if(types.includes('Service')&&(!node.provider||!node.name||!node.url||!node.areaServed))errors.push(`${page}: incomplete service`);
}
const xml=await(await fetch(origin+'/sitemap.xml')).text();
const paths=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
const pages=[];
for(const path of paths){
 const html=await(await fetch(origin+path)).text();
 const roots=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 if(!roots.length)errors.push(`${path}: no structured data`);
 const nodes=roots.flatMap(r=>r['@graph']||[r]);const graph=new Map(nodes.filter(n=>n['@id']).map(n=>[n['@id'],n]));
 const start=errors.length;for(const node of nodes)inspect(node,path,graph);
 const h1=html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]*>/g,'').replace(/&amp;/g,'&');
 const article=nodes.find(n=>n['@type']==='BlogPosting');if(article&&article.headline!==h1)errors.push(`${path}: headline does not match visible H1`);
 pages.push({path,types:nodes.map(n=>n['@type']),errors:errors.slice(start)});
}
const result={checkedAt:new Date().toISOString(),origin,vocabulary:'https://schema.org/version/latest/schemaorg-current-https.jsonld',pages,nodesChecked,errors};writeFileSync(output,JSON.stringify(result,null,2));console.log(JSON.stringify({output,pages:pages.length,nodesChecked,errors},null,2));if(errors.length)process.exitCode=1;
