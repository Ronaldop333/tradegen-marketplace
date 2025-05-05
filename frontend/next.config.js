/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://tradegen-marketplace-production.up.railway.app/api/:path*',
        },
        {
          source: '/debug',
          destination: 'https://tradegen-marketplace-production.up.railway.app/debug',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  