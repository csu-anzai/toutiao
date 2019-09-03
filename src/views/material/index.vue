<template>

  <el-card class="material">
      <bread-crumb slot="header">
            <template slot="title">
                素材管理
            </template>
    </bread-crumb>
        <el-tabs v-model="activeName" @tab-click='changeTab'>
            <el-tab-pane label="全部素材" name="all">
                <!-- 全部素材的内容 -->
                <div class="card-list">
                    <el-card v-for='item in list' :key='item.id' class="img-card">
                        <img :src="item.url" alt="">
                        <el-row class='operate' type='flex' align="middle" justify="space-around">
                            <i :style="{color: item.is_collected ? 'red' : ''}" class='el-icon-star-on'></i>
                            <i class='el-icon-delete-solid'></i>
                        </el-row>
                    </el-card>
                </div>

            </el-tab-pane>
            <el-tab-pane label="收藏内容" name="collect">
                <div class="card-list">
                    <el-card v-for='item in list' :key='item.id' class="img-card">
                        <img :src="item.url" alt="">

                    </el-card>
                </div>
            </el-tab-pane>

    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect' } // collect为false就是查全部数据 collect 为true的话 是查询收藏数据

      }).then((result) => {
        this.list = result.data.results // 接收数据
      })
    },
    // 切换页面
    changeTab () {
      // this.activeName是最新的页签
      // 加载不同类型的数据
      // all => 所有的数据
      // collect => 去加载收藏数据
      this.getMaterial()
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
    .material{
        .card-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .img-card{
                width: 200px;
                height: 200px;
                margin:30px;
                position: relative;
                img{
                    width:100%;
                    height:100%;
                    // width: 180px;
                    // height: 180px;
                }
                .operate {
                    position: absolute;
                    width:100%;
                    bottom:0;
                    left:0;
                    height:30px;
                    background-color: #f4f5f6;
                    font-size:18px;
                }
            }
        }
    }
</style>
