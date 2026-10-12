import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { getAllPosts, getEmbeddedCategory } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | Faith Nte",
  description:
    "Practical guides and project outcomes across SEO, marketing automation, CRM operations and digital transformation.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const topics = Array.from(
    new Set(posts.map((post) => getEmbeddedCategory(post)?.name).filter(Boolean)),
  ).slice(0, 5) as string[];

  return (
    <>
      <section className="blog-hero">
        <div className="site-container blog-hero-inner">
          <p className="eyebrow">Field notes & practical guides</p>
          <h1>Practical guides to SEO, CRM and marketing automation.</h1>
          <p>
            Step-by-step breakdowns showing what I built, the tools I used,
            how long it took and the result it delivered.
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
