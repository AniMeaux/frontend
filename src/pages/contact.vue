<template>
  <div class="contact has-header">
    <div class="wrap">
      <h1 class="headline">
        Nous contacter
      </h1>
      <div class="layout-aside">
        <div>
          <p class="body-1">
            Vous avez une question concernant notre association ou vous souhaitez nous faire part d'un animal en danger? <br />N'hésitez pas à nous contacter par <a href="mailto:contact@animeaux.org">mail</a>, ou même Facebook.
          </p>
          <p class="body-1">
            Nous répondons aux messages très rapidement alors n'hésitez pas à nous faire coucou!
          </p>
          <!-- <contact-form /> -->
          <home-facebook :width="720" :tab="'messages'"/>
        </div>
        <!-- <div>
          <h2 class="subhead-1">
            Nous rejoindre sur Facebook
          </h2>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import ContactForm from '~/components/contact-view/contact-form';
  import HomeFacebook from '~/components/home-view/home-facebook';

  export default {
    head() {
      return {
        title: 'Nous contacter',
      };
    },
    components: {
      ContactForm,
      HomeFacebook,
    },
  };
</script>

<style lang="scss" scoped>
  .contact{
    .layout-aside{
      // display: grid;
      // grid-template-columns: 8fr 4fr;
      // grid-gap: 16px;

      // @media only screen and (max-width: 980px) {
      //   grid-template-columns: 1fr;
      // }
    }

    &-form{
      width: 70%;

      @media only screen and (max-width: 783px) {
        width: 100%;
      }
    }
  }
</style>
