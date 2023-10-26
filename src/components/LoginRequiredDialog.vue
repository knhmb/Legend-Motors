<template>
  <div class="auth-dialog">
    <el-dialog :model-value="dialogVisible" width="30%">
      <div class="top">
        <img src="../assets//icon-center-20px.png" alt="" />
        <h4>{{ $t("auth.login-required") }}</h4>
      </div>
      <p>
        {{ $t("auth.login-required-description") }}
      </p>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="cancel" @click="$emit('closeDialog')">{{
            $t("btn.cancel")
          }}</el-button>
          <el-button type="primary" @click="redirect">
            {{ $t("btn.confirm") }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogVisible"],
  methods: {
    redirect() {
      this.$emit("closeDialog");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.top img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

p {
  font-family: Avenir;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: #1d2129;
}

.top h4 {
  font-family: Avenir;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0em;
  color: #1d2129;
}

.el-button {
  background: #384967;
  font-family: Avenir;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  transition: 0.3s;
  border-color: #384967;
}

.el-button:hover {
  background: #384967cb;
}

.el-button.cancel {
  background: #f2f3f5;
  color: #4e5969;
  border-color: #f2f3f5;
}

.el-button.cancel:hover {
  background: #f2f3f541;
}
</style>

<style>
.auth-dialog .el-dialog__header {
  display: none;
}
</style>