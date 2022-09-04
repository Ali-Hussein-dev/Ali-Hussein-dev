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
}
