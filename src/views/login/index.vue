<template>
  <div class="login">
    <div class="login-wrap">
      <div class="menu-tab"><li @click="getmenuTab(item)" v-for="item in menuTab" :key="item.id" :class="{current:active === item.text}">{{item.name}}</li></div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        size="medium"
        v-if="type == 1"
      >
        <el-form-item  prop="email">
          <label for="username">邮箱</label>
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label for="password">密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label for="code">验证码</label>
          <el-input v-model="ruleForm.code"></el-input>
          
        </el-form-item>
        <el-form-item  >
        <el-button type="info" @click="getUseinfo">获取验证码</el-button>
          
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleForm)">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
            <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        v-if="type == 2"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input  v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="qq邮箱" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
          
        </el-form-item>
        
         
        <el-form-item>
          <el-button type="primary" @click="submitForm1('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        
      </el-form>
      
     
     
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { GetSms,Login,Register} from "@/api/login.js";
export default {
  components: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.email) {
        callback(new Error("输入邮箱"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        password: "",
        code: "",
        module: 'register'
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },
      menuTab:[
        {name:"登录",text:true,type:1},
        {name:"注册",text:false,type:2}
      ],
      active:true,
      type:1
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {
    getUseinfo() {
      GetSms({ username: "1007875197@qq.com",module: 'register' })
      .then(res => {

      }).catch(() => {

      }) 
    },
    submitForm(formName) {
      console.log(formName)
       Register(formName)
       .then(res => {
         
       })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getmenuTab(item){  
      this.menuTab.forEach((item,index) => {
        item.text = false
      })
      item.text = true
      this.type = item.type
      console.log(this.type)
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #344a5f;
  padding-top: 60px;
  color: white;
}
.login-wrap {
  width: 330px;
  margin: auto;
  margin-top: 100px;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
   
  }
  .current {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
.login-form {
  margin-top: 29px;
  text-align: left;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
    text-align: left;
    float:left;
  }
  .item-from {
    margin-bottom: 2px;
  }
  .block {
    display: block;
    width: 100%;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>