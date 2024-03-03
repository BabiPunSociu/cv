<template>
  <nav class="menu-container" ref="refSidebar">
    <div class="logo-container">
      <a class="menu-container-options mi mi-16 mi-app"></a>
      <a href="/" class="logo">NV DUNG</a>
    </div>

    <div class="menu-bar">
      <div class="menu-item-list scroller">
        <!-- RouterLink -->
        <div class="parent-item-menu">
          <router-link to="/" class="menu-item"
            ><div class="menu-item__icon">
              <div class="mi mi-24 mi-sidebar-invoice"></div>
            </div>
            <div class="menu-item__title">CV Backend RPSoft</div></router-link
          >
        </div>
        <!-- RouterLink -->
        <div class="parent-item-menu">
          <router-link to="/devFullstack" class="menu-item"
            ><div class="menu-item__icon">
              <div class="mi mi-24 mi-sidebar-invoice"></div>
            </div>
            <div class="menu-item__title">CV Web Full Stack</div></router-link
          >
        </div>
        <!-- RouterLink -->
        <div class="parent-item-menu">
          <router-link to="/devops/100" class="menu-item"
            ><div class="menu-item__icon">
              <div class="mi mi-24 mi-sidebar-invoice"></div>
            </div>
            <div class="menu-item__title">
              CV DevOps
              <!-- {{ this.$resource["vi-VN"].sideBarMenu.sideBarFinance }} -->
            </div></router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheSideBar",

  created() {
    /* ============= Event listener loading ============= */
    /**
     * Tạo lắng nghe sự kiện showSidebar
     * @author NVDung (04-01-2024)
     */
    this.$emitter.on("showSidebar", () => {
      // Hiển thị sidebar
      this.showSidebar();
      // Hiển thị overlay main
      this.$emitter.emit("showOverlay");
    });

    /**
     * Tạo lắng nghe sự kiện hideSidebar
     * @author NVDung (04-01-2024)
     */
    this.$emitter.on("hideSidebar", () => {
      // Ẩn sidebar
      this.hideSidebar();
    });
  },

  mounted() {
    /* Cập nhật sidebar theo kích thước trình duyệt */
    window.addEventListener("resize", this.showSidebarOnResize);
  },

  beforeUnmount() {
    // Hủy lắng nghe sự kiện showSidebar
    this.$emitter.off("showSidebar");

    // Hủy lắng nghe sự kiện hideSidebar
    this.$emitter.off("hideSidebar");

    // Hủy lắng nghe sự kiện showSidebarOnResize
    window.removeEventListener("resize", this.showSidebarOnResize);
  },

  methods: {
    /**
     * Hiển thị sidebar
     * @author NVDung (04-01-2024)
     */
    showSidebar() {
      this.$refs.refSidebar.style.display = "block";
      this.$refs.refSidebar.style.position = "absolute";
    },

    /**
     * Ẩn sidebar
     * @author NVDung (04-01-2024)
     */
    hideSidebar() {
      this.$refs.refSidebar.style.display = "none";
      this.$refs.refSidebar.style.position = "static";
    },

    /**
     * Hiển thị sidebar khi innerWidth > 768px
     * @author NVDung (04-01-2024)
     */
    showSidebarOnResize() {
      if (window.innerWidth > 768) {
        this.$refs.refSidebar.style.display = "block";
        this.$refs.refSidebar.style.position = "static";
        this.$refs.refSidebar.style.width = "17vw";
      } else {
        this.$refs.refSidebar.style.display = "none";
        this.$refs.refSidebar.style.width = "50%";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./the-sidebar.scss);
</style>
