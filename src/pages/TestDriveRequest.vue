<template>
  <section class="test-drive-request">
    <div class="banner">
      <img src="../assets/Test-Drive-Request-banner.png" alt="" />
      <h3>Test Drive Request</h3>
    </div>
    <Main />
  </section>
</template>

<script>
import Main from "@/components/test-drive-request/Main.vue";

export default {
  components: {
    Main,
  },
};
</script>


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
</style>