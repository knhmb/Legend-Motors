<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="cart">
    <base-container>
      <h3>{{ $t("dashboard.your-cart") }}</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="product" :label="$t('menu.product')" width="400">
          <template #default="scope">
            <div class="product-content">
              <img crossorigin="anonymous" :src="scope.row.product" alt="" />
              <div class="product-info">
                <p class="name">{{ productDetail.name }}</p>
                <small>{{ selectedProductDetails.size }}</small>
                <small>{{ selectedProductDetails.color }}</small>
                <p class="remove" @click="removeItem(productDetail.id)">
                  {{ $t("btn.remove") }}
                </p>
              </div>
              <!-- <div class="product-info">
                <p class="name">{{ productDetail.name }}</p>
                <small>{{ selectedProductDetails.size }}</small>
                <small>{{ selectedProductDetails.color }}</small>
                <p class="remove" @click="removeItem">Remove</p>
              </div> -->
            </div>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          prop="reservationFee"
          :label="$t('dashboard.reservation-fee')"
        />
      </el-table>
      <div class="total-price-info">
        <div class="sub-total">
          <p>{{ $t("dashboard.subtotal") }}</p>
          <!-- <p>$100</p> -->
          <p>${{ totalPrice }}</p>
        </div>
        <div class="total">
          <p>{{ $t("dashboard.total") }}</p>
          <!-- <p>$100</p> -->
          <p>${{ totalPrice }}</p>
        </div>
      </div>
      <el-row :gutter="50">
        <el-col :md="24" :lg="12">
          <PaymentMethod
            @setPayment="paymentMethodHandler"
            :payment-method="paymentMethod"
          />
        </el-col>
        <el-col :md="24" :lg="12">
          <CartForm :payment-method="paymentMethod" />
        </el-col>
      </el-row>
    </base-container>
    <!-- {{ totalPrice }} -->
  </section>
</template>

<script>
import CartForm from "@/components/cart/Form.vue";
import PaymentMethod from "@/components/cart/PaymentMethod.vue";

export default {
  components: {
    CartForm,
    PaymentMethod,
  },
  data() {
    return {
      paymentMethod: "",
      tableData: [
        {
          product: require("../assets/Rectangle-73.png"),
          price: "$1,000",
          total: "$1,000",
        },
      ],
    };
  },
  computed: {
    productDetail() {
      return this.$store.getters["product/productDetail"];
    },
    selectedProductDetails() {
      return this.$store.getters["product/selectedProductDetails"];
    },
    productBlobImage() {
      return this.$store.getters["dashboard/productBlobImage"];
    },
    cart() {
      return this.$store.getters["product/cart"];
    },
    cartItems() {
      return this.$store.getters["product/cartItems"];
    },
    isDataAvailable() {
      return Object.keys(this.productDetail).length > 0;
    },
    totalPrice() {
      if (this.cartItems.length > 0) {
        const sum = this.cartItems.reduce((accumulator, object) => {
          return +accumulator + +object.reservationFee;
        }, 0);
        return sum;
      }
      return "N/A";
    },
  },
  methods: {
    removeItem(id) {
      console.log(id);
      this.$store.commit("product/UPDATE_CART", id);
      this.tableData = this.cartItems;
    },
    paymentMethodHandler(payment) {
      this.paymentMethod = payment;
    },
  },
  created() {
    console.log(this.cartItems);
    console.log(this.productDetail);
    this.tableData = this.cartItems;
    // console.log(this.totalPrice);
    // if (Object.keys(this.selectedProductDetails).length <= 0) {
    //   this.$store
    //     .dispatch("product/getProductDetail", this.$route.params.slug)
    //     .then(() => {
    //       this.tableData = [
    //         {
    //           product: this.productBlobImage,
    //           price: `$${this.productDetail.carSize[0].reservationFee}`,
    //           total: `$${this.productDetail.carSize[0].reservationFee}`,
    //         },
    //       ];
    //       this.$store.commit("product/ADD_TO_CART", this.tableData.length);
    //       console.log(this.cart);

    //       console.log(this.tableData);
    //     });
    //   return;
    // }
    // this.tableData = [
    //   {
    //     product: this.productBlobImage,
    //     price: `$${this.selectedProductDetails.price}`,
    //     total: `$${this.selectedProductDetails.price}`,
    //   },
    // ];
    // this.$store.commit("product/ADD_TO_CART", this.tableData.length);
    // console.log(this.cart);
  },
};
</script>

<style scoped>
.cart .container {
  padding-left: 20rem;
  padding-right: 20rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

.el-row {
  margin-top: 3rem;
}

.el-row .el-col {
  border-bottom: 1px solid #d1d4d7;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #384967;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 32px;
  color: #262f36;
}

img {
  width: 10rem;
  height: 6rem;
  object-fit: contain;
}

.product-content {
  display: flex;
  align-items: center;
}

.product-info {
  margin-left: 1.5rem;
}

p.name {
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  margin-bottom: 0.5rem;
}

small {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
  display: block;
  margin-bottom: 0.5rem;
}

p.remove {
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  text-decoration-line: underline;
  color: #262f36;
  cursor: pointer;
}

:deep(.el-table) {
  background: transparent;
  display: contents;
}

:deep(.el-table__header),
:deep(.el-table__body),
:deep(.el-scrollbar__view) {
  width: 100% !important;
}

:deep(.el-table tr, .el-table th.el-table__cell) {
  background: inherit;
}

:deep(.el-table__header .is-leaf.el-table__cell) {
  border-bottom: 1px solid #d1d4d7;
}

:deep(.el-table__inner-wrapper::before) {
  background-color: #d1d4d7;
}

:deep(.el-table th.el-table__cell) {
  background: inherit;
}

:deep(.el-table__header .cell) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 32px;
  color: #262f36;
}

:deep(.el-table__body .cell) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 31px;
  color: #262f36;
}

.total-price-info {
  width: 20rem;
  margin-left: auto;
  margin-top: 1.5rem;
}

.total-price-info .sub-total {
  border-bottom: 1px solid #d1d4d7;
  padding-bottom: 1rem;
}

.total-price-info .total {
  padding-top: 1rem;
}

.total-price-info .sub-total,
.total-price-info .total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-price-info .sub-total p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 31px;
  color: #262f36;
}
.total-price-info .total p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 20px;
  line-height: 31px;
  color: #262f36;
}

@media only screen and (max-width: 1199px) {
  .cart .container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
</style>