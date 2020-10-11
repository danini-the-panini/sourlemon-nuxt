<template>
  <script
    async
    class="speakerdeck-embed"
    :data-id="deck"
    data-ratio="1.77777777777778"
    src="//speakerdeck.com/assets/embed.js"></script>
</template>

<script>
export default {
  props: {
    deck: String
  }
}
</script>
