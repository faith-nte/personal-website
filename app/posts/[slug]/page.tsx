import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

import { Section, Container, Article } from "@/components/craft";
import { Metadata } from "next";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import DOMPurify from "isomorphic-dompurify"; // Use for SSR compatibility

// Default fallback image
const FALLBACK_IMAGE = "https://www.faithnte.com/default-image.jpg";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  const featuredMedia = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : { source_url: FALLBACK_IMAGE };

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""), // Remove HTML tags
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""), // Remove HTML tags
      images: [
        {
          url: featuredMedia.source_url,
          alt: post.title.rendered,
        },
      ],
      url: `https://www.faithnte.com/posts/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
      images: [featuredMedia.source_url],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const featuredMedia = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : { source_url: FALLBACK_IMAGE };
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = post.categories.length
    ? await getCategoryById(post.categories[0])
    : { id: null, name: "Uncategorized" };

  return (
    <Section>
      <Container>
        <h1>
          <Balancer>
            <span
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></span>
          </Balancer>
        </h1>

        <div className="flex justify-between items-center gap-4 text-sm mb-4">
          <h5>
            Published {date} by{" "}
            {author?.name && (
              <span>
                <a href={`/posts/?author=${author.id}`}>{author.name}</a>{" "}
              </span>
            )}
          </h5>
          {category.id && (
            <Link
              href={`/posts/?category=${category.id}`}
              className={cn(badgeVariants({ variant: "outline" }), "not-prose")}
            >
              {category.name}
            </Link>
          )}
        </div>
        <div className="h-96 my-12 md:h-[560px] overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
          {featuredMedia?.source_url ? (
            <img
              className="w-full object-cover"
              src={featuredMedia.source_url}
              alt={post.title.rendered}
            />
          ) : (
            <div className="text-gray-500">No image available</div>
          )}
        </div>
        <Article
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content.rendered),
          }}
        />
      </Container>
    </Section>
  );
}
