/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuartion Code to Allow loading images
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }],
  },
};

export default nextConfig;
