<template>
  <section class="product-detail">
    <product-info></product-info>
    <Feature />
    <Specification />
  </section>
</template>

<script>
import ProductInfo from "@/components/product-detail/ProductInfo.vue";
import Feature from "@/components/product-detail/Feature.vue";
import Specification from "@/components/product-detail/Specification.vue";

export default {
  components: {
    ProductInfo,
    Feature,
    Specification,
  },
};
</script>