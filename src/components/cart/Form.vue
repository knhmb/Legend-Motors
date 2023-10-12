<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-form">
    <h3>Fill in the details</h3>
    <el-form label-position="top">
      <el-form-item label="Name">
        <base-input placeholder="Name"></base-input>
      </el-form-item>
      <el-form-item label="Email">
        <base-input placeholder="Email"></base-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <base-input placeholder="Phone Number"></base-input>
      </el-form-item>
      <el-form-item label="Address">
        <base-input placeholder="Address"></base-input>
      </el-form-item>
      <el-form-item label="Remarks">
        <base-input type="textarea" rows="5" placeholder="Remarks"></base-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox>
          I understood and agreed to the
          <span>Booking Terms and Conditions</span>, DH Legend Motors Company
          Limited reserves the right to modify and update the terms and
          conditions without prior notice.
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <base-button>Continue</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

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
</style>