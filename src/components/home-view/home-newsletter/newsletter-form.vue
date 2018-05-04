<template>
  <div class="newsletter-form">
    <form @submit.prevent="formSubmitted" class="newsletter-form-element">
      <div class="newsletter-form-element-label">
        <label for="email">
          E-mail
        </label>
      </div>
      <div></div>
      <div class="newsletter-form-element-input">
        <input
          class="input"
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse e-mail"
          v-model="email"
          v-validate="'required|email'"
          required
          :class="{
            'is-invalid': errors.has('email'),
            'is-valid': fields.$scope && fields.$scope.email && fields.$scope.email.valid
          }"
        />
        <span class="input-error" v-if="errors.has('email')">
          {{ errors.first('email') }}
        </span>
      </div>
      <div>
        <input class="btn btn-blue" type="submit" value="Envoyer" :disabled="loading" />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'newsletter-form',
    data() {
      return {
        email: null,
        loading: false,
      };
    },
    methods: {
      formSubmitted() {
        this.$api.post('/newsletters', {
          newsletter: {
            email: this.email,
          },
        }).then((res) => {
          console.log('res', res);
        }).catch((err) => {
          console.log('err', err);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .newsletter-form{
    &-element{
      display: grid;
      grid-template: repeat(2, auto) / 3fr 1fr;
      grid-gap: 16px;
      width: 30%;
      margin: 0 auto;
      background-color: white;
      padding: 16px;
      margin-top: 32px;
      border-radius: 3px;

      &-label{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      &-input{
        display: flex;
        flex-direction: column;
      }
    }

    label{
      color: $primary-text;
      font-size: 14px;
    }
  }
</style>
