<script>
  import generateTitle from '../../functions/generateTitle';
  import formatDate from '../../functions/formatDate';
  import talkPath from '../../functions/talkPath';

  export default {
    head() {
      return {
        title: generateTitle("Talks")
      }
    },
    async asyncData({ $content, params }) {
      const talks = await $content('talks').fetch();
      talks.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
      });
      return { talks };
    },
    methods: {
      talkPath,
      talkImage(slug) {
        return require(`~/assets/talk-images/${slug}.png`);
      },
      formatDate
    }
  }
</script>

<template>
  <div>
    <h1>Talks</h1>
    <div class="columns">
      <n-link
        :to="talkPath(talk)"
        v-for="talk in talks" :key="talk.title"
        class="column col-6 col-xs-12"
      >
        <div class="card text-dark">
          <div class="card-header">
            <div class="card-title">
              <h2 class="h5">{{ talk.title }}</h2>
            </div>
            <div class="card-subtitle" v-html="talk.subtitle">
            </div>
          </div>
          <div class="card-image">
            <img :src="talkImage(talk.slug)" class="img-responsive" :alt="`Sample slide ${talk.title}`" width="900" height="500">
          </div>
          <div class="card-body">
            <nuxt-content :document="talk" />
          </div>
          <div class="card-footer">
            <div class="card-subtitle">
              {{ formatDate(talk.date) }}
            </div>
          </div>
        </div>
      </n-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;

  svg {
    display: block;
    width: 1rem;
    fill: currentColor;
  }

  svg, i {
    margin-right: 0.5rem;
  }
}

.card {
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  height: 100%;
}

.column {
  margin-bottom: 1rem;
}

.card-title {
  display: flex;

  h2 {
    margin-right: 0.5rem;
  }
}

.project-tools {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
</style>
