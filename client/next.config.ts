import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  devIndicators: false,
};

// Add to next.config.js
// process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";

export default nextConfig;
