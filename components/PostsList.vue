<script>
  import formatDate from '../functions/formatDate';
  import articlePath from '../functions/articlePath';

  export default {
    props: {
      articles: Array
    },
    methods: {
      articlePath,
      formatDate
    }
  }
</script>

<template>
  <div class="columns">
    <n-link
      :to="articlePath(article)"
      v-for="article in articles" :key="article.slug"
      class="column col-12"
    >
      <div class="card text-dark">
        <div class="card-header">
          <div class="card-title">
            <h2 class="h5">{{ article.title }}</h2>
            
            <tags-list :tags="article.tags" class="tags-list" />
          </div>
          <div class="card-subtitle text-gray">
            {{ formatDate(article.publishedAt) }}
          </div>
        </div>
      </div>
    </n-link>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0.25rem 2rem rgba(48,55,66,.3);

    .h5, .card-subtitle {
      text-decoration: underline;
    }
  }
}

.column {
  margin-bottom: 1rem;

  &:hover, &:active, &:focus {
    text-decoration: none;
  }
}

.card-title {
  display: flex;

  h2 {
    margin-right: 0.5rem;
  }
}

.tags-list {
  justify-content: flex-end;
  margin-left: auto;
}
</style>
