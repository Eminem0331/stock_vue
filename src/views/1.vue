<template>
<div class="hello">
      <el-table
            :data="res"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="productId"
            label="日期"
            width="150">
            </el-table-column>
            <el-table-column
            prop="productName"
            label="岗位"
            width="120">
            </el-table-column>
            <el-table-column
            prop="prodcutPrice"
            label="手机号"
            width="120">
            </el-table-column>
            <el-table-column
            prop="prodcutImg"
            label="姓名"
            width="120">
            </el-table-column>
        </el-table>

  </div>
</template>

<script>
    import res from "/Users/eminem/Desktop/Eminem_Project/stock_vue/static/test.json"
    export default{
        name:'1',
        data(){
            return {
                res:res.result,//创建对象

            }
        },
        // mounted () {
        //   this.getGoodsList()
        // },
        // methods: {
        //   getGoodsList () {
        //     this.$axios.get('static/test.json').then((res) => {
        //         //用axios的方法引入地址
        //         this.res=res.result
        //         //赋值
        //       console.log(this.res)
        //     })
        //   }
        // }
    }
</script>