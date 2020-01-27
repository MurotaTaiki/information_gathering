<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="ブログ">
        <blog v-for="(blog, index) in blogs" :key="index" :blog="blog" />
      </el-tab-pane>
      <el-tab-pane label="youtube">
        <youtube v-for="(youtube, index) in youtubes" :key="index" :youtube="youtube" />
      </el-tab-pane>
      <el-tab-pane label="note">
        <note v-for="(note, index) in notes" :key="index" :note="note" />
      </el-tab-pane>
      <el-tab-pane label="履歴">
        <history />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Blog from '~/components/blog.vue'
import Youtube from '~/components/youtube.vue'
import Note from '~/components/note.vue'
import History from '~/components/history.vue'

export default {
  components:{
    Blog,
    Youtube,
    Note,
    History
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
      }],
      youtubes: [{
        title: 'test',
        description: '説明',
        url: 'https://manablog.org/'
      }],
      notes: [{
        title: 'テスト',
        description: '説明',
        url: 'https://manablog.org/'
      }],
      // browsing: [{
      //   date: '2020/1/26 12:22',
      //   operation: '閲覧',
      //   type: 'ブログ',
      //   name: 'マナブログ'
      // }, {
      //   date: '2020/1/26 1:03',
      //   operation: '登録',
      //   type: 'youtube',
      //   name: 'test'
      // }, {
      //   date: '2020/1/25 12:00',
      //   operation: '削除',
      //   type: 'note',
      //   name: 'test'
      // }, {
      //   date: '2019/11/4 16:41',
      //   operation: '閲覧',
      //   type: 'ブログ',
      //   name: 'マナブログ'
      // }],
      // ranking: [{
      //   ranking: '1',
      //   type: 'ブログ',
      //   name: 'マナブログ'
      // },{
      //   ranking: '2',
      //   type: 'youtube',
      //   name: 'test'
      // },{
      //   ranking: '3',
      //   type: 'ブログ',
      //   name: '未経験からエンジニアに転職してもいいじゃない'
      // },{
      //   ranking: '4',
      //   type: 'note',
      //   name: 'テスト'
      // }]
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  margin: 20px;
  .box-card{
    display: inline-block;
    width: 30%;
    margin: 10px 1.3%;
  }
}
</style>