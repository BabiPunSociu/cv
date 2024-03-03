<template>
  <div class="container">
    <div class="title">
      {{ this.$resource[this.$lang].project.projectTitle }}
    </div>
    <div class="container-content">
      <slot></slot>
    </div>

    <!-- <router-link to="/projects" class="more">{{
      this.$resource[this.$lang].more
    }}</router-link> -->
    <a
      :href="this.$resource.personalInformation.githubLink"
      target="_blank"
      class="more"
      >{{ this.$resource[this.$lang].more }}</a
    >
  </div>
</template>
<script>
export default {
  name: "CV1Project",
};
</script>

<style lang="scss" scoped>
@import url(./cv1-project.scss);
</style>
