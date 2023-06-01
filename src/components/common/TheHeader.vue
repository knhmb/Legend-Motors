<template>
  <header>
    <base-container>
      <img class="logo" src="../../assets/logo.png" alt="" />
      <div class="content">
        <div class="menu-list">
          <span>Home</span>
          <span>About Us</span>
          <span>Product</span>
          <span>Test Drive Request</span>
          <div class="img-content">
            <img src="../../assets/shopping-cart.png" alt="" />
            <div class="pill">99+</div>
          </div>
        </div>
        <div class="authentication">
          <span :class="{ 'is-selected': $route.path === '/register' }"
            >Sign Up</span
          >
          <span>Login</span>
        </div>
        <div class="search">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../../assets/global.png" alt="" />
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>Chinese</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-input v-model="search" placeholder="Search">
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
        </div>
      </div>
    </base-container>
  </header>
</template>

<script>
import { ArrowDown, Search } from "@element-plus/icons-vue";

export default {
  components: {
    ArrowDown,
    Search,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
header {
  background: #697187;
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 12rem;
}

.content {
  display: flex;
  align-items: center;
}

.menu-list {
  display: flex;
  align-items: center;
  border-right: 1px solid #f2f3f5;
  padding-right: 2.5rem;
}

.img-content {
  position: relative;
}

.menu-list .img-content .pill {
  background: #384967;
  border-radius: 100px;
  padding: 0.2rem;
  color: #fff;
  position: absolute;
  top: -0.7rem;
  right: -1.4rem;
}

span {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #f2f3f5;
  cursor: pointer;
}

.menu-list span {
  margin-right: 1.5rem;
}

.menu-list img {
  width: 1.7rem;
  cursor: pointer;
}

.authentication {
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
  border-right: 1px solid #f2f3f5;
}

.authentication span:first-of-type {
  margin-right: 1rem;
}

.authentication span.is-selected {
  color: #384967;
  border-bottom: 4px solid #384967;
}

.search {
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
}

.search img {
  width: 1.7rem;
}

.search .el-input {
  margin-left: 1rem;
}

:deep(.el-dropdown-link.el-tooltip__trigger.el-tooltip__trigger) {
  display: flex;
  align-items: center;
}

:deep(.el-icon.el-icon--right) {
  color: #fff;
}

:deep(.el-input__wrapper) {
  background: #384967;
  border-radius: 4px;
  box-shadow: none;
}

:deep(.el-input__inner) {
  color: #fff;
}
</style>