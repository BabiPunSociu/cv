<template>
  <div class="container">
    <div class="title">
      {{ this.$resource[this.$lang].skill.title }}
    </div>
    <div class="container-content">
      <slot></slot>
    </div>
    
    <router-link to="/skills" class="more">{{
      this.$resource[this.$lang].more
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: "CV1Skill",
};
</script>

<style lang="scss" scoped>
@import url(./cv1-skill.scss);
</style>
