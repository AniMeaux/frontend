<template>
  <div class="wrap">
    <h1>
      À adopter
    </h1>
    <div class="adopt-layout">
      <div class="adopt-layout-side">
        <nav>
          <ul>
            <li v-for="(category, k) in categories" :key="k">
              <nuxt-link :to="'/adopt/' + k">
                {{ category.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="adopt-layout-main">
        <h2>
          Nos chats
        </h2>
        <h3>
          Nos chats qui attendent une famille
        </h3>
        <ul>
          <li v-for="(animal, k) in animals" :key="k">
            <nuxt-link :to="'/adopt/' + animal.id">
              {{ animal.name }} - {{ animal.age }} ans
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'À adopter',
        animals: [],
      };
    },
    async asyncData({ app }) {
      const { data } = await app.$api.get('/animals');
      return { animals: data.filter(e => e.status === 'non_adopted') };
    },
    data() {
      return {
        categories: {
          dogs: {
            name: 'Chiens',
          },
          cats: {
            name: 'Chats',
          },
          reptiles: {
            name: 'Reptiles',
          },
          birds: {
            name: 'Oiseaux',
          },
          rodent: {
            name: 'Rongeurs',
          },
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .adopt{
    &-layout{
      display: grid;
      grid-template-columns: 3fr 9fr;
    }
  }
</style>

