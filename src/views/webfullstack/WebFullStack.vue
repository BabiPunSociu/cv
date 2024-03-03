<template>
  <cv-header
    :fullName="this.$resource.fullName"
    :position="this.$resource.jobFullStack"
  ></cv-header>
  <div class="main-container">
    <div class="main-left">
      <!-- Mục tiêu nghề nghiệp -->
      <cv-careergoals style="margin-bottom: 1em">
        <!-- Nội dung mục tiêu nghề nghiệp -->
        {{ this.$resource[this.$lang].careerGoals.careerGoalsFullStackContent }}
      </cv-careergoals>

      <!-- Học vấn -->
      <div class="education">
        <div class="education__title">
          <!-- Icon -->
          <span class="education__title-icon">
            <span class="material-symbols-outlined"> school </span>
          </span>
          <!-- Tiêu đề -->
          <span class="education__title-text">
            {{ this.$resource[this.$lang].education.educationTitle }}
          </span>
          <!-- Kẻ thanh ngang -->
          <span class="education__title-line"></span>
        </div>
        <cv-education
          v-for="school in this.$resource[this.$lang].education.schools"
          :key="school"
        >
          <template v-slot:schoolName>{{
            school.schoolName.toUpperCase()
          }}</template>
          <template v-slot:timeStudyInSchool
            >{{ school.start }} -
            {{
              this.$helper.formatStringToCapitalizeFirstLetter(school.end)
            }}</template
          >

          <template v-slot:major>{{ school.major }}</template>
          <template v-slot:content>
            <ul style="padding-left: 1em">
              <li v-for="item in school.contents" :key="item">
                {{ item }}
              </li>
            </ul></template
          >
        </cv-education>
      </div>

      <!-- Experience - Kinh nghiệm -->
      <div class="experience">
        <div class="experience__title">
          <!-- Icon -->
          <span class="experience__title-icon">
            <span class="material-symbols-outlined"> workspace_premium </span>
          </span>
          <!-- Tiêu đề -->
          <span class="experience__title-text">
            {{ this.$resource[this.$lang].experience.experienceTitle }}
          </span>
          <!-- Kẻ thanh ngang -->
          <span class="experience__title-line"></span>
        </div>
        <cv-experience
          v-for="exp in this.$resource[this.$lang].experience.experiences"
        >
          <!-- Tên công ty -->
          <template v-slot:companyName>
            {{ exp.companyName }}
          </template>

          <!-- Thoi gian lam viec -->
          <template v-slot:timeWorkInCompany>
            {{ exp.start }}
            -
            {{
              this.$helper.formatStringToCapitalizeFirstLetter(exp.end)
            }}</template
          >

          <!-- Vị trí công việc -->
          <template v-slot:position> {{ exp.position }}</template>

          <!-- Nội dung kinh nghệm trong công việc -->
          <template v-slot:content>
            <ul>
              <li
                v-for="expContent in exp.content"
                :key="expContent"
                style="list-style-type: none"
              >
                {{ expContent }} <br />
                <br />
              </li>
            </ul>
          </template>
        </cv-experience>
      </div>

      <!-- Project - Dự án -->
      <div class="project">
        <div class="project__title">
          <!-- Icon -->
          <span class="project__title-icon">
            <span class="material-symbols-outlined"> terminal </span>
          </span>
          <!-- Tiêu đề -->
          <span class="project__title-text">
            {{ this.$resource[this.$lang].project.projectTitle }}
          </span>
          <!-- Kẻ thanh ngang -->
          <span class="project__title-line"></span>
        </div>

        <cv-project
          v-for="project in this.$resource[this.$lang].project.projects"
          :key="project"
        >
          <template v-slot:projectName>
            {{ project.projectName.toUpperCase() }}
          </template>
          <template v-slot:timeWorkInProject>
            {{ project.start }} -
            {{ this.$helper.formatStringToCapitalizeFirstLetter(project.end) }}
          </template>
          <template v-slot:position>{{ project.position }}</template>
          <template v-slot:content>
            <ul>
              <li
                v-for="projectContent in project.content"
                :key="projectContent"
                style="list-style-type: none"
              >
                {{ projectContent }}
              </li>
            </ul>
          </template>
        </cv-project>
      </div>
    </div>
    <div class="main-right">
      <!-- Avatar -->
      <div class="avatar">
        <img src="../../assets/img/avatar.png" alt="Avatar" />
      </div>

      <!-- Personal information -->
      <cv-personal-information></cv-personal-information>

      <hr />
      <!-- Skill -->
      <cv-skill></cv-skill>
    </div>
  </div>
</template>

<script>
import CVHeader from "../../components/base/cvheader/CVHeader.vue";
import CVCareerGoals from "../../components/base/cvcareergoals/CVCareerGoals.vue";
import CVEducation from "../../components/base/cveducation/CVEducation.vue";
import CVExperience from "../../components/base/cvexperience/CVExperience.vue";
import CVProject from "../../components/base/cvproject/CVProject.vue";
import CVPersonalInformation from "../../components/base/cvpersonalinformation/CVPersonalInformation.vue";
import CVSkill from "../../components/base/cvskill/CVSkill.vue";

export default {
  name: "WebFullStack",

  components: {
    "cv-header": CVHeader,
    "cv-careergoals": CVCareerGoals,
    "cv-education": CVEducation,
    "cv-experience": CVExperience,
    "cv-project": CVProject,
    "cv-personal-information": CVPersonalInformation,
    "cv-skill": CVSkill,
  },
};
</script>

<style lang="scss" scoped>
@import url(./web-full-stack.scss);
</style>
