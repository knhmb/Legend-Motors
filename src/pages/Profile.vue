<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="profile">
    <div class="banner">
      <img :src="getBanner.thumbnail" alt="" />
      <p>{{ pageTitle }}</p>
    </div>
    <base-container>
      <div class="profile-menu">
        <span
          @click="$router.push('/profile/user-profile')"
          :class="{ 'is-selected': $route.path === '/profile/user-profile' }"
          >Profile</span
        >
        <span
          @click="$router.push('/profile/edit-profile')"
          :class="{ 'is-selected': $route.path === '/profile/edit-profile' }"
          >Edit Profile</span
        >
        <span
          @click="$router.push('/profile/change-password')"
          :class="{ 'is-selected': $route.path === '/profile/change-password' }"
          >Change Password</span
        >
        <span
          @click="$router.push('/profile/order-history')"
          :class="{ 'is-selected': $route.path === '/profile/order-history' }"
          >Order History</span
        >
        <span @click="logout">Logout</span>
      </div>
      <router-view></router-view>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {
    pageTitle() {
      return this.$route.path === "/profile/edit-profile"
        ? "Edit Profile"
        : this.$route.path === "/profile/change-password"
        ? "Change Password"
        : this.$route.path === "/profile/order-history"
        ? "Order History"
        : "Profile";
    },
    banners() {
      return this.$store.getters["dashboard/banners"];
    },
    getBanner() {
      return this.banners.find((item) => item.slug === "profile");
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.replace("/");
      });
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
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
  min-height: 300px;
}

.profile-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
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
</style>