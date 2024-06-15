// Import the Next.js and next-pwa modules using ESM syntax
import next from "next";
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Define PWA configuration
const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
};

// Wrap the Next.js configuration with PWA support
export default withPWA(pwaConfig)(nextConfig);
