<template>
  <div class="become-member has-header">
    <div class="wrap">
      <h1 class="headline title-underline">
        Devenir membre
      </h1>
      <become-member-form />
    </div>
  </div>
</template>

<script>
  import BecomeMemberForm from '~/components/become-member-view/become-member-form';

  export default {
    name: 'become-member',
    components: {
      BecomeMemberForm,
    },
  };
</script>

<style lang="scss" scoped>
  .become-member{
  }
</style>