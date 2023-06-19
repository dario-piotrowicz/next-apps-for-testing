const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    httpAgentOptions: {
        // keepAlive: false, is the Next.js polyfill applied only to lambdas?
    },
    images: {
        loader: 'custom',
        loaderFile: './image-loader.js',
    },
    experimental: {
        typedRoutes: true,
        mdxRs: true,
    },
    trailingSlash: true,
}

module.exports = withMDX(nextConfig)