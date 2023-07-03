<template>
  <div class="product-info">
    <base-container>
      {{ singleProduct }}
      <el-row>
        <el-col :span="14">
          <img src="../../assets/car-1.png" alt="" />
        </el-col>
        <el-col :span="10">
          <h3>{{ singleProduct.name }}</h3>
          <div class="price">
            <div>
              <small>Start From</small>
              <p>${{ retailPrice }}</p>
            </div>
            <div>
              <small>Reservation Fee</small>
              <p>${{ reservationFee }}</p>
            </div>
          </div>
          <div class="size">
            <p>Choose the size</p>
            <el-radio-group v-model="radio">
              <el-radio
                @change="setSize(size)"
                v-for="size in singleProduct.carSize"
                :key="size"
                :label="size.name"
              ></el-radio>
              <!-- <el-radio label="long-range">Standard Range</el-radio>
              <el-radio label="standard-range">Long Range</el-radio> -->
            </el-radio-group>
          </div>
          <div class="color">
            <p>Choose the color</p>
            <div class="color-options">
              <div
                @click="selectColor(1)"
                :class="{ 'is-selected': selectedColor === 1 }"
              ></div>
              <div
                @click="selectColor(2)"
                :class="{ 'is-selected': selectedColor === 2 }"
              ></div>
              <div
                @click="selectColor(3)"
                :class="{ 'is-selected': selectedColor === 3 }"
              ></div>
              <div
                @click="selectColor(4)"
                :class="{ 'is-selected': selectedColor === 4 }"
              ></div>
              <div
                @click="selectColor(5)"
                :class="{ 'is-selected': selectedColor === 5 }"
              ></div>
            </div>
            <p class="color-text">Pristine White</p>
            <small
              >*Colour may differ slightly from the actual color of the
              car</small
            >
          </div>
          <base-button>Add to Cart</base-button>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "standard-range",
      selectedColor: 1,
      retailPrice: "",
      reservationFee: "",
    };
  },
  computed: {
    productDetail() {
      return this.$store.getters["product/productDetail"];
    },
    products() {
      return this.$store.getters["product/products"];
    },
    singleProduct() {
      return this.products.find(
        (item) => item.slug === this.$route.params.slug
      );
    },
  },
  methods: {
    selectColor(option) {
      this.selectedColor = option;
    },
    setSize(item) {
      this.retailPrice = item.retailPrice;
      this.reservationFee = item.reservationFee;
    },
  },
  mounted() {
    console.log(this.singleProduct.carSize);
    this.radio = this.singleProduct.carSize[0].name;
    this.retailPrice = this.singleProduct.carSize[0].retailPrice;
    this.reservationFee = this.singleProduct.carSize[0].reservationFee;
  },
};
</script>

<style scoped>
.product-info {
  background: #fff;
}

img {
  width: 100%;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #384967;
}

.price {
  display: flex;
  align-items: center;
}

.price div {
  width: 10rem;
}

.price div small {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  color: #b9bbbf;
  margin-bottom: 0.5rem;
  display: block;
}

.price div small:first-of-type {
  margin-right: 3rem;
}

.price div p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
  color: #262f36;
}

.size p,
.color p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #7d858c;
  margin: 0.5rem 0;
}

:deep(.el-radio__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  color: #1d2129;
}

:deep(.el-radio__input.is-checked .el-radio__inner) {
  background: #384967;
  border-color: #384967;
}

:deep(.el-radio.is-checked .el-radio__label) {
  color: #1d2129;
}

.color p {
  margin-top: 1rem;
}

.color .color-options {
  display: flex;
  align-items: centers;
}

.color .color-options div {
  width: 2rem;
  height: 2rem;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  background: #fff;
}

.color .color-options div:nth-of-type(2) {
  background: #acc4b5;
}

.color .color-options div:nth-of-type(3) {
  background: #ffd36a;
}

.color .color-options div:nth-of-type(4) {
  background: #efd7cd;
}

.color .color-options div:nth-of-type(5) {
  background: #cfd9e9;
}

.color .color-options div.is-selected {
  border: 3px solid #384967;
  border-radius: 32px;
  /* background: transparent; */
}

.color .color-options div.is-selected::after {
  content: "\2713";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #384967;
  font-size: 1.3rem;
}

.color .color-options div:not(:last-of-type) {
  margin-right: 1.5rem;
}

.color p.color-text {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #566069;
}

.color small {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #a6acb1;
}

.el-button {
  margin-top: 1.5rem;
}
</style>