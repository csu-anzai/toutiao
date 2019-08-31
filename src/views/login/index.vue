<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:230px" placeholder="请输入验证码" v-model="loginForm.code"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack() // 如果value为true直接通过
      } else {
        callBack(new Error('兄弟,从了吧'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: true
      },
      loginRules: {
        mobile: [
          {
            required: true, // 意味着必填
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3456789]\d{9}$/, // 正则 满足手机号格式
            message: '手机号码格式不正确'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码必须是6位数字'
          }
        ],
        check: [
          {
            validator
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // 通过el-form提供的validate方法,校验整个表单
      this.$refs.loginForm.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          })
            .then(result => {
              console.log(result)
              // 放到前端的缓存中
              window.localStorage.setItem('user-token', result.data.data.token)
              // 跳转首页
              this.$router.push('/')
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: '手机号或者验证码错误',
                type: 'warning'
              })
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 400px;
    height: 300px;
    .logo {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>
