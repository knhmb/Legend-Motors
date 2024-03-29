import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store";
import * as tokenData from "@/utils/checkToken";

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
import AboutUs from "@/pages/AboutUs.vue";
import TermsConditions from "@/pages/TermsConditions.vue";
import BookingTermsConditions from "@/pages/BookingTermsConditions.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import Product from "@/pages/Product.vue";
import AfterSales from "@/pages/AfterSales.vue";
import PaymentWaiting from "@/pages/PaymentWaiting.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/register",
      component: SignUp,
      async beforeEnter(to, from, next) {
        await tokenData.checkAccessToken();
        if (!tokenData.valid) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/login",
      component: Login,
      async beforeEnter(to, from, next) {
        await tokenData.checkAccessToken();
        if (!tokenData.valid) {
          next();
        } else {
          next("/");
        }
      },
    },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/reset-password", component: ResetPassword },
    { path: "/reset-password-successful", component: ResetSuccessful },
    { path: "/product", component: Product },
    { path: "/product/:slug", component: ProductDetail },
    { path: "/test-drive-request", component: TestDriveRequest },
    { path: "/test-drive-received", component: TestDriveRecieved },
    {
      path: "/cart",
      component: Cart,
      async beforeEnter(to, from, next) {
        await tokenData.checkAccessToken();

        if (tokenData.valid) {
          next();
        } else {
          next("/login");
        }
        // if (store.getters["auth/isLoggedIn"]) {
        //   next();
        // } else {
        //   next("/login");
        // }
      },
    },
    {
      path: "/order-confirmed",
      component: PaymentSuccessful,
      beforeEnter(to, from, next) {
        if (store.getters["auth/isLoggedIn"]) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/waiting-payment",
      component: PaymentWaiting,
      beforeEnter(to, from, next) {
        if (store.getters["auth/isLoggedIn"]) {
          next();
        } else {
          next("/");
        }
      },
    },
    { path: "/contact-us", component: ContactUs },
    { path: "/about-us", component: AboutUs },
    { path: "/terms-and-conditions", component: TermsConditions },
    { path: "/after-sales", component: AfterSales },
    {
      path: "/booking-terms-and-conditions",
      component: BookingTermsConditions,
    },
    {
      path: "/privacy-policy",
      component: PrivacyPolicy,
    },
    {
      path: "/profile",
      component: Profile,
      name: "profile",
      async beforeEnter(to, from, next) {
        await tokenData.checkAccessToken();
        if (tokenData.valid) {
          next();
        } else {
          next("/login");
        }
      },
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
