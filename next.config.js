// next.config.js

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "hackernoon.com",
      "profilinator.rishav.dev",
      "i.ibb.co",
      "1000logos.net",
    ],
  },
  future: {
    webpack5: true,
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
