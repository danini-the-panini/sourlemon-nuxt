<script>
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
    <header class="navbar">
      <section class="navbar-section">
        <a href="/" class="btn btn-link">Home</a>
        <a href="/blog" class="btn btn-link">Blog</a>
      </section>
      <section class="navbar-center">
        <a href="/" class="navbar-brand mr-2">Sour {&gt;.&lt;} Lemon</a>
      </section>
      <section class="navbar-section">
        <a href="https://www.twitter.com/jellym4nn" class="btn btn-link">Twitter</a>
        <a href="https://www.github.com/jellymann" class="btn btn-link">Github</a>
      </section>
    </header>
    <main class="container grid-md">
      <nuxt />
    </main>
  </div>
</template>
