<template>
  <div class="experience__company">
    <div class="company-name">
      <slot name="companyName"></slot>
    </div>
    <div class="time-work-in-company">
      <slot name="timeWorkInCompany"></slot>
    </div>
  </div>
  <div class="experience__content">
    <div class="position">
      <slot name="position"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "CVExperience",
};
</script>

<style lang="scss" scoped>
@import url(./cv-experience.scss);
</style>
