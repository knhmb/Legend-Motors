import { createRouter, createWebHistory } from "vue-router";

import SignUp from "@/pages/SignUp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/register", component: SignUp }],
});

export default router;
