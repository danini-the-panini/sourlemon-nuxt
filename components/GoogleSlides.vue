<template>
  <iframe
    ref="iframe"
    :src="embedSrc"
    frameborder="0"
    width="960"
    height="569"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
  >
  </iframe>
</template>

<script>
export default {
  props: {
    slides: String,
    ratio: Number
  },
  computed: {
    embedSrc() { return `https://docs.google.com/presentation/d/e/${this.slides}/embed?start=false&loop=false&delayms=3000`; }
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
      this.$refs.iframe.style.height = `${this.$refs.iframe.clientWidth/ratio + 36}px`;
    }
  }
}
</script>
