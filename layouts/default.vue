<script>
import '../assets/icons.css';
import generateTitle from '../functions/generateTitle';
import GithubLogo from '../static/github.svg';
import TwitterLogo from '../static/twitter.svg';

export default {
  components: { TwitterLogo, GithubLogo },
  head() {
    return {
      title: generateTitle(),
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "My personal website/blog/thing"
        }
      ],
    }
  },
  computed: {
    route() { return this.$route }
  },
  watch: {
    route() {
      this.lemonLeave();
    }
  },
  mounted() {
    this.lemonLeave()
  },
  methods: {
    lemonTouch() {
      this.$refs.lemon.textContent = '{-.-}';
    },
    lemonLeave() {
      let r = Math.random()
      if (r < 0.05) {
        this.$refs.lemon.textContent = '{o.O}';
      } else if (r < 0.1) {
        this.$refs.lemon.textContent = '{O.o}';
      } else if (r < 0.15) {
        this.$refs.lemon.textContent = '{O.O}';
      } else if (r < 0.20) {
        this.$refs.lemon.textContent = '{T.T}';
      } else if (r < 0.25) {
        this.$refs.lemon.textContent = '{^.^}';
      } else {
        this.$refs.lemon.textContent = '{>.<}';
      }
    }
  }
}
</script>

<template>
  <div>
    <header class="navbar bg-gray">
      <section class="navbar-section">
        <n-link to="/blog" class="btn btn-link"><i class="icon icon-message"></i><span class="hide-sm">Blog</span></n-link>
        <n-link to="/projects" class="btn btn-link"><i class="icon icon-photo"></i><span class="hide-sm">Projects</span></n-link>
        <n-link to="/talks" class="btn btn-link"><i class="icon icon-person"></i><span class="hide-sm">Talks</span></n-link>
      </section>
      <section class="navbar-center">
        <n-link to="/" class="navbar-brand mr-2">
          <span class="hide-md">Sour </span>
          <span class="lemon" @mouseenter="lemonTouch" @mouseleave="lemonLeave" ref="lemon">{&gt;.&lt;}</span>
          <span class="hide-md"> Lemon</span>
        </n-link>
      </section>
      <section class="navbar-section">
        <a href="https://www.twitter.com/jellym4nn" target="_blank" rel="noreferrer noopener" class="btn btn-link"><TwitterLogo /><span class="hide-sm">Twitter</span></a>
        <a href="https://www.github.com/jellymann" target="_blank" rel="noreferrer noopener" class="btn btn-link"><GithubLogo /><span class="hide-sm">Github</span></a>
      </section>
    </header>
    <main class="container grid-md">
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-top: 1rem;
}

.navbar-section {
  .btn.btn-link {
    display: flex;
    align-items: center;

    svg {
      height: 100%;
      width: auto;
      display: block;
      margin-right: 0.25rem;
      fill: currentColor;
    }

    i {
      margin-right: 0.25rem;
    }
  }
}

.navbar-brand {
  font-weight: bold;
  font-style: italic;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
}

.lemon {
  font-style: normal;
}
</style>
