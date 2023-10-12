<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-form">
    <h3>Fill in the details</h3>
    <el-form
      ref="ruleFormRef"
      :rules="rules"
      :model="ruleForm"
      label-position="top"
    >
      <el-form-item label="Flat / Floor / Block" prop="flat">
        <base-input placeholder="Address"></base-input>
      </el-form-item>
      <el-form-item label="Building" prop="building">
        <base-input placeholder="Address"></base-input>
      </el-form-item>
      <el-form-item label="Street" prop="street">
        <base-input placeholder="Address"></base-input>
      </el-form-item>
      <el-form-item label="District" prop="district">
        <el-select placeholder="Please select">
          <el-option></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Region" prop="region">
        <el-radio-group v-model="ruleForm.region">
          <el-radio label="hongkong">Hong Kong</el-radio>
          <el-radio label="kowloon">Kowloon</el-radio>
          <el-radio label="territories">New Territories</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="terms">
        <el-checkbox>
          I understood and agreed to the
          <span>Booking Terms and Conditions</span>, DH Legend Motors Company
          Limited reserves the right to modify and update the terms and
          conditions without prior notice.
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <base-button @click="submit">Continue</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        flat: "",
        building: "",
        street: "",
        district: "",
        region: "",
        terms: "",
        saveInfo: "",
      },
      rules: {
        flat: [
          { required: true, message: "Address is required", trigger: "blur" },
        ],
        building: [
          { required: true, message: "Address is required", trigger: "blur" },
        ],
        street: [
          { required: true, message: "Address is required", trigger: "blur" },
        ],
        district: [
          { required: true, message: "Address is required", trigger: "blur" },
        ],
        region: [
          { required: true, message: "Address is required", trigger: "change" },
        ],
        terms: [
          {
            // required: true,
            // message: this.$t("auth.terms-required"),
            trigger: "change",
          },
        ],
        saveInfo: [{}],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          console.log("valid");
        }
      });
    },
  },
};
</script>

<style scoped>
/* .cart-form {
  margin-top: 3rem;
} */

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
  margin-bottom: 1rem;
  align-self: flex-start;
}

.el-input {
  width: 100%;
}

:deep(.el-form-item__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
}

:deep(.el-textarea__inner) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
}

:deep(.el-checkbox__label) {
  width: 23rem;
  white-space: break-spaces;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  color: #262f36;
}

:deep(.el-checkbox__label span) {
  text-decoration: underline;
}

.el-checkbox {
  margin-top: 1rem;
}

.el-button {
  margin-top: 1rem;
}

.el-select {
  width: 100%;
}

:deep(.el-select .el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

:deep(.el-radio .el-radio__label) {
  color: #1d2129;
}

:deep(.el-radio.is-checked .el-radio__inner),
:deep(.el-checkbox.is-checked .el-checkbox__inner) {
  background-color: #384967;
  border-color: #384967;
}

:deep(.el-radio.is-checked .el-radio__label),
:deep(.el-checkbox.is-checked .el-checkbox__label) {
  color: #384967;
}
</style>