<template>
  <div class="container">
    <div class="title">
      {{ this.$resource[this.$lang].education.educationTitle }}
    </div>
    <div
      class="school"
      v-for="school in this.$resource[this.$lang].education.schools"
    >
      <div class="flex">
        <div class="school-name">{{ school.schoolName }}</div>
        <div class="time">{{ school.start }} - {{ school.end }}</div>
      </div>
      <div class="major">{{ school.major }}</div>
      <div class="gpa">{{ school.gpa }}</div>
      <div
        class="relevant-course-work"
        v-if="school.relevantCoursework[cvName]"
      >
        {{ school.relevantCoursework[cvName] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV1Education",
  props: {
    /**
     * Tên cv apply để hiện khóa học liên quan hợp yêu cầu
     */
    cvName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv1-education.scss);
</style>
