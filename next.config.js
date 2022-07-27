/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['stockx-360.imgix.net']
  }
}

module.exports = nextConfig
