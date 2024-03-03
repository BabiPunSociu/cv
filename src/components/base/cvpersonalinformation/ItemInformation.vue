<template>
  <div class="personal-info-row">
    <span class="personal-info-icon">
      <i class="icon" :class="textIcon"></i>
    </span>
    <span class="personal-info-text" :title="title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ItemInformation",

  props: {
    /**
     * Class icon trong awesome font
     */
    textIcon: {
      type: String,
      required: true,
    },

    /**
     * Title hiển thị khi hover
     */
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./item-information.scss);
</style>
