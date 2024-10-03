/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  swcMinify: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { dirs: ["."], ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "github.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
