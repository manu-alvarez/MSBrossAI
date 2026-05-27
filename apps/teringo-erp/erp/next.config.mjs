/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  basePath: "/app/teringo-erp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
