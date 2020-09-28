<script>
  import formatDate from '../../functions/formatDate';

  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles').fetch();
      articles.sort((a, b) => {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      });
      return { articles };
    },
    methods: {
      articlePath(article) {
        return `/blog/${article.slug}/`;
      },
      formatDate
    }
  }
</script>

<template>
  <div>
    <h1>Blog posts</h1>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.slug">
          <td><a :href="articlePath(article)">{{ article.title }}</a></td>
          <td>{{ formatDate(article.publishedAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
