<template>
  <div class="career-goals">
    <div class="career-goals__title">
      {{ this.$resource[this.$lang].careerGoals.careerGoalsTitle }}
    </div>
    <div class="career-goals__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVCareerGoals",
};
</script>

<style lang="scss" scoped>
@import url(./cv-career-goals.scss);
</style>
