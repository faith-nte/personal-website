import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/wordpress";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  return [
    ...["", "/about", "/n8n-consultant", "/agentic-ai-automation", "/marketing-automation-consultant", "/blog"].map(path => ({ url: `${siteUrl}${path}`, ...(path === "/blog" && posts.length ? { lastModified: new Date(Math.max(...posts.map(post => new Date(`${post.modified_gmt}Z`).getTime()))) } : {}) })),
    ...posts.map(post => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: new Date(`${post.modified_gmt}Z`) })),
  ];
}
