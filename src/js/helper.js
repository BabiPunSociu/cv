const helper = {
  /**
   * Fomat dữ liệu ngày tháng
   * Author: NVDUNG (20/08/2023)
   */
  formatDate(date) {
    try {
      if (!date) return "";

      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      return day.padStart(2, "0") + "/" + month.padStart(2, "0") + "/" + year;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Format dữ liệu yyyy-mm-dd để set value cho input
   * Author: NVDUNG (20/08/2023)
   */
  formatDateForInput(date) {
    try {
      if (!date) return "";

      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      return year + "-" + month.padStart(2, "0") + "-" + day.padStart(2, "0");
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Fomat chuỗi bất kì sang dạng viết hoa chữ cái đầu mỗi từ, và viết thường các chữ còn lại
   * @param {String} str Chuỗi cần fomat
   * @returns {String} Chuỗi định dạng viết hoa chữ cái đầu mỗi từ
   * @author NVDUNG (04-01-2024)
   */
  formatStringToCapitalizeEachWord(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");
  },

  /**
   * Fomat chuỗi bất kì sang dạng viết hoa chữ cái đầu.
   * @param {String} str Chuỗi cần fomat
   * @returns Chuỗi định dạng viết hoa chữ cái đầu.
   * @author NVDUNG (04-01-2024)
   */
  formatStringToCapitalizeFirstLetter(str) {
    try {
    let lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    } catch (error) {
      return str;
    }
  },
};

export default helper;
