/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.output.webassemblyModuleFilename = 'static/wasm/[module].wasm'
    config.experiments = { asyncWebAssembly: true }
    return config
  },
}

module.exports = nextConfig
