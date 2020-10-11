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
      <div class="talk__header">
        <h1>{{ talk.title }}</h1>
        <div class="talk__date">
          {{ formatDate(talk.date) }}
        </div>
      </div>
      <p v-html="talk.subtitle"></p>
      <nuxt-content :document="talk" />
      <section v-if="talk.video">
        <h2>Video</h2>
        <youtube-embed :video="talk.video" class="talk__video" />
      </section>
      <section v-if="talk.deck">
        <h2>Slides</h2>
        <speaker-deck :deck="talk.deck" class="talk__deck" :ratio="talk.deckRatio" />
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
}
</style>
