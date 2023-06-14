<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="conatct-us-form">
    <h4>Contact Us</h4>
    <el-form label-position="top">
      <el-form-item label="Name">
        <base-input placeholder="Name"></base-input>
      </el-form-item>
      <el-form-item label="Company Name (if applicable)">
        <base-input placeholder="Company Name"></base-input>
      </el-form-item>
      <el-form-item label="Email">
        <base-input placeholder="Email"></base-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <base-input placeholder="Phone Number"></base-input>
      </el-form-item>
      <el-form-item label="Messages">
        <base-input
          type="textarea"
          rows="5"
          placeholder="Messages"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          label="I agree to the terms of data collection and storage."
        ></el-checkbox>
      </el-form-item>
      <el-form-item>
        <base-button>Send</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

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