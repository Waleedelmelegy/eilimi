/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['www.eilimi.ai', 'admin.eilimi.ai']
  }
}

module.exports = nextConfig
