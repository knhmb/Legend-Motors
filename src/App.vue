<template>
  <theHeader />
  <main>
    <div class="whats-app-content">
      <img src="./assets/whatsapp.png" alt="" />
    </div>
    <router-view></router-view>
  </main>
  <!-- <router-view v-if="loadData"></router-view> -->
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

    const token = localStorage.getItem("accessToken");

    this.$store
      .dispatch("auth/validateUser", token)
      .then(() => {
        // this.$router.replace('/projects')
      })
      .catch(() => {
        this.$router.replace("/");
      });

    // this.$store
    //   .dispatch("auth/validateUser")
    //   .then(() => {
    //     // this.$store.commit("auth/LOGIN");
    //   })
    //   .catch(() => {
    //     this.$store.commit("auth/LOGOUT");
    //     // this.$router.replace("/");
    //   });
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

main {
  position: relative;
}

main .whats-app-content {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  position: absolute;
  right: 1rem;
  bottom: 2rem;
  border: 4px solid #384967;
  display: flex;
  align-items: center;
  justify-content: center;
}

main .whats-app-content img {
  width: 70%;
  height: 70%;
}
</style>
