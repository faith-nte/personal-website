import { pageMetadata, jsonLd, person, siteUrl, breadcrumbs } from "@/lib/seo";

import { BlogCard } from "@/components/blog-card";
import { getAllPosts, getEmbeddedCategory } from "@/lib/wordpress";

export const metadata = pageMetadata("AI & Marketing Automation Projects | Faith Nte", "My n8n, CRM and AI workflow breakdowns, alongside NHS digital transformation projects. Practical implementation notes from Faith Nte in Oxfordshire.", "/blog");

export default async function BlogPage() {
  const posts = await getAllPosts();
  const topics = Array.from(
    new Set(posts.map((post) => getEmbeddedCategory(post)?.name).filter(Boolean)),
  ).slice(0, 5) as string[];

  const schema = { "@context": "https://schema.org", "@graph": [person,
    { "@type": "CollectionPage", "@id": `${siteUrl}/blog`, name: "AI and marketing automation projects", url: `${siteUrl}/blog`, author: { "@id": person["@id"] }, mainEntity: { "@type": "ItemList", itemListElement: posts.map((post, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/blog/${post.slug}` })) } },
    breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]),
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <section className="blog-hero">
        <div className="site-container blog-hero-inner">
          <p className="eyebrow">Field notes & practical guides</p>
          <h1>How I build AI workflows and marketing automation.</h1>
          <p>
            Project breakdowns and practical guides covering n8n, CRM, AI workflows and digital transformation. I distinguish delivered work from proposed implementation patterns.
          </p>
          {topics.length > 0 && (
            <div className="blog-topics" aria-label="Blog topics">
              <span>Explore</span>
              {topics.map((topic) => <span className="blog-topic" key={topic}>{topic}</span>)}
            </div>
          )}
        </div>
      </section>

      <section className="blog-index page-section">
        <div className="site-container">
          {posts.length > 0 ? (
            <div className="blog-list">
              <BlogCard post={posts[0]} featured />
              {posts.length > 1 && (
                <div className="blog-grid">
                  {posts.slice(1).map((post) => (
                    <BlogCard post={post} key={post.id} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="blog-empty">
              <p className="eyebrow">The connection is resting</p>
              <h2>Articles will be back shortly.</h2>
              <p>The main site is available while the publishing system reconnects.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
