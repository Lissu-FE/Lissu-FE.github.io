module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true
    },
    images: {
      formats: ['image/avif', 'image/webp']
    },
    webpack5: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      return config
    }
  }
  return nextConfig
}
