<script>
  import YoutubeEmbed from '../../components/YoutubeEmbed.vue';
  import SpeakerDeck from '../../components/SpeakerDeck.vue';
  import formatDate from '../../functions/formatDate';
  import generateTitle from '../../functions/generateTitle';

  export default {
    components: { YoutubeEmbed, SpeakerDeck },
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
      <h1>{{ talk.title }}</h1>
      <section v-if="talk.video">
        <h2>Video</h2>
        <youtube-embed :video="talk.video" class="video" />
      </section>
      <section v-if="talk.deck">
        <h2>Slides</h2>
        <speaker-deck :deck="talk.deck" class="deck" />
      </section>
      <nuxt-content :document="talk" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.deck, .video {
  margin-bottom: 1rem;
  max-width: 100%;
}
</style>
