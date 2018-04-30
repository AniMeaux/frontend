<template>
  <div class="app-header">
    <div class="wrap">
      <div class="app-header-logo">
        <nuxt-link to="/">
          <img
            title="Ani'Meaux logo"
            src="~/assets/img/logo-simple.svg"
            :height="60"
          />
        </nuxt-link>
      </div>
      <nav class="app-header-navigation">
        <ul>
          <li>
            <nuxt-link to="/adopt" class="blue">
              <span>
                À adopter
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/success" class="green">
              <span>
                Nos réussites
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sheets" class="yellow">
              <span>
                Fiches d'élevage
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/agenda" class="red">
              <span>
                Agenda
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="lightblue">
              <span>
                Nous contacter
              </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
  };
</script>

<style lang="scss" scoped>
  $header-height: 70px;

  .app-header{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    height: $header-height;

    background-color: white;

    .wrap{
      display: flex;
    }

    &-logo{
      display: flex;
      margin: auto 0;
      
      img{
        margin: auto 0;
      }
    }
    
    &-navigation{
      margin-left: 32px;
      
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

        font-size: 16px;
        text-transform: uppercase;
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
  }
</style>
