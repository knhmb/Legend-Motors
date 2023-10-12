<template>
  <section class="contact-us">
    <base-container>
      <el-row justify="center" :gutter="40">
        <el-col :span="12">
          <h4>Contact Information</h4>
          <div class="card">
            <!-- <p>
              {{ cmsContent.content }}
            </p> -->
            <p class="card-title">
              With our extensive experience in international and local sales and
              trading of new and used cars, we aspire to Drive for a Better
              Life.
            </p>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/location.png" alt="" />
              </div>
              <p>
                Rm. 61, 8/F, Sino Industrial Plaza, 9 Kai Cheung Rd., Kowloon
                Bay, Kowloon
              </p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/sms.png" alt="" />
              </div>
              <p>info@wulingev.com.hk</p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/call.png" alt="" />
              </div>
              <p>+852 6089 9653</p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/icons/clock.png" alt="" />
              </div>
              <p>
                Monday to Friday: 9 a.m. to 7 p.m. Saturday, Sunday and public
                holidays: 9 am to 8 pm
              </p>
            </div>
          </div>
          <div class="card">
            <!-- <p>
              {{ cmsContent.content }}
            </p> -->
            <p class="card-title">
              Second Place, second title, if we don’t create the second one in
              CMS, here will be hide.
            </p>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/location.png" alt="" />
              </div>
              <p>
                Rm. 61, 8/F, Sino Industrial Plaza, 9 Kai Cheung Rd., Kowloon
                Bay, Kowloon
              </p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/sms.png" alt="" />
              </div>
              <p>info@wulingev.com.hk</p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/call.png" alt="" />
              </div>
              <p>+852 6089 9653</p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/icons/clock.png" alt="" />
              </div>
              <p>
                Monday to Friday: 9 a.m. to 7 p.m. Saturday, Sunday and public
                holidays: 9 am to 8 pm
              </p>
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
  computed: {
    cms() {
      return this.$store.getters["dashboard/cms"];
    },
    cmsContent() {
      return this.cms.find((item) => item.slug === "cms-contact-us");
    },
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
  margin-bottom: 2rem;
}

.card p.card-title {
  font-family: Avenir;
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0em;
  color: #262f36;
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
  /* display: flex;
  align-items: center; */
  margin-bottom: 1.5rem;
}

.card .info .img-wrapper {
  background: #384967;
  border-radius: 100%;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

img {
  width: 80%;
}

.card .info p {
  line-height: 25px;
  margin-left: 1rem;
  margin-bottom: 0;
  display: inline-block;
  vertical-align: middle;
  width: 17rem;
}
</style>