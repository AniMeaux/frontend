<template>
  <div class="home-facebook">
    <iframe
      title="Facebook"
      :src="getUrl"
      :width="width"
      :height="height"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'home-facebook',
    props: {
      width: {
        type: Number,
        default: 340,
      },
      height: {
        type: Number,
        default: 500,
      },
    },
    computed: {
      getUrl() {
        return `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanimeaux.protectionanimale&tabs=timeline&width=${this.width}&height=${this.height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=340559676070587`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .home-facebook{
    iframe{
      width: 100%;
    }
  }
</style>
