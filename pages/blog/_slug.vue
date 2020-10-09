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
    <div class="info">
      <tags-list :tags="article.tags" />
      <p class="published">Published {{ formatDate(article.publishedAt) }}</p>
    </div>
    <nuxt-content :document="article" />
  </article>
</template>

<style lang="scss" scoped>
.info {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
}

.published {
  margin: 0;
  font-style: italic;
  margin-left: auto;
}
</style>
