<template>
  <div class="home-warning">
    <div class="wrap">
      <div class="home-warning-content">
        <h2 class="subhead-2">
          Attention aux arnaques!
        </h2>
        <p class="body-1">
          Nous sommes victimes d'une série d'arnaques faîtes en notre nom à notre insu. Nous vous rappelons que <strong>nous ne publions nulle part autre que sur notre page <a href="">Facebook</a> et <a href="https://www.animeaux.org">notre site internet</a></strong>.
        </p>
        <p class="body-1">
          <strong>Nous sommes une association et non pas un éleveur. Nous ne vendons pas d'animaux LOF.</strong>
          Tout message / email provenant d'un compte autre que @animeaux.org ou de l'adresse mail association.animeaux@gmail.com, même signé de nos noms, est possiblement frauduleux. Soyez vigilants.
        </p>
        <p class="body-1">
          Merci de nous <nuxt-link to="/contact">signaler</nuxt-link> tout message / publication vous paraissant suspect.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-warning',
  };
</script>

<style lang="scss" scoped>
  .home-warning{
    background-color: $red;
    padding: 24px;

    .wrap{
      display: flex;
    }

    h2, p{
      color: white;
      margin: 0;
    }

    p{
      a{
        color: white;
      }
    }
  }
</style>
