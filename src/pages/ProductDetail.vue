<template>
  <section class="product-detail" v-if="loadData">
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
  data() {
    return {
      loadData: false,
    };
  },
  created() {
    this.$store
      .dispatch("product/getProductDetail", this.$route.params.slug)
      .then(() => {
        this.loadData = true;
      });
  },
};
</script>