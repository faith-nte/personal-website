import type { MetadataRoute } from "next";

// robots.txt must not receive the year-long immutable cache policy of a static asset.
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://faithnte.com/sitemap.xml" };
}
