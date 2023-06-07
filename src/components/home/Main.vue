<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <base-container>
      <h3>Products</h3>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="EV" name="ev">
          <el-row>
            <el-col :span="12">
              <img src="../../assets/EV-car.png" alt="" />
            </el-col>
            <el-col :span="12">
              <h4>Air EV</h4>
              <small>Highlighted Specifications</small>
              <ul>
                <li>
                  10.25" Integrated Floating Widescreen And Smart Start System
                </li>
                <li>Futuristic Center Console</li>
                <li>IP67 Waterproof Battery</li>
                <li>Easy Home Charging System</li>
                <li>2 Airbags</li>
                <li>Roomy 4-Seater</li>
              </ul>
              <base-button>Booking now</base-button>
              <base-button :login="true">Explore</base-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="First product" name="first"
          >First product</el-tab-pane
        >
        <el-tab-pane label="Second product" name="second"
          >Second product</el-tab-pane
        >
        <el-tab-pane label="Third product" name="third"
          >Third product</el-tab-pane
        >
      </el-tabs>
    </base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "ev",
    };
  },
};
</script>

<style scoped>
.main {
  background: #ffffff;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 32px;
  line-height: 50px;
  color: #262f36;
  margin-bottom: 1rem;
}

img {
  width: 100%;
}

:deep(.el-tabs__nav-wrap::after) {
  background-color: transparent;
}

:deep(.el-tabs__item.is-top) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 28px;
  line-height: 44px;
  color: #384967;
}

:deep(.el-tabs__item.is-active) {
  font-weight: 850;
}

:deep(.el-tabs__active-bar.is-top) {
  background-color: #384967;
}

h4 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 50px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #384967;
  margin-bottom: 3rem;
}

small {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #86909c;
}

ul {
  margin-top: 0.5rem;
}

li {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 20px;
  line-height: 31px;
  color: #384967;
}

.el-button {
  margin-top: 1rem;
}

.main .el-button.is-login {
  width: fit-content;
}
</style>