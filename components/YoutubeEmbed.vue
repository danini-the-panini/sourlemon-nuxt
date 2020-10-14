<template>
  <iframe
    ref="iframe"
    width="840"
    height="472"
    :src="embedSrc"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</template>

<script>
export default {
  props: {
    video: String
  },
  computed: {
    embedSrc() { return `https://www.youtube.com/embed/${this.video}`; }
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
      this.$refs.iframe.style.height = `${this.$refs.iframe.clientWidth/1.7777777777777}px`;
    }
  }
}
</script>
