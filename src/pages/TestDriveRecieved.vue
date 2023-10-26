<template>
  <section class="tes-drive-successful">
    <div class="banner">
      <img src="../assets/Test-Drive-Request-banner.png" alt="" />
      <h3>{{ $t("menu.test-drive-request") }}</h3>
    </div>
    <div class="content">
      <h2>{{ $t("dashboard.request-received") }}</h2>
      <p v-html="$t('dashboard.request-processing-message')"></p>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  height: 350px;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 70px;
  line-height: 109px;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h2 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  text-align: center;
  color: #384967;
  margin-top: 2rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #262f36;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
</style>