<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
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
