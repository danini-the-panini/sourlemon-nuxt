<script>
  export default {
    props: {
      tags: Array
    },
    methods: {
      tagPath(tag) {
        return `/blog/tags/${tag}/`;
      },
    }
  }
</script>

<template>
  <ul>
    <li v-for="tag in tags" :key="tag">
      <n-link class="chip bg-primary text-secondary" :to="tagPath(tag)">
        {{ tag }}
      </n-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    display: flex;
    align-items: center;

    a {
      padding: 0.25rem 0.5rem;
    }
  }
}
</style>
