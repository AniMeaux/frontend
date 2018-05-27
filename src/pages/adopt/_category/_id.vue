<template>
  <div class="adopt">
    <div class="wrap">
      <div class="adopt-header">
        <h1 class="adopt-title display-1 title-underline">
          {{ data.name }}
        </h1>
      </div>

      <div class="adopt-layout">
        <adopt-images
          :data="data"
        />
        <div class="adopt-layout-main">
          <div class="main-content">
            <div class="main-content-description">
              <h2 class="subhead-2">
                Description:
              </h2>
              <p class="body-1">
                {{ data.description }}
              </p>
            </div>
            <adopt-specs
              :data="data"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AdoptSpecs from '~/components/adopt-view/adopt-specs';
  import AdoptImages from '~/components/adopt-view/adopt-images';

  export default {
    head() {
      return {
        title: 'À adopter',
        animals: [],
      };
    },
    async asyncData({ app, params }) {
      const { data } = await app.$api.get(`/animals/${params.id}`);
      return { data };
    },
    data() {
      return {
        data: null,
      };
    },
    components: {
      AdoptSpecs,
      AdoptImages,
    },
  };
</script>

<style lang="scss" scoped>
  .adopt{
    background-color: #F7F7F7;
    
    &-title{
      color: $blue;
      margin-top: 16px;
    }
    
    &-layout{
      display: grid;
      grid-template-columns: 25% 75%;
      grid-gap: 16px;
      
      margin-top: 32px;

      &-images, &-main{
        background: white;
        border-radius: 3px 3px 0 0;
      }

      &-main{
        padding: 16px;
        
        .main-content{
          display: grid;
          grid-template-columns: 8fr 4fr;
          grid-gap: 16px;
        }
      }
    }
  }
</style>

