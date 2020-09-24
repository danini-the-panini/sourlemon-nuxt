export default {
  modules: ['@nuxt/content'],
  target: 'static',
  router: {
    base: '/jellymann.github.io/'
  },
  generate: {
    routes: [
      '/blog/my-first-blog-post'
    ]
  }
}
