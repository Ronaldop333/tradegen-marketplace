/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return process.env.VERCEL
        ? [
            {
              source: '/api/:path*',
              destination: `${process.env.BACKEND_URL}/api/:path*`,
            },
            {
              source: '/debug',
              destination: `${process.env.BACKEND_URL}/debug`,
            },
          ]
        : [];
    },
  };
  
  module.exports = nextConfig;
  