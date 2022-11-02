/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    reactRemoveProperties: true,
  },
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
    legacyBrowsers: false,
  },
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ]
  },
}
