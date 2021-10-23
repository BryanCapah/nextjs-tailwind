module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/tes/:id/:name', destination: '/yansen/detail/:id/:name' }
    ]
  }
}
