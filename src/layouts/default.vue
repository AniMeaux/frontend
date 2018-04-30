<template>
  <div>
    <header>
      <app-header/>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer>
      <app-footer/>
    </footer>
  </div>
</template>

<script>
  import AppHeader from '~/components/global/AppHeader';
  import AppFooter from '~/components/global/AppFooter';

  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  };
</script>

<style>
</style>
