<template>
  <div class="user-profile">
    <h3>Profile</h3>
    <img
      class="user-img"
      crossorigin="anonymous"
      v-if="currentUser.thumbnail"
      :src="`${url}api/v1/system/uploads/${currentUser.thumbnail}`"
      alt=""
    />
    <div v-else class="icon-content">
      <img src="../assets/user.png" alt="" />
    </div>
    <p class="username">{{ currentUser.username }}</p>
    <p>{{ currentUser.email }}</p>
    <p>{{ currentUser.phone }}</p>
    <div class="address-wrapper">
      <template v-for="(property, index) in propertiesToCheck" :key="index">
        <p class="address" v-if="currentUser.hasOwnProperty(property)">
          <span>{{ currentUser[property] }}</span>
        </p>
      </template>
    </div>
  </div>
</template>

<script>
import { url } from "@/url";

export default {
  data() {
    return {
      url,
      propertiesToCheck: ["flatFloorBlock", "building", "street", "region"],
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  max-width: 30rem;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #262f36;
  margin-bottom: 2rem;
}

.icon-content {
  background: #384967;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  /* margin: 0 auto; */
}

img {
  width: 2rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
  margin-bottom: 1rem;
}

p.username {
  font-weight: 900;
  font-size: 28px;
  line-height: 44px;
  color: #384967;
  margin-top: 1rem;
}

p.address {
  text-align: center;
}

p.address span {
  margin-right: 0.5rem;
}

p.address span::after {
  content: ",";
}

p.address:last-of-type span::after {
  content: "";
}

.address-wrapper {
  display: flex;
}

img.user-img {
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 4px;
}
</style>