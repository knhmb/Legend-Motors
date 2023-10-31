<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="profile">
    <div class="banner">
      <!-- <img crossorigin="anonymous" :src="getBanner.thumbnail" alt="" /> -->
      <img
        crossorigin="anonymous"
        :src="`${url}api/v1/system/uploads/${currentUser.thumbnail}`"
        alt=""
      />
      <p>{{ pageTitle }}</p>
    </div>
    <base-container>
      <div class="profile-menu">
        <span
          @click="$router.push('/profile/user-profile')"
          :class="{ 'is-selected': $route.path === '/profile/user-profile' }"
          >{{ $t("dashboard.profile") }}</span
        >
        <span
          @click="$router.push('/profile/edit-profile')"
          :class="{ 'is-selected': $route.path === '/profile/edit-profile' }"
          >{{ $t("auth.edit-profile") }}</span
        >
        <span
          @click="$router.push('/profile/change-password')"
          :class="{ 'is-selected': $route.path === '/profile/change-password' }"
          >{{ $t("form.change-password") }}</span
        >
        <span
          @click="$router.push('/profile/order-history')"
          :class="{ 'is-selected': $route.path === '/profile/order-history' }"
          >{{ $t("dashboard.order-history") }}</span
        >
        <span @click="logout">{{ $t("auth.logout") }}</span>
      </div>
      <router-view></router-view>
    </base-container>
  </section>
</template>

<script>
import { url } from "@/url";

export default {
  data() {
    return {
      activeName: "first",
      url,
    };
  },
  computed: {
    pageTitle() {
      return this.$route.path === "/profile/edit-profile"
        ? this.$t("auth.edit-profile")
        : this.$route.path === "/profile/change-password"
        ? this.$t("form.change-password")
        : this.$route.path === "/profile/order-history"
        ? this.$t("dashboard.order-history")
        : this.$t("dashboard.profile");
    },
    banners() {
      return this.$store.getters["dashboard/banners"];
    },
    getBanner() {
      return this.banners.find((item) => item.slug === "profile");
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.replace("/");
      });
    },
  },
  mounted() {
    console.log(this.getBanner);
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  height: 25rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 70px;
  line-height: 109px;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  overflow-x: auto;
}

.profile-menu::-webkit-scrollbar {
  display: none;
}

.profile-menu span {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 31px;
  color: #384967;
  cursor: pointer;
}

.profile-menu span.is-selected {
  font-weight: 850;
  border-bottom: 4px solid #384967;
}

.profile-menu span:not(:last-of-type) {
  margin-right: 2rem;
}

@media only screen and (max-width: 500px) {
  .profile-menu {
    justify-content: flex-start;
  }
}
</style>