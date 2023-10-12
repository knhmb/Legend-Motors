<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="forgot-password">
    <base-container>
      <h3>{{ $t("auth.forgot-password") }}</h3>
      <el-form
        label-position="top"
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
      >
        <el-form-item :label="$t('auth.email')" class="email-otp" prop="email">
          <div class="otp">
            <base-input
              :disabled="displayOtpMessage"
              :placeholder="$t('auth.email')"
              v-model="ruleForm.email"
            >
            </base-input>
            <span @click="sendOtp" :class="{ 'is-active': displayOtpMessage }"
              >{{ $t("auth.send-otp") }}
              <small
                v-if="displayOtpMessage"
                :class="{ 'is-active': displayOtpMessage }"
                >({{ seconds }})</small
              ></span
            >
          </div>

          <p v-if="displayOtpMessage" class="info">
            {{ $t("auth.resend-otp", { seconds }) }}
          </p>
        </el-form-item>
        <el-form-item :label="$t('auth.otp')" prop="otp">
          <base-input
            show-password
            type="password"
            :placeholder="$t('auth.otp')"
            v-model.number="ruleForm.otp"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <base-button @click="checkOTP">{{ $t("btn.continue") }}</base-button>
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
        otp: "",
      },
      rules: {
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
        otp: [
          {
            required: true,
            message: this.$t("auth.otp-required"),
            trigger: "blur",
          },
          {
            type: "number",
            message: this.$t("auth.otp-format"),
            trigger: "blur",
          },
        ],
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
    otpTimer() {
      this.displayOtpMessage = true;

      if (this.seconds > 0) {
        this.timerFunction = setTimeout(() => {
          this.seconds--;
          this.otpTimer();
        }, 1000);
      }
    },
    sendOtp() {
      this.$refs.ruleFormRef.validateField("email", (valid) => {
        if (valid) {
          this.otpTimer();
          this.$store
            .dispatch("auth/getOTP", { email: this.ruleForm.email })
            .then(() => {
              ElNotification({
                title: "Success",
                message: "OTP sent to your email",
                type: "success",
              });
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
    checkOTP() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            email: this.ruleForm.email,
            otp: this.ruleForm.otp.toString(),
          };

          this.$store
            .dispatch("auth/checkOTP", data)
            .then(() => {
              this.$router.push("/reset-password");
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
.forgot-password {
  margin-top: 2rem;
  height: 60vh;
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

/* :deep(.el-form-item.email-otp .el-input::after) {
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
} */

:deep(.el-form-item.email-otp .el-input .el-input__wrapper) {
  padding-right: 5.5rem;
}

.otp {
  position: relative;
}

.otp span {
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

.otp span.is-active,
.otp span small.is-active {
  color: #c9cdd4;
}

.otp span small {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  color: #384967;
}

:deep(.el-form-item__content) {
  flex-direction: column;
  align-items: flex-start;
}

p.info {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 20px;
  color: #86909c;
  margin-top: 0.5rem;
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
</style>