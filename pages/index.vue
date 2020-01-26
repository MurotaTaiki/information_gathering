<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>ログイン</span>
      </div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="ユーザー名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="パスワード">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login" class="login">ログイン</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default{
  data(){
    return{
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      this.$router.push('/info')
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
}
.box-card{
  position: absolute;
  top: 100px;
  right: 25%;
  left: 25%;
}
.login{
  float: right;
  margin-bottom: 20px;
}
</style>