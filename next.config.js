/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  i18n,
  reactStrictMode: true,

  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname:   "scontent.fdad1-1.fna.fbcdn.net",
    //     hostname: "scontent.fdad1-3.fna.fbcdn.net",
    //     hostname: "scontent.fdad1-4.fna.fbcdn.net",
    //     hostname: "vn112.com",
    //     hostname: "pinterest.com",
    //     hostname: "i.pinimg.com",
    //     hostname:  "scontent.fdad2-1.fna.fbcdn.net",
    //     hostname:  "scontent.fdad1-2.fna.fbcdn.net",
    //     hostname:"scontent.fdad1-2.fna.fbcdn.net",
    //     hostname: "scontent.fdad1-3.fna.fbcdn.net",
    //     hostname: "hotelkhanhlinh.vn",
    //     pathname: '**',
    //   },

    domains: [
      "scontent.fdad1-1.fna.fbcdn.net",
      "scontent.fdad1-3.fna.fbcdn.net",
      "scontent.fdad1-4.fna.fbcdn.net",
      "vn112.com",
      "pinterest.com",
      "i.pinimg.com",
      "scontent.fdad2-1.fna.fbcdn.net",
      "scontent.fdad1-2.fna.fbcdn.net",
      "scontent.fdad1-2.fna.fbcdn.net",
      "scontent.fdad1-3.fna.fbcdn.net",
      "hotelkhanhlinh.vn",
    ],
  },
};
