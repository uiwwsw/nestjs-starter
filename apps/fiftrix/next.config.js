/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@packages/components",
    "@packages/common",
  ],
    i18n: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko',
      },
      compiler: {
        styledComponents: true
      }
}

module.exports = nextConfig
