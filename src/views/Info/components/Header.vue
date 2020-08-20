<template>
  <div id="header-wrap">
    <div @click="navMenuState">点击</div>
  
    
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {},
  data() {
    return {
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {
    navMenuState(){
      this.$store.commit('app/SET_COLLAPSE')
    }
   
  }
};
</script>
<style lang="less" scoped>
#header-wrap {
    position: fixed;
    top: 0;
    right: 0;    
    height: 75px;
    left:250px;
    background-color:white;
    line-height: 75px;
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
    //@include webkit(transition, all .3s ease 0s);
}
.open{
  #header-wrap{
    left:250px;
  }

}
.close{
  #header-wrap{
    left:70px;
  }
}

</style>