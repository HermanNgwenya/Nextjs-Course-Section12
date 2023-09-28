const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Botshelo',
        mongodb_password: '7XBUBSaqgmZvpL9p',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

    return {
      env: {
        mongodb_username: 'Botshelo',
        mongodb_password: '7XBUBSaqgmZvpL9p',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
};



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
