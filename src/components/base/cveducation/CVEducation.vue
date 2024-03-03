<template>
  <div class="education__shool">
    <div class="school-name">
      <slot name="schoolName"></slot>
    </div>
    <div class="time-study-in-school">
      <slot name="timeStudyInSchool"></slot>
    </div>
  </div>
  <div class="education__content">
    <div class="major">
      <slot name="major"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "CVEducation",
};
</script>

<style lang="scss" scoped>
@import url(./cv-education.scss);
</style>
