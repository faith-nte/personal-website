import { pageMetadata, person, jsonLd, siteUrl } from "@/lib/seo";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, CheckCircle2, DatabaseZap, MailCheck, Workflow } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/wordpress";

const title = "AI Automation Consultant Didcot | Faith Nte";
const description = "AI and agentic AI automation for businesses in Didcot and across the UK. Save time on admin, connect your tools and start with a free automation plan.";
export const metadata = pageMetadata(title, description, "/");
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [person,
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Faith Nte", publisher: { "@id": person["@id"] }, inLanguage: "en-GB" },
    { "@type": "Service", "@id": `${siteUrl}/#automation-consulting`, name: "AI and agentic AI automation consulting", provider: { "@id": person["@id"] }, url: siteUrl, description, areaServed: [{ "@type": "City", name: "Didcot" }, { "@type": "AdministrativeArea", name: "Oxfordshire" }, { "@type": "Country", name: "United Kingdom" }] },
  ],
};

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
  { icon: Bot, number: "01", title: "Agentic AI automation", description: "I build AI agents and connected workflows that interpret enquiries, choose the next step and work across your tools, with agreed limits and human review for important decisions.", tools: "n8n · Make · AI agents · Content operations" },
  { icon: Workflow, number: "02", title: "Marketing automation", description: "Automated email, SMS and WhatsApp follow-up for new leads, existing customers and reactivation campaigns.", tools: "GoHighLevel · Klaviyo · Amazon SES · Instantly" },
  { icon: DatabaseZap, number: "03", title: "CRM integration", description: "I connect lead sources, customer records and follow-up so your team can see what happened and what needs attention without copying data between tools.", tools: "GoHighLevel · HubSpot · Airtable · APIs" },
];

const caseStudies = [
  { eyebrow: "Programmatic SEO · Multi-site operations", result: "30 websites → £10m annual pipeline", title: "Used programmatic SEO to support a £10m pipeline", description: "Managed a 30-site portfolio and produced search pages around services with clear commercial demand.", icon: BarChart3 },
  { eyebrow: "n8n · GoHighLevel · WhatsApp", result: "10 locations · controlled review outreach", title: "Automated review requests across 10 locations", description: "Built a workflow that routes each customer to the correct location, sends the request and records the outcome without duplicate contact.", icon: Workflow },
  { eyebrow: "Amazon SES · Deliverability", result: "£13k saved → 30% better delivery", title: "Reduced email costs and improved delivery", description: "Moved high-volume email to Amazon SES, reducing annual costs by 70% while improving deliverability by 30%.", icon: MailCheck },
  { eyebrow: "AI workflows · Healthcare", result: "£10k monthly time saving", title: "Automated repeatable SEO production tasks", description: "Converted documented SEO tasks into controlled AI workflows with human checks, saving the team time without removing quality control.", icon: Bot },
];

const experience = [
  { period: "2026 — Present", role: "AI Automation Manager", company: "Mobility & transport group", summary: "Owns the systems connecting search, B2B prospecting, review generation, reactivation and multichannel campaign delivery across a large digital estate." },
  { period: "2025 — Present", role: "Marketing Automation & CRM Operations", company: "Fenn Digital", summary: "Builds SEO, CRM follow-up, AI content workflows and secure web portals for self-pay healthcare businesses." },
  { period: "2024 — 2025", role: "Digital & Data Transformation Lead (Band 8, FTC)", company: "Wantage Primary Care Network, NHS", summary: "Improved patient access to digital services and coordinated delivery across the PCN; increased NHS App uptake by 9% in eight months." },
  { period: "2021 — 2024", role: "Digital Operations & SEO", company: "Stonewall Vaults", summary: "Led migrations, information architecture, analytics and conversion improvements across two websites producing 100,000 organic visits per quarter." },
];

