/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  basePath: "/app/perfume-trading",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
