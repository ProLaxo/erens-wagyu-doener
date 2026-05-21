/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  basePath,
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
