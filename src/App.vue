<template>
  <theHeader />
  <main>
    <a
      :href="`https://wa.me/${whatsAppNumber}`"
      target="_blank"
      class="whats-app-content"
    >
      <img src="./assets/whatsapp.png" alt="" />
    </a>
    <router-view></router-view>
  </main>
  <!-- <router-view v-if="loadData"></router-view> -->
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";
import * as tokenData from "@/utils/checkToken";

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      loadData: false,
    };
  },
  watch: {
    $i18n: {
      deep: true,
      async handler() {
        this.getData();
      },
    },
  },
  computed: {
    cms() {
      return this.$store.getters["dashboard/cms"];
    },
    whatsAppNumber() {
      const content = this.cms.find((item) => item.slug === "cms-contact-us");
      const phoneNumber = content.phone.replace("+", "");
      return phoneNumber.replaceAll(" ", "");
    },
  },
  methods: {
    async getData() {
      await tokenData.checkAccessToken(false);

      this.$store.dispatch("product/getProducts");
      this.$store.dispatch("dashboard/getCMS");
      this.$store.dispatch("dashboard/getBanners").then(() => {
        this.loadData = true;
      });
    },
  },
  async created() {
    this.getData();
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
  cursor: pointer;
}

main .whats-app-content img {
  width: 70%;
  height: 70%;
}

@media only screen and (max-width: 700px) {
  main .whats-app-content {
    display: none;
  }
}
</style>
