<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <a :href="note.url">{{note.title}}</a>
    </div>
    <p class="description">{{note.description}}</p>
  </el-card>
</template>

<script>
export default {
  props: ['note']
}
</script>