<template>
  <div class="payment-success">
    <base-container>
      <h3>{{ $t("dashboard.order-confirmed") }}</h3>
      <p>
        {{ $t("dashboard.order-confirmed-message") }}
      </p>
    </base-container>
  </div>
</template>

<style scoped>
.payment-success {
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