<template>
  <div class="change-password">
    <h3>{{ $t("form.change-password") }}</h3>
    <el-form
      :model="ruleForm"
      ref="ruleFormRef"
      :rules="rules"
      label-position="top"
    >
      <el-form-item
        :label="$t('form.label-current-password')"
        prop="currentPassword"
      >
        <base-input
          v-model="ruleForm.currentPassword"
          type="password"
          show-password
          :placeholder="$t('form.label-current-password')"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('auth.password')" prop="newPassword">
        <base-input
          v-model="ruleForm.newPassword"
          type="password"
          show-password
          :placeholder="$t('auth.password')"
        ></base-input>
      </el-form-item>
      <el-form-item
        :label="$t('auth.confirm-password')"
        prop="confirmNewPassword"
      >
        <base-input
          v-model="ruleForm.confirmNewPassword"
          type="password"
          show-password
          :placeholder="$t('auth.confirm-password')"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-button @click="submit">{{ $t("btn.save") }}</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
import { ElNotification } from "element-plus";
import loading from "@/utils/loading";

export default {
  mixins: [loading],
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("auth.password-required")));
      } else {
        if (this.ruleForm.confirmNewPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField(
            "confirmNewPassword",
            () => null
          );
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("auth.confirm-password-required")));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error(this.$t("auth.password-dont-match")));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      rules: {
        currentPassword: [
          {
            required: true,
            message: this.$t("auth.current-password-required"),
            trigger: "blur",
          },
        ],
        newPassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        confirmNewPassword: [
          { required: true, validator: validateConfirmPass, trigger: "blur" },
        ],
      },
      fileList: [],
      email: "",
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
    changePassword(passwordData) {
      this.openLoading();
      this.$store
        .dispatch("auth/changePassword", passwordData)
        .then(() => {
          this.closeLoading();
          this.$refs.ruleFormRef.resetFields();
          ElNotification({
            title: "Success",
            message: this.$t("form.password-changed"),
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          this.closeLoading();
          ElNotification({
            title: "Error",
            message: this.$t(err.response.data.message),
            type: "error",
          });
        });
      // this.$store
      //   .dispatch("auth/changePassword", passwordData)
      //   .then(() => {
      //     this.closeLoading();
      //     this.$refs.ruleFormRef.resetField();
      //     ElNotification({
      //       title: "Success",
      //       message: "Password Changed",
      //       type: "success",
      //     });
      //   })
      //   .catch((err) => {
      //     this.closeLoading();
      //     ElNotification({
      //       title: "Error",
      //       message: this.$t(err.response.data.message),
      //       type: "error",
      //     });
      //   });
    },
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const isPasswordValid = this.checkPassword(this.ruleForm.newPassword);
          if (isPasswordValid) {
            const data = {
              currentPass: this.ruleForm.currentPassword,
              password: this.ruleForm.newPassword,
              password2: this.ruleForm.confirmNewPassword,
              email: this.currentUser.email,
            };
            this.changePassword(data);
          } else {
            ElNotification({
              title: "Error",
              message: this.$t("form.password-constraint"),
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
.change-password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  min-width: 20rem;
  max-width: 25rem;
}

.el-form {
  width: 100%;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #262f36;
  margin-bottom: 2rem;
}

:deep(.el-form-item__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
}

.el-input {
  width: 22rem;
}

.el-button {
  display: flex;
  margin: 0 auto;
}

@media only screen and (max-width: 1199px) {
  .el-input {
    width: 100%;
  }
}
</style>