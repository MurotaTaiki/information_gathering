<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <a :href="youtube.url">{{youtube.title}}</a>
    </div>
    <p class="description">{{youtube.description}}</p>
  </el-card>
</template>

<script>
export default {
  props: ['youtube']
}
</script>