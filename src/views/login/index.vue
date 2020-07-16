<template>
  <div class="login">
    <div class="login-wrap">
      <div class="menu-tab">
        <li
          @click="getmenuTab(item)"
          v-for="item in menuTab"
          :key="item.id"
          :class="{current:active === item.text}"
        >{{item.name}}</li>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        size="medium"
      >
        <el-form-item prop="email">
          <label for="email">邮箱</label>
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <label for="pass">密码</label>
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" v-if="type == 2">
          <label for="checkPass">重复密码</label>
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label for="code">验证码</label>
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="success"
            @click="getUseinfo"
            :disabled="codeButtonStatus.status"
          >{{codeButtonStatus.text}}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-if="type == 1" @click="login">登录</el-button>
          <el-form-item>
            <el-button type="primary" v-if="type == 2" @click="submitForm">注册</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
      <!--       <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        v-if="type == 2"
      >
        <el-form-item prop="email">
          <label for="email">邮箱</label>
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <label for="pass">密码</label>
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <label for="checkPass">重复密码</label>
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label for="code">验证码</label>
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="getUseinfo">获取验证码</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">注册</el-button>
        </el-form-item>
      </el-form>-->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sha1 from "sha1";
import { GetSms, Login, Register } from "@/api/login.js";
export default {
  components: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {}, 1000);
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
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        pass: "",
        code: "",
        checkPass: ""
      },
      codeButtonStatus: {
        status: false,
        text: "获取验证码"
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: checkAge, trigger: "blur" }]
      },
      menuTab: [
        { name: "登录", text: true, type: 1 },
        { name: "注册", text: false, type: 2 }
      ],
      active: true,
      type: 1
    };
  },
  created() {
    //this.getUseinfo()
  },
  computed: {},
  methods: {
    getUseinfo() {
      let codename = {
        username: this.ruleForm.email,
        module: "register"
      };
      this.codeButtonStatus.status = true;
      this.codeButtonStatus.text = "发送中";
      GetSms(codename)
        .then(res => {
          this.countDown(number)
        })
        .catch(() => {});
    },
    //登录
    login() {
      let repuestData = {
        username: this.ruleForm.email,
        pass: sha1(this.ruleForm.pass),
        code: this.ruleForm.code
      };
      this.$router.push({ name: "User" });
      //Login(repuestData).then(res => {});
    },
    //倒计时
    countDown(number) {
      if (timer.value) {
        clearInterval(timer.value);
      }
      let time = number;
      timer.value = setInterval(() => {
        time--;
        if (time === 0) {
          clearInterval(timer.value);
          updataButtonStatus({
            status: false,
            text: "再次获取"
          });
        } else {
          this.codeButtonStatus.text = `倒计时${time}秒`; // es5 '倒计时' + time + '秒'
        }
      }, 1000);
    },

    //注册
    submitForm() {
      let repuestData = {
        username: this.ruleForm.email,
        pass: sha1(this.ruleForm.pass),
        code: this.ruleForm.code
      };
      Register(repuestData).then(res => {});
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getmenuTab(item) {
      this.menuTab.forEach((item, index) => {
        item.text = false;
      });
      item.text = true;
      this.type = item.type;
      console.log(this.type);
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
  width: 530px;
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
    // margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
    text-align: left;
    float: left;
  }
  .item-from {
    //margin-bottom: 2px;
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