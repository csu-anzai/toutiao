<template>
  <el-card>
      <bread-crumb slot="header">
            <template slot="title">
                评论列表
            </template>
    </bread-crumb>
    <el-table
      :data="list">
      <!-- formatter el-table-column的属性 -->
      <el-table-column
        prop="title"
        label="标题"
        width="600">
      </el-table-column>
      <el-table-column
        prop="commont_status"
        label="评论状态"
        :formatter = "formatter"
        >
      </el-table-column>
      <el-table-column
        prop="total_comment_count"
        label="总评论数">
      </el-table-column>
      <el-table-column
        prop="fans_comment_count"
        label="粉丝评论数">
      </el-table-column>
      <el-table-column label="操作">
          <!-- 作用域插槽 slot-scope="变量" 变量  就是 row,column,$index.store的属性集合 obj.row -->
          <template slot-scope="obj">
              <el-button type='text' size="small" >修改评论</el-button>
              <el-button @click="openOrClose(obj.row)" type='text' size="small" :style='{color:obj.row.comment_status ? "#E6A23C" :"#409EFF"}'>{{obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
          </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    //   row, column, cellValue, index  是 formatter 函数的4个参数
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
      })
    },
    // 打开或者关闭评论
    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否要${mess}评论?`, '提示').then(() => {
        // debugger
        // 写调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() }, // 传递articleId参数
          data: { allow_comment: !row.comment_status }
        }).then((result) => {
          this.getComments() // 成功之后 重新调用拉取数据的方法 => 前后台同步
        })
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>

</style>
