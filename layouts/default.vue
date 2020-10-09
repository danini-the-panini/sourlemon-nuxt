<script>
import '../assets/icons.css';

export default {
  head() {
    return {
      title: "Sour {>.<} Lemon",
      meta: [{
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }],
    }
  }
}
</script>

<template>
  <div>
    <header class="navbar bg-gray">
      <section class="navbar-section">
        <n-link to="/blog" class="btn btn-link">Blog</n-link>
        <n-link to="/projects" class="btn btn-link">Projects</n-link>
      </section>
      <section class="navbar-center">
        <n-link to="/" class="navbar-brand mr-2">Sour {&gt;.&lt;} Lemon</n-link>
      </section>
      <section class="navbar-section">
        <a href="https://www.twitter.com/jellym4nn" target="_blank" class="btn btn-link">Twitter</a>
        <a href="https://www.github.com/jellymann" target="_blank" class="btn btn-link">Github</a>
      </section>
    </header>
    <main class="container grid-md">
      <nuxt />
    </main>
  </div>
</template>
