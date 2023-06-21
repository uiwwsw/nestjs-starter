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
      },
      // rewrites() {
      //   return [
      //     {
      //       source: "/api/:path*",
      //       destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      //     },
      //   ];
      // },
}

module.exports = nextConfig
