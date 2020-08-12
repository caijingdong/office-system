<template>
  <div style="width: 100%;margin-top:20px;">
    <el-table :data="tableData">
      <!--多选框-->
      <el-table-column v-if="selection" type="selection" width="50"></el-table-column>
      <template v-for="item in config.tHead">
        <!--v-slot-->
        <el-table-column
          :key="item.field"
          :prop="item.field"
          :label="item.label"
          :width="item.width"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
//import { GetList } from "@/api/user";
import { AddFristCategory, GetList } from "@/api/news";
export default {
  name: "tableVue",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    tableData:{

    }
  },
  data() {
    return {
      pageNumber: 1,
      pageSize: 10,
      selection: false,
      categoryName: "1111",
    };
  },
  methods: {
    getDetaillist() {
      let requestData = {
        pageNumber: 1,
        pageSize: 1,
      };
      /*        GetList(requestData)
            .then(res => {
          //this.countDown(number)
        })
        .catch(() => {}); */
      AddFristCategory({ categoryName: this.categoryName }).then((res) => {});
    },
    getList() {
      const { pageNumber, pageSize } = this;
      let requestData = {
        pageNumber: pageNumber,
        pageSize: pageSize,
      };
      /*       if (region) {
        requestData.categoryId = region;
      } */
      GetList(requestData)
        .then((response) => {
          let data = response.data;
          this.tableData = data.data.data
          console.log(this.tableData);
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getDetaillist();
    //this.getList();
  },
};
</script>
<style lang="less" scoped>
.table-footer {
  padding: 15px 0;
}
</style>