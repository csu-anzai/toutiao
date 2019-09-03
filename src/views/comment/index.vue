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
          <template slot-scope="obj">
              <el-button type='text' size="small" >修改评论</el-button>
              <el-button type='text' size="small" :style='{color:obj.row.comment_status ? "#E6A23C" :"#409EFF"}'>{{obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
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
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>

</style>
