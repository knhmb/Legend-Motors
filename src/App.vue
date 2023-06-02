<template>
  <theHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";

export default {
  components: { TheHeader, TheFooter },
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
