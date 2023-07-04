<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="specification">
    <base-container>
      <h3>Specification</h3>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="setTab">
        <el-tab-pane
          :label="spec.name"
          :name="spec.name"
          v-for="spec in filterCarSize.specification"
          :key="spec"
        >
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            v-if="tableData.length > 0"
          >
            <!-- <el-table-column
              v-for="table in spec.table"
              :key="table"
              :prop="table.label"
              :label="table.label"
              width="250"
            /> -->
            <el-table-column prop="label" label="Label" width="250" />
            <el-table-column prop="content" label="Content" width="250" />
          </el-table>
        </el-tab-pane>
        <!-- <el-tab-pane label="Dimension And Chassis" name="first">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="air" label="Air ev Type" width="250" />
            <el-table-column
              prop="standard-range"
              label="Standard Range"
              width="250"
            />
            <el-table-column prop="long-range" label="Long Range" width="250" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="Main Battery And Powertrain" name="second">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="air" label="Air ev Type" width="250" />
            <el-table-column
              prop="standard-range"
              label="Standard Range"
              width="250"
            />
            <el-table-column prop="long-range" label="Long Range" width="250" />
          </el-table>
        </el-tab-pane> -->
      </el-tabs>
    </base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      selectedTab: "",
      tableData: [],
    };
  },
  computed: {
    carSize() {
      return this.$store.getters["product/carSize"];
    },
    productDetail() {
      return this.$store.getters["product/productDetail"];
    },
    selectedProductDetails() {
      return this.$store.getters["product/selectedProductDetails"];
    },
    filterCarSize() {
      return this.productDetail.carSize.find(
        (item) => item.name === this.selectedProductDetails.size
      );
    },
  },
  methods: {
    setTab(pane) {
      console.log(pane.paneName);
      this.selectedTab = pane.paneName;
      const filterTable = this.filterCarSize.specification.find(
        (item) => item.name === pane.paneName
      );
      console.log(filterTable);

      if (!filterTable) {
        this.tableData = [
          {
            label: "No data",
            content: "No data",
          },
        ];
        return;
      }
      this.tableData = filterTable.table;
    },
  },
  mounted() {
    console.log(this.productDetail);
    console.log(this.selectedProductDetails);
    console.log(this.filterCarSize);
  },
};
</script>

<style scoped>
.specification {
  background: #fff;
}

.specification .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 50px;
  text-align: center;
  color: #566069;
  margin-bottom: 2.5rem;
}

:deep(.el-tabs__header) {
  width: 500px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

:deep(.el-tabs__nav.is-top) {
  width: 100%;
  /* justify-content: center; */
}

:deep(.el-tabs__active-bar.is-top) {
  background: #384967;
}

:deep(.el-tabs__item.is-top) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 18px;
  line-height: 28px;
  color: #c9cdd4;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  width: 100%;
}

:deep(.el-tabs__item.is-top.is-active) {
  color: #384967;
}

:deep(.el-table th.el-table__cell) {
  background: #f2f3f5;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 14px;
  line-height: 22px;
  color: #333f48;
}

:deep(.el-table__body .el-table__row .cell) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 22px;
  color: #566069;
}
</style>