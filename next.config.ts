import type { NextConfig } from "next";

export const runtime = "edge";

const nextConfig: NextConfig = ({
  experimental: {
    dynamicIO: true,
    cacheLife: {
      "/": {
        stale: 3600 * 4,
        revalidate: 600,
        expire: 86400
      }
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      }
    ]
  }
});

export default nextConfig;
