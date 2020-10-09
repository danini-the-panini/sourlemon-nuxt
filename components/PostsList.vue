<script>
  import formatDate from '../functions/formatDate';

  export default {
    props: {
      articles: Array
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
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Tags</th>
        <th>Published</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.slug">
        <td><a :href="articlePath(article)">{{ article.title }}</a></td>
        <td><tags-list :tags="article.tags" /></td>
        <td>{{ formatDate(article.publishedAt) }}</td>
      </tr>
    </tbody>
  </table>
</template>
