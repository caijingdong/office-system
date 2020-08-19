<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#1767ff"
      text-color="#fff"
      active-text-color="#fff"
      style="margin-top:100px;border-right:none"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title" style="color:white;">
          <i class="el-icon-s-help" style="color:white;"></i>
          <span slot="title" style="color:white;">执法行动</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" index="1-1" @click="goUser" >公安执法活动监督表</el-menu-item>
          <el-menu-item style="padding-left:48px;" index="1-2" @click="goHome">结案方式维护</el-menu-item>
          <el-menu-item  style="padding-left:48px;" index="1-3" @click="goHome">结案方式维护</el-menu-item>              
        </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" style="color:white;">
          <i class="el-icon-bank-card" style="color:white;"></i>
          <span slot="title" style="color:white;">司法判决</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" index="1-3" @click="goUser" >首页</el-menu-item>
          <el-menu-item style="padding-left:48px;" index="1-4" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title" style="color:white;">
          <i class="el-icon-discount" style="color:white;"></i>
          <span slot="title" style="color:white;">刑事执行</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" index="1-5" @click="goUser" >首页</el-menu-item>
          <el-menu-item style="padding-left:48px;" index="1-6" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title" style="color:white;">
          <i class="el-icon-set-up" style="color:white;"></i>
          <span slot="title" style="color:white;">民事行政</span>
        </template>
        <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" index="1-7" @click="goUser" >首页</el-menu-item>
          <el-menu-item style="padding-left:48px;" index="1-8" @click="goHome">控制台</el-menu-item>          
        </template>
      </el-submenu>
            <el-submenu index="5">
        <template slot="title" style="color:white;">
          <i class="el-icon-s-help" style="color:white;"></i>
          <span slot="title" style="color:white;">监外执行</span>
        </template>
<!--         <template  style="color:white;">
          <el-menu-item style="padding-left:48px;" @click="goUser" >首页</el-menu-item>
          <el-menu-item style="padding-left:48px;" @click="goHome">控制台</el-menu-item>          
        </template> -->
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {
    isCollapse(){
      return this.$store.state.app.isCollapse
    }
  },
  methods: {

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
.open{

}
.close{
  width:60px;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
</style>