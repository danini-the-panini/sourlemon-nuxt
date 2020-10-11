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
    <p>Hi, I'm Dan. Nice to meet you.</p>

    <p>I love my job. I'm a full-time full-stack web developer at <a href="http://www.platform45.com/" target="_blank" rel="noreferrer noopener">Platform45</a>.</p>

    <p>This website is a collection of technology-related things I have decided to share with the world. Enjoy :)</p>
  </div>
</template>

<style scoped lang="scss">
.bg-banner {
  position: relative;
  background-image: url('~assets/banner.jpg');
  background-position: center;
  background-size: cover;

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
</style>
