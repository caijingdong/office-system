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
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-input v-model="key_word" placeholder="请输入搜索的关键字"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="danger">搜索</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col class="adduser" :span="4">
        <el-button type="danger">添加用户</el-button>
      </el-col>
    </el-row>
    <!--     <el-table
    :data="tableData"
    style="width: 100%;margin-top:20px;"
    height="100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="220">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="420">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="320">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="320">
    </el-table-column>
    </el-table>-->
    <TableVue :config="configTable">111</TableVue>
  </div>
</template>
<script>
import TableVue from "@c/Table";
export default {
  components: {
    TableVue,
  },
  data() {
    return {
      region: "",
      key_word: "",
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
      /*       tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }] */
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {},
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