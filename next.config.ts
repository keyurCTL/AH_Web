import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL || "",
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
    }, {
      protocol: 'http',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
    }
    ],
  }
};

export default nextConfig;
