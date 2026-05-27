import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
