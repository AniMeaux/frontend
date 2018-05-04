<template>
  <div class="home-newsletter">
    <div class="wrap">
      <h2 class="home-newsletter-title">
        Rejoignez notre newsletter
      </h2>
      <p class="home-newsletter-content">
        Inscrivez-vous à notre newsletter et soyez au courant de toute nos dernières actualités
      </p>
      <newsletter-form/>
    </div>
  </div>
</template>

<script>
  import NewsletterForm from './home-newsletter/newsletter-form';

  export default {
    name: 'home-newsletter',
    components: {
      NewsletterForm,
    },
  };
</script>

<style lang="scss" scoped>
  .home-newsletter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background-image: url('https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86d24240ca6b1df611e98ed6bd7a1efc&auto=format&fit=crop&w=2000&q=80');
    background-size: cover;
    background-position: center;
    height: 400px;

    &-title, &-content{
      color: white;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    &-title{
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase;
    }

    &-content{
      font-size: 16px;
    }
  }
</style>
