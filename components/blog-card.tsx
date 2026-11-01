import { articleSeo } from "@/lib/article-seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Post } from "@/lib/wordpress.d";
import {
  getEmbeddedCategory,
  getEmbeddedImage,
  readingTime,
} from "@/lib/wordpress";

export function BlogCard({ post, featured = false, headingLevel = 2, editorial = false }: { post: Post; featured?: boolean; headingLevel?: 2 | 3; editorial?: boolean }) {
  const image = getEmbeddedImage(post);
  const category = getEmbeddedCategory(post);
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(post.date));
  const excerpt = articleSeo(post).description;

  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <article className={editorial ? "blog-card blog-card-editorial" : featured ? "blog-card blog-card-featured" : "blog-card"}>
      {!editorial && <Link href={`/blog/${post.slug}`} className="blog-card-image" aria-label={articleSeo(post).title}>
        {image?.source_url ? (
          <Image
            src={image.source_url}
            alt={image.alt_text || articleSeo(post).title}
            fill
            sizes={featured ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 33vw"}
          />
        ) : (
          <span aria-hidden="true">FN</span>
        )}
      </Link>}
      <div className="blog-card-body">
        <div className="blog-meta">
          <span>{category?.name || "Insight"}</span>
          <span>{date}</span>
          <span>{readingTime(post.content.rendered)} min read</span>
        </div>
        <Heading>
          <Link href={`/blog/${post.slug}`}>{articleSeo(post).title}</Link>
        </Heading>
        <p>{excerpt}</p>
        <Link className="blog-read-link" href={`/blog/${post.slug}`}>
          Read the article <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
