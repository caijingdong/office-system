<template>
  <div id="content-wrap">
      <router-view />
      

  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
#content-wrap {
  height: 100vh;
  position: fixed;
  left: 250px;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  // -webkit-box-sizing: border;
  //@include webkit(transition, all .3s ease 0s);
}
.open{
  #content-wrap{
    left:250px;

  }
}
.close{
  #content-wrap{
    left:70px;
  }
}
</style>