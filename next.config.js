/* eslint-disable camelcase */
// next.config.js
module.exports = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  target: 'serverless',

  async rewrites() {
    const rewrite_url = [
      {
        source: "/index.html",
        destination: "/",
      },
    ];
    return rewrite_url;
  },
};
