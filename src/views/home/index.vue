<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧导航 -->
    <el-aside  style="width:200px">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 主体 -->
      <el-main style='padding:0px'>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {

}
</script>

<style>
</style>
