<template>
  <div
    ref="el"
    :class="{ 'floopy-button': true, 'floopy-button--clickable': !notClickable }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @mousemove="mousemove"
    @mousedown="mousedown"
    @mouseup="mouseup"
    @click="$emit('click')"
  >
    <div ref="content" class="floopy-button__content" :style="style">
      <div class="floopy-button__glow" :style="glowStyle"></div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.floopy-button {
  perspective: 40em;
  background: rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
  outline: none;

  &--clickable {
    cursor: pointer;
  }
  
  &__content {
    display: block;
    border: none;
    border-radius: 0;
    transition: transform 100ms ease;
    position: relative;
    width: 100%;
    height: 100%;
  }
    
  &__glow {
    color: rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 200ms ease;
    pointer-events: none;
    mix-blend-mode: lighten;
  }
}
</style>

<script>
function calcOffset(x, w) {
  return (w - x)/w - 0.5;
}

function vecLength(v) {
  return Math.sqrt(v.x*v.x + v.y*v.y);
}

export default {
  props: {
    notClickable: Boolean
  },
  data() {
    return {
      isDown: false,
      x: 0,
      y: 0,
      flooping: false,
      isMounted: false
    };
  },
  computed: {
    offset() {
      return {
        x: calcOffset(this.x, this.$refs.content.offsetWidth),
        y: calcOffset(this.y, this.$refs.content.offsetHeight)
      }
    },
    style() {
      if (!process.browser || !this.isMounted || !this.flooping) return {};

      let angleUp = this.getProperty('--angle') || 25;
      let angleDown = this.getProperty('--click-angle') || 10;

      const angle = vecLength(this.offset) * (this.isDown ? angleDown : angleUp);
      return {
        transform: `translateZ(${this.isDown ? '-2rem' : '-0.5rem'}) rotate3d(${this.offset.y}, ${-this.offset.x}, 0.0, ${angle}deg)`
      };
    },
    glowStyle() {
      if (!process.browser|| !this.isMounted) return {};

      const xp = (50 - this.offset.x * 100).toString() + '%';
      const yp = (50 - this.offset.y * 100).toString() + '%';
      const glowColor = this.getProperty('--glow-color');
      const glowBg = this.getProperty('--glow-background');

      return {
        opacity: this.flooping ? 1 : 0,
        background: `radial-gradient(circle at ${xp} ${yp}, ${glowColor}, ${glowBg})`
      }
    }
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    updateMouse(e) {
      if (!this.$refs.el) return;
      this.x = e.pageX - this.$refs.el.offsetLeft;
      this.y = e.pageY - this.$refs.el.offsetTop;
    },
    getProperty(name) {
      return getComputedStyle(this.$refs.el).getPropertyValue(name);
    },
    mouseenter(e) {
      this.flooping = true;
      this.updateMouse(e);
    },
    mouseleave() {
      this.flooping = false;
    },
    mousemove(e) {
      this.updateMouse(e);
    },
    mousedown() {
      if (this.notClickable) return;
      this.isDown = true;
    },
    mouseup() {
      if (this.notClickable) return;
      this.isDown = false;
    },
  }
}
</script>
