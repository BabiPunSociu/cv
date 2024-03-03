<template>
  <div class="container">
    <div class="title">
      {{ this.$resource[this.$lang].careerGoals.careerGoalsTitle }}
    </div>
    <div class="container-content">
      <div v-if="shortTermCareerGoals">
        <div class="sub-title">
          {{ this.$resource[this.$lang].careerGoals.TitleShortTermCareerGoals }}
        </div>
        <div class="content">{{ shortTermCareerGoals }}</div>
      </div>
      <div v-if="longTermCareerGoals">
        <div class="sub-title">
          {{ this.$resource[this.$lang].careerGoals.TitleLongTermCareerGoals }}
        </div>
        <div class="content">{{ longTermCareerGoals }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV1CareerGoal",
  props: {
    /**
     * Nội dung mục tiêu ngắn hạn
     */
    shortTermCareerGoals: {
      type: String,
      default: "",
      required: false,
    },

    /**
     * Nội dung mục tiêu dài hạn
     */
    longTermCareerGoals: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv1-career-goal.scss);
</style>
