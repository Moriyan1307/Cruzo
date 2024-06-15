/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", // Destination directory for the PWA files
  //disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

export default withPWA({
  // Your Next.js config
  reactStrictMode: true,

  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
});
