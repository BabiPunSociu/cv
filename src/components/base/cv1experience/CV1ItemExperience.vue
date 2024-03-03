<template>
  <div class="container">
    <div class="flex">
      <div class="company">
        <strong>{{ exp.position }}</strong> - <span>{{ exp.companyName }}</span>
      </div>
      <div class="work-time">{{ exp.start }} - {{ exp.end }}</div>
    </div>
    <div class="project" v-for="project in exp.projects" :key="project">
      <div class="project-name">{{ project.projectName }}</div>
      <ul>
        <!-- Công nghệ sử dụng -->
        <li class="tech">{{ project.technique }}</li>
        <!-- Kết quả, thành tựu -->
        <li class="result">{{ project.result }}</li>
        <!-- Link github -->
        <li v-if="project.github ?? false">
          <span>{{ this.$resource[this.$lang].linkGithubTitle }}</span
          ><a v-if="project.github" :href="project.github" class="github">{{
            project.github
          }}</a>
          <span v-else>{{ this.$resource[this.$lang].notAvailable }}</span>
        </li>
        <!-- Link demo -->
        <li v-if="project.demo ?? false">
          <span>{{ this.$resource[this.$lang].linkDemoTitle }}</span>
          <a v-if="project.demo ?? false" :href="project.demo" class="demo">{{
            project.demo
          }}</a>
          <span v-else>{{ this.$resource[this.$lang].notAvailable }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV1ItemExperience",
  props: {
    /**
     * Đối tượng experience cần hiện thị
     */
    exp: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv1-item-experience.scss);
</style>
