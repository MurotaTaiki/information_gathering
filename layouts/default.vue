<template>
  <div>
    <div class="header">
      <span class="header-info">情報収集</span>
      <span class="header-logout">ログアウト</span>
    </div>
    <div class="main-content">
      <nuxt/>
    </div>
  </div>
</template>

 <style lang="scss">
 body{
   margin: 0;
 }
.header{
  width: 100%;
  height: 60px;
  background-color: aqua;
  .header-info {
    display: inline-block;
    margin: 0;
    padding: 10px 0 10px 20px;
    font-size: 25px;
  }
  .header-logout{
    float: right;
    padding: 10px;
    color: gray;
  }
} 
 </style>