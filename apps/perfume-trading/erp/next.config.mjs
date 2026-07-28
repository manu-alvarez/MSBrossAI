/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: "/app/perfume-trading",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
