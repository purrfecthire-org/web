/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    //basePath: '/web',
    output: "export",
    images: {
        unoptimized: true, // Desactiva la optimización de imágenes
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
