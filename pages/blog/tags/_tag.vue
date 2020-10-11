<script>
import generateTitle from '../../../functions/generateTitle';
  export default {
    head({ tag }) {
      return {
        title: generateTitle(`Posts tagged ${tag}`)
      }
    },
    async asyncData({ $content, params }) {
      let articles = await $content('articles')
        .where({ tags: { $contains: params.tag } })
        .sortBy('publishedAt', 'desc')
        .fetch();
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
