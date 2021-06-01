<script>
  import YoutubeEmbed from '../../components/YoutubeEmbed.vue';
  import SpeakerDeck from '../../components/GoogleSlides.vue';
  import formatDate from '../../functions/formatDate';
  import generateTitle from '../../functions/generateTitle';
  import FloopyButton from '../../components/FloopyButton.vue';
  import GithubIcon from '../../static/github.svg';

  export default {
    components: { YoutubeEmbed, SpeakerDeck, FloopyButton, GithubIcon },
    head({ talk }) {
      return {
        title: generateTitle(talk.title)
      }
    },
    async asyncData({ $content, params }) {
      const talk = await $content('talks', params.slug).fetch();
      return {
        talk,
        title: generateTitle(talk.title)
      }
    },
    methods: {
      formatDate
    }
  }
</script>

<template>
  <article>
    <div class="talk">
      <div class="talk__header">
        <h1>{{ talk.title }}</h1>
        <div class="talk__date">
          {{ formatDate(talk.date) }}
        </div>
      </div>
      <p v-html="talk.subtitle"></p>
      <section v-if="talk.repo" class="talk__repo">
        <floopy-button class="floopy">
          <a :href="talk.repo" target="_blank" class="btn btn-primary">
            <GithubIcon />
            Source
            <i class="icon icon-2x icon-forward arrow-icon"></i>
          </a>
        </floopy-button>
      </section>
      <nuxt-content :document="talk" />
      <section v-if="talk.slides">
        <h2>Slides</h2>
        <google-slides :slides="talk.slides" class="talk__deck" :ratio="talk.deckRatio" />
      </section>
      <section v-if="talk.video">
        <h2>Video</h2>
        <youtube-embed :video="talk.video" class="talk__video" />
      </section>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.talk {
  &__header {
    display: flex;
    align-items: baseline;
  }

  &__date {
    margin-left: 1rem;
    font-style: italic;
  }

  &__deck, &__video {
    margin-bottom: 1rem;
    max-width: 100%;
  }

  &__repo {
    display: flex;
    flex-direction: column;
    width: 20rem;
    max-width: 100%;
    margin: 0 auto;
  }
}

.floopy {
  --angle: 20;
  --click-angle: 30;
  --glow-color: rgba(255, 255, 255, 0.5);
  --glow-background: rgba(255, 255, 255, 0.1);

  &:hover {
    .btn {
      box-shadow: 0 0.3rem 0.3rem rgba(48,55,66,.3);
    }
  }

  .btn {
    width: 100%;
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    box-shadow: 0 0.5rem 0.5rem rgba(48,55,66,.3);
    transition: box-shadow 150ms ease-in-out;
    margin-bottom: 2rem;
    font-size: 150%;

    svg {
      fill: currentColor;
      margin-right: 1rem;
    }

    .arrow-icon {
      margin-left: auto;
    }
  }
}
</style>
