/** @type {import('next').NextConfig} */
const nextConfig = {
   async headers() {
      return [
         {
            source: '/:path*',
            headers: [
               { key: 'referrer-policy', value: 'no-referrer'}
            ]
         }
      ]
   },
   eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
