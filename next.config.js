/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ VALID CONFIG ONLY - turbopack key REMOVED (invalid in config)
  
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      // 🔒 PRODUCTION: Replace with your actual image hosts
      // {
      //   protocol: 'https',
      //   hostname: 'your-production-cdn.com',
      //   pathname: '/uploads/**',
      // },
      // Example for common services:
      // { protocol: 'https', hostname: 'images.unsplash.com' },
      // { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },

  // ⚠️ SECURITY NOTE: 
  // CORS headers should be handled in API routes (app/api/**), NOT here.
  // This headers config applies to PAGE responses only (not API routes).
  // For API CORS: Implement in individual route handlers using:
  //   headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN)
  // 
  // Keeping minimal headers config for page responses only:
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Optional: Enable strict mode for development
  reactStrictMode: true,

  // Optional: Output directory configuration
  // output: 'export', // Uncomment for static export builds
};

module.exports = nextConfig;