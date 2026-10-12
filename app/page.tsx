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

const marketingStory = [
  { number: "01", title: "Create demand", description: "Inbound brings prospects through SEO and useful content. Outbound reaches the right accounts through targeted email and direct prospecting." },
  { number: "02", title: "Convert the lead", description: "The CRM records the source, identifies marketing-qualified leads and triggers timely follow-up across email, SMS and WhatsApp." },
  { number: "03", title: "Keep the customer", description: "Onboarding, review requests and reactivation campaigns help customers return, recommend the business and buy again." },
];

const capabilities = [
  { icon: Search, number: "01", title: "SEO", description: "Technical, local and programmatic SEO that helps the right people find the right service and take action.", tools: "Technical SEO · Content operations · GA4 · Search Console" },
  { icon: Workflow, number: "02", title: "Marketing automation", description: "Automated email, SMS and WhatsApp follow-up for new leads, existing customers and reactivation campaigns.", tools: "GoHighLevel · Klaviyo · Amazon SES · Instantly" },
  { icon: DatabaseZap, number: "03", title: "CRM & AI workflows", description: "CRM pipelines, clean customer data and controlled AI workflows that reduce repetitive manual work.", tools: "n8n · Make · HubSpot · Airtable · AI agents" },
];

const caseStudies = [
  { eyebrow: "Programmatic SEO · Multi-site operations", result: "30 websites → £10m annual pipeline", title: "Used programmatic SEO to support a £10m pipeline", description: "Managed a 30-site portfolio and produced search pages around services with clear commercial demand.", icon: BarChart3 },
  { eyebrow: "n8n · GoHighLevel · WhatsApp", result: "10 locations → 12,000 reviews", title: "Automated review requests across 10 locations", description: "Built a workflow that routes each customer to the correct location, sends the request and records the outcome without duplicate contact.", icon: Workflow },
  { eyebrow: "Amazon SES · Deliverability", result: "£13k saved → 30% better delivery", title: "Reduced email costs and improved delivery", description: "Moved high-volume email to Amazon SES, reducing annual costs by 70% while improving deliverability by 30%.", icon: MailCheck },
  { eyebrow: "AI workflows · Healthcare", result: "£10k monthly time saving", title: "Automated repeatable SEO production tasks", description: "Converted documented SEO tasks into controlled AI workflows with human checks, saving the team time without removing quality control.", icon: Bot },
];

const experience = [
  { period: "2026 — Present", role: "Marketing Operations Executive", company: "Mobility & transport group", summary: "Owns the systems connecting search, B2B prospecting, review generation, reactivation and multichannel campaign delivery across a large digital estate." },
  { period: "2025 — Present", role: "Marketing Automation & CRM Operations", company: "Fenn Digital", summary: "Builds SEO, CRM follow-up, AI content workflows and secure web portals for self-pay healthcare businesses." },
  { period: "2024 — 2025", role: "Digital & Data Transformation Lead (Band 8a, FTC)", company: "Wantage Primary Care Network, NHS", summary: "Improved patient access to digital services and coordinated delivery across the PCN; increased NHS App uptake by 9% in nine months." },
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
            <h1>I help businesses <em>generate qualified leads, retain customers and reduce cost per sale.</em></h1>
            <p className="hero-lede">I develop marketing strategies that connect SEO, CRM, email, SMS and WhatsApp—from first visit to marketing-qualified lead, sale and repeat customer.</p>
            <div className="hero-actions">
              <Link className="button-primary" href="#work">See the outcomes <ArrowUpRight size={18} /></Link>
              <a className="button-secondary" href="https://www.linkedin.com/in/faith-nte/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </div>
            <div className="availability-row"><span className="pulse-dot" aria-hidden="true" />Lead generation · MQL conversion · customer retention · lower acquisition costs</div>
          </div>
          <div className="portrait-panel" aria-label="Portrait of Faith Nte">
            <span className="portrait-monogram" aria-hidden="true">FN</span>
            <div className="portrait-frame"><Image src="/my photo.svg" alt="Faith Nte" priority fill sizes="(max-width: 768px) 80vw, 38vw" className="object-cover object-center" /></div>
            <div className="portrait-note"><span>Oxford, UK</span><strong>SEO, CRM and marketing automation</strong></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected results"><div className="site-container proof-grid">
        {results.map((result) => <div className="proof-item" key={result.value + result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}
      </div></section>

      <section className="page-section marketing-story-section"><div className="site-container">
        <div className="marketing-story-intro">
          <div><p className="eyebrow">From first contact to repeat customer</p><h2>Leads can come from inbound or outbound. Both need a system behind them.</h2></div>
          <div className="marketing-story-copy">
            <p>Some customers find you through search. Others first hear from you through outbound email or direct prospecting. In both cases, the opportunity can disappear when response is slow, customer data is scattered or follow-up depends on someone remembering.</p>
            <p>I connect lead generation, CRM and marketing automation so each prospect has a clear next step. The same system continues after the first sale, helping the business retain customers, collect reviews and generate repeat revenue.</p>
          </div>
        </div>
        <div className="marketing-story-flow">
          {marketingStory.map((step) => <article className="marketing-story-step" key={step.number}>
            <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
          </article>)}
        </div>
      </div></section>

      <section className="page-section" id="expertise"><div className="site-container">
        <div className="section-heading split-heading"><div><p className="eyebrow">What I do</p><h2>Generate qualified leads, improve retention and lower the cost of each sale.</h2></div><p>I use SEO to attract relevant prospects, CRM to qualify and track them, and automation to follow up until they buy or return.</p></div>
        <div className="capability-grid">{capabilities.map((capability) => { const Icon = capability.icon; return <article className="capability-card" key={capability.title}><div className="card-topline"><Icon size={24} /><span>{capability.number}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><span className="tool-line">{capability.tools}</span></article>; })}</div>
      </div></section>

      <section className="page-section work-section" id="work"><div className="site-container">
        <div className="section-heading"><p className="eyebrow light">Selected projects</p><h2>What I built and what it delivered.</h2><p className="section-intro">Four examples showing the work, the tools and the measured result.</p></div>
        <div className="case-grid">{caseStudies.map((item) => { const Icon = item.icon; return <article className="case-card" key={item.title}><div className="case-icon"><Icon size={22} /></div><p className="case-eyebrow">{item.eyebrow}</p><strong className="case-result">{item.result}</strong><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
      </div></section>

      <section className="page-section" id="experience"><div className="site-container experience-layout">
        <div className="experience-sticky"><p className="eyebrow">Experience</p><h2>Where I have done this work.</h2><p>Roles across transport, self-pay healthcare, the NHS and high-traffic websites.</p><div className="credential"><CheckCircle2 size={18} />MSc Digital Business — Distinction</div></div>
        <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.role + item.period}><span className="experience-period">{item.period}</span><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div></article>)}</div>
      </div></section>

      {latestPosts.length > 0 && <section className="page-section home-blog-section"><div className="site-container">
        <div className="section-heading home-blog-heading"><div><p className="eyebrow">Latest articles</p><h2>Project breakdowns and implementation guides.</h2></div><Link className="button-secondary" href="/blog">Explore the blog <ArrowUpRight size={18} /></Link></div>
        <div className="blog-grid home-blog-grid">{latestPosts.map((post) => <BlogCard post={post} key={post.id} />)}</div>
      </div></section>}

    </>
  );
}
