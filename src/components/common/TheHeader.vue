<template>
  <header>
    <div class="mobile-menu" v-if="isBurgerIconVisible">
      <div class="menu-list">
        <span
          @click="navigate('/home')"
          :class="{ 'is-selected': $route.path === '/home' }"
          >{{ $t("menu.home") }}</span
        >
        <span
          @click="navigate('/about-us')"
          :class="{ 'is-selected': $route.path === '/about-us' }"
          >{{ $t("menu.about-us") }}</span
        >
        <span
          @click="navigate('/product')"
          :class="{
            'is-selected':
              $route.path === '/product' || $route.path === '/product-detail',
          }"
          >{{ $t("menu.product") }}</span
        >
        <span
          @click="navigate('/test-drive-request')"
          :class="{ 'is-selected': $route.path.includes('/test-drive') }"
          >{{ $t("menu.test-drive-request") }}</span
        >
        <div class="img-content" @click="navigate('/cart')">
          <img
            v-if="$route.path === '/cart' || $route.path === '/order-confirmed'"
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
        <template v-if="!isLoggedIn">
          <span
            @click="navigate('/register')"
            :class="{ 'is-selected': $route.path === '/register' }"
            >{{ $t("menu.sign-up") }}</span
          >
          <span
            @click="navigate('/login')"
            :class="{ 'is-selected': $route.path === '/login' }"
            >{{ $t("menu.login") }}</span
          >
        </template>
        <template v-else>
          <div class="profile">
            <p @click="navigate('/profile')">
              {{ $t("menu.hi") }}, {{ currentUser.username }}
            </p>
            <img
              class="user-img"
              crossorigin="anonymous"
              v-if="currentUser.thumbnail"
              :src="`${url}api/v1/system/uploads/${currentUser.thumbnail}`"
              alt=""
            />
            <div v-else class="icon-content">
              <img src="../../assets/user.png" alt="" />
            </div>
          </div>
        </template>
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
              <el-dropdown-item @click="setLang('zh-Hant-HK')"
                >Chinese</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="search-menu" v-if="isSearchMenu">
      <el-input
        @keyup.enter="handleEnterKey"
        v-model="search"
        :placeholder="$t('menu.search:placeholder')"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </div>
    <base-container>
      <img
        class="logo"
        @click="navigate('/')"
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
          <template v-if="!isLoggedIn">
            <span
              @click="navigate('/register')"
              :class="{ 'is-selected': $route.path === '/register' }"
              >{{ $t("menu.sign-up") }}</span
            >
            <span
              @click="navigate('/login')"
              :class="{ 'is-selected': $route.path === '/login' }"
              >{{ $t("menu.login") }}</span
            >
          </template>
          <template v-else>
            <p @click="navigate('/profile')">
              {{ $t("menu.hi") }}, {{ currentUser.username }}
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
                <el-dropdown-item @click="setLang('zh-Hant-HK')"
                  >Chinese</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-input
            @keyup.enter="handleEnterKey"
            v-model="search"
            :placeholder="$t('menu.search:placeholder')"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
          <img
            @click="toggleSearchMenu"
            class="search-icon"
            src="../../assets/icons/interactive-button.png"
            alt=""
          />
          <div class="burger-button" @click="toggleBurgerIcon">
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
import { ElNotification } from "element-plus";
import { url } from "@/url";

export default {
  components: {
    ArrowDown,
    Search,
  },
  data() {
    return {
      url,
      search: "",
      isBurgerIconVisible: false,
      isSearchMenu: false,
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
    products() {
      return this.$store.getters["product/products"];
    },
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
    },
    removeClass() {
      const button = document.querySelector(".burger-button");
      button.classList.remove("change");
    },
    toggleBurgerIcon() {
      const button = document.querySelector(".burger-button");
      button.classList.toggle("change");
      this.isBurgerIconVisible = !this.isBurgerIconVisible;
      this.isSearchMenu = false;
    },
    toggleSearchMenu() {
      this.isSearchMenu = !this.isSearchMenu;
      this.removeClass();
      this.isBurgerIconVisible = false;
    },
    navigate(path) {
      this.$router.push(path);
      this.removeClass();
      this.isBurgerIconVisible = false;
      this.isSearchMenu = false;
    },
    handleEnterKey() {
      if (this.search === "") return;
      const result = this.search.toLowerCase();
      const searchResult = this.products.find(
        (product) => product.name.toLowerCase() === result
      );
      console.log(searchResult);
      if (searchResult) {
        this.$router.push(`/product/${searchResult.slug}`);
        this.removeClass();
        this.isBurgerIconVisible = false;
        this.isSearchMenu = false;
        this.search = "";
      } else {
        ElNotification({
          title: "Error",
          message: this.$t("dashboard.product-does-not-exist"),
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
header {
  background: #697187;
  position: relative;
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
  display: none;
  cursor: pointer;
  margin-left: 1rem;
}

.mobile-menu {
  position: absolute;
  background: #697187;
  color: #fff;
  left: 0;
  bottom: -19.5rem;
  width: 100%;
  min-height: 8rem;
  max-height: 20rem;
  z-index: 99;
  padding: 1rem 4rem;
  border-top: 1px solid #f2f3f5;
  overflow-y: auto;
}

.search-menu {
  position: absolute;
  background: #697187;
  color: #fff;
  left: 0;
  bottom: -4rem;
  width: 100%;
  min-height: 4rem;
  max-height: 20rem;
  z-index: 1;
  padding: 1rem 4rem;
  border-top: 1px solid #f2f3f5;
}

img.search-icon {
  display: none;
  width: 2rem;
  margin-right: 0.5rem;
}

img.user-img {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 4px;
  margin-left: 0.5rem;
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

@media only screen and (min-width: 200px) and (max-width: 1300px) {
  .burger-button,
  img.search-icon {
    display: block;
  }

  .mobile-menu .menu-list,
  .mobile-menu .authentication {
    display: flex;
    flex-direction: column;
    align-items: start;
    border: none;
  }

  .mobile-menu .menu-list span {
    margin-bottom: 2rem;
  }

  .mobile-menu .authentication {
    margin-top: 1rem;
    border-top: 1px solid #f2f3f5;
    padding: 1rem 0 0 0;
  }

  .mobile-menu .authentication span {
    display: block;
    margin-bottom: 1.5rem;
    width: fit-content;
  }

  .mobile-menu .profile {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .authentication,
  .menu-list,
  .search .el-dropdown,
  .search .el-input {
    display: none;
  }
}

/* @media only screen and (min-width: 200px) {
  .burger-button {
    display: block;
  }

  .authentication,
  .menu-list,
  .search .el-dropdown,
  .search .el-input {
    display: none;
  }
} */
</style>