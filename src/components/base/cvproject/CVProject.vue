<template>
  <div class="project__title">
    <div class="project-name">
      <slot name="projectName"></slot>
    </div>
    <div class="time-work-in-project">
      <slot name="timeWorkInProject"></slot>
    </div>
  </div>
  <div class="project-content">
    <div class="position">
      <span class="position-title">
        {{ this.$resource[this.$lang].project.positionTitle }}</span
      >
      : <span class="position-value"> <slot name="position"></slot></span>
    </div>

    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "CVProject",
};
</script>

<style lang="scss" scoped>
@import url(./cv-project.scss);
</style>
