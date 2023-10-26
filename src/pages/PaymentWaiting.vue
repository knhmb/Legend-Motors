<template>
  <div class="payment-waiting">
    <base-container>
      <h3>{{ $t("dashboard.waiting-for-payment") }}</h3>
      <p>
        {{ $t("dashboard.waiting-for-payment-message") }}
      </p>
    </base-container>
  </div>
</template>
  
  <style scoped>
.payment-waiting {
  height: 55vh;
}

h3 {
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
  margin: 0 auto;
  margin-top: 2rem;
  width: 37rem;
}
</style>