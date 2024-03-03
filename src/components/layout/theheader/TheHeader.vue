<template>
  <header>
    <div class="header-left">
      <!-- Hiện Sidebar -->
      <a
        class="header-menu-icon mi mi-24 mi-three-stripes pointer"
        @click="showSidebar"
      ></a>
      <p>Xin chào, mình là Dũng...</p>
    </div>
    <div class="header-right">
      <!-- Download PDF -->
      <button-download></button-download>

      <!-- Github -->
      <a
        class="btn-github"
        href="https://github.com/DungNguyenGitHub?tab=repositories"
        target="_blank"
        title="GitHub"
      >
        <i class="fa-brands fa-github"></i
      ></a>
      <!-- Sáng / Tối -->
      <switch-light-dark></switch-light-dark>

      <!-- Dịch ngôn ngữ -->
      <a
        class="btn btn-language"
        :title="this.$resource[this.$lang].lang"
        @click="toggleShowLangList"
      >
        <img src="../../../assets/img/languages.png" alt="language" />
      </a>
      <ul class="lang-list" v-show="this.isShowLangList">
        <li
          v-for="lang in langguageList"
          :key="lang"
          :title="this.$resource[lang].lang"
          @click="langguageSelected(lang)"
        >
          {{ lang }}
          <span
            class="mi mi-24 mi-tick"
            v-if="lang === this.langguageCurrent"
          ></span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
// import app để truy cập biến global
import app from "@/main.js";

import ButtonDownload from "../../base/buttondownload/ButtonDownload.vue";
import SwitchLightDark from "../../base/switchlightdark/SwitchLightDark.vue";

export default {
  name: "TheHeader",
  components: {
    "button-download": ButtonDownload,
    "switch-light-dark": SwitchLightDark,
  },

  data() {
    return {
      langguageCurrent: this.$lang,
      langguageList: ["en", "vi"],
      isShowLangList: false,
    };
  },

  methods: {
    /* ============================= Button Show Sidebar ============================= */
    showSidebar() {
      this.$emitter.emit("showSidebar");
    },

    /* ============================= Button Language ============================= */
    /**
     * Hiển thị danh sách ngôn ngữ
     * @author NVDung (04-01-2024)
     */
    toggleShowLangList() {
      this.isShowLangList = !this.isShowLangList;
    },

    /**
     * Chọn ngôn ngữ mới
     * @param {String} newLang Giá trị ngôn ngữ hợp lệ
     * @author NVDung (04-01-2024)
     */
    langguageSelected(newLang) {
      // Cập nhật giá trị langguage
      this.langguageCurrent = newLang;
      // Đóng danh sách ngôn ngữ
      this.toggleShowLangList();
    },
  },

  watch: {
    langguageCurrent(newLang) {
      /* Cập nhật giá trị langguage global */
      app.config.globalProperties.$lang = newLang;

      /* Phát sự kiện thay đổi langguage */
      this.$emitter.emit("langChange");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./the-header.scss);
</style>
