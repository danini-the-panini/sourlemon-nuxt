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
      formatDate,
      goToArticle(article) {
        this.$router.push(this.articlePath(article));
      }
    }
  }
</script>

<template>
  <div class="columns">
    <div v-for="article in articles" :key="article.slug" class="column col-12">
      <floopy-button class="floopy" @click="goToArticle(article)">
        <div class="card text-dark">
          <div class="card-header">
            <div class="card-title">
              <n-link :to="articlePath(article)">
                <h2 class="h5">{{ article.title }}</h2>
              </n-link>
              
              <tags-list :tags="article.tags" class="tags-list" />
            </div>
            <div class="card-subtitle text-gray">
              {{ formatDate(article.publishedAt) }}
            </div>
          </div>
        </div>
      </floopy-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.floopy {
  --angle: 5;
  --click-angle: 15;
  --glow-color: rgba(255, 255, 255, 0.5);
  --glow-background: rgba(255, 255, 255, 0.0);
}

.card {
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem rgba(48,55,66,.3);

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
