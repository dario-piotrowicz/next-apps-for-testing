/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  eslint: {
    // ignoreDuringBuilds allows us to build even if eslint fails
    // see the P component in pages/index.tsx, it has a deprecated call
    // to componentWillMount (it fails rule: react/no-deprecated)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors allows us to build even if there are ts errors
    // see the P component in pages/index.tsx, it has broken ts code
    ignoreBuildErrors: true,
  },
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],
  },
  generateBuildId: async () => {
    return 'my-custom-build-id'
  },
  pageExtensions: ['pAgE.tsx', 'mdx'],
  compress: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    })

    return config
  },
};

module.exports = nextConfig
