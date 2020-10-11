<script>
  import GithubLogo from '../../static/github.svg';
  import articlePath from '../../functions/articlePath';
  import talkPath from '../../functions/talkPath';
  import generateTitle from '../../functions/generateTitle';

  export default {
    components: { GithubLogo },
    head() {
      return {
        title: generateTitle("Projects")
      }
    },
    async asyncData({ $content, params }) {
      const projects = await $content('projects')
        .sortBy('name')
        .fetch();
      return { projects };
    },
    methods: {
      projectImage(slug) {
        return require(`~/assets/project-images/${slug}.png`);
      },
      articlePath,
      talkPath
    }
  }
</script>

<template>
  <div>
    <h1>Projects</h1>
    <div class="columns">
      <div
        v-for="project in projects" :key="project.name"
        class="column col-6 col-xs-12"
      >
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <h2 class="h5">{{ project.name }}</h2>
              
              <div class="project-tools">
                <span v-for="tool in project.tools" :key="tool" class="chip bg-primary">{{tool}}</span>
              </div>
            </div>
            <div class="card-subtitle text-gray">
              {{project.tags.join(', ')}}
            </div>
          </div>
          <div class="card-image">
            <img :src="projectImage(project.slug)" class="img-responsive" :alt="`Screenshot of ${project.name}`" width="412" height="226">
          </div>
          <div class="card-body">
            <nuxt-content :document="project" />
          </div>
          <div class="card-footer">
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
            <n-link v-if="project.talk" class="btn" :to="talkPath({ slug: project.talk })">
              <i class="icon icon-person"></i>
              Talk
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-responsive {
  width: 100%;
}

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
