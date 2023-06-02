<template>
  <footer>
    <base-container>
      <el-row>
        <el-col :span="4">
          <img class="logo" src="../../assets/logo.png" alt="" />
        </el-col>
        <el-col :span="6">
          <p>Company</p>
          <div class="list">
            <p>Home</p>
          </div>
          <div class="list">
            <p>About Us</p>
          </div>
          <div class="list">
            <p>Contact Us</p>
          </div>
          <div class="list">
            <p>Terms & Conditions</p>
          </div>
        </el-col>
        <el-col :span="5">
          <p>Service</p>
          <div class="list">
            <p>Product</p>
          </div>
          <div class="list">
            <p>Test Drive Request</p>
          </div>
          <div class="list">
            <p>Shopping Cart</p>
          </div>
        </el-col>
        <el-col :span="7">
          <p>Office</p>
          <div class="list icons">
            <img src="../../assets/location.png" alt="" />
            <p>
              Rm. 61, 8/F, Sino Industrial Plaza, 9 Kai Cheung Rd., Kowloon Bay,
              Kowloon
            </p>
          </div>
          <div class="list icons">
            <img src="../../assets/sms.png" alt="" />
            <p>info@wulingev.com.hk</p>
          </div>
          <div class="list icons">
            <img src="../../assets/call.png" alt="" />
            <p>+852 6089 9653</p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </footer>
</template>

<style scoped>
footer {
  background: #262f36;
}

img.logo {
  /* width: 100%; */
  width: 12rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #a6acb1;
  margin-bottom: 1rem;
}

.list {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.list p {
  font-weight: 850;
  font-size: 20px;
  line-height: 31px;
  color: #f2f3f5;
  margin-bottom: 0;
  text-transform: none;
}

.list.icons p {
  font-size: 16px;
  display: inline-block;
}

.list.icons img {
  width: 1.5rem;
  margin-right: 1rem;
}
</style>