<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="reset-password">
    <base-container>
      <h3>Reset Password</h3>
      <el-form
        label-position="top"
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
      >
        <el-form-item label="Password" prop="password">
          <base-input
            show-password
            type="password"
            placeholder="Password"
            v-model="ruleForm.password"
          ></base-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirmPassword">
          <base-input
            show-password
            type="password"
            placeholder="Confirm Password"
            v-model="ruleForm.confirmPassword"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <base-button @click="resetPassword">Reset Password</base-button>
        </el-form-item>
      </el-form>
    </base-container>
  </section>
</template>
      
  <script>
import { ElNotification } from "element-plus";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Password is required"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField("confirmPassword", () => null);
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Confirm password is required"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Password's do not match"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        password: "",
        confirmPassword: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validateConfirmPass, trigger: "blur" }],
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    checkPassword(pass) {
      const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(pass);
    },
    resetPassword() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            email: this.currentUser.email,
            password: this.ruleForm.password,
            password2: this.ruleForm.confirmPassword,
          };
          this.$store
            .dispatch("auth/resetPassword", data)
            .then(() => {
              ElNotification({
                title: "Success",
                message: "Password Changed",
                type: "success",
              });
              this.$router.replace("/login");
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
            });
        }
      });
    },
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