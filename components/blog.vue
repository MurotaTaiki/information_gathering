<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <a :href="blog.url" target="_blank">{{blog.title}}</a>
    </div>
    <p class="description">{{blog.description}}</p>
  </el-card>
</template>

<script>
export default {
  props: ['blog']
}
</script>