<template>
  <div class="home-events" v-if="items.length > 0">
    <h2 class="headline home-events-title">
      <i class="material-icons" aria-hidden="true">today</i>
      Evénements à venir
    </h2>
    <transition-group name="fade" mode="out-in">
      <event-item
        v-for="(item, k) in items"
        :key="k"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :begin="item.begin_at"
        :end="item.end_at"
      />
    </transition-group>
  </div>
</template>

<script>
  import EventItem from './home-events/event-item';

  /**
    component - homeEvents
   */
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
      });
    },
  };
</script>

<style lang="scss" scoped>
  .home-events{
    margin-top: 16px;

    &-title{
      display: inline-flex;
      color: $blue;

      i{
        vertical-align: middle;
        padding-right: 16px;
        margin: auto 0;
      }
    }
  }
</style>

