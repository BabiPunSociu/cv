<template>
  <button class="btn-download" @click="buttonDownloadClick">
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="mysvg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Interface / Download">
          <path
            id="Vector"
            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
            stroke="#f1f1f1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </g>
    </svg>
    <span class="texto">Download</span>
  </button>
</template>

<script>
export default {
  name: "ButtonDownload",

  methods: {
    /* ============================= Button Show Sidebar ============================= */
    /**
     * Phát sự kiện click với button Download
     * @author NVDung (22-01-2024)
     */
    buttonDownloadClick() {
      console.log("Phát sự kiện buttonDownloadClick");
      this.$emitter.emit("buttonDownloadClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./button-download.scss);
</style>
