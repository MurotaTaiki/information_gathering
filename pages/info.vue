<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="ブログ">
        <el-button type="primary" class="add-button" @click="dialogFormVisible = true">追加</el-button>
        <el-dialog title="ブログ追加" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="タイトル">
              <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="URL">
              <el-input v-model="form.url" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="説明">
              <el-input v-model="form.description" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">閉じる</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">登録</el-button>
          </span>
        </el-dialog>
        <blog v-for="(blog, index) in blogs" :key="index" :blog="blog" />
      </el-tab-pane>
      <el-tab-pane label="youtube">
        <el-button type="primary" class="add-button" @click="addYoutube">追加</el-button>
        <youtube v-for="(youtube, index) in youtubes" :key="index" :youtube="youtube" />
      </el-tab-pane>
      <el-tab-pane label="note">
        <el-button type="primary" class="add-button" @click="addNote">追加</el-button>
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
      notes: [],
      dialogFormVisible: false,
        form: {
          title: '',
          url: '',
          description: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
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
  },
  methods: {
    addBlog(){
      alert('ブログ')
    },
    addYoutube(){
      alert('youtube')
    },
    addNote(){
      alert('note')
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  margin: 20px;
  .add-button{
    display: block;
    margin: 0 0 0 auto;
  }
  .box-card{
    display: inline-block;
    width: 30%;
    margin: 10px 1.3%;
  }
}
</style>