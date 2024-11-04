import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindmix.b-cdn.net',
                port: '',
            },
        ],
    },
};

export default nextConfig;
