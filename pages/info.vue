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
import axios from 'axios'

export default {
  components:{
    Blog,
    Youtube,
    Note,
    History
  },
  data(){
    return{
      blogs: [],
      youtubes: [],
      notes: []
    }
  },
  mounted() {
    axios.post('http://localhost:8080/api/info', this.$store.state.userId)
      .then((response) => {
        response.data.forEach(element => {
          if(element.typeId === 1){
            this.blogs.push({
              title: element.title,
              description: element.description,
              url: element.url
            })
          }else if(element.typeId === 2){
            this.youtubes.push({
              title: element.title,
              description: element.description,
              url: element.url
            })
          }else if(element.typeId === 3){
            this.notes.push({
              title: element.title,
              description: element.description,
              url: element.url
            })
          }
        });
      })
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