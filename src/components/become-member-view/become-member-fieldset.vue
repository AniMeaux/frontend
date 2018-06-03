<template>
  <div class="become-member-fieldset">
    <fieldset>
      <legend class="subhead-2">
        <div class="fieldset-number">{{ number }}</div>
        {{ legend }}
      </legend>
      <slot></slot>
    </fieldset>
  </div>
</template>

<script>
  export default {
    name: 'become-member-fieldset',
    props: {
      legend: {
        type: String,
      },
      number: {
        type: Number,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .become-member-fieldset{
    fieldset{
      border: none;

      legend{
        position: relative;
      }
    }

    .fieldset-number{
      $size: 28px;
      
      position: absolute;
      left: -$size * 1.5;
      
      background-color: $blue;
      color: white;
      width: $size;
      height: $size;
      line-height: $size;
      border-radius: 100%;
      text-align: center;
    }
  }
</style>