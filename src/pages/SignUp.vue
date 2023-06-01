<template>
  <section class="sign-up">
    <base-container>
      <h3>Sign up</h3>
      <el-form label-position="top">
        <el-form-item label="Name">
          <base-input placeholder="Name" v-model="ruleForm.name"></base-input>
        </el-form-item>
        <el-form-item label="Email">
          <base-input placeholder="Email" v-model="ruleForm.email"></base-input>
        </el-form-item>
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
            placeholder="Confirm Password"
            v-model="ruleForm.confirmPassword"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox
            >I am 18 years of age or older and agree to the
            <span>Terms and Conditions</span><br />
            and the <span>Privacy Policy</span>.</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <base-button>Register</base-button>
        </el-form-item>
        <el-form-item>
          <el-divider />
        </el-form-item>
        <el-form-item>
          <p>Already have an account?</p>
        </el-form-item>
        <el-form-item>
          <base-button :login="true">Log In</base-button>
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
};
</script>

<style scoped>
.sign-up {
  margin-top: 2rem;
}

.sign-up .container {
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

:deep(.el-checkbox__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  color: #262f36;
}

.el-checkbox {
  margin-top: 1rem;
}

:deep(.el-checkbox__label span) {
  text-decoration: underline;
}

.el-button {
  margin: 0 auto;
  margin-top: 1rem;
}

.el-divider {
  border-color: #d1d4d7;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 27px;
  color: #262f36;
  margin: 0 auto;
}
</style>