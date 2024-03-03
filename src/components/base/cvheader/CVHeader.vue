<template>
  <div class="cv-header">
    <div class="full-name">
      {{ this.$helper.formatStringToCapitalizeEachWord(this.fullName) }}
    </div>
    <div class="position">{{ position.toUpperCase() }}</div>
  </div>
</template>

<script>
export default {
  name: "CVHeader",

  props: {
    /**
     * Họ tên ứng viên
     */
    fullName: {
      type: String,
      required: true,
    },

    /**
     * Vị trí ứng tuyển
     */
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv-header.scss);
</style>
