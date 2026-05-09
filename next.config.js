/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/:path*',
      destination: '/:path*',
      permanent: false,
    },
  ],
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Link',
          value: '<https://section21.info/:path*>; rel="canonical"',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
