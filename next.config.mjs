/** @type {import('next').NextConfig} */
const nextConfig = {
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

console.log("Remote patterns:", nextConfig.images.remotePatterns);

export default nextConfig;
