<template>
  <div class="order-history">
    <!-- <template v-if="orders.length > 0"> -->
    <h3>{{ $t("dashboard.order-history") }}</h3>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(order, index) in orders"
        :key="order.id"
        :title="`${$t('dashboard.order')} ${index + 1}`"
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
    </el-collapse>
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
  watch: {
    $i18n: {
      deep: true,
      async handler() {
        this.$store.dispatch("auth/getOrders", this.currentUser.id).then(() => {
          this.orders;
        });
      },
    },
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
  min-width: 20rem;
  max-width: 35rem;
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
  display: flex;
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

@media only screen and (max-width: 600px) {
  .el-collapse {
    width: 100%;
  }
}
</style>