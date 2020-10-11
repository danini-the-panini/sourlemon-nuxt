<script>
import generateTitle from '../../functions/generateTitle';
  export default {
    head() {
      return {
        title: generateTitle("Blog posts"),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "My blog post listingss"
          }
        ],
      }
    },
    async asyncData({ $content, params }) {
      const articles = await $content('articles').fetch();
      articles.sort((a, b) => {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      });
      return { articles };
    }
  }
</script>

<template>
  <div>
    <h1>All posts</h1>

    <posts-list :articles="articles" />
  </div>
</template>
