/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = withNextIntl(nextConfig);
