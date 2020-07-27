<template>
  <div id="home">
    <el-row :gutter="28">
      <el-col :span="20">
        <div class="label-wrap">
          <label>关键字：</label>
          <div class="warp-content">
            <el-row :gutter="20">
              <el-col :span="4">
                <el-select v-model="region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-input placeholder="请输入搜索的关键字"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="danger">搜索</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      region: "",
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
}
</style>