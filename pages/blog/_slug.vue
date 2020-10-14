<script>
  import formatDate from '../../functions/formatDate';
  import generateTitle from '../../functions/generateTitle';

  export default {
    head({ article }) {
      return {
        title: generateTitle(article.title)
      }
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch();
      return {
        article,
        title: generateTitle(article.title)
      }
    },
    methods: {
      formatDate
    }
  }
</script>

<template>
  <article>
    <div class="info columns">
      <tags-list :tags="article.tags" class="column col-6 col-sm-12" />
      <p class="published column col-6 col-sm-12">Published {{ formatDate(article.publishedAt) }}</p>
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
  text-align: right;
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

  ::v-deep code {
    background: #f7f8f9;
    color: #3b4351;
    font-family: SFMono-Regular,Cascadia Code,Consolas,Liberation Mono,Menlo,Monaco,'Andale Mono','Ubuntu Mono',monospace;
  }

  ::v-deep pre code {
    background: transparent;
    font-size: 100%;
  }
  
  ::v-deep pre {
    $scrollbar-color: #c1c1c1;

    margin-bottom: 1rem;
    box-shadow: inset 0 2px 2px 0 rgba(0,0,0,0.14), inset 0 1px 5px 0 rgba(0,0,0,0.12), inset 0 3px 1px -2px rgba(0,0,0,0.2);
    scrollbar-color: $scrollbar-color;

    &::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
      border-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: $scrollbar-color;
    }

    &::-webkit-scrollbar-track {
      border-radius: 0.5rem;
      background-color: transparent;
    }
  }
}
</style>
