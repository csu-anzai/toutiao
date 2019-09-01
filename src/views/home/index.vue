<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧导航 -->
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>头部</el-header>
      <!-- 主体 -->
      <el-main>主体</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/layout-aside.vue'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>
</style>
