<template>
  <div class="app-footer">
    <div class="wrap">
      <div class="app-footer-navigation">
        <nav>
          <ul>
            <li>
              <nuxt-link to="/legal" class="menu">
                Devenir membre
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/legal" class="menu">
                Mentions légales
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="app-footer-logo">
        <nuxt-link to="/">
          <img
            title="Ani'Meaux logo"
            src="~/assets/img/logo-simple.svg"
            alt="Logo Ani'Meaux"
            :height="60"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
  };
</script>

<style lang="scss" scoped>
  .app-footer{
    &-navigation{
      ul, li{
        margin: 0;
        padding: 0;
        list-style-type: none;

        a{
          text-decoration: none;
          padding: 0 16px;
        }
      }

      ul{
        display: flex;
        justify-content: center;
      }

      margin-bottom: 16px;
    }
  }
</style>
