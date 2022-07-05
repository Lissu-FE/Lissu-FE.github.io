/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true
    }
  },
  reactStrictMode: true
}

module.exports = nextConfig
