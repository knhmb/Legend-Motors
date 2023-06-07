<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="forgot-password">
    <base-container>
      <h3>Forgot Password</h3>
      <el-form label-position="top">
        <el-form-item label="Email" class="email-otp">
          <base-input placeholder="Email" v-model="ruleForm.email"></base-input>
          <p v-if="displayOtpMessage" class="info">
            Resend otp after ({{ seconds }} seconds)
          </p>
        </el-form-item>
        <el-form-item label="OTP">
          <base-input
            show-password
            type="password"
            placeholder="OTP"
            v-model="ruleForm.otp"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <base-button @click="sendOtp">Continue</base-button>
        </el-form-item>
      </el-form>
    </base-container>
  </section>
</template>
    
<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        otp: "",
      },
      displayOtpMessage: false,
      seconds: 60,
      timerFunction: null,
    };
  },
  watch: {
    seconds(value) {
      if (value === 0) {
        this.displayOtpMessage = false;
        clearTimeout(this.timerFunction);
        this.seconds = 60;
      }
    },
  },
  methods: {
    sendOtp() {
      this.displayOtpMessage = true;

      if (this.seconds > 0) {
        this.timerFunction = setTimeout(() => {
          this.seconds--;
          this.sendOtp();
        }, 1000);
      }
    },
  },
};
</script>
    
    <style scoped>
.forgot-password {
  margin-top: 2rem;
}

.forgot-password .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #262f36;
}

.el-form {
  margin-top: 2rem;
}

.el-input {
  width: 23.6rem;
}

:deep(.el-form-item__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
}

.el-button {
  margin: 0 auto;
  margin-top: 1rem;
}

:deep(.el-form-item.email-otp .el-input::after) {
  content: "Send OTP";
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  color: #384967;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
}

:deep(.el-form-item.email-otp .el-input .el-input__wrapper) {
  padding-right: 5.5rem;
}
</style>