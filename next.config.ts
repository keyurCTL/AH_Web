import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL || "",
  },
  images: {
        domains: ['res.cloudinary.com']
    }
};

export default nextConfig;
