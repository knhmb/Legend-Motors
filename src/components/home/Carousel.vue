<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel">
    <el-carousel indicator-position="inside" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="img-content">
          <img :src="blobImage" />
          <div>
            <h3>Air EV</h3>
            <p>
              Get an Environmentally Friendly Driving Experience with Wuling Air
              ev - Drive For A Green Life!
            </p>
            <base-button @click="$router.push('/cart')">{{
              $t("btn.booking-now")
            }}</base-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: null,
    };
  },
  computed: {
    banners() {
      return this.$store.getters["dashboard/banners"];
    },
    getBanner() {
      return this.banners.find((item) => item.slug === "home");
    },
    fetchedBanner() {
      return `http://localhost:3001/api/v1/system/uploads/${this.getBanner.thumbnail}`;
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
.img-content {
  width: 100%;
  height: 100%;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-content div {
  position: absolute;
  top: 30%;
  left: 4rem;
}

h3,
p {
  font-family: "Avenir";
  font-style: normal;
  color: #f2f3f5;
}

h3 {
  font-weight: 850;
  font-size: 64px;
  line-height: 100px;
}

p {
  font-weight: 350;
  font-size: 32px;
  line-height: 49px;
  width: 470px;
  margin: 1rem 0;
}

.el-button {
  border-color: #384967;
}

:deep(.el-carousel__container) {
  height: 670px;
}

:deep(.el-carousel__button) {
  border-radius: 100%;
  width: 0.8rem;
  height: 0.8rem;
  background: #d1d4d7;
}

:deep(.el-carousel__indicators--horizontal) {
  bottom: 2rem;
  left: 4rem;
  transform: translateX(0);
}
</style>