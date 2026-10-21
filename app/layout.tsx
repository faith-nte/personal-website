import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faith Nte | AI Automation Consultant",
  description: "AI automation consulting, n8n workflows, CRM integration and marketing automation from Faith Nte in Didcot, Oxfordshire, UK.",
  metadataBase: new URL("https://faithnte.com"),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-GB"><body><Header /><main>{children}</main><Footer /><Analytics /></body></html>;
}

function Header() {
  return <header className="site-header"><div className="site-container nav-shell">
    <Link className="brand-logo" href="/" aria-label="Faith Nte, home"><Image src="/logo.svg" alt="Faith Nte" width={112} height={70} priority /></Link>
    <nav className="desktop-nav" aria-label="Main navigation"><Link href="/#expertise">Expertise</Link><Link href="/#work">Outcomes</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link></nav>
    <Link className="mobile-blog-link" href="/blog">Blog</Link>
  </div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="site-container footer-grid">
    <div><Link className="brand-logo brand-logo-footer" href="/" aria-label="Faith Nte, home"><Image src="/logo.svg" alt="Faith Nte" width={112} height={70} /></Link><p>AI automation consulting, CRM integrations and marketing workflows. Based in Didcot, Oxfordshire.</p></div>
    <div className="footer-links"><Link href="/n8n-consultant">n8n consulting</Link><Link href="/marketing-automation-consultant">Marketing automation</Link><Link href="/#expertise">Expertise</Link><Link href="/#work">Outcomes</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><a href="https://www.linkedin.com/in/faith-nte/" target="_blank" rel="noreferrer">LinkedIn</a></div>
  </div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Faith Nte</span><span>Built around outcomes, not buzzwords.</span></div></footer>;
}
