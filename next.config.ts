import type { NextConfig, } from 'next';

const nextConfig : NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1:3000',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // production
      {
        protocol: 'https',
        hostname: 'https://dev001.umaya.com.tr',
      },
    ],
  },
};

export default nextConfig;
