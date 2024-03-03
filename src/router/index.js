import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /**
   * mode: 'history' | 'hash' | 'abstract'
   */
  mode: "history",
  base: "/cv/",
  routes: [
    {
      path: "/",
      name: "WebFullStackRouter",
      component: () => import("../views/webfullstack/WebFullStack.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/webfullstack/WebFullStack.vue"),
        },
      ],
    },
    {
      path: "/devBackend-RPSoft",
      name: "DevBackendRPSoftRouter",
      component: () => import("../views/backend/rpsoft/BackendRPSoft.vue"),
    },
    {
      name: "NotFound",
      path: "/:catchAll(.*)", // Bắt tất cả
      component: () => import("../views/notfound/NotFound.vue"),
    },
  ],
});

export default router;
