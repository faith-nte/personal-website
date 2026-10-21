import type { Metadata } from "next";
import { articleSeo } from "@/lib/article-seo";
import { breadcrumbs, jsonLd, person, pageMetadata, siteUrl } from "@/lib/seo";
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

function prepareArticleContent(html: string, slug: string, publishedSlugs: Set<string>) {
  // Rewrite only known article links; preserve media, external links and unknown destinations.
  html = html.replace(/href="(https?:\/\/blog\.faithnte\.com\/[^" ]*)"/g, (original, href: string) => {
    const url = new URL(href.replace(/&amp;/g, "&"));
    const target = url.pathname.replace(/^\/|\/$/g, "");
    if (!publishedSlugs.has(target)) return original;
    return `href="${target === slug && url.hash ? url.hash : `/blog/${target}${url.search}${url.hash}`}"`;
  });
  const tocMatch = html.match(/<div id="ez-toc-container"[\s\S]*?<\/nav><\/div>/);
  const toc = tocMatch?.[0] || "";
  let body = tocMatch ? html.replace(tocMatch[0], "") : html;

  const localToc = toc.replace(
    /href="https?:\/\/blog\.faithnte\.com\/[^"#]+\/(#[^"]+)"/g,
    'href="$1"',
  );

  body = body.replace(
    /<div style="padding:1\.25rem;border:1px solid #e7e1d8;border-radius:12px;background:#faf8f4;margin:1\.5rem 0;">/,
    '<div class="article-summary">',
  );

  return { toc: localToc, body };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Article not found | Faith Nte" };

  const image = getEmbeddedImage(post);
  const { title, description } = articleSeo(post);

  return {
    ...pageMetadata(`${title} | Faith Nte`, description, `/blog/${post.slug}`),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Faith Nte",
      locale: "en_GB",
      authors: [`${siteUrl}/about`],
      description,
      publishedTime: `${post.date_gmt}Z`,
      modifiedTime: `${post.modified_gmt}Z`,
      images: image?.source_url ? [{ url: image.source_url, alt: image.alt_text || title }] : [{ url: `${siteUrl}/opengraph-image` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image?.source_url || `${siteUrl}/opengraph-image`] },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const image = getEmbeddedImage(post);
  const author = getEmbeddedAuthor(post);
  const category = getEmbeddedCategory(post);
  const posts = await getAllPosts();
  const articleContent = prepareArticleContent(post.content.rendered, post.slug, new Set(posts.map(item => item.slug)));
  const seo = articleSeo(post);
  const related = posts.filter(item => item.id !== post.id).sort((a, b) => Number(b.categories.some(id => post.categories.includes(id))) - Number(a.categories.some(id => post.categories.includes(id)))).slice(0, 2);
  const url = `${siteUrl}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org", "@graph": [person,
      { "@type": "BlogPosting", "@id": `${url}#article`, headline: seo.title, description: seo.description, mainEntityOfPage: { "@type": "WebPage", "@id": url }, url,
        datePublished: `${post.date_gmt}Z`, dateModified: `${post.modified_gmt}Z`, inLanguage: "en-GB",
        author: { "@id": person["@id"] }, publisher: { "@id": person["@id"] }, ...(image?.source_url ? { image: [image.source_url] } : {}), articleSection: category?.name || "Project notes" },
      breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: seo.title, path: `/blog/${post.slug}` }]),
    ],
  };
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <header className="article-header">
        <div className="site-container article-header-inner">
          <Link className="article-back" href="/blog">
            <ArrowLeft size={16} /> Back to the blog
          </Link>
          <div className="blog-meta article-meta">
            <span>{category?.name || "Insight"}</span>
            <time dateTime={`${post.date_gmt}Z`}>{date}</time>
            <span>{readingTime(post.content.rendered)} min read</span>
          </div>
          <h1>{seo.title}</h1>
          <p className="article-excerpt">{seo.description}</p>
          <p className="article-byline">Written by <Link href="/about" rel="author">{author?.name || "Faith Nte"}</Link></p>
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

      <div className={`site-container article-layout${articleContent.toc ? " article-layout-with-toc" : ""}`}>
        {articleContent.toc && <>
          <aside className="article-toc article-toc-desktop" aria-label="Table of contents">
            <p>In this article</p>
            <div dangerouslySetInnerHTML={{ __html: articleContent.toc }} />
          </aside>
          <details className="article-toc article-toc-mobile">
            <summary>In this article</summary>
            <div dangerouslySetInnerHTML={{ __html: articleContent.toc }} />
          </details>
        </>}
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: articleContent.body }} />
      </div>
      <aside className="site-container seo-reading article-author-panel" aria-label="About the author and related reading">
        <h2>About Faith Nte</h2><p>I’m an AI automation consultant in Didcot, Oxfordshire, working across marketing, CRM and workflow automation. My background includes NHS digital transformation and commercial marketing operations. <Link className="text-link" href="/about">Read my background</Link>.</p>
        <p>Explore my <Link className="text-link" href="/">AI automation consulting</Link>, <Link className="text-link" href="/n8n-consultant">n8n workflow services</Link> and <Link className="text-link" href="/marketing-automation-consultant">marketing automation consulting</Link>.</p>
        <h2>Related project notes</h2><ul>{related.map(item => <li key={item.id}><Link href={`/blog/${item.slug}`}>{articleSeo(item).title}</Link></li>)}</ul>
      </aside>
    </article>
  );
}
