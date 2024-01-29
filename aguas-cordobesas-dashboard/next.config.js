/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.alias.mongoose = false;
    
          config.module.rules.push({
            test: /\.node$/,
            use: 'url-loader',
          });
        }
    
        return config;
    },
}

module.exports = nextConfig
