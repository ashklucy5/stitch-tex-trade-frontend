// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // To silence the Turbopack warning, explicitly acknowledge Turbopack
  // This empty object tells Next.js you are aware of Turbopack and have no specific Turbopack config yet
  turbopack: {}, 

  // Corrected images configuration
  images: {
    // Use remotePatterns instead of domains
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Adjust if needed
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'your-production-image-host.com', // Add your prod image host if needed
        pathname: '/**',
      },
      // Add other allowed hosts as needed
      // Example for unsplash: { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // Headers for external access (optional, can help with CORS during dev if needed)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Be careful with wildcard in production
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Accept, Authorization',
          },
        ],
      },
    ]
  },

  // Optional: Explicitly disable webpack mode if you want to ensure Turbopack
  // This is usually not necessary if turbopack: {} is present
  // webpack5: false, // Keep commented out unless troubleshooting
};

module.exports = nextConfig;
