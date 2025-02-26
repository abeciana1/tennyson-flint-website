import type { NextConfig } from "next";

export const runtime = "edge";

const nextConfig: NextConfig = ({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a-us.storyblok.com',
      }
    ]
  }
});

export default nextConfig;
