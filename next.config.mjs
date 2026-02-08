/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              // Dynamically allow connection to the production WS URL from environment variables,
              // or fall back to localhost for development.
              `connect-src 'self' ${process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:4001'}`,
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
