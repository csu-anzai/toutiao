<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../assets/img/logo_admin.png" alt />
    </div>
    <el-menu background-color="#353b4e" text-color="#adafb5">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容管理</span>
        </template>

        <el-menu-item index="1-1">发布文章</el-menu-item>
        <el-menu-item index="1-2">内容列表</el-menu-item>
        <el-menu-item index="1-3">评论列表</el-menu-item>

        <el-menu-item index="1-4-1">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>粉丝管理</span>
        </template>

        <el-menu-item index="1-1">图文数据</el-menu-item>
        <el-menu-item index="1-2">粉丝概况</el-menu-item>
        <el-menu-item index="1-3">粉丝画像</el-menu-item>

        <el-menu-item index="1-4-1">粉丝列表</el-menu-item>
      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-aside {
  width: 200px;
  height: 100vh;
  background-color: #323745;
  .title {
    text-align: center;
    background: #2e2f32;
    padding: 10px 0;
    img {
      height: 30px;
    }
  }
}
</style>
