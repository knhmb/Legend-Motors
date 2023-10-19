<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="product">
    <Banner />
    <Main />
  </section>
</template>
  
  <script>
import Banner from "@/components/product/Banner.vue";
import Main from "@/components/home/Main.vue";

export default {
  components: {
    Banner,
    Main,
  },
};
</script>