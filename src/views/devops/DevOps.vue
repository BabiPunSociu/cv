<template>
  <div>
    <h1>DevOps</h1>
    <p>{{ this.$route.params.id }}</p>
    <div>
      {{ this.$route }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DevOps",
};
</script>

<style lang="scss" scoped>
@import url(./devops.scss);
</style>
