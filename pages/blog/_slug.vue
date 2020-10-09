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
    <div class="article">
      <nuxt-content :document="article" />
    </div>
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

.article {
  ::v-deep h1,
  ::v-deep h2,
  ::v-deep h3,
  ::v-deep h4,
  ::v-deep h5,
  ::v-deep h6 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    a {
      opacity: 0;
      margin-left: 0.5rem;
    }

    &:hover a {
      opacity: 1;
    }
  }
}
</style>
