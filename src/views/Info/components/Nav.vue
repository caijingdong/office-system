<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#1767ff"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-submenu index="1">
        <template slot="title" style="color:white;">
          <i class="el-icon-s-help" style="color:white;"></i>
          <span slot="title" style="color:white;">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1" @click="goUser">首页</el-menu-item>
          <el-menu-item index="1-2" @click="goHome">控制台</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-s-help" style="color:white;"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      //isCollapse: true
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goUser(){
      this.$router.push({path:'/user'})
    },
    goHome(){
      this.$router.push({path:'/index'})

    }
  }
};
</script>
<style lang="less" scoped>
#nav-wrap {
  position: fixed;
  width: 250px;
  background-color: #1767ff;
  top: 0;
  left: 0;
  height: 100vh;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
</style>