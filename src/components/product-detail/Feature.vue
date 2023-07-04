<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="feature">
    <base-container>
      <h3>Feature</h3>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane
          v-for="feature in productDetail.feature"
          :key="feature"
          :label="feature.name"
          :name="feature.name"
        >
          <feature-carousel :feature="feature"></feature-carousel>
        </el-tab-pane>
        <!-- <el-tab-pane label="Main Battery & Powertrain" name="first">
          <feature-carousel></feature-carousel>
        </el-tab-pane>
        <el-tab-pane label="Exterior" name="second">Config</el-tab-pane>
        <el-tab-pane label="Interior" name="third">Role</el-tab-pane>
        <el-tab-pane label="Safety Protection" name="fourth">Task</el-tab-pane>
        <el-tab-pane label="New Age Enjoyment" name="fifth">Task</el-tab-pane> -->
      </el-tabs>
    </base-container>
  </div>
</template>

<script>
import FeatureCarousel from "@/components/product-detail/FeatureCarousel.vue";

export default {
  components: {
    FeatureCarousel,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {
    productDetail() {
      return this.$store.getters["product/productDetail"];
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 50px;
  text-align: center;
  color: #566069;
  margin-bottom: 2.5rem;
}

:deep(.el-tabs__active-bar.is-top) {
  background: #384967;
  /* transform: translateX(0) !important;
  width: 260px !important; */
}

:deep(.el-tabs__item.is-top) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 18px;
  line-height: 28px;
  color: #c9cdd4;
  padding-left: 20px;
}

:deep(.el-tabs__item.is-top.is-active) {
  color: #384967;
  padding-left: 20px;
}

:deep(.el-tabs--top .el-tabs__item.is-top:last-child) {
  padding-right: 20px;
}

:deep(.el-tabs--top .el-tabs__item.is-top:nth-child(2)) {
  padding-left: 20px;
}

:deep(.el-tabs__nav-scroll) {
  width: 100%;
}

:deep(.el-tabs__nav.is-top) {
  width: 100%;
  /* justify-content: space-between; */
  justify-content: center;
}
</style>