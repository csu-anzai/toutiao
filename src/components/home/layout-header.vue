<template>
  <el-row class="layout-header" type="flex" justify='space-between'>
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="3">
      <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
      <el-dropdown trigger="click" @command='handleMenuItem'>
      <span class="el-dropdown-link">
        琪琪怪<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='account'>个人信息</el-dropdown-item>
        <el-dropdown-item command='git'>git地址</el-dropdown-item>
        <el-dropdown-item command='lgout'>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg') // 转成base64字符串
    }
  },
  methods: {
    // 获取用户数据
    getUserInfo () {
      let token = window.localStorage.getItem('user-token') // 获取token
      this.$axios({
        url: '/user/profile',
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(result => {
        // console.log(result)
        this.userInfo = result.data
      })
    },
    // 点击菜单触发的方法
    handleMenuItem (command) {
      if (command === 'account') {
        // 账户信息
      } else if (command === 'git') {
        window.location.href = 'https://github.com/414540913/toutiao'
      } else {
        // 退出
        window.localStorage.clear() // 清除缓存 清除所有缓存(只能清除自己当前项目的缓存)
        this.$router.push('/login')
      }
    }
  },

  created () {
    this.getUserInfo()
  }

}

</script>

<style lang='less' scoped>
.layout-header{
  padding: 8px 0;
    .right{
      display:flex;
      align-items: center;
      img{
        border-radius: 50%;
        height: 30px;
        margin-right: 10px;
      }
    }
  }

</style>
