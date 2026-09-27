/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Every `quality` prop used in components/ must be listed here or Next warns
    // and, from Next 16, refuses the request outright.
    qualities: [80, 82, 84],
    // `img()` caps every source at 1920px wide, so Next's default 2048 and 3840
    // entries could only ever ask the optimiser to upscale. That wasted work is
    // slow enough to trip the optimiser's timeout, so the ladder stops at the
    // width the sources actually have.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;
