/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects: async () => [
    {
      source: '/redirect-me',
      destination: '/redirect-to',
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
