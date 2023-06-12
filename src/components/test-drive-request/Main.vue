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
            <el-form-item label="Schedule Date">
              <el-date-picker
                class="date-input"
                type="date"
                placeholder="Please select the date"
              />
            </el-form-item>
            <el-form-item label="Schedule Time">
              <el-time-picker
                class="date-input"
                placeholder="Please select the time"
              />
            </el-form-item>
            <el-form-item>
              <el-checkbox
                label="I agree to the terms of data collection and storage."
              ></el-checkbox>
            </el-form-item>
            <el-form-item>
              <base-button>Submit</base-button>
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