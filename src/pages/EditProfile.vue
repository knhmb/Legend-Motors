<template>
  <div class="edit-profile">
    <h3>Edit Profile</h3>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
      hide-required-asterisk
    >
      <el-form-item label="Upload Photo">
        <div class="avatar">
          <img src="../assets/user.png" alt="" />
        </div>
        <el-upload v-model:file-list="fileList" action="#">
          <el-button type="primary">Click to upload</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="Name" prop="name">
        <base-input placeholder="Name" v-model="ruleForm.name"></base-input>
      </el-form-item>
      <el-form-item label="Phone Number" prop="phoneNumber">
        <base-input
          placeholder="Phone Number"
          v-model.number="ruleForm.phoneNumber"
          @keypress="isNumber($event)"
        ></base-input>
      </el-form-item>
      <el-form-item label="Region">
        <el-radio-group v-model="ruleForm.region" prop="region">
          <el-radio label="Hong Kong" />
          <el-radio label="Kowloon" />
          <el-radio label="New Territories" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="District" prop="district">
        <el-select
          placeholder="District"
          v-model="ruleForm.district"
        ></el-select>
      </el-form-item>
      <el-form-item label="Street" prop="street">
        <base-input
          placeholder="Address"
          v-model="ruleForm.street"
        ></base-input>
      </el-form-item>
      <el-form-item label="Building" prop="building">
        <base-input
          placeholder="Address"
          v-model="ruleForm.building"
        ></base-input>
      </el-form-item>
      <el-form-item label="Flat / Floor / Block" prop="flat">
        <base-input placeholder="Address" v-model="ruleForm.flat"></base-input>
      </el-form-item>
      <el-form-item>
        <base-button @click="update">Save</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      ruleForm: {
        region: "",
        name: "",
        district: "",
        phoneNumber: "",
        street: "",
        building: "",
        flat: "",
      },
      rules: {
        region: [{ required: false, trigger: "change" }],
        name: [
          { required: true, message: "Name is required", trigger: "blur" },
        ],
        phoneNumber: [
          { required: false, trigger: "blur" },
          { type: "number", message: "Phone Number is invalid" },
        ],
        district: [{ required: false, trigger: "blur" }],
        building: [{ required: false, trigger: "blur" }],
        flat: [{ required: false, trigger: "blur" }],
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
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
      }
    },
    update() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            region: this.ruleForm.region,
            building: this.ruleForm.building,
            username: this.ruleForm.name,
            phone: this.ruleForm.phoneNumber.toString(),
            district: this.ruleForm.district,
            street: this.ruleForm.street,
            flat: this.ruleForm.flat,
          };
          this.$store.dispatch("auth/updateUser", {
            data,
            id: this.currentUser.id,
          });
        }
      });
    },
    // sendOtp() {
    //   this.$refs.ruleFormRef.validateField("email", (valid) => {
    //     if (valid) {
    //       this.$store.dispatch("auth/getOTP", { email: this.ruleForm.email });
    //     }
    //   });
    // },
  },
};
</script>

<style scoped>
.edit-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
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

.avatar {
  background: #384967;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-right: 0.7rem;
}

.avatar img {
  width: 1.1rem;
}

:deep(.el-form-item__content) {
  align-items: center;
}

:deep(.el-upload-list) {
  margin: 0;
}

.el-button.el-button--primary {
  background: transparent;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #7d858c;
  border-color: #7d858c;
}

:deep(.el-form-item__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
}

.el-input,
.el-select {
  width: 24rem;
}

.el-button {
  display: flex;
  margin: 0 auto;
}

:deep(.el-radio.is-checked .el-radio__inner) {
  background: #384967;
  border-color: #384967;
}

:deep(.el-radio__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #1d2129;
}

:deep(.el-radio.is-checked .el-radio__label) {
  color: #1d2129;
}

.el-select :deep(.el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.2rem 1rem;
}
</style>