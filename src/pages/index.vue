<template>
  <section>
    <home-carousel />
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
  </section>
</template>

<script>
  import HomeCarousel from '~/components/home-view/home-carousel';

  export default {
    components: {
      HomeCarousel,
    },
    head() {
      return {
        title: 'Users',
      };
    },
  };
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
