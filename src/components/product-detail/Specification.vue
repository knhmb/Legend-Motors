<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="specification">
    <base-container>
      <h3>Specification</h3>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Dimension And Chassis" name="first">
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
        </el-tab-pane>
      </el-tabs>
    </base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          air: "Length x Width x Height (mm)",
          "standard-range": "2,974 x 1,505 x 1,631",
          "long-range": "2,974 x 1,505 x 1,631",
        },
        {
          air: "Wheelbase (mm)",
          "standard-range": "2,010",
          "long-range": "2,010",
        },
        {
          air: "Seat capacity",
          "standard-range": "4",
          "long-range": "4",
        },
        {
          air: "Suspension",
          "standard-range": "McPherson (Front) + 3-link coil spring (Rear)",
          "long-range": "McPherson (Front) + 3-link coil spring (Rear)",
        },
        {
          air: "Wheel and tire",
          "standard-range": "12” steel wheel with full cap; 145/70R12",
          "long-range": "12” steel wheel with full cap; 145/70R12",
        },
        {
          air: "Brakes",
          "standard-range": "Disc (Front) + Drum (Rear)",
          "long-range": "Disc (Front) + Drum (Rear)",
        },
        {
          air: "Steering",
          "standard-range": "Electric Power Steering",
          "long-range": "Electric Power Steering",
        },
      ],
    };
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