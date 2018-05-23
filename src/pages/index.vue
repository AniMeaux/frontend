<template>
  <section class="has-header">
    <home-warning />
    <home-carousel />
    <div class="wrap">
      <div class="home-content">
        <div class="home-content-main">
          <h1 class="display-1">
            Ani'Meaux
          </h1>
          <h2 class="headline">
            Qui sommes-nous
          </h2>
          <p class="body-1">
            Nous sauvons, accueillons en famille d’accueil et plaçons tous les animaux que nos routes et déroutes croisent.
          </p>
          <p class="body-1">
            Nous préférons qu'un propriétaire nous avoue être dépassé ou pas en mesure de donner à son animal les soins dont il a besoin, plutôt que de voir un canin au fond d'un canal, lesté par des poids.
          </p>
          <p class="body-1">
            Pour cela, nous travaillons avec d'autres associations, avec nos membres, avec nos contacts et notre entourage pour le bien-être de chaque animal.
          </p>
          <p class="body-1">
            Nous nous moquons de la gloire, de la manière, seuls les résultats comptent.
          </p>
          <p class="body-1">
            Plus nous placerons d'animaux dans des familles aimantes et plus vite nous pourrons en sauver d'autres. Les bavardages permettent de nous vider mais pas d'avancer. Nous pourrions choisir de vous montrer des images de chiens tristes, de chats massacrés, de lapins éventrés, de souris disséquées. Nous pourrions commenter ces images à l'infini, cela ne changerait rien. Mais ensemble, en coordonnant nos convictions, en mêlant nos sentiments à nos actes, nous pouvons sauver un nombre important d'animaux.
          </p>
          <p class="body-1">
            C'est ainsi que notre association grandit, grâce à vous, à vos dons aussi infimes soient-ils, à votre aide, à votre soutient. A ce jour, plusieurs animaux, chats, chiens, rongeurs, ont été placés avec succès et ont trouvé le foyer qu'ils méritent.
          </p>
          <p class="body-1">
            Pour que chaque animal ait le droit à une deuxième chance.
          </p>
          <p class="body-1">
            Chaque animal placé est une âme sauvée.          
          </p>
        </div>
        <aside class="home-content-side">
          <home-facebook />
          <home-events />
        </aside>
      </div>
    </div>
    <home-newsletter/>
  </section>
</template>

<script>
  import HomeCarousel from '~/components/home-view/home-carousel';
  import HomeFacebook from '~/components/home-view/home-facebook';
  import HomeEvents from '~/components/home-view/home-events';
  import HomeNewsletter from '~/components/home-view/home-newsletter';
  import HomeWarning from '~/components/home-view/home-warning';

  export default {
    components: {
      HomeCarousel,
      HomeFacebook,
      HomeEvents,
      HomeNewsletter,
      HomeWarning,
    },
    head() {
      return {
        title: 'Protéction animale',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Site officiel de l\'association de protéction animale Ani\'Meaux, basé sur la ville de Meaux',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .home{
    &-content{
      position: relative;
      display: grid;
      grid-template-columns: 8fr 4fr;
      grid-gap: 20px;

      &-side, &-main{
        position: relative;
        top: -70px;
        
        background: white;
        padding: 16px;
      }

      &-main{
        padding: 16px 32px;
      }

      &-main{
        // h1{
        //   font-size: 24px;
        //   font-weight: 500;
        //   color: $blue;
        //   text-transform: uppercase;
        // }
        // h2{
        //   font-size: 18px;
        //   font-weight: 500;
        //   color: $primary-text;
        // }
        // p{
        //   color: $secondary-text;
        //   line-height: 1.5em;
        // }
      }

      @media only screen and (max-width: 783px){
        grid-template-columns: 1fr;
      }
    }
  }
</style>
