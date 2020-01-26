<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="ブログ">
        <blog v-for="(blog, index) in blogs" :key="index" :blog="blog"></blog>
      </el-tab-pane>
      <el-tab-pane label="youtube">Config</el-tab-pane>
      <el-tab-pane label="note">Role</el-tab-pane>
      <el-tab-pane label="履歴">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Blog from '~/components/blog.vue'

export default {
  components:{
    Blog
  },
  data(){
      return{
          blogs: [{
              title: 'マナブログ',
              description: '説明',
              url: 'https://manablog.org/'
          },
          {
            title: '未経験からエンジニアに転職してもいいじゃない',
            description: '説明',
            url: 'https://cohki0305.com/'
          }]
      }
  }
}
</script>

<style scoped lang="scss">
.container{
  margin: 20px;
}
.box-card{
  display: inline-block;
  width: 30%;
  margin: 10px 1.3%;
}
</style>