<script>
  import generateTitle from '../../functions/generateTitle';
  import formatDate from '../../functions/formatDate';
  import talkPath from '../../functions/talkPath';
  import FloopyButton from '../../components/FloopyButton.vue';
  import GithubButton from '../../static/github.svg';

  export default {
    components: { FloopyButton, GithubButton },
    head() {
      return {
        title: generateTitle("Talks")
      }
    },
    async asyncData({ $content, params }) {
      const talks = await $content('talks')
        .sortBy('date', 'desc')
        .fetch();
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
        class="column col-6 col-md-12 talk-link"
      >
        <floopy-button class="floopy">
          <div class="card text-dark">
            <div class="card-header">
              <div class="card-title">
                <h2 class="h5">
                  {{ talk.title }}
                  <GithubButton v-if="talk.repo" />
                </h2>
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
        </floopy-button>
      </n-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.talk-link {
  &, &:active, &:focus {
    box-shadow: none!important;
  }
}

.floopy {
  --angle: 5;
  --click-angle: 15;
  --glow-color: rgba(255, 255, 255, 0.5);
  --glow-background: rgba(255, 255, 255, 0.0);
  height: 100%;
}

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
  height: 100%;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem rgba(48,55,66,.3);
  }
}

.column {
  margin: 0 0 1rem;

  @media screen and (max-width: 52.5rem) {
    margin: 0 auto 1rem;
    max-width: 25.75rem;
  }
}

.card-title {
  display: flex;

  h2 {
    display: flex;
    align-items: center;
    width: 100%;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: auto;
    fill: #999;
  }
}

.project-tools {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
</style>
