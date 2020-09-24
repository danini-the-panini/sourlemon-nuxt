<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles').fetch();
      return { articles };
    },
    methods: {
      articlePath(article) {
        return `/blog/${article.slug}/`;
      }
    }
  }
</script>

<template>
  <main>
    <h1>This is my blog</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <a :href="articlePath(article)">{{ article.title }}</a>
      </li>
    </ul>
  </main>
</template>
