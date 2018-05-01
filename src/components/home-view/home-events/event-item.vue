<template>
  <nuxt-link to="/events" class="event-item">
    <h3 class="event-item-title">
      {{ name }}
    </h3>
    <span class="event-item-date">
      Du {{ getBegin }} au {{ getEnd }}
    </span>
    <p class="event-item-description">
      {{ description }}
    </p>
  </nuxt-link>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'event-item',
    props: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      begin: {
      },
      end: {
      },
    },
    computed: {
      getBegin() {
        return moment(this.begin).format('DD MMMM');
      },
      getEnd() {
        return moment(this.end).format('DD MMMM');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .event-item{
    position: relative;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 16px;
    padding-left: 32px;

    &::before{
      position: absolute;
      content: " ";
      width: 3px;
      height: 3px;
      left: 16px;
      top: 24px;
      background: $primary-text;
      border-radius: 3px;
    }

    &:hover{
      background: rgb(245, 245, 245);
    }

    &-title{
      font-size: 16px;
      color: $primary-text;
      text-transform: uppercase;
      margin: 0;
    }

    &-date{
      color: $blue;
      font-size: 14px;
    }

    &-description{
      color: $secondary-text;
      font-size: 16px;
    }
  }
</style>

