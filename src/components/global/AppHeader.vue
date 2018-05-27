<template>
  <div class="app-header">
    <div class="wrap">
      <a href="" class="app-header-menu">
        <i class="material-icons" aria-hidden="true">menu</i>
      </a>
      <div class="app-header-logo">
        <nuxt-link to="/">
          <img
            class="mobile"
            title="Logo Ani'Meaux"
            alt="Logo Ani'Meaux"
            src="~/assets/img/logo-icon.svg"
            :height="60"
          />
          <img
            class="desktop"
            title="Logo Ani'Meaux"
            alt="Logo Ani'Meaux"
            src="~/assets/img/logo-simple.svg"
            :height="60"
          />
        </nuxt-link>
      </div>
      <nav class="app-header-navigation">
        <ul>
          <li v-for="(link, k) in links" :key="k">
            <nuxt-link
              :to="link.to"
              :title="link.title"
              :class="[link.color]"
              class="button">
              <span>
                {{ link.name }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="app-header-buttons">
        <nuxt-link
          to="/become-member"
          class="btn btn-blue"
        >
          Devenir membre
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
    data() {
      return {
        links: [
          {
            to: '/adopt',
            name: 'À adopter',
            title: 'Nos animaux à l\'adoption',
            color: 'blue',
          },
          {
            to: '/success',
            name: 'Nos réussites',
            title: 'Nos animaux adoptés',
            color: 'green',
          },
          {
            to: '/events',
            name: 'Agenda',
            title: 'Tous nos événements',
            color: 'red',
          },
          {
            to: '/contact',
            name: 'Nous contacter',
            title: 'Des questions? Contactez-nous',
            color: 'lightblue',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  $header-height: 70px;
  $header-shadow-size: 2px;

  .app-header{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    height: $header-height;

    background-color: white;

    .wrap{
      display: flex;
    }

    &-menu{
      display: none;
      text-decoration: none;
      height: 100%;
      width: 45px;
      text-align: center;

      @media only screen and (max-width: 495px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    &-logo{
      display: flex;
      margin: auto 0;

      .mobile{
        display: none;
      }

      img{
        margin: auto 0;

        @media only screen and (max-width: 495px) {
          display: none;

          &.mobile{
            display: block;
          }
        }
      }
    }
    
    &-navigation{
      margin-left: 32px;

      @media only screen and (max-width: 495px) {
        display: none;
      }
      
      ul, li{
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      ul{
        display: flex;
      }

      a{
        display: flex;
        height: $header-height;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;

        padding: 0 16px;
        color: $primary-text;

        border-bottom: 0px solid transparent;
        transition: border-bottom 200ms;

        span{
          margin: auto;
        }

        &.blue{
          border-bottom-color: $blue;
        }

        &.green{
          border-bottom-color: $green;
        }

        &.yellow{
          border-bottom-color: $yellow;
        }

        &.red{
          border-bottom-color: $red;
        }

        &.lightblue{
          border-bottom-color: $lightblue;
        }

        &.nuxt-link-active{
          border-bottom-width: 3px;
        }
      }
    }

    &-buttons{
      display: flex;
      justify-content: flex-end;
      flex: 1;

      .btn{
        height: 45px;
        line-height: 45px;
        text-decoration: none;
        padding: 0 16px;
        margin: auto 0;
      }
    }

    @media only screen and (max-width: 495px) {
      padding: 0 16px;
    }
  }
</style>
