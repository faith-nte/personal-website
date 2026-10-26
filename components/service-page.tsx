import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { breadcrumbs, jsonLd, person, siteUrl } from "@/lib/seo";

type Props = {
  path: string; title: string; description: string;
  sections: { title: string; paragraphs: string[] }[];
  evidence: { title: string; path: string; description: string }[];
};
export function ServicePage({ path, title, description, sections, evidence }: Props) {
  const schema = { "@context": "https://schema.org", "@graph": [person,
    { "@type": "Service", name: title, description, url: `${siteUrl}${path}`, provider: { "@id": person["@id"] }, areaServed: { "@type": "Country", name: "United Kingdom" } },
    breadcrumbs([{ name: "Home", path: "/" }, { name: title, path }]),
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <header className="blog-hero"><div className="site-container blog-hero-inner">
      <Link className="text-link" href="/">Faith Nte · AI automation consulting</Link>
      <h1>{title}</h1><p>{description}</p>
      <div className="hero-actions service-actions"><a className="button-primary" href="/#automation-plan">Get my free automation plan <ArrowUpRight size={18} /></a></div>
    </div></header>
    <div className="site-container seo-reading page-section">
      {sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}
      <section><h2>See the work behind this service</h2>{evidence.map(item => <div key={item.path}><h3><Link className="text-link" href={item.path}>{item.title} <ArrowUpRight size={16} /></Link></h3><p>{item.description}</p></div>)}</section>
      <section><h2>Start with one process</h2><p>Send me the task you want to improve, the tools involved, how often it runs and where it breaks down. I’ll use that context to discuss a practical scope and success criteria.</p><p><a className="text-link" href="/#automation-plan">Get my free automation plan <ArrowUpRight size={16} /></a></p><p><Link className="text-link" href="/about">Read about my experience</Link></p></section>
    </div>
  </>;
}
