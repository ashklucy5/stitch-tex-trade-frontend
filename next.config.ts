import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
    // If you need to keep localhost for dev, you can add it here too
    // but remotePatterns is the preferred way
    // domains: ['localhost', '127.0.0.1', '0.0.0.0'] // Remove this line
  },

  // Remove the invalid experimental key
  // experimental: {
  //   serverComponentsExternalPackages: [], // Remove this
  // },

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

export default nextConfig