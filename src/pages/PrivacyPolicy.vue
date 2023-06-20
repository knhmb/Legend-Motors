<template>
  <section class="privacy-policy">
    <base-container>
      <h3>{{ cmsContent.title }}</h3>
      <p>{{ cmsContent.content }}</p>
    </base-container>
  </section>
</template>
  
  <script>
export default {
  computed: {
    cms() {
      return this.$store.getters["dashboard/cms"];
    },
    cmsContent() {
      return this.cms.find((item) => item.slug === "cms-privacy-policy");
    },
  },
};
</script>
  
  <style scoped>
.privacy-policy {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}

.privacy-policy .container {
  width: 60rem;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 38px;
  color: #384967;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 110%;
  color: #697187;
  margin-bottom: 1rem;
}
</style>