<template>
  <div class="user">
      <div class="nav">
          <ul class="list">
              <li class="item-list">控制台</li>
              <li class="item-list">信息管理</li>
              <li class="item-list">用户管理</li>
          </ul>
      </div>
      <div class="content">
          <div class="head-content">


          </div>
          <div class="table-content">
             
          </div>
      </div>
    
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
  computed: {},
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
.user{
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
}

</style>