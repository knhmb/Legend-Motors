<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <base-container>
      <h3>{{ $t("dashboard.products") }}</h3>

      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="setProduct">
        <el-tab-pane
          :label="product.name"
          :name="product.slug"
          v-for="product in products"
          :key="product"
        >
          <el-row :gutter="40">
            <el-col :md="24" :lg="12">
              <img
                crossorigin="anonymous"
                :src="`${url}api/v1/system/uploads/${product.thumbnail}`"
                alt=""
              />
            </el-col>
            <el-col :md="24" :lg="12">
              <h4>{{ product.name }}</h4>
              <small>{{ $t("dashboard.highlighted-specifications") }}</small>
              <ul>
                <li v-for="feature in product.feature" :key="feature">
                  {{ feature.name }}
                </li>
              </ul>
              <base-button @click="goToCart(product)">{{
                $t("btn.booking-now")
              }}</base-button>
              <base-button :login="true" @click="selectProduct(product)">{{
                $t("btn.explore")
              }}</base-button>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <LoginRequiredDialog
        @closeDialog="dialogVisible = false"
        :dialog-visible="dialogVisible"
      />
      <!-- <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="EV" name="ev">
          <el-row>
            <el-col :span="12">
              <img src="../../assets/EV-car.png" alt="" />
            </el-col>
            <el-col :span="12">
              <h4>Air EV</h4>
              <small>Highlighted Specifications</small>
              <ul>
                <li>
                  10.25" Integrated Floating Widescreen And Smart Start System
                </li>
                <li>Futuristic Center Console</li>
                <li>IP67 Waterproof Battery</li>
                <li>Easy Home Charging System</li>
                <li>2 Airbags</li>
                <li>Roomy 4-Seater</li>
              </ul>
              <base-button>Booking now</base-button>
              <base-button :login="true">{{ $t("btn.explore") }}</base-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="First product" name="first"
          >First product</el-tab-pane
        >
        <el-tab-pane label="Second product" name="second"
          >Second product</el-tab-pane
        >
        <el-tab-pane label="Third product" name="third"
          >Third product</el-tab-pane
        >
      </el-tabs> -->
    </base-container>
  </div>
</template>

<script>
import LoginRequiredDialog from "../LoginRequiredDialog.vue";
import * as tokenData from "@/utils/checkToken";
import { url } from "@/url";

export default {
  components: {
    LoginRequiredDialog,
  },
  data() {
    return {
      url,
      activeName: "",
      img: null,
      isImageLoaded: false,
      dialogVisible: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters["product/products"];
    },
    blobImage() {
      return this.$store.getters["product/blobImage"];
    },
    productBlobImage() {
      return this.$store.getters["dashboard/productBlobImage"];
    },
  },
  methods: {
    selectProduct(product) {
      this.$router.push(`/product/${product.slug}`);
    },
    async goToCart(product) {
      console.log(product);
      // await tokenData.checkAccessToken(false);

      if (tokenData.valid) {
        this.$store.commit("product/STORE_CART_ITEMS", {
          id: product.id,
          product: `${url}api/v1/system/uploads/${product.thumbnail}`,
          retailPrice: product.carSize[0].retailPrice,
          reservationFee: product.carSize[0].reservationFee,
          productColor: product.colorVariant[0].color,
          productName: product.name,
          productSlug: product.slug,
          productSize: product.carSize[0].name,
        });
        this.$router.push(`/cart`);
      } else {
        this.dialogVisible = true;
      }
    },
    setProduct(pane) {
      const prod = this.products.find((item) => item.slug === pane.paneName);
      this.$store
        .dispatch("dashboard/fetchProductBlobImage", prod.thumbnail)
        .then(() => {
          console.log(this.productBlobImage);
        });
    },
  },
  mounted() {
    if (this.products.length > 0) this.activeName = this.products[0].slug;
  },
  created() {
    if (this.products.length > 0) {
      this.$store.dispatch(
        "dashboard/fetchProductBlobImage",
        this.products[0].thumbnail
      );
    }

    // const response = await axios.get(
    //   `/api/v1/system/uploads/${this.products[0].thumbnail}`,
    //   { responseType: "blob" }
    // );
    // const url = URL.createObjectURL(response.data);
    // console.log(response.data);
    // this.img = url;
    // console.log(this.img);
    // this.isDataLoaded = true;
    // console.log(this.img);
  },
};
</script>

<style scoped>
.main {
  background: #ffffff;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 32px;
  line-height: 50px;
  color: #262f36;
  margin-bottom: 1rem;
}

img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

:deep(.el-tabs__nav-wrap::after) {
  background-color: transparent;
}

:deep(.el-tabs__item.is-top) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 28px;
  line-height: 44px;
  color: #384967;
}

:deep(.el-tabs__item.is-active) {
  font-weight: 850;
}

:deep(.el-tabs__active-bar.is-top) {
  background-color: #384967;
}

h4 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 50px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #384967;
  margin-bottom: 3rem;
}

small {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #86909c;
}

ul {
  margin-top: 0.5rem;
}

li {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 20px;
  line-height: 31px;
  color: #384967;
}

.el-button {
  margin-top: 1rem;
}

.main .el-button.is-login {
  width: fit-content;
}

@media only screen and (max-width: 1199px) {
  h4 {
    margin: 1rem 0;
  }
}
</style>