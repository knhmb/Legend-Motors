<template>
  <div class="change-password">
    <h3>Change Password</h3>
    <el-form label-position="top">
      <el-form-item label="Current Password">
        <base-input
          type="password"
          show-password
          placeholder="Current Password"
        ></base-input>
      </el-form-item>
      <el-form-item label="Password">
        <base-input
          type="password"
          show-password
          placeholder="Password"
        ></base-input>
      </el-form-item>
      <el-form-item label="Confirm Password">
        <base-input
          type="password"
          show-password
          placeholder="Confirm Password"
        ></base-input>
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
.change-password {
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