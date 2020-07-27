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
      style="margin-top:150px"
    >
      <el-submenu index="1">
        <template slot="title" style="color:white;">
          <i class="el-icon-s-help" style="color:white;"></i>
          <span slot="title" style="color:white;">执法行动</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" @click="goUser" >公安执法活动监督表</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:48px;" @click="goHome">结案方式维护</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:48px;" @click="goHome">结案方式维护</el-menu-item>              
        </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" style="color:white;">
          <i class="el-icon-bank-card" style="color:white;"></i>
          <span slot="title" style="color:white;">司法判决</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" @click="goUser" >首页</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:48px;" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title" style="color:white;">
          <i class="el-icon-discount" style="color:white;"></i>
          <span slot="title" style="color:white;">刑事执行</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" @click="goUser" >首页</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:48px;" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title" style="color:white;">
          <i class="el-icon-set-up" style="color:white;"></i>
          <span slot="title" style="color:white;">民事行政</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" @click="goUser" >首页</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:48px;" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>
            <el-submenu index="5">
        <template slot="title" style="color:white;">
          <i class="el-icon-s-help" style="color:white;"></i>
          <span slot="title" style="color:white;">监外执行</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" @click="goUser" >首页</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:48px;" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>



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
    goUser() {
      this.$router.push({ path: "/user" });
    },
    goHome() {
      this.$router.push({ path: "/index" });
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
.item-list{
  padding-left:48px;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
</style>