/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
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
          destination: '/contact',
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
    };
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/home',
        permanent: false,
      },
      {
        source: '/about-permanent',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/', // applies to `/` route
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
