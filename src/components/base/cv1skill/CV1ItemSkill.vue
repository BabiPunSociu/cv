<template>
  <div class="item-skill">
    <div class="item-skill__title">{{ title }}</div>
    <div class="item-skill__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "CV1ItemSkill",
  props: {
    /**
     * Tên skill
     */
    title: { type: String, required: true },

    /**
     * Nội dung skill
     */
    content: { type: String, required: false },
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv1-item-skill.scss);
</style>
