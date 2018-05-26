<template>
  <div class="home-donation">
    <div class="wrap">
      <div class="home-donation-layout">
        <div class="home-donation-content">
          <h2 class="headline">
            Faîtes un don!
          </h2>
          <p class="body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio ipsa deleniti reprehenderit quis vitae quasi consequatur quo velit, accusamus nisi qui sunt fuga aliquid cum molestias doloremque eligendi veritatis?
          </p>
        </div>
        <div class="home-donation-buttons">
          <nuxt-link to="/donate" class="btn btn-white">
            Faire un don
          </nuxt-link>
          <nuxt-link to="/become-member" class="btn btn-white-outline">
            Devenir membre
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-donation',
  };
</script>

<style lang="scss" scoped>
  .home-donation{
    background-color: $blue;
    padding: 16px 16px 32px 16px;

    &-layout{
      display: grid;
      grid-template-columns: 8fr 4fr;
      grid-gap: 16px;
      
      @media only screen and (max-width: 495px) {
        grid-template-columns: 1fr;
      }
    }

    &-buttons{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;

      @media only screen and (max-width: 980px) {
        grid-template-columns: 1fr;
      }

      .btn{
        height: 45px;
        line-height: 45px;
        margin: auto 0;
        padding: 0;
      }
    }

    .headline, .body-1{
      // text-align: center;
      color: white;
      margin: 0;
    }

    .headline{
      margin-bottom: 8px;
    }

    .body-1{
      // width: 80%;
      // margin: 0 auto;
    }
  }
</style>