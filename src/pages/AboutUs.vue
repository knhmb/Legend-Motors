<template>
  <section class="about-us">
    <div class="banner">
      <img src="../assets/About-Us-banner.png" alt="" />
      <h3>About Us</h3>
    </div>
    <base-container>
      <el-row :gutter="60">
        <el-col :span="12">
          <h4>DH Legend Motors Company Limited</h4>
          <p>
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
          </p>
        </el-col>
        <el-col :span="12">
          <img src="../assets/image-39.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
}

img {
  width: 100%;
}

.banner img {
  height: 100%;
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
</style>