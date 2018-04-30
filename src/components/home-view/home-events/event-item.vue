<template>
  <nuxt-link to="/events" class="event-item">
    <h3 class="event-item-title">
      Week-end adoption et collecte
    </h3>
    <span class="event-item-date">
      Du 1 janvier au 3 janvier
    </span>
    <p class="event-item-description">
      Week-end adoption et collecte dans le magasin Animalis à Vert-Saint-Denis. Nos chats en attente d'une famille vous y attendront !
    </p>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'event-item',
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

