// import axios from "axios";
// const repository = {
//   // Url API
//   baseUrl: "https://localhost:44324/api/v1/",

//   /**
//    * Hàm chung để gọi API theo chuẩn RESTful trả về promise
//    *
//    * @param {string} url - URL của API.
//    * @param {string} method - Phương thức HTTP (GET, POST, PUT, DELETE).
//    * @param {object} data - Dữ liệu gửi lên (chỉ dùng cho POST và PUT).
//    * @returns {Promise} - Trả về một Promise với kết quả của API call.
//    */
//   callAPI(url, method, data = null) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: method,
//         url: url,
//         data: data,
//       })
//         .then((response) => {
//           // console.log(response);

//           // Kiểm tra trạng thái HTTP
//           if (response.status === 200 || response.status === 201)
//             // callback resolved
//             resolve({ httpStatus: response.status, data: response.data });
//           else {
//             // Trả về trạng thái HTTP và dữ liệu phản hồi
//             const errorObject = {
//               httpStatus: response.status,
//               messageData: response.data,
//             };
//             // callback reject
//             reject(errorObject);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//           const errorObject = {
//             httpStatus: error.response.status,
//             devMsg: error.response.data.devMsg,
//             userMsg: error.response.data.userMsg,
//           };
//           reject(errorObject);
//         });
//     });
//   },

//   /**
//    * Hàm thực hiện chung lấy giá trị lỗi từ response
//    * @param {Error} error Đối tượng error
//    * @returns dữ liệu lỗi và httpStatusCode từ response
//    * Created by: NVDung (29/09/2023)
//    */
//   getDataError(error) {
//     // Ghi lại lỗi.
//     console.error(error);

//     // Lấy dữ liệu
//     var responseAPI = {
//       dataError: error.response.data,
//       httpStatusCode: error.response.status,
//     };

//     return responseAPI;
//   },

//   /**
//    * Hàm lấy dữ liệu nhân viên theo điều kiện
//    * @param {Number} pageNumber Trang hiện tại
//    * @param {Number} pageSize Số bản ghi trên 1 trang
//    * @param {string} inputSearch Điều kiện tìm kiếm đầu vào
//    * @param {string} inputSort Điều kiện sắp xếp (ví dụ: +Name, -Phone)
//    * @returns {object} Dữ liệu nhân viên và tổng số bản ghi phù hợp, httpStatusCode
//    * Created by: NVDung (29/09/2023)
//    */
//   async getEmployeesFilter(pageNumber, pageSize, inputSearch, inputSort) {
//     const url = this.baseUrl + "Employees/Filter";
//     const params = {
//       pageNumber: pageNumber,
//       pageSize: pageSize,
//       inputSearch: inputSearch,
//       inputSort: inputSort,
//     };

//     try {
//       // Thực hiện tạo request dạng query parameters
//       const response = await axios.get(url, { params });
//       // Trả về dữ liệu
//       var responseAPI = {
//         employees: response.data.Employees,
//         totalEmployees: response.data.Length,
//         httpStatusCode: response.status,
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện gọi API lấy mã nhân viên mới
//    * @returns {object} employeeCode và httpStatusCode
//    * Created by: NVDung (29/09/2023)
//    */
//   async getGenerateEmployeeCode() {
//     const url = this.baseUrl + "Employees/GenerateCode";
//     try {
//       const response = await axios.get(url);

//       var responseAPI = {
//         employeeCode: response.data,
//         httpStatusCode: response.status,
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện gọi API thêm một nhân viên mới
//    * @param {object} newEmployee Đối tượng nhân viên mới
//    * @returns {object} Http status code và employee đã thêm
//    * Created by: NVDung (29/09/2023)
//    */
//   async addEmployee(newEmployee) {
//     const url = this.baseUrl + "Employees";
//     try {
//       const response = await axios.post(url, newEmployee);

//       console.log("response", response);

//       var responseAPI = {
//         httpStatusCode: response.status,
//         employee: response.data,
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện gọi API sửa một nhân viên
//    * @param {object} employee Đối tượng nhân viên mới
//    * @returns {object} Http status code và employee đã sửa thành công
//    * Created by: NVDung (29/09/2023)
//    */
//   async updateEmployee(employee) {
//     const url = this.baseUrl + "Employees/" + employee.EmployeeId;
//     try {
//       const response = await axios.put(url, employee);

//       var responseAPI = {
//         httpStatusCode: response.status,
//         employee: response.data,
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện gọi API xóa một nhân viên theo ID
//    * @param {string} employeeId Id nhân viên cần xóa
//    * @returns {object} Http status code và changeRecordNumber
//    * Created by: NVDung (29/09/2023)
//    */
//   async deleteEmployee(employeeId) {
//     const url = this.baseUrl + "Employees/" + employeeId;
//     try {
//       const response = await axios.delete(url);

//       var responseAPI = {
//         httpStatusCode: response.status,
//         changeRecordNumber: response.data,
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện gọi API xóa nhiều nhân viên theo danh sách ID.
//    * @param {string} employeeIds Danh sách Ids các nhân viên cần xóa
//    * @returns {object} Http status code và changeRecordNumber
//    * Created by: NVDung (29/09/2023)
//    */
//   async deleteManyEmployeeByIds(employeeIds) {
//     const url = this.baseUrl + "Employees";
//     try {
//       const response = await axios({
//         method: "delete",
//         url: url,
//         data: employeeIds,
//       });
//       console.log("Xóa nhiều: ", response);

//       var responseAPI = {
//         httpStatusCode: response.status,
//         recordsFailed: response.data, // Các nhân viên thực hiện xóa thất bại
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện lấy danh sách đơn vị.
//    * @returns {object} Danh sách các đơn vị, httpStatusCode
//    * Created by: NVDung (29/09/2023)
//    */
//   async getDepartments() {
//     const url = this.baseUrl + "Departments";
//     try {
//       const response = await axios.get(url);

//       var responseAPI = {
//         departments: response.data,
//         httpStatusCode: response.status,
//       };

//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện lấy danh sách chức danh.
//    * @returns {object} Danh sách các chức danh, httpStatusCode
//    * Created by: NVDung (29/09/2023)
//    */
//   async getPositions() {
//     const url = this.baseUrl + "Positions";
//     try {
//       const response = await axios.get(url);

//       var responseAPI = {
//         positions: response.data,
//         httpStatusCode: response.status,
//       };
//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },

//   /**
//    * Hàm thực hiện gọi api để lấy file excel
//    * @return {object} blob và httpStatusCode
//    * Created by: NVDung (06/10/2023)
//    */
//   async employeesExportToExcel() {
//     const url = this.baseUrl + "Employees/Export";
//     try {
//       const response = await axios.get(url, { responseType: "blob" });
//       //console.log("response", response);
//       var responseAPI = {
//         blob: response.data,
//         httpStatusCode: response.status,
//       };
//       return responseAPI;
//     } catch (e) {
//       return this.getDataError(e);
//     }
//   },
// };

// export default repository;
