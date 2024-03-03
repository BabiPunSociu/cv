<template>
  <div class="page-container">
    <!-- Information Personal - Thông tin liên hệ -->
    <CV1PersonalInformation
      v-bind:position="this.$resource.jobBackEnd"
    ></CV1PersonalInformation>

    <!-- Career Goals - Mục tiêu nghề nghiệp -->
    <!-- <CV1CareerGoal
      :shortTermCareerGoals="
        this.$resource[this.$lang].careerGoals.careerGoalsBackendRPSoftContent
          .shortTerm
      "
      :longTermCareerGoals="
        this.$resource[this.$lang].careerGoals.careerGoalsBackendRPSoftContent
          .longTerm
      "
    ></CV1CareerGoal> -->

    <!-- Skills - Kỹ năng -->
    <CV1Skill>
      <!-- C# .Net Winform -->
      <CV1ItemSkill
        :title="this.$resource[this.$lang].skill.skills[3].name"
        :content="this.$resource[this.$lang].skill.skills[3].shortContent"
      ></CV1ItemSkill>

      <!-- ASP.Net Core (MVC + Web API) -->
      <CV1ItemSkill
        :title="this.$resource[this.$lang].skill.skills[2].name"
        :content="this.$resource[this.$lang].skill.skills[2].shortContent"
      ></CV1ItemSkill>

      <!-- Sockect TCP/UDP -->
      <CV1ItemSkill
        :title="this.$resource[this.$lang].skill.skills[17].name"
        :content="this.$resource[this.$lang].skill.skills[17].shortContent"
      ></CV1ItemSkill>

      <!-- SQL Server + MySql/MariaDB -->
      <CV1ItemSkill
        :title="
          this.$resource[this.$lang].skill.skills[5].name +
          ', ' +
          this.$resource[this.$lang].skill.skills[6].name
        "
        :content="this.$resource[this.$lang].skill.skills[5].shortContent"
      ></CV1ItemSkill>

      <!-- Oracle Database -->
      <CV1ItemSkill
        :title="this.$resource[this.$lang].skill.skills[7].name"
        :content="this.$resource[this.$lang].skill.skills[7].shortContent"
      ></CV1ItemSkill>

      <!-- JavaScript/VueJS -->
      <CV1ItemSkill
        :title="this.$resource[this.$lang].skill.skills[1].name"
        :content="this.$resource[this.$lang].skill.skills[1].shortContent"
      ></CV1ItemSkill>
    </CV1Skill>

    <!-- Projects - Dự án -->
    <CV1Project>
      <!-- Winform Quản lý bán giày -->
      <CV1ItemProject :project="this.$resource[this.$lang].project.projects[5]">
      </CV1ItemProject>

      <!-- Web ASP.NET - Cafe -->
      <CV1ItemProject :project="this.$resource[this.$lang].project.projects[2]">
      </CV1ItemProject>
    </CV1Project>

    <!-- Experience - Kinh nghiệm -->
    <CV1Experience>
      <!-- Misa -->
      <CV1ItemExperience
        :exp="this.$resource[this.$lang].experience.experiences[0]"
      ></CV1ItemExperience>
    </CV1Experience>
    <!-- Education - Học vấn -->
    <CV1Education cvName="backendRPSoft"></CV1Education>
  </div>
</template>

<script>
import CV1PersonalInformation from "@/components/base/cv1personalinformation/CV1PersonalInformation.vue";
import CV1CareerGoal from "@/components/base/cv1careergoal/CV1CareerGoal.vue";
import CV1Skill from "@/components/base/cv1skill/CV1Skill.vue";
import CV1ItemSkill from "@/components/base/cv1skill/CV1ItemSkill.vue";
import CV1Project from "@/components/base/cv1project/CV1Project.vue";
import CV1ItemProject from "@/components/base/cv1project/CV1ItemProject.vue";
import CV1Experience from "@/components/base/cv1experience/CV1Experience.vue";
import CV1ItemExperience from "@/components/base/cv1experience/CV1ItemExperience.vue";
import CV1Education from "@/components/base/cv1education/CV1Education.vue";

export default {
  name: "BackendRPSoft",
  components: {
    CV1PersonalInformation,
    CV1CareerGoal,
    CV1Skill,
    CV1ItemSkill,
    CV1Project,
    CV1ItemProject,
    CV1Experience,
    CV1ItemExperience,
    CV1Education,
  },
};
</script>

<style lang="scss" scoped>
@import url(./backend-rpsoft.scss);
</style>
