<template>
  <div class="home-events">
    <h2 class="home-events-title">
      <i class="material-icons" aria-hidden="true">today</i>
      Evénements à venir
    </h2>
    <event-item />
    <event-item />
  </div>
</template>

<script>
  import EventItem from './home-events/event-item';

  export default {
    name: 'home-events',
    components: {
      EventItem,
    },
  };
</script>

<style lang="scss" scoped>
  .home-events{
    &-title{
      display: inline-flex;
      font-size: 20px;
      font-weight: 500;
      color: $blue;
      text-transform: uppercase;

      i{
        vertical-align: middle;
        padding-right: 16px;
      }
    }
  }
</style>