export default async function Home() {
  const latestPosts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <section className="hero-shell" id="top">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Didcot, Oxfordshire · AI & business automation</p>
            <h1>Automate one part of your business <em>within 48 hours.</em></h1>
            <p className="hero-lede">I’m Faith, an AI automation consultant in Didcot. I help businesses use AI and agentic AI automation to handle repetitive work, follow up leads and connect their tools so their teams spend less time on admin. Let’s start with one workflow.</p>
            <div className="hero-actions">
              <Link className="button-primary" href="#automation-plan">Get my free automation plan <ArrowUpRight size={18} /></Link>
            </div>
            <p className="offer-terms">48 hours from agreed scope and access. One eligible workflow, built and tested.</p>
            <div className="availability-row"><span className="pulse-dot" aria-hidden="true" />n8n · Make · CRM integrations · human-reviewed AI workflows</div>
          </div>
          <div className="portrait-panel" aria-label="Portrait of Faith Nte">
            <span className="portrait-monogram" aria-hidden="true">FN</span>
            <div className="portrait-frame"><Image src="/my photo.svg" alt="Faith Nte" priority fill sizes="(max-width: 768px) 80vw, 38vw" className="object-cover object-center" /></div>
            <div className="portrait-note"><span>Didcot, Oxfordshire</span><strong>AI automation & marketing operations</strong></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected results"><div className="site-container proof-grid">
        {results.map((result) => <div className="proof-item" key={result.value + result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}
      </div></section>

      <section className="page-section leadgen-section" id="automation-plan" aria-labelledby="automation-plan-title">
        <div className="site-container leadgen-grid">
          <div className="leadgen-copy">
            <p className="eyebrow">For business owners & busy teams</p>
            <h2 id="automation-plan-title">Less chasing.<br />More time for your business.</h2>
            <p>Choose the admin task that keeps slipping down your team’s list. We’ll agree one practical automation and what it should deliver.</p>
            <ul className="workflow-options">
              <li><CheckCircle2 size={21} aria-hidden="true" /><div><strong>Follow up new enquiries</strong><span>Acknowledge enquiries and put the next action in front of your team.</span></div></li>
              <li><CheckCircle2 size={21} aria-hidden="true" /><div><strong>Send booking reminders</strong><span>Connect your booking tools to a consistent reminder workflow.</span></div></li>
              <li><CheckCircle2 size={21} aria-hidden="true" /><div><strong>Request reviews</strong><span>Send a timely request and keep track of who has already been contacted.</span></div></li>
            </ul>
            <p className="leadgen-next"><strong>What happens next?</strong> I’ll contact you to discuss your tools and recommend a practical starting point. Your automation plan is free, with no obligation. The 48-hour delivery window starts once scope and access are agreed.</p>
          </div>
          <div className="leadgen-form-panel">
            <p className="eyebrow">Start with one workflow</p>
            <h3>Request your free automation plan</h3>
            <p>Leave your business contact details and I’ll get in touch about the task you want to automate.</p>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/0VKXQD0HLCrtkX76gjal"
              className="leadgen-form"
              id="inline-0VKXQD0HLCrtkX76gjal"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Faithnte.com | Business automation | 48 hours"
              data-height="540"
              data-layout-iframe-id="inline-0VKXQD0HLCrtkX76gjal"
              data-form-id="0VKXQD0HLCrtkX76gjal"
              title="Request your free business automation plan"
            />
            <p className="form-fallback">Form not loading? <a href="https://api.leadconnectorhq.com/widget/form/0VKXQD0HLCrtkX76gjal" target="_blank" rel="noreferrer">Open it in a new tab</a> or email <a href="mailto:info@fenn.digital">info@fenn.digital</a>.</p>
          </div>
        </div>
      </section>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

      <section className="page-section marketing-story-section"><div className="site-container">
        <div className="marketing-story-intro">
          <div><p className="eyebrow">From first contact to repeat customer</p><h2>I connect your marketing tools so the work keeps moving.</h2></div>
          <div className="marketing-story-copy">
            <p>Some customers find you through search. Others first hear from you through outbound email or direct prospecting. In both cases, the opportunity can disappear when response is slow, customer data is scattered or follow-up depends on someone remembering.</p>
            <p>I connect lead generation, CRM and marketing automation so each prospect has a clear next step. I use AI where a task needs interpretation or drafting, and defined workflow steps for routing, updates and reminders. Human checks stay in place where judgement matters.</p>
          </div>
        </div>
        <div className="marketing-story-flow">
          {marketingStory.map((step) => <article className="marketing-story-step" key={step.number}>
            <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
          </article>)}
        </div>
      </div></section>

      <section className="page-section" id="expertise"><div className="site-container">
        <div className="section-heading split-heading"><div><p className="eyebrow">What I do</p><h2>AI automation consulting for marketing and customer operations.</h2></div><p>I focus on the work between your tools: capturing leads, keeping customer data useful, triggering follow-up and reducing repetitive content tasks. SEO remains part of how I bring the right prospects into that system.</p></div>
        <div className="capability-grid">{capabilities.map((capability) => { const Icon = capability.icon; return <article className="capability-card" key={capability.title}><div className="card-topline"><Icon size={24} /><span>{capability.number}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><span className="tool-line">{capability.tools}</span><Link className="text-link" href={capability.number === "01" ? "/agentic-ai-automation" : "/marketing-automation-consultant"}>Explore this service <ArrowUpRight size={16} /></Link></article>; })}</div>
      </div></section>

      <section className="page-section work-section" id="work"><div className="site-container">
        <div className="section-heading"><p className="eyebrow light">Selected projects</p><h2>What I built and what it delivered.</h2><p className="section-intro">Selected work across automation, search and customer operations. The review project covers an existing multi-location review operation; its full review count is not attributed to the automation.</p></div>
        <div className="case-grid">{caseStudies.map((item) => { const Icon = item.icon; return <article className="case-card" key={item.title}><div className="case-icon"><Icon size={22} /></div><p className="case-eyebrow">{item.eyebrow}</p><strong className="case-result">{item.result}</strong><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
      </div></section>

      <section className="page-section" id="approach"><div className="site-container">
        <div className="section-heading split-heading"><div><h2>How I approach your automation project.</h2></div><p>Start with the task that takes up your team’s time. I look at the process, the tools and the hand-offs before choosing what to automate.</p></div>
        <div className="marketing-story-flow">
          <article className="marketing-story-step"><span>01</span><h3>Map the process</h3><p>I identify the trigger, the data needed, the repetitive steps and the exceptions. Together, we define what a successful result looks like.</p></article>
          <article className="marketing-story-step"><span>02</span><h3>Build and check</h3><p>I connect the tools, add AI where it helps and test the workflow against real scenarios, including duplicate records, missing data and failed requests.</p></article>
          <article className="marketing-story-step"><span>03</span><h3>Make it usable</h3><p>I make the workflow understandable for the people running it, with clear review points and a way to check whether it is saving time.</p></article>
        </div>
        <div className="hero-actions"><a className="button-primary" href="#automation-plan">Get my free automation plan <ArrowUpRight size={18} /></a></div>
      </div></section>

      <section className="page-section" id="experience"><div className="site-container experience-layout">
        <div className="experience-sticky"><p className="eyebrow">Experience</p><h2>Where I have done this work.</h2><p>Roles across transport, self-pay healthcare, the NHS and high-traffic websites.</p><p><Link className="text-link" href="/about">More about my background <ArrowUpRight size={16} /></Link></p><div className="credential"><CheckCircle2 size={18} />MSc Digital Business — Distinction</div></div>
        <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.role + item.period}><span className="experience-period">{item.period}</span><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div></article>)}</div>
      </div></section>

      <section className="page-section"><div className="site-container seo-reading">
        <h2>Questions about working with me</h2>
        <h3>What does an AI automation consultant do?</h3><p>I map a business process, connect its tools and decide which steps need AI. Fixed rules handle routine data movement; a model can help interpret text or prepare a draft. My work focuses on marketing, CRM and repeatable operations.</p>
        <h3>Do you provide AI automation in Didcot?</h3><p>Yes. I’m based in Didcot, Oxfordshire, and help businesses locally and across the UK connect their enquiry, booking and follow-up tools. My experience includes self-pay healthcare and NHS digital transformation. We start with one administrative workflow and agree what success looks like before building.</p>
        <h3>What is agentic AI automation?</h3><p>It uses AI agents to interpret information, choose the next step and use connected tools to carry out a task. For your business, that could mean sorting incoming enquiries, preparing a response and updating your CRM, with clear limits and review points.</p>
        <h3>Does every workflow need an AI agent?</h3><p>No. My review routing and archive examples use defined rules for repeatable steps. I introduce AI when the task needs interpretation, with human review where an incorrect result would matter.</p>
        <h3>What can you automate in 48 hours?</h3><p>One agreed workflow, such as enquiry follow-up, booking reminders or review requests. We first check that your tools support the integration and agree scope and access. The 48-hour window starts after those are in place. If the work needs a larger build, I’ll explain the timeline before you commit.</p>
        <h3>Is the automation plan free?</h3><p>Yes. Share the task you want to automate and the tools you use. I’ll help you identify a useful first workflow and what it needs, with a free automation plan and no obligation.</p>
        <p><Link className="text-link" href="/blog/automate-google-review-requests-n8n-gohighlevel">Read my n8n and GoHighLevel workflow breakdown <ArrowUpRight size={16} /></Link></p>
      </div></section>

      {latestPosts.length > 0 && <section className="page-section home-blog-section"><div className="site-container">
        <div className="section-heading home-blog-heading"><div><p className="eyebrow">Latest articles</p><h2>Project breakdowns and implementation guides.</h2></div><Link className="button-secondary" href="/blog">Explore the blog <ArrowUpRight size={18} /></Link></div>
        <div className="blog-grid home-blog-grid">{latestPosts.map((post) => <BlogCard post={post} key={post.id} />)}</div>
      </div></section>}

    </>
  );
}
