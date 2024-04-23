/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, 
    }, 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'graph.microsoft.com',
            port: '', 
            pathname: '/v1.0/users/**/photo/$value',
          }
        ]
      }
};

export default nextConfig;
