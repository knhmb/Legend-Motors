<template>
  <div class="order-history">
    <h3>Order History</h3>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Order 5" name="1">
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
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
    };
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