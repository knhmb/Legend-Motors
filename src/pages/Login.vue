<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="login">
    <base-container>
      <h3>Log in to your account</h3>
      <el-form
        label-position="top"
        hide-required-asterisk
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
      >
        <el-form-item :label="$t('menu.login')" prop="email">
          <base-input
            :placeholder="$t('menu.login')"
            v-model="ruleForm.email"
          ></base-input>
        </el-form-item>
        <el-form-item :label="$t('auth.password')" prop="password">
          <base-input
            show-password
            type="password"
            :placeholder="$t('auth.password')"
            v-model="ruleForm.password"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <p class="forgot-password" @click="$router.push('forgot-password')">
            {{ $t("auth.forgot-password") }}?
          </p>
        </el-form-item>
        <el-form-item>
          <base-button @click="login">{{ $t("menu.login") }}</base-button>
        </el-form-item>

        <el-form-item>
          <el-divider />
        </el-form-item>
        <el-form-item>
          <p>{{ $t("auth.dont-have-account") }}</p>
        </el-form-item>
        <el-form-item>
          <base-button :login="true">{{ $t("menu.sign-up") }}</base-button>
        </el-form-item>
      </el-form>
    </base-container>
  </section>
</template>
  
  <script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        password: [
          {
            required: true,
            message: this.$t("auth.password-required"),
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: this.$t("auth.email-required"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("auth.email-format"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            username: this.ruleForm.email,
            password: this.ruleForm.password,
          };
          this.$store
            .dispatch("auth/login", data)
            .then(() => {
              this.$router.replace("/home");
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
.login {
  margin-top: 2rem;
}

.login .container {
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

p.forgot-password {
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  text-decoration-line: underline;
  margin: 0;
  cursor: pointer;
}
</style>