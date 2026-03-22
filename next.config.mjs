import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Here we use the `setupDevPlatform` to configure your Next.js application
// to use Cloudflare's workers bindings during local development.
// For more information please see:
// https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
