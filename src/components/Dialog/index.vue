<template>
  <el-dialog
    title="新增"
    :modal="true"
    :modal-append-to-body="false"
    :visible.sync="dialog_flag"
    @close="close"
  >
    <el-form :model="form">
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="类型" :label-width="formLabelWidth">
        <el-input v-model="form.type" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="创造日期" :label-width="formLabelWidth">
          <el-date-picker
      v-model="form.createDate"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
        
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelDialog">取 消</el-button>
      <el-button type="primary" @click="commit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { GetList } from "@/api/user";
import { AddInfo } from "@/api/news";
import {
  AddFristCategory,
  GetCategory,
  DeleteCategory,
  EditCategory,
  AddChildrenCategory,
} from "@/api/news";
export default {
  name: "tableVue",
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: true,
    },
    category: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: "",
        resource: "",
        desc: "",
        createDate:"",
        id:""
      },
      dialog_flag: false,
      formLabelWidth: "120px",
      //dialogFormVisible:false
    };
  },
  watch: {
    //监听 弹窗显示， 可以用来写 请求接口
    dialogFormVisible: {
      handler(newVal,oldVal) {    
        this.dialog_flag = newVal;
      },
    },
  },
  methods: {
    cancelDialog() {
      this.$emit("update:dialogVisible", false);
    },
    close() {
      this.dialog_flag = false;
      this.$emit("close", false);
    },
    commit() {
        //console.log()
      let requestData = {
        categoryId: "267",
        title: this.form.name,
        content: this.form.region,
        createDate:this.form.createDate
      };
      AddInfo(requestData).then(Response => {
          console.log(1)
          this.dialog_flag = false;
      this.$emit("close", false);
      })
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
.table-footer {
  padding: 15px 0;
}
</style>