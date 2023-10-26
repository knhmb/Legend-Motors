<template>
  <div class="payment-method">
    <h3>{{ $t("dashboard.payment-method") }}</h3>
    <el-radio-group @change="setPaymentMethod" v-model="radio">
      <el-radio label="Visa / MasterCard" size="large" border class="flex">
        <div class="image-border">
          <img src="../../assets/icons/visa-logo.png" alt="" />
        </div>
        <div class="image-border">
          <img src="../../assets/icons/Mastercard.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="Union" size="large" border>
        <div class="image-border">
          <img src="../../assets/icons/UnionPay.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="Alipay" size="large" border>
        <div class="image-border">
          <img src="../../assets/icons/Alipay.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="WeChatpay" size="large" border>
        <div class="image-border">
          <img src="../../assets/icons/WeChat.png" alt="" />
        </div>
      </el-radio>
      <el-radio label="Other Payment" size="large" border>
        {{ $t("dashboard.other-options") }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
    };
  },
  methods: {
    setPaymentMethod() {
      this.$emit("setPayment", this.radio);
    },
  },
  created() {
    console.log(this.paymentMethod);
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

:deep(.el-radio.is-checked .el-radio__inner),
:deep(.el-checkbox.is-checked .el-checkbox__inner) {
  background-color: #384967;
  border-color: #384967;
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