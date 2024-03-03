<template>
  <div class="personal-info__container">
    <!-- Full name -->
    <item-information
      textIcon="fa-solid fa-person"
      :title="this.$resource.personalInformation.fullName"
    >
      {{ this.$resource.personalInformation.fullName }}
    </item-information>

    <!-- Phone -->
    <item-information
      textIcon="fa-solid fa-phone"
      :href="'tel:' + this.$resource.personalInformation.phone"
      :title="this.$resource.personalInformation.phone"
    >
      {{ this.$resource.personalInformation.phone }}
    </item-information>

    <!-- Email -->
    <item-information
      textIcon="fa-solid fa-envelope"
      :href="'mailto:' + this.$resource.personalInformation.emailLink"
      :title="this.$resource.personalInformation.emailLink"
    >
      {{ this.$resource.personalInformation.emailTitle }}
    </item-information>

    <!-- Facebook -->
    <item-information
      textIcon="fa-brands fa-facebook"
      :title="this.$resource.personalInformation.facebookTitle"
    >
      <a
        :href="this.$resource.personalInformation.facebookLink"
        target="_blank"
        style="color: var(--white)"
      >
        {{ this.$resource.personalInformation.facebookTitle }}</a
      >
    </item-information>

    <!-- Github -->
    <item-information
      textIcon="fa-brands fa-github"
      :title="this.$resource.personalInformation.githubTitle"
    >
      <a
        :href="this.$resource.personalInformation.githubLink"
        target="_blank"
        style="color: var(--white)"
      >
        {{ this.$resource.personalInformation.githubTitle }}</a
      >
    </item-information>

    <!-- Address -->
    <item-information
      textIcon="fa-solid fa-location-dot"
      :title="this.$resource.personalInformation.address"
    >
      {{ this.$resource.personalInformation.address }}
    </item-information>

    <!-- Date of birth -->
    <item-information
      textIcon="fa-solid fa-cake-candles"
      :title="this.$resource.personalInformation.dateOfBirth"
    >
      {{ this.$resource.personalInformation.dateOfBirth }}
    </item-information>

    <!-- Gender -->
    <item-information
      textIcon="fa-solid fa-venus-mars"
      :title="this.$resource.personalInformation.gender"
    >
      {{ this.$resource.personalInformation.gender }}
    </item-information>
  </div>
</template>

<script>
import ItemInformation from "./ItemInformation.vue";

export default {
  name: "CVPersonalInformation",
  components: {
    "item-information": ItemInformation,
  },
};
</script>

<style lang="scss" scoped>
@import url(./cv-personal-information.scss);
</style>
