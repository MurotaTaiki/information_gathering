<template>
  <div>
    <div class="browsing-history">
      <h3>履歴</h3>
      <el-table
        :data="browsing"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日付">
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作">
        </el-table-column>
        <el-table-column
          prop="type"
          label="種類">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名前">
        </el-table-column>
      </el-table>
    </div>
    <div class="ranking-history">
      <h3>閲覧ランキング(1週間)</h3>
      <el-table
        :data="ranking"
        border
        style="width: 100%">
        <el-table-column
          prop="ranking"
          label="ランキング">
        </el-table-column>
        <el-table-column
          prop="type"
          label="種類">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名前">
        </el-table-column>
      </el-table> 
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        browsing: [{
          date: '2020/1/26 12:22',
          operation: '閲覧',
          type: 'ブログ',
          name: 'マナブログ'
        }, {
          date: '2020/1/26 1:03',
          operation: '登録',
          type: 'youtube',
          name: 'test'
        }, {
          date: '2020/1/25 12:00',
          operation: '削除',
          type: 'note',
          name: 'test'
        }, {
          date: '2019/11/4 16:41',
          operation: '閲覧',
          type: 'ブログ',
          name: 'マナブログ'
        }],
        ranking: [{
          ranking: '1',
          type: 'ブログ',
          name: 'マナブログ'
        },{
          ranking: '2',
          type: 'youtube',
          name: 'test'
        },{
          ranking: '3',
          type: 'ブログ',
          name: '未経験からエンジニアに転職してもいいじゃない'
        },{
          ranking: '4',
          type: 'note',
          name: 'テスト'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
.browsing-history{
    display:inline-block;
    width: 55%;
}
.ranking-history{
    float:right;
    width: 40%;
}
</style>
