<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contact-us-form">
    <h4>{{ $t("menu.contact-us") }}</h4>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item :label="$t('auth.title')" prop="title">
        <el-select :placeholder="$t('auth.title')" v-model="ruleForm.title">
          <el-option label="Mr" value="Mr"></el-option>
          <el-option label="Ms" value="Ms"></el-option>
          <el-option label="Miss" value="Miss"></el-option>
          <el-option label="Mrs" value="Mrs"></el-option>
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
      <el-form-item :label="$t('form.label-company-name')" prop="company">
        <base-input
          :placeholder="$t('form.label-company-name')"
          v-model="ruleForm.company"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('auth.email')" prop="email">
        <base-input
          :placeholder="$t('auth.email')"
          v-model="ruleForm.email"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-phone-number')" prop="phoneNumber">
        <base-input
          :placeholder="$t('form.label-phone-number')"
          v-model.number="ruleForm.phoneNumber"
          @keypress="isNumber($event)"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-message')" prop="message">
        <base-input
          type="textarea"
          rows="5"
          :placeholder="$t('form.label-message')"
          v-model="ruleForm.message"
        ></base-input>
      </el-form-item>
      <el-form-item prop="checked">
        <el-checkbox
          v-model="ruleForm.checked"
          :label="$t('form.accept-data-collection')"
        ></el-checkbox>
      </el-form-item>
      <el-form-item>
        <base-button @click="inquire">{{ $t("btn.send") }}</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElNotification, ElMessage } from "element-plus";
import loading from "@/utils/loading";

export default {
  mixins: [loading],
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
    isNumber(evt) {
      const keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      const keyPressed = evt.key;

      if (!keysAllowed.includes(keyPressed)) {
        evt.preventDefault();
        ElMessage({
          message: this.$t("form.numbers-validation"),
          type: "error",
        });
      }
    },
    inquire() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            title: this.ruleForm.title,
            firstName: this.ruleForm.firstName,
            lastName: this.ruleForm.lastName,
            content: this.ruleForm.message,
            email: this.ruleForm.email,
            phone: this.ruleForm.phoneNumber.toString(),
            companyName: this.ruleForm.company,
          };
          this.openLoading();
          this.$store
            .dispatch("dashboard/inquire", data)
            .then(() => {
              this.closeLoading();
              ElNotification({
                title: "Success",
                message: this.$t("form.message-sent"),
                type: "success",
              });
              this.$refs.ruleFormRef.resetFields();
            })
            .catch((err) => {
              this.closeLoading();
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