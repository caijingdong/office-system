<template>
  <div style="width: 100%;margin-top:20px;">
    <el-table :data="tableData">
      <!--多选框-->
      <template v-for="item in config.tHead">
        <!--v-slot-->
        <el-table-column        
          :key="item.field"
          :prop="item.field"
          :label="item.label"
          :width="item.width"
          
          
        >
        </el-table-column>

      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "tableVue",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    tableRow: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
          tableData: [{
          email: '2016-05-03',
          name: '王小虎',
          phone: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          role: 200333
        },
        {
          email: '2016-05-03',
          name: '王小虎',
          phone: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          role: 200333
        }]
    };
  },
};
</script>
<style lang="less" scoped>
.table-footer {
  padding: 15px 0;
}
</style>