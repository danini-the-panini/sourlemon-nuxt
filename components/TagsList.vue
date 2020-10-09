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
      <a class="chip bg-primary text-secondary" :href="tagPath(tag)">
        {{ tag }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
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
