<template>
  <header>
    <base-container>
      <img
        class="logo"
        @click="$router.push('/')"
        src="../../assets/logo.png"
        alt=""
      />
      <div class="content">
        <div class="menu-list">
          <span
            @click="$router.push('/home')"
            :class="{ 'is-selected': $route.path === '/home' }"
            >{{ $t("menu.home") }}</span
          >
          <span
            @click="$router.push('/about-us')"
            :class="{ 'is-selected': $route.path === '/about-us' }"
            >{{ $t("menu.about-us") }}</span
          >
          <span
            @click="$router.push('/product')"
            :class="{
              'is-selected':
                $route.path === '/product' || $route.path === '/product-detail',
            }"
            >{{ $t("menu.product") }}</span
          >
          <span
            @click="$router.push('/test-drive-request')"
            :class="{ 'is-selected': $route.path.includes('/test-drive') }"
            >{{ $t("menu.test-drive-request") }}</span
          >
          <div class="img-content" @click="$router.push('/cart')">
            <img
              v-if="
                $route.path === '/cart' || $route.path === '/order-confirmed'
              "
              src="../../assets/shopping-cart-2.png"
              alt=""
            />
            <img v-else src="../../assets/shopping-cart.png" alt="" />
            <div class="pill" v-if="cartItems.length > 0">
              {{ cartItems.length }}{{ cartItems.length > 99 ? "+" : "" }}
            </div>
          </div>
        </div>
        <div class="authentication">
          <temlate v-if="!isLoggedIn">
            <span
              @click="$router.push('/register')"
              :class="{ 'is-selected': $route.path === '/register' }"
              >{{ $t("menu.sign-up") }}</span
            >
            <span
              @click="$router.push('/login')"
              :class="{ 'is-selected': $route.path === '/login' }"
              >{{ $t("menu.login") }}</span
            >
          </temlate>
          <template v-else>
            <p @click="$router.push('/profile')">
              Hi, {{ currentUser.username }}
            </p>
            <div class="icon-content">
              <img src="../../assets/user.png" alt="" />
            </div>
          </template>
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
                <el-dropdown-item @click="setLang('en-US')"
                  >English</el-dropdown-item
                >
                <el-dropdown-item @click="setLang('zh')"
                  >Chinese</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-input
            v-model="search"
            :placeholder="$t('menu.search:placeholder')"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
          <div
            v-if="isBurgerIconVisible"
            class="burger-button"
            @click="toggleBurgerIcon()"
          >
            <div class="burger-icon bar1"></div>
            <div class="burger-icon bar2"></div>
            <div class="burger-icon bar3"></div>
          </div>
          <!-- <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div> -->
        </div>
      </div>
    </base-container>
  </header>
</template>

<script>
import { ArrowDown, Search } from "@element-plus/icons-vue";
import { setLanguageHeader } from "@/axios";

export default {
  components: {
    ArrowDown,
    Search,
  },
  data() {
    return {
      search: "",
      isBurgerIconVisible: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    cartItems() {
      return this.$store.getters["product/cartItems"];
    },
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
      setLanguageHeader(lang);
    },
    toggleBurgerIcon() {
      const button = document.querySelector(".burger-button");
      console.log(button);
      button.classList.toggle("change");
    },
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
  cursor: pointer;
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
.icon-content {
  background: #384967;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
}

.icon-content img {
  width: 1rem;
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
  right: -1rem;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
}

span,
.authentication p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  /* line-height: 25px; */
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

.authentication span::after,
.menu-list span::after {
  content: "";
  background-color: #384967;
  width: 0;
  height: 4px;
  position: absolute;
  left: 0;
  bottom: -0.7rem;
  transition: 0.3s all;
}

.authentication span:hover::after,
.menu-list span:hover::after {
  width: 100%;
}

.authentication span.is-selected,
.menu-list span.is-selected {
  color: #384967;
  transition: 0.3s all;
}

.authentication span.is-selected::after,
.menu-list span.is-selected::after {
  content: "";
  background-color: #384967;
  width: 100%;
  height: 4px;
  position: absolute;
  left: 0;
  bottom: -0.7rem;
  transition: 0.3s all;
}

.authentication span,
.menu-list span {
  position: relative;
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

.burger-icon {
  display: block;
  width: 30px;
  height: 4px;
  background-color: #fff;
  margin: 6px auto;
  transition: 0.4s;
  border-radius: 8px;
}

.burger-button.change .burger-icon.bar1 {
  transform: rotate(-45deg) translate(-8px, 4px);
}

.burger-button.change .burger-icon.bar2 {
  opacity: 0;
}

.burger-button.change .burger-icon.bar3 {
  transform: rotate(45deg) translate(-10px, -6px);
}

/* Styles for the button container */
.burger-button {
  display: block;
  cursor: pointer;
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