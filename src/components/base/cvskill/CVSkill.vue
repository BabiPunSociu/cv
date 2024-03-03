<template>
  <div class="skill__container">
    <div
      class="item-skill__container"
      v-for="skill in this.$resource[this.$lang].skill.skills"
      :key="skill.name"
    >
      <div class="item-skill__name">{{ skill.name }}</div>

      <div class="item-skill__bar">
        <div class="progress-value" :style="{ width: skill.level + '%' }">
          {{ skill.level + "%" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVSkill",
};
</script>

<style lang="scss" scoped>
@import url(./cv-skill.scss);
</style>
