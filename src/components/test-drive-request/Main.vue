<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-content">
    <base-container>
      <el-row :gutter="50">
        <el-col :span="12">
          <h5>Test Drive Request</h5>
          <p>
            Interested in trying a Wuling car? fill in the form below, choose
            the car you want, select the nearest dealer from your location, and
            arrange a test drive schedule for your dream Wuling car.
          </p>
          <el-form-item label="Select Wuling Car">
            <el-select placeholder="Interested Product"></el-select>
            <el-select placeholder="Interested Type"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <h5>Fill in the details</h5>
          <el-form
            label-position="top"
            :model="ruleForm"
            :rules="rules"
            ref="ruleFormRef"
            hide-required-asterisk
          >
            <el-form-item label="Name" prop="name">
              <base-input
                placeholder="Name"
                v-model="ruleForm.name"
              ></base-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <base-input
                placeholder="Email"
                v-model="ruleForm.email"
              ></base-input>
            </el-form-item>
            <el-form-item label="Phone Number" prop="phone">
              <base-input
                placeholder="Phone Number"
                v-model="ruleForm.phone"
              ></base-input>
            </el-form-item>
            <el-form-item label="Schedule Date" prop="date">
              <el-date-picker
                class="date-input"
                type="date"
                placeholder="Please select the date"
                v-model="ruleForm.date"
              />
            </el-form-item>
            <el-form-item label="Schedule Time" prop="time">
              <el-time-picker
                class="date-input"
                placeholder="Please select the time"
                v-model="ruleForm.time"
              />
            </el-form-item>
            <el-form-item prop="checked">
              <el-checkbox
                label="I agree to the terms of data collection and storage."
                v-model="ruleForm.checked"
              ></el-checkbox>
            </el-form-item>
            <el-form-item>
              <base-button @click="requestDrive">Submit</base-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <p class="have-an-account">Already have an account?</p>
      <base-button :login="true" @click="$router.push('/login')"
        >Log in</base-button
      >
    </base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
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
        phone: [
          {
            required: true,
            message: this.$t("auth.phone-required"),
            trigger: "blur",
          },
        ],
        date: [
          {
            required: true,
            message: this.$t("auth.date-required"),
            trigger: "blur",
          },
        ],
        time: [
          {
            required: true,
            message: this.$t("auth.time-required"),
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
    requestDrive() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            member: this.ruleForm.name,
            email: this.ruleForm.email,
            scheduleDate: this.ruleForm.date,
            scheduleTime: this.ruleForm.time,
            phone: this.ruleForm.phone,
          };
          console.log(data);
        }
      });
    },
  },
};
</script>

<style scoped>
.form-content .container {
  /* display: flex;
  justify-content: center; */
  padding-left: 18rem;
  padding-right: 18rem;
}

/* .el-row {
  width: 843px;
} */

h5 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
  margin: 1rem 0;
}

.el-form-item {
  flex-direction: column;
}

:deep(.el-form-item__label) {
  justify-content: flex-start;
}

.el-select {
  width: 100%;
}

:deep(.el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.2rem 1rem;
}

.form-content .el-select:first-of-type {
  margin-bottom: 0.5rem;
}

:deep(.date-input) {
  width: 100%;
}

:deep(.date-input .el-input__wrapper) {
  padding: 1.1rem 1rem;
}

:deep(.el-input__prefix) {
  order: 2;
}

:deep(.el-checkbox__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  color: #262f36;
}

.other {
  display: flex;
  justify-content: center;
  width: 66px;
}

p.have-an-account {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 27px;
  color: #262f36;
  text-align: center;
}

.el-button.is-login {
  margin: 0 auto;
  display: flex;
}
</style>