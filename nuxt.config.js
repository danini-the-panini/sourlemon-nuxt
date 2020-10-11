export default {
  components: true,
  resourceHints: true,
  http2: { push: true, pushAssets: true },
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

      const talks = await $content('talks').only(['slug']).fetch();

      let talkRoutes = talks.map(({ slug }) => (
        `/talks/${slug}`
      ));

      return [...postRoutes, ...talkRoutes, ...tagRoutes];
    }
  },
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
  },
}
