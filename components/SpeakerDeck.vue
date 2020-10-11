<template>
  <iframe 
    ref="iframe"
    :src="embedSrc"
    width="840"
    height="472"
    frameborder="0"></iframe>
</template>

<script>
export default {
  props: {
    deck: String,
    ratio: Number
  },
  computed: {
    embedSrc() { return `https://speakerdeck.com/player/${this.deck}`; }
  },
  created() {
    this.onResize = this.onResize.bind(this);
  },
  mounted() {
    window.addEventListener('resize', this.onResize, { passive: true });
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      let ratio = (this.ratio || 1.77777777777778);
      console.log(ratio);
      console.log(this.$refs.iframe.clientWidth/ratio)
      this.$refs.iframe.style.height = `${this.$refs.iframe.clientWidth/ratio}px`;
    }
  }
}
</script>
