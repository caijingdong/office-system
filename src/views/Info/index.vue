<template>
  <div :class="[menuStatus ? 'close' : 'open']">
        <LayoutHeader />
        <LayoutMain />
        <LayoutNav />   
  </div>
</template>
<script>
import LayoutHeader from './components/Header';
import LayoutMain from './components/Content.vue';
import LayoutNav from './components/Nav';
export default {
  components: {LayoutHeader, LayoutMain, LayoutNav},
  data() {
    return {
      //menuStatus:true
    };
  },
  created() {

  },
  computed: {
    menuStatus(){
      return this.$store.state.app.isCollapse

    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
ul,li{
    margin:0;
    padding:0;
    list-style: none;
}
/* .user{
    .nav{
        width:240px;
        float:left;
        background-color: #344a5f;
        height:2000px;
        .list{
            margin-top:100px;
            .item-list{
            color:white;
            height:40px;
            line-height:40px;
            width:220px; 
            padding-left:20px;
            list-style: none;          
        }

        }
        
    }
    .content{
        float:left;
        
    }
} */

</style>