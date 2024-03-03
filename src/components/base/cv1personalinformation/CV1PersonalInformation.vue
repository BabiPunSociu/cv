<template>
  <div class="container">
    <a class="left" href="src/assets/img/avatar.png" target="_blank">
      <img src="../../../assets/img/avatar.png" alt="Avatar" />
    </a>
    <div class="center">
      <!-- Vị trí ứng tuyển -->
      <div class="position">{{ position }}</div>

      <!-- Full name -->
      <div class="full-name">
        {{
          this.$helper.formatStringToCapitalizeEachWord(this.$resource.fullName)
        }}
      </div>
    </div>
    <div class="right">
      <!-- Phone -->
      <a
        :href="'tel:' + this.$resource.personalInformation.phone"
        :title="this.$resource.personalInformation.phone"
        >{{ this.$resource.personalInformation.phone }}</a
      >

      <!-- Email -->
      <a
        :href="'mailto:' + this.$resource.personalInformation.emailLink"
        :title="this.$resource.personalInformation.emailLink"
        >{{ this.$resource.personalInformation.emailTitle }}</a
      >

      <!-- Linkedin -->
      <!-- <a
        :href="this.$resource.personalInformation.linkedinLink"
        target="_blank"
        :title="this.$resource.personalInformation.linkedinLink"
        >{{ this.$resource.personalInformation.linkedinTitle }}</a
      > -->

      <!-- Facebook -->
      <a
        :href="this.$resource.personalInformation.facebookLink"
        target="_blank"
        :title="this.$resource.personalInformation.facebookLink"
        >{{ this.$resource.personalInformation.facebookTitle }}</a
      >

      <!-- Github -->
      <a
        :href="this.$resource.personalInformation.githubLink"
        target="_blank"
        :title="this.$resource.personalInformation.githubLink"
        >{{ this.$resource.personalInformation.githubTitle }}</a
      >

      <!-- Address -->
      <a :title="this.$resource.personalInformation.address">{{
        this.$resource.personalInformation.address
      }}</a>

      <!-- Date of birth -->
      <a :title="this.$resource.personalInformation.dateOfBirth"
        >{{ this.$resource.personalInformation.dateOfBirth }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV1PersonalInformation",
  props: {
    /**
     * Vị trí ứng tuyến
     */
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv1-personal-information.scss);
</style>
