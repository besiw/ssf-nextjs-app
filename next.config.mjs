/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


const nextConfig = withNextIntl({
  //include other configs here
  images: {
    domains: ['api.sssf.life'],
  },
});

export default nextConfig;
