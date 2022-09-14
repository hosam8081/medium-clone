/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
