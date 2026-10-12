import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import {
  getAllPosts,
  getEmbeddedAuthor,
  getEmbeddedCategory,
  getEmbeddedImage,
  getPostBySlug,
  plainText,
  readingTime,
} from "@/lib/wordpress";

type BlogPostProps = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Article not found | Faith Nte" };

  const image = getEmbeddedImage(post);
  const description = plainText(post.excerpt.rendered);

  return {
    title: `${plainText(post.title.rendered)} | Faith Nte`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: plainText(post.title.rendered),
      description,
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: image?.source_url ? [{ url: image.source_url, alt: image.alt_text }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const image = getEmbeddedImage(post);
  const author = getEmbeddedAuthor(post);
  const category = getEmbeddedCategory(post);
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="article-page">
      <header className="article-header">
        <div className="site-container article-header-inner">
          <Link className="article-back" href="/blog">
            <ArrowLeft size={16} /> Back to the blog
          </Link>
          <div className="blog-meta article-meta">
            <span>{category?.name || "Insight"}</span>
            <span>{date}</span>
            <span>{readingTime(post.content.rendered)} min read</span>
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className="article-excerpt">{plainText(post.excerpt.rendered)}</p>
          <p className="article-byline">Written by {author?.name || "Faith Nte"}</p>
        </div>
      </header>

      {image?.source_url && (
        <div className="site-container article-image">
          <Image
            src={image.source_url}
            alt={image.alt_text || plainText(post.title.rendered)}
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
        </div>
      )}

      <div className="site-container article-layout">
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </article>
  );
}
