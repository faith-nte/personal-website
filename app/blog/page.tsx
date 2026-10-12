import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | Faith Nte",
  description:
    "Practical guides and project outcomes across SEO, marketing automation, CRM operations and digital transformation.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="blog-hero">
        <div className="site-container blog-hero-grid">
          <div>
            <p className="eyebrow">Field notes & practical guides</p>
            <h1>Systems, experiments and outcomes.</h1>
          </div>
          <p>
            Detailed breakdowns of the work behind stronger search visibility,
            better customer journeys and more reliable digital operations.
          </p>
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
