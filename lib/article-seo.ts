import { plainText } from "./wordpress";
import type { Post } from "./wordpress.d";

// Editorial summaries describe the published work without adding new outcome claims.
const summaries: Record<string, { title: string; description: string }> = {
  "hermes-agent-n8n-save-credits": { title: "How I Save Tokens in Hermes Agent with n8n", description: "I use n8n for repeatable work that does not need a model. Explore my review collection and archive workflows, plus a proposed Hermes handoff pattern." },
  "automate-google-review-requests-n8n-gohighlevel": { title: "How I Automate Google Reviews with n8n & GoHighLevel", description: "My n8n and GoHighLevel review request workflow connects completed jobs to the correct location, prevents duplicate outreach and records processing status." },
  "gp-website-with-wordpress-nightingale-theme": { title: "How We Improved a GP Website with WordPress & Nightingale", description: "My NHS website project uses WordPress and the Nightingale theme to help patients find key services, with lessons for managing GP website content." },
  "9-nhs-app-uptake-in-8-months": { title: "How We Grew NHS App Uptake by 9% in Eight Months", description: "My NHS digital transformation case study: how staff support, patient guidance and practical service changes helped grow NHS App uptake by 9% in eight months." },
  "care-home-proxy-access": { title: "How We Introduced Care Home Proxy Access", description: "My care home proxy access project explores how GP practices and care homes can improve administrative hand-offs and access to digital services." },
};
export function articleSeo(post: Post) {
  return summaries[post.slug] ?? { title: plainText(post.title.rendered), description: plainText(post.excerpt.rendered).slice(0, 170) };
}
