<template>
  <div class="feature-carousel">
    <el-carousel
      :interval="4000"
      type="card"
      arrow="never"
      indicator-position="none"
      :autoplay="false"
    >
      <el-carousel-item v-for="item in 3" :key="item">
        <img src="../../assets/image-20.png" alt="" />
      </el-carousel-item>
    </el-carousel>
    <p>SAFETY-APPROVED IP67 BATTERY</p>
  </div>
</template>

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