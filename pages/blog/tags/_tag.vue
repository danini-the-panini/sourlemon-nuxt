<script>
  export default {
    async asyncData({ $content, params }) {
      let articles = await $content('articles').fetch();
      articles = articles.filter(article => {
        return article.tags.includes(params.tag);
      });
      articles.sort((a, b) => {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      });
      return { articles, tag: params.tag };
    }
  }
</script>

<template>
  <div>
    <h1>Posts tagged `{{ tag }}`</h1>

    <posts-list :articles="articles" />
  </div>
</template>
