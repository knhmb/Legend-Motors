<template>
  <theHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";

export default {
  components: { TheHeader, TheFooter },
  created() {
    this.$store.dispatch("product/getProducts");
    this.$store.dispatch("dashboard/getCMS");
    this.$store.dispatch("dashboard/getBanners");
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
