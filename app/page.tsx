import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, CheckCircle2, DatabaseZap, MailCheck, Search, Workflow } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/wordpress";

const results = [
  { value: "£10m", label: "annual pipeline supported by programmatic SEO" },
  { value: "70%", label: "reduction in annual email delivery costs" },
  { value: "£1m+", label: "quarterly revenue influenced by lifecycle and search" },
  { value: "99%", label: "cold-email deliverability through clean data" },
];

const capabilities = [
  { icon: Search, number: "01", title: "Search systems", description: "Programmatic and local SEO systems that turn search demand into high-intent traffic, enquiries and measurable pipeline.", tools: "Technical SEO · Content operations · GA4 · Search Console" },
  { icon: Workflow, number: "02", title: "Lifecycle automation", description: "Connected email, SMS and WhatsApp journeys that nurture leads, reactivate customers and keep follow-up moving.", tools: "GoHighLevel · Klaviyo · Amazon SES · Instantly" },
  { icon: DatabaseZap, number: "03", title: "CRM & AI workflows", description: "Reliable pipelines, clean data and practical AI workflows that remove repetitive work without losing human oversight.", tools: "n8n · Make · HubSpot · Airtable · AI agents" },
];

const caseStudies = [
  { eyebrow: "Programmatic SEO · Multi-site operations", result: "30 websites → £10m annual pipeline", title: "Built a search portfolio around commercial demand", description: "Managed a 30-site portfolio and used programmatic SEO to improve visibility at scale—connecting content production to revenue, not rankings alone.", icon: BarChart3 },
  { eyebrow: "n8n · GoHighLevel · WhatsApp", result: "10 locations → 12,000 reviews", title: "Automated review collection across every location", description: "Built a governed review-request workflow that routes customer data, triggers personalised messages and supports a consistent local reputation engine.", icon: Workflow },
  { eyebrow: "Amazon SES · Deliverability", result: "£13k saved → 30% better delivery", title: "Re-engineered email delivery for lower cost and reach", description: "Migrated the delivery layer to Amazon SES, reducing annual costs by 70% while improving deliverability and creating capacity for high-volume campaigns.", icon: MailCheck },
  { eyebrow: "AI operations · Healthcare growth", result: "£10k monthly time saving", title: "Turned manual SEO playbooks into AI workflows", description: "Converted repeatable SOPs into controlled AI-enabled workflows, freeing teams from production bottlenecks while preserving quality checks.", icon: Bot },
];

const experience = [
  { period: "2026 — Present", role: "Marketing Operations Executive", company: "Mobility & transport group", summary: "Owns the systems connecting search, B2B prospecting, review generation, reactivation and multichannel campaign delivery across a large digital estate." },
  { period: "2025 — Present", role: "Marketing Automation & CRM Operations", company: "Fenn Digital", summary: "Builds automated growth infrastructure for self-pay healthcare brands—from search and lifecycle journeys to lead operations, AI content and secure portals." },
  { period: "2024 — 2025", role: "Digital & Data Transformation Lead (Band 8a, FTC)", company: "Wantage Primary Care Network, NHS", summary: "Translated operational needs into accessible digital journeys, evidence-led priorities and coordinated delivery; increased NHS App uptake by 9% in nine months." },
  { period: "2021 — 2024", role: "Digital Operations & SEO", company: "Stonewall Vaults", summary: "Led migrations, information architecture, analytics and conversion improvements across two websites producing 100,000 organic visits per quarter." },
];

export default async function Home() {
  const latestPosts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <section className="hero-shell" id="top">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SEO · Marketing automation · CRM operations</p>
            <h1>I build the systems behind <em>growth.</em></h1>
            <p className="hero-lede">I connect visibility, customer data and intelligent automation so more of the right people find you—and fewer opportunities fall through the gaps.</p>
            <div className="hero-actions">
              <Link className="button-primary" href="#work">See the outcomes <ArrowUpRight size={18} /></Link>
              <a className="button-secondary" href="https://www.linkedin.com/in/faith-nte/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </div>
            <div className="availability-row"><span className="pulse-dot" aria-hidden="true" />Building growth systems across search, CRM and lifecycle</div>
          </div>
          <div className="portrait-panel" aria-label="Portrait of Faith Nte">
            <span className="portrait-monogram" aria-hidden="true">FN</span>
            <div className="portrait-frame"><Image src="/my photo.svg" alt="Faith Nte" priority fill sizes="(max-width: 768px) 80vw, 38vw" className="object-cover object-center" /></div>
            <div className="portrait-note"><span>Oxford, UK</span><strong>Marketing systems that compound</strong></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected results"><div className="site-container proof-grid">
        {results.map((result) => <div className="proof-item" key={result.value + result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}
      </div></section>

      <section className="page-section" id="expertise"><div className="site-container">
        <div className="section-heading split-heading"><div><p className="eyebrow">The growth infrastructure</p><h2>Not another set of disconnected campaigns.</h2></div><p>Search brings demand in. CRM gives it structure. Automation keeps momentum. I design the three as one operating system, with clear reporting from first touch to revenue.</p></div>
        <div className="capability-grid">{capabilities.map((capability) => { const Icon = capability.icon; return <article className="capability-card" key={capability.title}><div className="card-topline"><Icon size={24} /><span>{capability.number}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><span className="tool-line">{capability.tools}</span></article>; })}</div>
      </div></section>

      <section className="page-section work-section" id="work"><div className="site-container">
        <div className="section-heading"><p className="eyebrow light">Selected systems & outcomes</p><h2>Proof that the plumbing matters.</h2><p className="section-intro">Practical systems designed around commercial outcomes—not a list of software features.</p></div>
        <div className="case-grid">{caseStudies.map((item) => { const Icon = item.icon; return <article className="case-card" key={item.title}><div className="case-icon"><Icon size={22} /></div><p className="case-eyebrow">{item.eyebrow}</p><strong className="case-result">{item.result}</strong><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
      </div></section>

      <section className="page-section" id="experience"><div className="site-container experience-layout">
        <div className="experience-sticky"><p className="eyebrow">Experience</p><h2>Strategy grounded in delivery.</h2><p>Experience across commercial growth, self-pay healthcare, the NHS and high-traffic digital operations.</p><div className="credential"><CheckCircle2 size={18} />MSc Digital Business — Distinction</div></div>
        <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.role + item.period}><span className="experience-period">{item.period}</span><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div></article>)}</div>
      </div></section>

      {latestPosts.length > 0 && <section className="page-section home-blog-section"><div className="site-container">
        <div className="section-heading home-blog-heading"><div><p className="eyebrow">Latest field notes</p><h2>How the systems are built.</h2></div><Link className="button-secondary" href="/blog">Explore the blog <ArrowUpRight size={18} /></Link></div>
        <div className="blog-grid home-blog-grid">{latestPosts.map((post) => <BlogCard post={post} key={post.id} />)}</div>
      </div></section>}

    </>
  );
}
