<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="home">
    <Carousel />
    <Main />
  </section>
</template>

<script>
import Carousel from "@/components/home/Carousel.vue";
import Main from "@/components/home/Main.vue";

export default {
  components: {
    Carousel,
    Main,
  },
  created() {
    this.$store.dispatch("product/getProducts");
  },
};
</script>