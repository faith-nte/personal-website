/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/posts", destination: "/blog", permanent: true },
      { source: "/posts/authors", destination: "/about", permanent: true },
      { source: "/posts/categories", destination: "/blog", permanent: true },
      { source: "/posts/tags", destination: "/blog", permanent: true },
      { source: "/posts/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "faithntecom.local",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "blog.faithnte.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
