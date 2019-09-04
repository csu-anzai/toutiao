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
                            <i @click='collectOrCancel(item)' :style="{color: item.is_collected ? 'red' : ''}" class='el-icon-star-on'></i>
                            <i @click='delImg(item)' class='el-icon-delete-solid'></i>
                        </el-row>
                    </el-card>
                </div>
                <!-- 分页 -->
                 <el-row type='flex' justify="center">
                    <el-pagination @current-change="changePage" :current-page="page.page" :page-size="page.pageSize"  :total="page.total" background layout="prev, pager, next" ></el-pagination>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="收藏内容" name="collect">
                <div class="card-list">
                    <el-card v-for='item in list' :key='item.id' class="img-card">
                        <img :src="item.url" alt="">

                    </el-card>
                </div>
                <!-- 分页 -->
                 <el-row type='flex' justify="center">
                    <el-pagination @current-change="changePage" :current-page="page.page" :page-size="page.pageSize"  :total="page.total" background layout="prev, pager, next" ></el-pagination>
                </el-row>

            </el-tab-pane>

    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    // 收藏或取消收藏
    collectOrCancel (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`确定要${mess}收藏这种图片?`, '提示').then(() => {
        this.$axios({
          data: { collect: !item.is_collected }, // 取相反
          method: 'put',
          url: `/user/images/${item.id}`
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    delImg (item) {
      this.$confirm('您确定要删除么', '提示').then(() => {
        // 确定要删除
        this.$axios({
          method: 'delete',
          url: `/user/images/${item.id}`
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    changePage (newPage) {
      this.page.page = newPage
      this.getMaterial() // 请求最新的数据
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect', // collect为false就是查全部数据 collect 为true的话 是查询收藏数据
          page: this.page.page,
          per_page: this.page.pageSize
        }

      }).then((result) => {
        this.list = result.data.results // 接收数据
        this.page.total = result.data.total_count
      })
    },
    // 切换页面
    changeTab () {
      // this.activeName是最新的页签
      // 加载不同类型的数据
      // all => 所有的数据
      // collect => 去加载收藏数据
      this.page.page = 1
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
                width: 180px;
                height: 180px;
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
