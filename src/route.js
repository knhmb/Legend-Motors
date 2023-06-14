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
import Cart from "@/pages/Cart.vue";
import PaymentSuccessful from "@/pages/PaymentSuccessful.vue";
import Profile from "@/pages/Profile.vue";
import EditProfile from "@/pages/EditProfile.vue";
import ChangePassword from "@/pages/ChangePassword.vue";
import OrderHistory from "@/pages/OrderHistory.vue";
import UserProfile from "@/pages/UserProfile.vue";
import ContactUs from "@/pages/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
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
    { path: "/cart", component: Cart },
    { path: "/order-confirmed", component: PaymentSuccessful },
    { path: "/contact-us", component: ContactUs },
    {
      path: "/profile",
      component: Profile,
      name: "profile",
      children: [
        { path: "edit-profile", component: EditProfile },
        { path: "change-password", component: ChangePassword },
        { path: "order-history", component: OrderHistory },
        { path: "user-profile", component: UserProfile },
      ],
    },
  ],
});

export default router;
