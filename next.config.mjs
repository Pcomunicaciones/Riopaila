/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Desactivado para permitir API Routes (envío de correos)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
