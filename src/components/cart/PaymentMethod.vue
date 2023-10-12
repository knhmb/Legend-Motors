<template>
  <div class="payment-method">
    <h3>Payment Method</h3>
    <el-radio-group v-model="radio1">
      <el-radio label="1" size="large" border class="flex">
        <div class="image-border">
          <img src="../../assets/icons/visa-logo.png" alt="" />
        </div>
        <div class="image-border">
          <img src="../../assets/icons/Mastercard.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="2" size="large" border>
        <div class="image-border">
          <img src="../../assets/icons/UnionPay.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="3" size="large" border>
        <div class="image-border">
          <img src="../../assets/icons/Alipay.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="4" size="large" border>
        <div class="image-border">
          <img src="../../assets/icons/WeChat.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="5" size="large" border> Other Options </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: "",
    };
  },
};
</script>

<style scoped>
.payment-method h3 {
  color: #262f36;
  font-family: Avenir;
  font-size: 24px;
  font-weight: 800;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1rem;
}

.el-radio-group {
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
}

.el-radio.el-radio.is-bordered.el-radio--large {
  margin-right: 0;
  width: 100%;
  margin-bottom: 1rem;
  background-color: #fff;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border: none;
}

.image-border {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  padding: 0.3rem;
  width: 3rem;
  height: 2rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-border img {
  width: 80%;
  height: 1rem;
  object-fit: contain;
}

:deep(.el-radio__label) {
  font-family: Avenir;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #1d2129;
}

.flex :deep(.el-radio__label) {
  display: flex;
  align-items: center;
}

.flex .image-border:first-of-type {
  margin-right: 0.7rem;
}
</style>