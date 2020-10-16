<script>
  import formatDate from '../functions/formatDate';
  import articlePath from '../functions/articlePath';

  import FloopyButton from './FloopyButton.vue';

  export default {
    components: { FloopyButton },
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
      class="article-link column col-12"
    >
      <floopy-button class="floopy">
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
      </floopy-button>
    </n-link>
  </div>
</template>

<style lang="scss" scoped>
.article-link {
  &, &:active, &:focus {
    box-shadow: none!important;
  }
}

.floopy {
  --angle: 5;
  --click-angle: 15;
  --glow-color: rgba(0, 110, 255, 0.2);
  --glow-background: rgba(255, 255, 255, 0.1);
}

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
