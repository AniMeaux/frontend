<template>
  <ul class="adopt-list">
    <li v-for="(animal, k) in animals" :key="k">
      <nuxt-link :to="`/adopt/${animal.category}/${animal.id}`" class="adopt-list-item">
        <div class="item-image"></div>
        <div class="item-description">
          <div class="subhead-2 item-description-name">
            {{ animal.name }}
          </div>
          <div class="body-2 item-description-age">
            {{ animal.age }} ans
          </div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'adopt-list',
    props: {
      animals: {
        type: Array,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    
    list-style-type: none;
    margin: 0;
    padding: 0;

    &-item{
      display: flex;
      flex-direction: column;
      text-decoration: none;

      .item{
        &-image{
          background-image: url('https://images.unsplash.com/photo-1518587671104-999f3dd2d340?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ce982e9de006826792d0a915209455e&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          min-height: 150px;
          width: 100%;
        }
        
        &-description{
          display: flex;
          flex-direction: column;

          &-name, &-age{
            margin: 0;
          }

          &-name{
            color: $blue;
          }

          &-age{

          }
        }
      }

      &:hover{
        background-color: rgba(250, 250, 250, 1);
      }
    }

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 783px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (max-width: 495px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 380px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>