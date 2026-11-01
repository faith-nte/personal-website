import { MobileNav } from "@/components/mobile-nav";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faith Nte | Digital Transformation & Automation Manager",
  description: "Projects, ideas and practical lessons in digital transformation, business improvement and automation across healthcare, marketing and operations.",
  metadataBase: new URL("https://faithnte.com"),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-GB"><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><Analytics /></body></html>;
}

function Header() {
  return <header className="site-header"><div className="site-container nav-shell">
    <Link className="brand-logo" href="/" aria-label="Faith Nte, home"><Image src="/faith-nte-logo-dark.svg" alt="Faith Nte" width={112} height={70} priority /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{[["Home", "/"], ["About", "/#about"], ["Experience", "/#experience"], ["Insights", "/blog"]].map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
    <a className="text-link header-enquiry" href="mailto:faithnte08@gmail.com">Contact</a>
        <MobileNav />
  </div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="site-container footer-grid"><div><Link className="brand-logo brand-logo-footer" href="/" aria-label="Faith Nte, home"><Image src="/faith-nte-logo-light.svg" alt="Faith Nte" width={112} height={70} /></Link><p>Digital transformation, business improvement and practical automation. Based in Didcot, Oxfordshire.</p></div><div className="footer-links"><Link href="/about">About</Link><Link href="/#experience">Experience</Link><Link href="/blog">Insights</Link><Link href="/#contact">Contact</Link></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Faith Nte</span><span>Digital Transformation &amp; Automation Manager</span></div></footer>;
}
