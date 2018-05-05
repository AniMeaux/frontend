<template>
  <div class="home-events">
    <h2 class="headline home-events-title">
      <i class="material-icons" aria-hidden="true">today</i>
      Evénements à venir
    </h2>
    <event-item
      v-for="(item, k) in items"
      :key="k"
      :id="item.id"
      :name="item.name"
      :description="item.description"
      :begin="item.begin_at"
      :end="item.end_at"
    />
  </div>
</template>

<script>
  import EventItem from './home-events/event-item';

  export default {
    name: 'home-events',
    components: {
      EventItem,
    },
    data() {
      return {
        items: [],
      };
    },
    created() {
      this.$api.get('/events').then((res) => {
        this.items = res.data;
        console.log('res', res);
      });
    },
  };
</script>

<style lang="scss" scoped>
  .home-events{
    &-title{
      display: inline-flex;
      color: $blue;

      i{
        vertical-align: middle;
        padding-right: 16px;
      }
    }
  }
</style>

