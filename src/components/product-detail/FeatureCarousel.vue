<template>
  <div class="feature-carousel">
    <el-carousel
      :interval="4000"
      type="card"
      arrow="never"
      indicator-position="none"
      :autoplay="false"
      @change="currentImage"
    >
      <el-carousel-item
        ref="myImage"
        :name="item.thumbnail"
        v-for="item in feature.images"
        :key="item"
      >
        <!-- {{ item }} -->
        <img
          crossorigin="anonymous"
          :src="`${url}api/v1/system/uploads/${item.thumbnail}`"
          alt=""
        />
        <!-- <img src="../../assets/image-20.png" alt="" /> -->
      </el-carousel-item>
    </el-carousel>
    <p>{{ activeImg ? activeImg.description : "" }}</p>
    <!-- <p>{{ item.description ? item.description : "" }}</p> -->

    <!-- <p>{{ feature.description ? feature.description : "" }}</p> -->
    <!-- <p>SAFETY-APPROVED IP67 BATTERY</p> -->
  </div>
</template>

<script>
import { url } from "@/url";

export default {
  props: ["feature"],
  data() {
    return {
      url,
      activeImg: null,
    };
  },
  methods: {
    currentImage(e) {
      console.log(e);
      // console.log(this.$refs.myImage[e].name);
      this.activeImg = this.feature.images.find(
        (item) => item.thumbnail === this.$refs.myImage[e].name
      );
      console.log(this.activeImg);
    },
  },
  mounted() {
    console.log(this.feature);
    this.currentImage(0);
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