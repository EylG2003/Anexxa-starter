/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: { allowedOrigins: ['*'] }
  },
  async redirects() {
    return [
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
      { source: '/terms', destination: '/legal/terms', permanent: true },
      { source: '/bnpl', destination: '/pos', permanent: true },
      { source: '/bnpl/:path*', destination: '/pos', permanent: true },
      { source: '/gift-cards', destination: '/pos', permanent: true },
      { source: '/gift-cards/:path*', destination: '/pos', permanent: true },
      { source: '/installments', destination: '/pos', permanent: true },
    ];
  },
};
module.exports = nextConfig;
