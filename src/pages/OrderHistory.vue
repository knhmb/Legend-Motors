<template>
  <div class="order-history">
    <!-- <template v-if="orders.length > 0"> -->
    <h3>{{ $t("dashboard.order-history") }}</h3>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(order, index) in orders"
        :key="order.id"
        :title="`Order ${index + 1}`"
        :name="order.id"
      >
        <div class="item">
          <div class="left">{{ $t("dashboard.order-date") }}</div>
          <div class="right">{{ formatDate(order.updatedAt) }}</div>
        </div>
        <div class="item">
          <div class="left">{{ $t("dashboard.item-name") }}</div>
          <div class="right">
            {{ order.productItems ? order.productItems[0].productName : "N/A" }}
            -
            {{ order.productItems ? order.productItems[0].productSize : "N/A" }}
            ({{
              order.productItems ? order.productItems[0].productColor : "N/A"
            }})
          </div>
        </div>
        <div class="item">
          <div class="left">{{ $t("dashboard.quantity") }}</div>
          <div class="right">
            {{ order.productItems ? order.productItems.length : "N/A" }}
          </div>
        </div>
        <div class="item">
          <div class="left">{{ $t("dashboard.retail-price") }}</div>
          <div class="right">
            {{ order.productItems ? order.productItems[0].retailPrice : "N/A" }}
          </div>
        </div>
        <div class="item">
          <div class="left">{{ $t("dashboard.reservation-fee") }}</div>
          <div class="right">
            {{
              order.productItems ? order.productItems[0].reservationFee : "N/A"
            }}
          </div>
        </div>
        <div class="item">
          <div class="left">{{ $t("dashboard.status") }}</div>
          <div class="right process">{{ order.status }}</div>
        </div>
      </el-collapse-item>

      <!-- <el-collapse-item title="Order 5" name="1">
        <div class="item">
          <div class="left">Order Date</div>
          <div class="right">2023-05-12</div>
        </div>
        <div class="item">
          <div class="left">Item Name</div>
          <div class="right">Air ev - Standard Range (Pristine White)</div>
        </div>
        <div class="item">
          <div class="left">Quantity</div>
          <div class="right">1</div>
        </div>
        <div class="item">
          <div class="left">Retail Price</div>
          <div class="right">1,000,000</div>
        </div>
        <div class="item">
          <div class="left">Reservation Fee</div>
          <div class="right">1,000</div>
        </div>
        <div class="item">
          <div class="left">Status</div>
          <div class="right process">Proccessing</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Order 4" name="2">
        <div class="item">
          <div class="left">Order Date</div>
          <div class="right">2023-05-12</div>
        </div>
        <div class="item">
          <div class="left">Item Name</div>
          <div class="right">Air ev - Standard Range (Pristine White)</div>
        </div>
        <div class="item">
          <div class="left">Quantity</div>
          <div class="right">1</div>
        </div>
        <div class="item">
          <div class="left">Retail Price</div>
          <div class="right">1,000,000</div>
        </div>
        <div class="item">
          <div class="left">Reservation Fee</div>
          <div class="right">1,000</div>
        </div>
        <div class="item">
          <div class="left">Status</div>
          <div class="right process">Proccessing</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Order 3" name="3">
        <div class="item">
          <div class="left">Order Date</div>
          <div class="right">2023-05-12</div>
        </div>
        <div class="item">
          <div class="left">Item Name</div>
          <div class="right">Air ev - Standard Range (Pristine White)</div>
        </div>
        <div class="item">
          <div class="left">Quantity</div>
          <div class="right">1</div>
        </div>
        <div class="item">
          <div class="left">Retail Price</div>
          <div class="right">1,000,000</div>
        </div>
        <div class="item">
          <div class="left">Reservation Fee</div>
          <div class="right">1,000</div>
        </div>
        <div class="item">
          <div class="left">Status</div>
          <div class="right process">Proccessing</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Order 2" name="4">
        <div class="item">
          <div class="left">Order Date</div>
          <div class="right">2023-05-12</div>
        </div>
        <div class="item">
          <div class="left">Item Name</div>
          <div class="right">Air ev - Standard Range (Pristine White)</div>
        </div>
        <div class="item">
          <div class="left">Quantity</div>
          <div class="right">1</div>
        </div>
        <div class="item">
          <div class="left">Retail Price</div>
          <div class="right">1,000,000</div>
        </div>
        <div class="item">
          <div class="left">Reservation Fee</div>
          <div class="right">1,000</div>
        </div>
        <div class="item">
          <div class="left">Status</div>
          <div class="right process">Proccessing</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Order 1" name="5">
        <div class="item">
          <div class="left">Order Date</div>
          <div class="right">2023-05-12</div>
        </div>
        <div class="item">
          <div class="left">Item Name</div>
          <div class="right">Air ev - Standard Range (Pristine White)</div>
        </div>
        <div class="item">
          <div class="left">Quantity</div>
          <div class="right">1</div>
        </div>
        <div class="item">
          <div class="left">Retail Price</div>
          <div class="right">1,000,000</div>
        </div>
        <div class="item">
          <div class="left">Reservation Fee</div>
          <div class="right">1,000</div>
        </div>
        <div class="item">
          <div class="left">Status</div>
          <div class="right process">Proccessing</div>
        </div>
      </el-collapse-item> -->
    </el-collapse>
    <!-- </template> -->
    <!-- <template v-else>
      <h3>{{ $t("dashboard.empty-orders") }}</h3>
      <base-button @click="$router.push('/product')">{{
        $t("btn.order-now")
      }}</base-button>
    </template> -->
  </div>
</template>

<script>
import { checkAccessToken, valid } from "@/utils/checkToken";
export default {
  data() {
    return {
      activeName: "1",
    };
  },
  computed: {
    orders() {
      return this.$store.getters["auth/orders"];
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    formatDate(item) {
      let date = new Date(item);

      // Formatting the date
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth returns 0-11
      let day = ("0" + date.getDate()).slice(-2);

      // Constructing the date string
      let formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    },
  },
  async created() {
    await checkAccessToken(true);
    if (valid) {
      this.$store.dispatch("auth/getOrders", this.currentUser.id).then(() => {
        this.orders;
      });
    } else {
      this.$router.replace("/");
    }
  },
};
</script>

<style scoped>
.order-history {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #262f36;
  margin-bottom: 2rem;
}

.el-collapse {
  width: 30rem;
}

:deep(.el-collapse-item__header) {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  position: relative;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #1d2129;
}

:deep(.el-icon.el-collapse-item__arrow) {
  position: absolute;
  left: 1rem;
}

:deep(.el-collapse-item__wrap) {
  background: transparent;
  border: 1px solid #e5e6eb;
}

:deep(.el-collapse-item__content) {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
}

.item {
  border: 0.5px solid #e5e6eb;
  border-top: none;
  border-radius: 4px;
}

.item:first-of-type {
  border-top: 0.5px solid #e5e6eb;
}

.item .left,
.item .right {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Avenir";
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  border-radius: inherit;
}

.item .left {
  background: #f7f8fa;
  padding: 0.5rem;
  width: 25%;
  font-weight: 400;
  color: #697187;
}
.item .right {
  background: #fff;
  padding: 0.5rem;
  width: 75%;
  font-weight: 350;
  color: #262f36;
  justify-content: flex-start;
}

.item .right.process {
  color: #4cd263;
}
</style>