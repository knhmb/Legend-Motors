<template>
  <div class="edit-profile">
    <h3>Edit Profile</h3>
    <el-form label-position="top">
      <el-form-item label="Upload Photo">
        <div class="avatar">
          <img src="../assets/user.png" alt="" />
        </div>
        <el-upload v-model:file-list="fileList" action="#">
          <el-button type="primary">Click to upload</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="Email">
        <div class="otp-input">
          <base-input placeholder="Email" v-model="email"></base-input>
          <span>Send OTP</span>
        </div>
      </el-form-item>
      <el-form-item label="OTP">
        <base-input placeholder="OTP"></base-input>
      </el-form-item>
      <el-form-item label="Name">
        <base-input placeholder="Name"></base-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <base-input placeholder="Phone Number"></base-input>
      </el-form-item>
      <el-form-item label="Address">
        <base-input placeholder="Address"></base-input>
      </el-form-item>
      <el-form-item>
        <base-button>Save</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      email: "",
    };
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

.otp-input {
  position: relative;
}

.otp-input span {
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

.otp-input :deep(.el-input__wrapper) {
  padding-right: 5.5rem;
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

.el-input {
  width: 22rem;
}

.el-button {
  display: flex;
  margin: 0 auto;
}
</style>