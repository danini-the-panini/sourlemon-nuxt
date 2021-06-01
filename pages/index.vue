<template>
  <div>
    <div class="hero bg-banner">
      <div class="hero-body p-relative">
        <figure class="avatar avatar-xl">
          <img src="~assets/me.png" alt="My Profile Picture">
        </figure>
        <h1>About Me</h1>
      </div>
    </div>

    <div class="about">
      <p>Hi, I'm Dani. Nice to meet you.</p>

      <p>I love my job. I'm a full-time full-stack web developer at <a href="http://www.platform45.com/" target="_blank" rel="noreferrer noopener">Platform45</a>.</p>

      <p>This website is a collection of technology-related things I have decided to share with the world. Enjoy :)</p>
    </div>

    <div class="buttons">
        <n-link to="/blog" class="link">
          <floopy-button class="button">
            <div class="btn btn-lg btn-primary">
              <i class="icon icon-2x icon-message link-icon"></i>
              Blog
              <i class="icon icon-2x icon-forward arrow-icon"></i>
            </div>
          </floopy-button>
        </n-link>
        <n-link to="/projects" class="link">
          <floopy-button class="button">
            <div class="btn btn-lg btn-primary">
              <i class="icon icon-2x icon-photo link-icon"></i>
              Projects
              <i class="icon icon-2x icon-forward arrow-icon"></i>
            </div>
          </floopy-button>
        </n-link>
        <n-link to="/talks" class="link">
          <floopy-button class="button">
            <div class="btn btn-lg btn-primary">
              <i class="icon icon-2x icon-person link-icon"></i>
              Talks
              <i class="icon icon-2x icon-forward arrow-icon"></i>
            </div>
          </floopy-button>
        </n-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-banner {
  position: relative;
  background-image: url('~assets/banner.jpg');
  background-position: center;
  background-size: cover;
  margin-bottom: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.about {
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 100%;
  margin: 0 auto;

  .link {
    margin-bottom: 1rem;

    &, &:active, &:focus {
      box-shadow: none!important;
    }
  }

  .button {
    width: 100%;
    --angle: 20;
    --click-angle: 30;
    --glow-color: rgba(255, 255, 255, 0.5);
    --glow-background: rgba(255, 255, 255, 0.1);

    &:hover {
      .btn {
        box-shadow: 0 0.3rem 0.3rem rgba(48,55,66,.3);
      }
    }

    .btn {
      width: 100%;
      padding: 1.5rem 1rem;
      display: flex;
      align-items: center;
      box-shadow: 0 0.5rem 0.5rem rgba(48,55,66,.3);
      transition: box-shadow 150ms ease-in-out;

      .link-icon {
        margin-right: 0.5rem;
      }

      .arrow-icon {
        margin-left: auto;
      }
    }
  }
}
</style>

<script>
import FloopyButton from '../components/FloopyButton.vue';

export default {
  components: { FloopyButton }
}
</script>
