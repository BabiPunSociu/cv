<template>
  <div class="container">
    <div class="title">
      {{ this.$resource[this.$lang].experience.experienceTitle }}
    </div>
    <div class="container-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV1Experience",
};
</script>

<style lang="scss" scoped>
@import url(./cv1-experience.scss);
</style>
