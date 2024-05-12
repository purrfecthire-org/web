/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.licdn.com',
              pathname: '**',
            },
          ],
    },
};

export default nextConfig;
