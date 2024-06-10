/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = withNextIntl({
  // output: 'export',

  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
