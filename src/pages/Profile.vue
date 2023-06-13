<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="profile">
    <div class="banner">
      <img src="../assets/Profile-banner.png" alt="" />
      <p>Profile</p>
    </div>
    <base-container>
      <div class="profile-menu">
        <span
          @click="$router.push('/profile')"
          :class="{ 'is-selected': $route.path === '/profile' }"
          >Profile</span
        >
        <span
          @click="$router.push('/profile/edit-profile')"
          :class="{ 'is-selected': $route.path === '/profile/edit-profile' }"
          >Edit Profile</span
        >
        <span>Change Password</span>
        <span>Order History</span>
        <span>Logout</span>
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