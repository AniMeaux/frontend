<template>
  <div class="adopt-images">
    <cloudinary
      v-for="(image, k) in data.images"
      :key="k"
      :public-id="image.public_id"
      :transformations="{ c: 'fill', w: 400, h: 300 }"
      :sources="[
        {
          media: '(min-width: 650px)',
          width: 400,
        },
        {
          media: '(max-width: 480px)',
          width: 320,
        },
      ]"
    />
  </div>
</template>

<script>
  import Cloudinary from '~/components/global/cloudinary';

  export default {
    name: 'adopt-images',
    props: {
      data: {
        type: Object,
      },
    },
    components: {
      Cloudinary,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-images{
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: 200px 100px;
    grid-gap: 16px;

    picture:first-child{
      grid-column: span 3;
      overflow: hidden;
    }

    picture{
      height: 100%;
      width: 100%;
    }
  }
</style>