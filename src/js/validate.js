const validator = {
  /**
   * Kiểm tra chuỗi rỗng
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   * @returns Boolean
   */
  required: (value) => !!value,

  /**
   * Kiểm tra min length
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   * @param {Number} minLength
   * @returns
   */
  minLength: (value, minLength) => {
    return value.length >= minLength;
  },

  /**
   * Kiểm tra max length
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   * @param {Number} maxLength
   * @returns Boolean
   */
  maxLength: (value, maxLength) => {
    return value.length <= maxLength;
  },

  /**
   * Kiểm tra định dạng email
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   * @returns Boolean
   */
  email: (value) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(value);
  },

  /**
   * Validate số điện thoại
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   * @returns Boolean
   */
  phone: (value) => {
    const pattern = /^(0[1-9][0-9]{8,9})$/;
    return pattern.test(value);
  },

  /**
   * Validate số chứng minh thư CMND / CCCD
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   */
  identityNumber(value) {
    const pattern = /^(\d{9}|\d{12})$/;
    return pattern.test(value);
  },

  /**
   * Validate mã nhân viên phải kết thúc bằng số
   * Author: NVDUNG (05/09/2023)
   * @param {String} value
   */
  codeEndWithNumber(value) {
    const pattern = /^.*\d$/;
    return pattern.test(value);
  },

  /**
   * Hàm validate ngày input phải nhỏ hơn ngày hiện tại
   * @param {Date} value
   * @returns true nếu value nhỏ hơn hiện tại, false ngược lại
   * Author: NVDUNG (05/09/2023)
   */
  dateTimeLessThanNow(value) {
    var inputDate = new Date(value);
    var dateNow = new Date();
    return inputDate.getTime() < dateNow.getTime();
  },
};

export default validator;
