<template>
  <theHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from "@/components/common/TheHeader";

export default {
  components: { TheHeader },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Avenir";
  /* color: #262f36; */
}
body {
  background: #f2f3f5;
}
</style>
