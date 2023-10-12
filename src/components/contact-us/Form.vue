<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contact-us-form">
    <h4>Contact Us</h4>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item :label="$t('auth.title')" prop="title">
        <el-select :placeholder="$t('auth.title')" v-model="ruleForm.title">
          <el-option label="Mr"></el-option>
          <el-option label="Ms"></el-option>
          <el-option label="Miss"></el-option>
          <el-option label="Mrs"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('auth.first-name')" prop="firstName">
        <base-input
          :placeholder="$t('auth.first-name')"
          v-model="ruleForm.firstName"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('auth.last-name')" prop="lastName">
        <base-input
          :placeholder="$t('auth.last-name')"
          v-model="ruleForm.lastName"
        ></base-input>
      </el-form-item>
      <el-form-item label="Company Name (if applicable)" prop="company">
        <base-input
          placeholder="Company Name"
          v-model="ruleForm.company"
        ></base-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <base-input placeholder="Email" v-model="ruleForm.email"></base-input>
      </el-form-item>
      <el-form-item label="Phone Number" prop="phoneNumber">
        <base-input
          placeholder="Phone Number"
          v-model="ruleForm.phoneNumber"
        ></base-input>
      </el-form-item>
      <el-form-item label="Messages" prop="message">
        <base-input
          type="textarea"
          rows="5"
          placeholder="Messages"
          v-model="ruleForm.message"
        ></base-input>
      </el-form-item>
      <el-form-item prop="checked">
        <el-checkbox
          v-model="ruleForm.checked"
          label="I agree to the terms of data collection and storage."
        ></el-checkbox>
      </el-form-item>
      <el-form-item>
        <base-button @click="inquire">Send</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      ruleForm: {
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        checked: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: this.$t("auth.title-required"),
            trigger: "blur",
          },
        ],
        firstName: [
          {
            required: true,
            message: this.$t("auth.first-name-required"),
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: this.$t("auth.last-name-required"),
            trigger: "blur",
          },
        ],
        company: [{ required: false, trigger: "blur" }],
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
        phoneNumber: [
          {
            required: true,
            message: this.$t("auth.phone-required"),
            trigger: "blur",
          },
        ],
        message: [
          {
            required: true,
            message: this.$t("auth.message-required"),
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
      },
    };
  },
  methods: {
    inquire() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            title: this.ruleForm.name,
            content: this.ruleForm.message,
            email: this.ruleForm.email,
            phone: this.ruleForm.phoneNumber,
            companyName: this.ruleForm.company,
          };
          this.$store
            .dispatch("dashboard/inquire", data)
            .then(() => {
              ElNotification({
                title: "Success",
                message: "Message has been sent",
                type: "success",
              });
              this.$refs.ruleFormRef.resetFields();
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
h4 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
  margin-bottom: 2rem;
}

:deep(.el-textarea__inner) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  /* padding: 0.2rem 1rem; */
}

:deep(.el-checkbox__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  color: #262f36;
}

.contact-us-form .el-select {
  width: 100%;
}

.contact-us-form :deep(.el-select .el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
</style>