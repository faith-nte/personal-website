import type { Metadata } from "next";

export const siteUrl = "https://faithnte.com";
export const personId = `${siteUrl}/#faith-nte`;
export const linkedIn = "https://www.linkedin.com/in/faith-nte/";
export const person = {
  "@type": "Person", "@id": personId, name: "Faith Nte",
  alternateName: "Faith Nteogwuija", url: `${siteUrl}/about`,
  jobTitle: "AI Automation Consultant", sameAs: [linkedIn],
  address: { "@type": "PostalAddress", addressLocality: "Didcot", addressRegion: "Oxfordshire", addressCountry: "GB" },
  knowsAbout: ["AI workflow automation", "Marketing automation", "CRM integration", "n8n", "SEO"],
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: `${siteUrl}${path}` },
    openGraph: { title, description, url: `${siteUrl}${path}`, type: "website", locale: "en_GB", siteName: "Faith Nte", images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Faith Nte — AI automation consultant, Didcot, Oxfordshire" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/opengraph-image`] },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return { "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${siteUrl}${item.path}` })) };
}
