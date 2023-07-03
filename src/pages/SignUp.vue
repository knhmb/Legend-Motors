<template>
  <section class="sign-up">
    <base-container>
      <h3>{{ $t("menu.sign-up") }}</h3>
      <el-form
        hide-required-asterisk
        label-position="top"
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
      >
        <el-form-item :label="$t('auth.name')" prop="name">
          <base-input
            :placeholder="$t('auth.name')"
            v-model="ruleForm.name"
          ></base-input>
        </el-form-item>
        <el-form-item :label="$t('auth.email')" prop="email">
          <base-input
            :placeholder="$t('auth.email')"
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
        <el-form-item
          :label="$t('auth.confirm-password')"
          prop="confirmPassword"
        >
          <base-input
            show-password
            :placeholder="$t('auth.confirm-password')"
            v-model="ruleForm.confirmPassword"
          ></base-input>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="ruleForm.checked">{{
            $t("auth.accept-conditions", {
              msg: $t("menu.terms-conditions"),
              msg2: $t("menu.privacy-policy"),
            })
          }}</el-checkbox>
          <!-- <el-checkbox
            >I am 18 years of age or older and agree to the
            <span>{{ $t('menu.terms-conditions') }}</span><br />
            and the <span>{{ $t('menu.privacy-policy') }}</span>.</el-checkbox
          > -->
        </el-form-item>
        <el-form-item>
          <base-button @click="signup">{{ $t("btn.register") }}</base-button>
        </el-form-item>
        <el-form-item>
          <el-divider />
        </el-form-item>
        <el-form-item>
          <p>{{ $t("auth.have-an-account") }}</p>
        </el-form-item>
        <el-form-item>
          <base-button :login="true">{{ $t("menu.login") }}</base-button>
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
        callback(new Error(this.$t("auth.password-required")));
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
        callback(new Error(this.$t("auth.confirm-password-required")));
      } else if (value !== this.ruleForm.password) {
        callback(new Error(this.$t("auth.password-dont-match")));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        checked: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t("auth.username-required"),
            trigger: "blur",
          },
        ],
        checked: [
          {
            required: true,
            message: this.$t("auth.terms-required"),
            trigger: "change",
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
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validateConfirmPass, trigger: "blur" }],
      },
    };
  },

  methods: {
    checkPassword(pass) {
      const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(pass);
    },
    signup() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const isPassValid = this.checkPassword(this.ruleForm.password);
          if (isPassValid) {
            const data = {
              username: this.ruleForm.name,
              email: this.ruleForm.email,
              password: this.ruleForm.password,
              password2: this.ruleForm.confirmPassword,
            };
            this.$store
              .dispatch("auth/register", data)
              .then(() => {
                ElNotification({
                  title: "Success",
                  message: "Account Created!",
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
          } else {
            ElNotification({
              title: "Error",
              message:
                "Password requires at least one upper-case alphabet, lower-case alphabet, numberic.",
              type: "error",
            });
          }
        }
      });
    },
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
  width: 24rem;
  white-space: break-spaces;
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

:deep(.el-form-item__error) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 13px;
  line-height: 20px;
  color: #ea0029;
  vertical-align: middle;
}

/* :deep(.el-form-item__error::before) {
  content: "x";
  color: #fff;
  background: #ea0029;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-right: 0.3rem;
} */
</style>