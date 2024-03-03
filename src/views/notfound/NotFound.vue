<template>
  <div class="container__notfound">
    <h1>404 - Not Found</h1>
    <div>Không tìm thấy trang</div>
    <a @click="goBack">Quay lại</a>
  </div>
</template>

<script>
export default {
  name: "NotFound",

  methods: {
    /**
     * Hàm thực hiện điều hướng quay lại trang trước trong history stack
     *
     * @author NVDung(28-02-2024)
     */
    goBack() {
      this.$router.go(-1); // tương tự this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./not-found.scss);
</style>
