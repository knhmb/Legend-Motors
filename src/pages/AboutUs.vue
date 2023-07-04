<template>
  <section class="about-us">
    <div class="banner">
      <img :src="blobImage" alt="" />
      <h3>{{ cmsContent.title }}</h3>
    </div>
    <base-container>
      <el-row :gutter="60">
        <el-col :span="12">
          <h4>{{ cmsContent.content }}</h4>
          <!-- <p>
            DH Legend Motors was established as the general agent of
            SAIC-GM-Wuling (SGMW) electric vehicles in Hong Kong. An automobile
            trading company that sells SGMW electric vehicles in Hong Kong.
          </p>
          <p>
            With our extensive experience in international and local sales and
            trading of new and used cars, we aspire to Drive for a Better Life.
          </p>
          <p>
            By partnering with SGMW, we trust each other and believe that we can
            understand the expectations of the market and the community, and
            move forward together with drivers to become their trusted mobility
            partners.
          </p> -->
        </el-col>
        <el-col :span="12">
          <img src="../assets/image-39.png" alt="" />
        </el-col>
      </el-row>
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
      return this.cms.find((item) => item.slug === "cms-about-us");
    },
    banners() {
      return this.$store.getters["dashboard/banners"];
    },
    getBanner() {
      return this.banners.find((item) => item.slug === "about-us");
    },
    blobImage() {
      return this.$store.getters["dashboard/blobImage"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/fetchBlobImage", this.getBanner.thumbnail);
  },
};
</script>

<style scoped>
.banner {
  position: relative;
}
.banner img {
  height: 100%;
  width: 100%;
  min-height: 300px;
  object-fit: cover;
}

h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 70px;
  line-height: 109px;
  color: #ffffff;
}

h4 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  color: #384967;
  margin-bottom: 1rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
  margin-bottom: 1rem;
}

img {
  width: 100%;
  height: 24rem;
  object-fit: contain;
}
</style>