<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="product-banner">
    <div class="banner">
      <img src="../../assets/Product-banner.png" alt="" />
      <h3>Product</h3>
    </div>
  </section>
</template>
  
  <script>
export default {};
</script>
  
<style scoped>
.banner {
  position: relative;
}

img {
  width: 100%;
}

.banner img {
  height: 100%;
  object-fit: cover;
}

h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 70px;
  line-height: 109px;
  color: #ffffff;
}

h4 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  color: #384967;
  margin-bottom: 1rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
  margin-bottom: 1rem;
}
</style>