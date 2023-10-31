<template>
  <footer>
    <base-container>
      <el-row justify="space-between">
        <el-col :md="24" :lg="4">
          <img class="logo" src="../../assets/logo.png" alt="" />
        </el-col>
        <el-col :md="24" :lg="6">
          <p>{{ $t("footer.company") }}</p>
          <div class="list">
            <p @click="$router.push('/home')">{{ $t("menu.home") }}</p>
          </div>
          <div class="list">
            <p @click="$router.push('/about-us')">{{ $t("menu.about-us") }}</p>
          </div>
          <div class="list">
            <p @click="$router.push('/contact-us')">
              {{ $t("menu.contact-us") }}
            </p>
          </div>
          <div class="list">
            <p @click="$router.push('/terms-and-conditions')">
              {{ $t("menu.terms-conditions") }}
            </p>
          </div>
        </el-col>
        <el-col :md="24" :lg="5">
          <p>{{ $t("footer.service") }}</p>
          <div class="list">
            <p @click="$router.push('/product')">{{ $t("menu.product") }}</p>
          </div>
          <div class="list">
            <p @click="$router.push('/test-drive-request')">
              {{ $t("menu.test-drive-request") }}
            </p>
          </div>
          <div class="list">
            <p @click="$router.push('/cart')">{{ $t("menu.shopping-cart") }}</p>
          </div>
        </el-col>
        <el-col :md="24" :lg="7">
          <p>{{ $t("footer.office") }}</p>
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
  cursor: pointer;
}

.list.icons p {
  font-size: 16px;
  display: inline-block;
  cursor: default;
}

.list.icons img {
  width: 1.5rem;
  margin-right: 1rem;
}

@media only screen and (max-width: 1199px) {
  img.logo {
    margin: 1rem auto 2rem auto;
    display: block;
  }
}
</style>