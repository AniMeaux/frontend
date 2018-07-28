<template>
  <div class="adopt-specs">
    <h2 class="subhead-2">
      Caractéristiques
    </h2>
    <table class="body-1">
      <tbody>
        <tr v-if="age">
          <td>
            Age:
          </td>
          <td>
            {{ age }}
          </td>
        </tr>
        <tr>
          <td>
            Sexe:
          </td>
          <td>
            {{ data.gender }}
          </td>
        </tr>
        <tr>
          <td>
            Espèce:
          </td>
          <td>
            {{ data.species }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'adopt-specs',
    props: {
      data: {
        type: Object,
      },
    },
    computed: {
      age() {
        return this.data.age ? moment(this.data.birthday).fromNow(true) : null;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .adopt-specs{
  }
</style>