/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PRIVATE_DEBUG_CACHE: 'true',
  },
  experimental: {
    serverActions: true,
  },
};
