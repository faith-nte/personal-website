const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faithnte.com", // Replace directly for simplicity
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["faithntecom.local", "faithnte.com"],
  },
};

export default nextConfig;
