<template>
  <el-row class="layout-header" type="flex" justify='space-between'>
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="3">
      <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        琪琪怪<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">git地址</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">退出</el-dropdown-item>
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
        console.log(result)
        this.userInfo = result.data.data
      })
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
