<template>
  <section>
    <home-carousel />
    <div class="wrap">
      <div class="home-content">
        <aside class="home-content-side">
          <home-events />
          <home-facebook />
        </aside>
        <div class="home-content-main">
          <h1>
            Ani'Meaux
          </h1>
          <h2>
            Qui sommes-nous
          </h2>
          <p>
            Nous sauvons, accueillons en famille d’accueil et plaçons tous les animaux que nos routes et déroutes croisent.
          </p>
          <p>
            Nous préférons qu'un propriétaire nous avoue être dépassé ou pas en mesure de donner à son animal les soins dont il a besoin, plutôt que de voir un canin au fond d'un canal, lesté par des poids.
          </p>
          <p>
            Pour cela, nous travaillons avec d'autres associations, avec nos membres, avec nos contacts et notre entourage pour le bien-être de chaque animal.
          </p>
          <p>
            Nous nous moquons de la gloire, de la manière, seuls les résultats comptent.
          </p>
          <p>
            Plus nous placerons d'animaux dans des familles aimantes et plus vite nous pourrons en sauver d'autres. Les bavardages permettent de nous vider mais pas d'avancer. Nous pourrions choisir de vous montrer des images de chiens tristes, de chats massacrés, de lapins éventrés, de souris disséquées. Nous pourrions commenter ces images à l'infini, cela ne changerait rien. Mais ensemble, en coordonnant nos convictions, en mêlant nos sentiments à nos actes, nous pouvons sauver un nombre important d'animaux.
          </p>
          <p>
            C'est ainsi que notre association grandit, grâce à vous, à vos dons aussi infimes soient-ils, à votre aide, à votre soutient. A ce jour, plusieurs animaux, chats, chiens, rongeurs, ont été placés avec succès et ont trouvé le foyer qu'ils méritent.
          </p>
          <p>
            Pour que chaque animal ait le droit à une deuxième chance.
          </p>
          <p>
            Chaque animal placé est une âme sauvée.          
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HomeCarousel from '~/components/home-view/home-carousel';
  import HomeFacebook from '~/components/home-view/home-facebook';
  import HomeEvents from '~/components/home-view/home-events';

  export default {
    components: {
      HomeCarousel,
      HomeFacebook,
      HomeEvents,
    },
    head() {
      return {
        title: 'Protéction animale',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .home{
    &-content{
      position: relative;
      display: grid;
      grid-template-columns: 4fr 8fr;
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
        h1{
          font-size: 24px;
          font-weight: 500;
          color: $blue;
          text-transform: uppercase;
        }
        h2{
          font-size: 18px;
          font-weight: 500;
          color: $primary-text;
        }
        p{
          color: $secondary-text;
          line-height: 1.5em;
        }
      }
    }
  }
</style>
