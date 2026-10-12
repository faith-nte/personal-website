import querystring from "query-string";

import type { Author, Category, FeaturedMedia, Page, Post, Tag } from "./wordpress.d";

const baseUrl = (process.env.WORDPRESS_URL || "https://blog.faithnte.com").replace(/\/$/, "");

function getUrl(path: string, query?: Record<string, unknown>) {
  const params = query ? querystring.stringify(query, { skipNull: true, skipEmptyString: true }) : "";
  return `${baseUrl}${path}${params ? `?${params}` : ""}`;
}

async function getCollection<T>(url: string): Promise<T[]> {
  try {
    const response = await fetch(url, { next: { revalidate: 900 } });
    if (!response.ok) return [];
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) return [];
    const data: unknown = await response.json();
    return Array.isArray(data) ? (data as T[]) : [];
  } catch {
    // Keep faithnte.com online if the separate WordPress installation is unavailable.
    return [];
  }
}

async function getItem<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, { next: { revalidate: 900 } });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getAllPosts(filterParams?: { author?: string; tag?: string; category?: string }): Promise<Post[]> {
  return getCollection<Post>(getUrl("/wp-json/wp/v2/posts", {
    _embed: true,
    per_page: 100,
    author: filterParams?.author,
    tags: filterParams?.tag,
    categories: filterParams?.category,
  }));
}

export async function getPostById(id: number): Promise<Post | null> {
  return getItem<Post>(getUrl(`/wp-json/wp/v2/posts/${id}`, { _embed: true }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getCollection<Post>(getUrl("/wp-json/wp/v2/posts", { slug, _embed: true }));
  return posts[0] ?? null;
}

export async function getAllCategories(): Promise<Category[]> {
  return getCollection<Category>(getUrl("/wp-json/wp/v2/categories", { per_page: 100 }));
}

export async function getCategoryById(id: number): Promise<Category | null> {
  return getItem<Category>(getUrl(`/wp-json/wp/v2/categories/${id}`));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCollection<Category>(getUrl("/wp-json/wp/v2/categories", { slug }));
  return categories[0] ?? null;
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  return getCollection<Post>(getUrl("/wp-json/wp/v2/posts", { categories: categoryId, _embed: true, per_page: 100 }));
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  return getCollection<Post>(getUrl("/wp-json/wp/v2/posts", { tags: tagId, _embed: true, per_page: 100 }));
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  return getCollection<Tag>(getUrl("/wp-json/wp/v2/tags", { post: postId, per_page: 100 }));
}

export async function getAllTags(): Promise<Tag[]> {
  return getCollection<Tag>(getUrl("/wp-json/wp/v2/tags", { per_page: 100 }));
}

export async function getTagById(id: number): Promise<Tag | null> {
  return getItem<Tag>(getUrl(`/wp-json/wp/v2/tags/${id}`));
}

export async function getTagBySlug(slug: string): Promise<Tag | null> {
  const tags = await getCollection<Tag>(getUrl("/wp-json/wp/v2/tags", { slug }));
  return tags[0] ?? null;
}

export async function getAllPages(): Promise<Page[]> {
  return getCollection<Page>(getUrl("/wp-json/wp/v2/pages", { per_page: 100 }));
}

export async function getPageById(id: number): Promise<Page | null> {
  return getItem<Page>(getUrl(`/wp-json/wp/v2/pages/${id}`));
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const pages = await getCollection<Page>(getUrl("/wp-json/wp/v2/pages", { slug }));
  return pages[0] ?? null;
}

export async function getAllAuthors(): Promise<Author[]> {
  return getCollection<Author>(getUrl("/wp-json/wp/v2/users", { per_page: 100 }));
}

export async function getAuthorById(id: number): Promise<Author | null> {
  return getItem<Author>(getUrl(`/wp-json/wp/v2/users/${id}`));
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const authors = await getCollection<Author>(getUrl("/wp-json/wp/v2/users", { slug }));
  return authors[0] ?? null;
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  return getCollection<Post>(getUrl("/wp-json/wp/v2/posts", { author: authorId, _embed: true, per_page: 100 }));
}

export async function getPostsByAuthorSlug(authorSlug: string): Promise<Post[]> {
  const author = await getAuthorBySlug(authorSlug);
  return author ? getPostsByAuthor(author.id) : [];
}

export async function getPostsByCategorySlug(categorySlug: string): Promise<Post[]> {
  const category = await getCategoryBySlug(categorySlug);
  return category ? getPostsByCategory(category.id) : [];
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlug(tagSlug);
  return tag ? getPostsByTag(tag.id) : [];
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia | null> {
  if (!id) return null;
  return getItem<FeaturedMedia>(getUrl(`/wp-json/wp/v2/media/${id}`));
}

export function getEmbeddedImage(post: Post): FeaturedMedia | null {
  return post._embedded?.["wp:featuredmedia"]?.[0] ?? null;
}

export function getEmbeddedAuthor(post: Post): Author | null {
  return post._embedded?.author?.[0] ?? null;
}

export function getEmbeddedCategory(post: Post): Category | null {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  return (terms.find((term) => term.taxonomy === "category") as Category | undefined) ?? null;
}

export function plainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/&#8217;|&#039;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&quot;/g, '\"')
    .replace(/\s+/g, " ")
    .trim();
}

export function readingTime(html: string): number {
  const words = plainText(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
