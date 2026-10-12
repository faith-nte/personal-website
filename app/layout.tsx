import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faith Nte | SEO & Marketing Automation Specialist",
  description: "SEO, CRM and marketing automation systems that turn visibility into qualified enquiries and measurable revenue.",
  metadataBase: new URL("https://faithnte.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><Analytics /></body></html>;
}

function Header() {
  return <header className="site-header"><div className="site-container nav-shell">
    <Link className="wordmark" href="/" aria-label="Faith Nte, home"><span>F</span>Faith Nte</Link>
    <nav className="desktop-nav" aria-label="Main navigation"><Link href="/#expertise">Expertise</Link><Link href="/#work">Outcomes</Link><Link href="/#experience">Experience</Link><Link href="/blog">Blog</Link></nav>
    <Link className="mobile-blog-link" href="/blog">Blog</Link>
    <a className="nav-cta" href="https://freewebsite.fenn.digital" target="_blank" rel="noreferrer">Website in 7 days <ArrowUpRight size={16} /></a>
  </div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="site-container footer-grid">
    <div><Link className="wordmark wordmark-light" href="/"><span>F</span>Faith Nte</Link><p>SEO, CRM and automation systems designed to turn visibility into revenue.</p></div>
    <div className="footer-links"><Link href="/#expertise">Expertise</Link><Link href="/#work">Outcomes</Link><Link href="/#experience">Experience</Link><Link href="/blog">Blog</Link><a href="https://www.linkedin.com/in/faith-nte/" target="_blank" rel="noreferrer">LinkedIn</a></div>
  </div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Faith Nte</span><span>Built around outcomes, not buzzwords.</span></div></footer>;
}
