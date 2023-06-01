<template>
  <el-button :class="{ 'is-login': login }"><slot></slot></el-button>
</template>

<script>
export default {
  props: ["login"],
};
</script>

<style scoped>
.el-button {
  background: #384967;
  border-radius: 4px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  padding: 1.5rem 1rem;
  display: inline-flex;
}

.el-button.is-login {
  border: 1px solid #7d858c;
  text-transform: capitalize;
  color: #7d858c;
  background: transparent;
  width: 20rem;
}
</style>