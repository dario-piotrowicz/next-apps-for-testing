// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'nl', 'es'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'example.es',
        defaultLocale: 'es',
      },
    ],
  },
};

module.exports = nextConfig;
