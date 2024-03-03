<template>
  <div ref="refMain" class="main-container scroller">
    <html-to-pdf>
      <router-view :key="keyRender"></router-view>
    </html-to-pdf>
  </div>
</template>

<script>
import HtmlToPdf from "../../base/htmltopdf/HtmlToPdf.vue";

export default {
  name: "TheMainContent",
  components: {
    "html-to-pdf": HtmlToPdf,
  },

  data() {
    return {
      /**
       * Key để render lại component
       */
      keyRender: 0,
    };
  },

  methods: {},

  created() {
    /* ============= Event listener langChange ============= */
    /**
     * Tạo lắng nghe sự kiện langChange
     * @author NVDung (22-01-2024)
     */
    this.$emitter.on("langChange", () => {
      // reRender
      this.keyRender = (this.keyRender + 1) % 2;
    });
  },

  mounted() {},

  unmounted() {
    /**
     * Hủy lắng nghe sự kiện langChange
     * @author NVDung (22-01-2024) */
    this.$emitter.off("langChange");
  },
};
</script>

<style lang="scss" scoped>
@import url(./the-main-content.scss);
</style>
