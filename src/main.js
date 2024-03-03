// import css
import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// import libs
import emitter from "tiny-emitter/instance";
import { PDFPlugin } from 'vue3-pdfmake';

// import /js
import MISAEnum from "./js/enum.js";
import MISAHelper from "./js/helper.js";
import MISAResource from "./js/resource.js";
// import MISARepository from "./js/repository.js";
import MISAValidater from "./js/validate.js";

// import router
import router from "./router/index.js";

const app = createApp(App);

// // Tạo biến globals
app.config.globalProperties.$emitter = emitter;

app.config.globalProperties.$enum = MISAEnum;
app.config.globalProperties.$helper = MISAHelper;
app.config.globalProperties.$resource = MISAResource;
app.config.globalProperties.$validate = MISAValidater;

app.config.globalProperties.$isDarkMode = null;
app.config.globalProperties.$lang = "vi";

// Thêm PDFPlugin
app.use(PDFPlugin);

// Thêm router
app.use(router);

app.mount("#app");

export default app;
