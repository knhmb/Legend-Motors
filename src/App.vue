<template>
  <theHeader />
  <router-view v-if="loadData"></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      loadData: false,
    };
  },
  created() {
    this.$store.dispatch("product/getProducts");
    this.$store.dispatch("dashboard/getCMS");
    this.$store.dispatch("dashboard/getBanners").then(() => {
      this.loadData = true;
    });

    // const token = localStorage.getItem("accessToken");
    // this.$store
    //   .dispatch("auth/checkUser", token)
    //   .then(() => {})
    //   .catch(() => {
    //     this.$store.dispatch("auth/logout");
    //   });
    this.$store
      .dispatch("auth/validateUser")
      .then(() => {
        // this.$store.commit("auth/LOGIN");
      })
      .catch(() => {
        this.$store.commit("auth/LOGOUT");
        // this.$router.replace("/");
      });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Avenir";
  /* color: #262f36; */
}
body {
  background: #f2f3f5;
}
</style>
