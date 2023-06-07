<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="reset-password">
    <base-container>
      <h3>Reset Password</h3>
      <el-form label-position="top">
        <el-form-item label="Password">
          <base-input
            show-password
            type="password"
            placeholder="Password"
            v-model="ruleForm.password"
          ></base-input>
        </el-form-item>
        <el-form-item label="Confirm Password">
          <base-input
            show-password
            type="password"
            placeholder="Confirm Password"
            v-model="ruleForm.confirmPassword"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <base-button>Reset Password</base-button>
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
    };
  },
};
</script>
      
      <style scoped>
.reset-password {
  margin-top: 2rem;
}

.reset-password .container {
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
</style>