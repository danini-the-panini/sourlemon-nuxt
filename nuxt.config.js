export default {
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
  ],
  css: [
    'spectre.css'
  ],
  target: 'static',
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');

      const articles = await $content('articles').only(['slug', 'tags']).fetch();

      let postRoutes = articles.map(({ slug }) => (
        `/blog/${slug}`
      ));

      let tags = articles.flatMap(({ tags }) => tags);

      let tagRoutes = tags.map(tag => (
        `/blog/tags/${tag}`
      ));

      return [...postRoutes, ...tagRoutes];
    }
  },
}
