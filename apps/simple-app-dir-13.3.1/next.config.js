/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    customKey: 'my-value',
  }
}

module.exports = nextConfig
