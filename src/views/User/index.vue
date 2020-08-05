<template>
  <div id="home">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="label-wrap">
          <label>关键字：</label>
          <div class="warp-content">
            <el-row :gutter="16">
              <el-col :span="3">
                <el-select v-model="region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="蔡景东"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-input v-model="key_word" placeholder="请输入搜索的关键字"></el-input>
              </el-col>
              <el-col :span="7">
                <div class="label-wrap date">
                  <label for>日期：&nbsp;&nbsp;</label>
                  <div class="warp-content">
                    <el-date-picker
                      style="width: 100%;"
                      v-model="date_value"
                      type="datetimerange"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      align="right"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :default-time="['12:00:00', '08:00:00']"
                    ></el-date-picker>
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <el-button type="danger" @click="getList">搜索</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col class="adduser" :span="4">
        <el-button type="danger">添加用户</el-button>
      </el-col>
    </el-row>
    <TableVue :config="configTable">111</TableVue>
    <el-row>
      <el-col :span="12">
        <el-button size="medium" >批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          class="pull-right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TableVue from "@c/Table";
//import { GetCategory, GetList, DeleteInfo } from "@/api/news";
import {  GetList} from "@/api/user";
export default {
  components: {
    TableVue,
  },
  data() {
    return {
      region: "",
      pageNumber: 1,
      pageSize: 10,
      key_word: "",
      date_value: "",
      total:60,
      configTable: {
        // 表头
        tHead: [
          {
            label: "邮箱/用户名",
            field: "email",
            width: 200,
          },
          {
            label: "真实姓名",
            field: "name",
            width: 120,
          },
          {
            label: "手机号",
            field: "phone",
          },
          {
            label: "地区",
            field: "address",
          },
          {
            label: "角色",
            field: "role",
          },
        ],
      },
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
      this.pageNumber = val;
    },
    handleCurrentChange(val) {
      this.pageSize = val;
      this.getList();
    },
    getList() {
      const { pageNumber, pageSize} = this;
      let requestData = {
        pageNumber: pageNumber,
        pageSize: pageSize,
      };
      console.log(requestData)
/*       if (region) {
        requestData.categoryId = region;
      } */
      GetList(requestData)
        .then((response) => {})
        .catch((error) => {});
    },
  },
};
</script>
<style lang="less" scoped>
#home {
  margin: 30px;
}
label {
  float: left;
  height: 40px;
  line-height: 40px;
}
.adduser {
  float: right;
  text-align: right;
  height: 40px;
  line-height: 40px;
}
</style>