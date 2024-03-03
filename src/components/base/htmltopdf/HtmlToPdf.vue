<template>
  <div class="html-to-pdf__container" ref="refPDF">
    <slot></slot>
  </div>
</template>

<script>
import { usePDF } from "vue3-pdfmake";
import html2pdf from "html2pdf.js";
export default {
  name: "HtmlToPdf",

  components: {},

  data() {
    return {
      pdfmake: usePDF({
        autoInstallVFS: true,
      }),
    };
  },

  methods: {
    /**
     * Tạo PDF với vue3-pdfmake
     * Cách làm này chỉ tạo được PDF dạng text
     * @author NVDung (22-01-2024)
     */
    generateReport() {
      let contentPDF = this.$refs.refPDF.innerHTML;

      // let scss = import("./pdf-scss.scss").default;

      this.pdfmake
        .createPdf({
          content: [contentPDF],
          // styles: scss,
        })
        .download();
    },

    /**
     * Tạo PDF với html2pdf
     * Tạo được PDF dạng ảnh nên có thể giống giao diện
     * @author NVDung (22-01-2024)
     */
    async generateReportV2() {
      const content = this.$refs.refPDF;
      console.log(content);

      const options = {
        margin: 0,
        filename: "CV_NguyenVanDung.pdf",
        image: { type: "png", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      console.log("Bắt đầu tạo PDF\n");

      try {
        // await html2pdf(content);

        let pdf = html2pdf();
        pdf.set(options);
        await pdf.from(content);
        pdf.save();
        console.log("Tạo PDF và download thành công.");
      } catch (error) {
        console.error("Lỗi khi tạo PDF:", error);
      }
    },
  },

  mounted() {
    /* ============= Event listener buttonDownloadClick ============= */
    /**
     * Tạo lắng nghe sự kiện buttonDownloadClick
     * @author NVDung (22-01-2024)
     */
    this.$emitter.on("buttonDownloadClick", () => {
      console.log("Nhận sự kiện buttonDownloadClick");
      console.log("Đây là HTML To PDF");
      // Gọi phương thức downloadPdf
      this.generateReportV2();
    });
  },

  beforeUnmount() {
    /**
     * Hủy lắng nghe sự kiện buttonDownloadClick
     * @author NVDung (22-01-2024) */
    this.$emitter.off("buttonDownloadClick");
  },
};
</script>

<style lang="scss" scoped>
@import url(./html-to-pdf.scss);
</style>
