<template>
  <div class="app-container">
    <TheSidebar></TheSidebar>
    <main>
      <div v-if="isShowOverlay" @click="overlayClick" class="bg-overlay"></div>
      <TheHeader></TheHeader>
      <TheMainContent></TheMainContent>
    </main>
  </div>
</template>

<script>
import TheSidebar from "./components/layout/thesidebar/TheSidebar.vue";
import TheHeader from "./components/layout/theheader/TheHeader.vue";
import TheMainContent from "./components/layout/themaincontent/TheMainContent.vue";

export default {
  name: "App",
  components: {
    TheSidebar,
    TheHeader,
    TheMainContent,
  },

  data() {
    return {
      isShowOverlay: false,
    };
  },
  created() {
    /* ============= Event listener showOverlay ============= */
    /**
     * Tạo lắng nghe sự kiện showOverlay
     * @author NVDung (04-01-2024)
     */
    this.$emitter.on("showOverlay", () => {
      this.isShowOverlay = true;
    });
  },

  unmounted() {
    // Hủy lắng nghe sự kiện showOverlay
    this.$emitter.off("showOverlay");
  },

  methods: {
    /**
     * Hàm thực hiện xử lý khi click vào overlay
     * @author NVDung (04-01-2024)
     */
    overlayClick() {
      // Tắt overlay
      this.isShowOverlay = false;
      // Phát emitter hideSidebar
      this.$emitter.emit("hideSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
div.app-container {
  display: flex;

  main {
    background-color: var(--main-background-color);
    width: 83vw;
  }

  @media screen and (max-width: 768px) {
    main {
      width: 100vw;

      div.bg-overlay {
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
        background: var(--color-text-default);
      }
    }
  }
}
</style>
