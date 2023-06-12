import { createRouter, createWebHistory } from "vue-router";

import SignUp from "@/pages/SignUp.vue";
import Login from "@/pages/Login.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import ResetPassword from "@/pages/ResetPassword.vue";
import ResetSuccessful from "@/pages/ResetSuccessful.vue";
import Home from "@/pages/Home.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import TestDriveRequest from "@/pages/TestDriveRequest.vue";
import TestDriveRecieved from "@/pages/TestDriveRecieved.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/register", component: SignUp },
    { path: "/login", component: Login },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/reset-password", component: ResetPassword },
    { path: "/reset-password-successful", component: ResetSuccessful },
    { path: "/product-detail", component: ProductDetail },
    { path: "/test-drive-request", component: TestDriveRequest },
    { path: "/test-drive-recieved", component: TestDriveRecieved },
  ],
});

export default router;
