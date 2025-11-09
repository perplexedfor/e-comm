

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    //domains: ['img.youtube.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uxzikocsoffozrqooxqy.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      }
    ],
  },

};

export default nextConfig;
