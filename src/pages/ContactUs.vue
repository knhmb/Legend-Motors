<template>
  <section class="contact-us">
    <base-container>
      <el-row justify="center" :gutter="40">
        <el-col :span="12">
          <h4>Contact Information</h4>
          <div class="card">
            <p>
              With our extensive experience in international and local sales and
              trading of new and used cars, we aspire to Drive for a Better
              Life. By working with SGMW, we trust each other and believe that
              we can understand the expectations of the market and the
              community, and move forward together with drivers to become your
              reliable mobility partner.
            </p>
            <div class="info">
              <img src="../assets/location.png" alt="" />
              <p>
                Rm. 61, 8/F, Sino Industrial Plaza, 9 Kai Cheung Rd., Kowloon
                Bay, Kowloon
              </p>
            </div>
            <div class="info">
              <img src="../assets/sms.png" alt="" />
              <p>info@wulingev.com.hk</p>
            </div>
            <div class="info">
              <img src="../assets/call.png" alt="" />
              <p>+852 6089 9653</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <Form />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Form from "@/components/contact-us/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 2rem;
}

.el-row {
  width: 55rem;
}

h4 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 38px;
  color: #384967;
  margin-bottom: 2rem;
}

.card {
  background: #ffffff;
  border-radius: 4px;
  padding: 1rem;
}

.card p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 150%;
  color: #566069;
  margin-bottom: 2rem;
}

.card .info {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

img {
  width: 2.2rem;
  background: #384967;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
}

.card .info p {
  line-height: 25px;
  margin-left: 1rem;
  margin-bottom: 0;
}
</style>