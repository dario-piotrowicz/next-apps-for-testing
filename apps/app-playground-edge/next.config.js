/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    runtime: 'experimental-edge',
    appDir: true,
  },
  rewrites: async () => ({
    beforeFiles: [
      // These rewrites are checked after headers/redirects
      // and before all files including _next/public files which
      // allows overriding page files
      {
        source: '/some-page',
        destination: '/somewhere-else',
        has: [{ type: 'query', key: 'overrideMe' }],
      },
    ],
    afterFiles: [
      // These rewrites are checked after pages/public files
      // are checked but before dynamic routes
      {
        source: '/non-existent',
        destination: '/somewhere-else',
      },
    ],
    fallback: [
      // These rewrites are checked after both pages/public files
      // and dynamic routes are checked
      {
        source: '/:path*',
        destination: `https://my-old-site.com/:path*`,
      },
    ],
  }),
  redirects: async () => ([
    {
      source: '/about',
      destination: '/',
      permanent: true,
    },
  ]),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
