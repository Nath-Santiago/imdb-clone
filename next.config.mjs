/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        // https://image.tmdb.org/t/p/...
          { 
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/**',
          },
        ],
      },
};

export default nextConfig;
