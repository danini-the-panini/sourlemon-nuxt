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
      const articles = await $content('articles')
        .sortBy('publishedAt', 'desc')
        .fetch();
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
