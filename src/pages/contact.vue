<template>
  <div>
    contact
  </div>
</template>

<script>
  export default {
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({});
        }, 3000);
      });
    },
    head() {
      return {
        title: 'Nous contacter',
      };
    },
  };
</script>

