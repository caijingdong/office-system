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
                  <el-option label="区域一" value="111"></el-option>
                  <el-option label="区域二" value="1111"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-input v-model="key_word" placeholder="请输入搜索的关键字"></el-input>
              </el-col>
              <el-col :span="9">
                <div class="label-wrap date">
                  <label>日期：&nbsp;</label>
                  <div class="warp-content">
                    <el-date-picker
                      style="width: 80%;"
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
        <el-button type="danger" @click="addUser">添加用户</el-button>
      </el-col>
    </el-row>
    <TableVue :config="configTable" :tableData="tableData"></TableVue>
    <componentDialog
      :dialogFormVisible="dialogFormVisible"
      :width="width"
      :height="height"
      @close="dialogInfo"
    />
  </div>
</template>
<script>
import TableVue from "@c/Table";
import componentDialog from "@/components/Dialog/index";
import { GetCategory, GetList, DeleteInfo } from "@/api/news";
export default {
  components: {
    TableVue,
    componentDialog,
  },
  data() {
    return {
      width: "60%",
      height: "600px",
      region: "",
      pageNumber: 1,
      pageSize: 10,
      key_word: "",
      date_value: "",
      dialogFormVisible: false,
      tableData: [],
      tableParams: {
        beginDate: "",
        endDate: "",
      },
      configTable: {
        // 表头
        tHead: [
          {
            label: "邮箱/用户名",
            field: "title",
            width: 200,
          },
          {
            label: "真实姓名",
            field: "categoryName",
            width: 120,
          },
          {
            label: "手机号",
            field: "id",
          },
          {
            label: "时间",
            field: "createDate",
          },
          {
            label: "角色",
            field: "content",
          },
        ],
      },
    };
  },
  created() {
    this.getList();
    //this.getUseinfo()
  },

  watch: {
    date_value: function (newVal, oldVal) {
      if (newVal !== null) {
        this.tableParams.beginDate = newVal[0];
        this.tableParams.endDate = newVal[1];
      } else {
        this.tableParams.beginDate = null;
        this.tableParams.endDate = null;
      }
    },
  },

  computed: {},
  methods: {
    getList() {
      // Array
      var arr = [10, 20, 40, 60, 60, 0, 30];

      // 排序方法
      arr.sort((a, b) => {
        return b - a;
      }); //括号里不写回调函数则默认按照字母逐位升序排列

      // 打印排序后的数组
      console.log(arr); //[0, 10, 20, 30, 40, 60, 60]

      const { pageNumber, pageSize, region } = this;
      // console.log(this.date_value.value[0]);
      let requestData = {
        pageNumber: pageNumber,
        pageSize: pageSize,
      };
      if (region) {
        requestData.categoryId = region;
      }
      // console.log(this.date_value.value + "获取时间")
      if (this.date_value.length > 0) {
        requestData.startTiem = this.date_value[0];
        requestData.endTime = this.date_value[1];
      }
      GetList(requestData)
        .then((response) => {
          //console.log(response.data.data);
          let data = response.data;
          this.tableData = data.data.data;
        })
        .catch((error) => {});
    },
    addUser() {
      this.dialogFormVisible = true;
      //this.dialogFormVisible = !this.dialogFormVisible
    },
    dialogInfo() {
      //console.log(999);
      this.dialogFormVisible = false;
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