<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="reset-password-success">
    <base-container>
      <h3>{{ $t("auth.password-reset-success") }}</h3>
      <p v-html="$t('auth.password-reset-message')"></p>
      <base-button @click="$router.replace('/login')">{{
        $t("auth.back-to-login")
      }}</base-button>
    </base-container>
  </section>
</template>
        
    <script>
export default {
  data() {
    return {};
  },
};
</script>
        
        <style scoped>
.reset-password-success {
  /* margin-top: 2rem; */
  height: 60vh;
}

.reset-password-success .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 40px;
  line-height: 62px;
  text-align: center;
  color: #262f36;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 31px;
  color: #262f36;
  margin: 1.5rem 0;
  text-align: center;
}

.el-button {
  margin: 0 auto;
  /* margin-top: 1rem; */
  display: flex !important;
}
</style>