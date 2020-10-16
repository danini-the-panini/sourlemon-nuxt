<template>
  <div
    ref="el"
    class="floopy-button"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @mousemove="mousemove"
    @mousedown="mousedown"
    @mouseup="mouseup"
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
  cursor: pointer;
  
  &__content {
    display: block;
    border: none;
    border-radius: 0;
    transition: transform 100ms ease;
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none;
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

function floop(el, e) {
  const offset = {
    x: calcOffset(e.offsetX, el.outerWidth()),
    y: calcOffset(e.offsetY, el.outerHeight())
  }
  
  const isDown = el[0].isDown || false;
  
  const angle = vecLength(offset) * (isDown ? 25 : 10);
  
  appendTransform(el[0], 'rotate3d', `${offset.y}, ${-offset.x}, 0.0, ${angle}deg`);
  
  const xp = (50 - offset.x * 100).toString() + '%';
  const yp = (50 - offset.y * 100).toString() + '%';
  const glow = el.find('.glow');
  
  glow.css('background', `radial-gradient(circle at ${xp} ${yp}, ${glowColor}, ${glowBg})`);
  glow.css('opacity', 1);
}

export default {
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

      const angle = vecLength(this.offset) * (this.isDown ? 30 : 20);
      return {
        transform: `translateZ(${this.isDown ? '-2rem' : '-0.5rem'}) rotate3d(${this.offset.y}, ${-this.offset.x}, 0.0, ${angle}deg)`
      };
    },
    glowStyle() {
      if (!process.browser|| !this.isMounted) return {};

      const xp = (50 - this.offset.x * 100).toString() + '%';
      const yp = (50 - this.offset.y * 100).toString() + '%';
      const glowColor = getComputedStyle(this.$refs.el).getPropertyValue('--glow-color');
      const glowBg = getComputedStyle(this.$refs.el).getPropertyValue('--glow-background');

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
    mouseenter(e) {
      this.flooping = true;
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    mouseleave() {
      this.flooping = false;
      // $(this).find('.glow').css('opacity', 0);
    },
    mousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    mousedown() {
      this.isDown = true;
    },
    mouseup() {
      this.isDown = false;
    },
  }
}
</script>
