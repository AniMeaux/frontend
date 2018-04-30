<template>
  <div class="app-footer">
    <div class="app-footer-navigation">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/legal">
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
          :height="60"
        />
      </nuxt-link>
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
        }
      }
      margin-bottom: 16px;
    }
  }
</style>
