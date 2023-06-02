/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./styles'],
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/E2jmrhEFSW',
        permanent: true
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@DimensionDev',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://github.com/MCDimensionDev',
        permanent: true
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/DimensionDev',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
