import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
  },

  // Other configurations...
  devIndicators: false,
};

// Add to next.config.js
// process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";

export default nextConfig;
