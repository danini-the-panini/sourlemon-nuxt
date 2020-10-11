<script>
  import generateTitle from '../../functions/generateTitle';

  export default {
    head() {
      return {
        title: generateTitle("Talks")
      }
    },
    async asyncData({ $content, params }) {
      const talks = await $content('talks').fetch();
      return { talks };
    },
    methods: {
      talkPath(talk) {
        return `/talks/${talk.slug}/`;
      }
    }
  }
</script>

<template>
  <div>
    <h1>Talks</h1>
    <div class="columns">
      <n-link
        :to="talkPath(talk)"
        v-for="talk in talks" :key="talk.title"
        class="column col-6 col-xs-12"
      >
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <h2 class="h5">{{ talk.title }}</h2>
            </div>
          </div>
          <!-- <div class="card-image">
            <img :src="projectImage(project.slug)" class="img-responsive" :alt="`Screenshot of ${project.name}`" width="412" height="226">
          </div> -->
          <div class="card-body">
            <nuxt-content :document="talk" />
          </div>
          <!-- <div class="card-footer">
            <a v-if="project.repo" class="btn" :href="project.repo" rel="noreferrer noopener" target="_blank">
              <GithubLogo />
              Source
            </a>
            <a v-if="project.website" class="btn" :href="project.website" rel="noreferrer noopener" target="_blank">
              <i class="icon icon-link"></i>
              Website
            </a>
            <n-link v-if="project.article" class="btn" :to="articlePath({ slug: project.article })">
              <i class="icon icon-link"></i>
              Article
            </n-link>
          </div> -->
        </div>
      </n-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;

  svg {
    display: block;
    width: 1rem;
    fill: currentColor;
  }

  svg, i {
    margin-right: 0.5rem;
  }
}

.card {
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  height: 100%;
}

.column {
  margin-bottom: 1rem;
}

.card-title {
  display: flex;

  h2 {
    margin-right: 0.5rem;
  }
}

.project-tools {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
</style>
