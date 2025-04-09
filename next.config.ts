import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb", // Adjust the size limit as needed
      allowedOrigins: ["*"], // Replace with specific origins if required
    }, // optional for server actions if you're using them
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
