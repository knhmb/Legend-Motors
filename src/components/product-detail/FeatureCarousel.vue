<template>
  <div class="feature-carousel">
    <el-carousel
      :interval="4000"
      type="card"
      arrow="never"
      indicator-position="none"
      :autoplay="false"
    >
      <el-carousel-item v-for="item in feature.images" :key="item">
        <img :src="`http://localhost:3001/${item}`" alt="" />
        <!-- <img src="../../assets/image-20.png" alt="" /> -->
      </el-carousel-item>
    </el-carousel>
    <p>{{ feature.description ? feature.description : "" }}</p>
    <!-- <p>SAFETY-APPROVED IP67 BATTERY</p> -->
  </div>
</template>

<script>
export default {
  props: ["feature"],
  created() {
    console.log(this.feature);
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}

:deep(.el-carousel.el-carousel--horizontal.el-carousel--card) {
  margin: 0 auto;
  width: 80%;
  margin-top: 1rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  text-align: center;
  color: #697187;
  margin-top: 0.5rem;
}
</style>