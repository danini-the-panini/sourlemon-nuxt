<script>
  import formatDate from '../../functions/formatDate';

  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch();
      return { article }
    },
    methods: {
      formatDate
    }
  }
</script>

<template>
  <article>
    <!-- <pre> {{ article }} </pre> -->
    <p>Published {{ formatDate(article.publishedAt) }}</p>
    <nuxt-content :document="article" />
  </article>
</template>
