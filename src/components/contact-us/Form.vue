<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="conatct-us-form">
    <h4>Contact Us</h4>
    <el-form
      label-position="top"
      hide-required-asterisk
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item label="Name" prop="name">
        <base-input placeholder="Name" v-model="ruleForm.name"></base-input>
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
        name: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        checked: "",
      },
      rules: {
        name: [
          { required: true, message: "Name is required", trigger: "blur" },
        ],
        company: [{ required: false, trigger: "blur" }],
        email: [
          { required: true, message: "Email is required", trigger: "blur" },
          { type: "email", message: "Email invalid format", trigger: "blur" },
        ],
        phoneNumber: [
          {
            required: true,
            message: "Phone number is required",
            trigger: "blur",
          },
        ],
        message: [
          { required: true, message: "Message is required", trigger: "blur" },
        ],
        checked: [
          {
            required: true,
            message: "Please check the box",
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
</style>