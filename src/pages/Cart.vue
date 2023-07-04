<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="cart">
    <base-container>
      <h3>Your Cart</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="product" label="Product" width="400">
          <template #default="scope">
            <div class="product-content">
              <img :src="scope.row.product" alt="" />
              <div class="product-info">
                <p class="name">{{ productDetail.name }}</p>
                <small>{{ selectedProductDetails.size }}</small>
                <small>{{ selectedProductDetails.color }}</small>
                <p class="remove">Remove</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="Price" />
        <el-table-column prop="total" label="Total" />
      </el-table>
      <div class="total-price-info">
        <div class="sub-total">
          <p>Subtotal</p>
          <p>
            ${{
              selectedProductDetails.price
                ? selectedProductDetails.price
                : productDetail.carSize[0].reservationFee
            }}
          </p>
        </div>
        <div class="total">
          <p>Total</p>
          <p>
            ${{
              selectedProductDetails.price
                ? selectedProductDetails.price
                : productDetail.carSize[0].reservationFee
            }}
          </p>
        </div>
      </div>
      <cart-form></cart-form>
    </base-container>
  </section>
</template>

<script>
import CartForm from "@/components/cart/Form.vue";

export default {
  components: {
    CartForm,
  },
  data() {
    return {
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
  },
  created() {
    console.log(this.selectedProductDetails);
    if (Object.keys(this.selectedProductDetails).length <= 0) {
      this.$store
        .dispatch("product/getProductDetail", this.$route.params.slug)
        .then(() => {
          this.tableData = [
            {
              product: this.productBlobImage,
              price: `$${this.productDetail.carSize[0].reservationFee}`,
              total: `$${this.productDetail.carSize[0].reservationFee}`,
            },
          ];
          console.log(this.tableData);
        });
      return;
    }
    this.tableData = [
      {
        product: this.productBlobImage,
        price: `$${this.selectedProductDetails.price}`,
        total: `$${this.selectedProductDetails.price}`,
      },
    ];
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
</style>