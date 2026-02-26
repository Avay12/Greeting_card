import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.contentstack.io",
      },
      {
        protocol: "https",
        hostname: "ak.imgag.com",
      },
      {
        protocol: "https",
        hostname: "developer.apple.com",
      },
      {
        protocol: "https",
        hostname: "play.google.com",
      },
    ],
  },
};

export default nextConfig;
