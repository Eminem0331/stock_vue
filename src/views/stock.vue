<template>
    <div style="padding-left: 100px;padding-right: 100px ">
    <div style="background-color: #FFFFFF">
        <h2 style="padding-top: 20px">智能选股</h2>
        <el-divider></el-divider>
        <el-form ref="form" :model="form" label-width="80px"  label-position="left" >

         <el-row :gutter="12" >
          <el-col :span="5"><div class="grid-content bg-purple">
                        <el-form-item label-width="0">
                         <div class="abc">第1步:请选择一个股票池</div>
                            </el-form-item>
           </div>
           </el-col>

          <el-col :span="8"><div class="grid-content bg-purple">

                  <el-form-item label="股票池:">
                    <el-select v-model="benchmark" placeholder="请选择"  style="width:120px;float: left">
                    <el-option l v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                    </el-select>
                   </el-form-item>
           </div>
         </el-col>
         </el-row>
         <el-col :span="5"><div class="grid-content bg-purple">
                       <el-form-item label-width="0">
                        <div class="abc">第2步:请选择因子</div>
                       </el-form-item>
          </div>
           </el-col>
            <el-row :gutter="12" >
            <el-col :span="16"><div class="grid-content bg-purple">
            <el-form-item label="因子库:" >
              <el-transfer
                      v-model="select_factor"
                      :data="factor_list"
                      filterable
                      :titles="['因子库', '已选因子']"
                      :button-texts="['移除因子', '选择因子']"
                      style="text-align: left; display:inline-block;float: left"
              >
              </el-transfer>
            </el-form-item>
            </div></el-col>
</el-row>

            <el-row type="flex" justify="center">
  <el-col ><div class="grid-content bg-purple">
                     <el-table
                            stripe
                            border
                            highlight-current-row
                            :data="select_result"
                    >
                        <el-table-column
                                label="因子名"
                                prop="factor"
                    align="center"
                    show-overflow-tooltip>
                            <template slot-scope="scope">
                <router-link v-bind:to="'/factor'" class="a">{{scope.row.factor}}</router-link>
                </template>
                        </el-table-column>
                         <el-table-column
                                label="规则关系符"
                                prop="rule_fix">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.rule_fix" placeholder="请选择" >
                                    <el-option label="=" value="="></el-option>
                                    <el-option label=">" value=">"></el-option>
                                    <el-option label=">=" value=">="></el-option>
                                    <el-option label="<" value="<"></el-option>
                                    <el-option label="<=" value="<="></el-option>
                                 </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="阈值"
                                prop="rule_value">
                            <template slot-scope="scope">
                                <el-input
                                        v-model="scope.row.rule_value">
                                </el-input>
                            </template>
                        </el-table-column>
                    </el-table>
      </div>
</el-col>
         </el-row>

<el-row type="flex" justify="center">
  <el-col :span="4"><div class="grid-content bg-purple">
  <el-form-item label-width="0px" >
    <el-button type="primary" @click="onSubmit"  style="width:120px;float: contour">确定</el-button>
  </el-form-item>
  </div></el-col>
         </el-row>
            </el-form>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import benchmark from "/Users/eminem/Desktop/Eminem_Project/stock_vue/static/benchmark.json"
    import factor from "/Users/eminem/Desktop/Eminem_Project/stock_vue/static/factor.json"

    export default {
        name: "stock",
        data() {
         return {
          options:benchmark.result,
             factor_list:factor.result,
          select1: '',
          select2: '',
          select3: '',
          benchmark: '',
          select_factor: [],
             select_result:[],
         }

        },
                methods: {
                    handleChange(value, direction, movedKeys) {
                    console.log(value, direction, movedKeys);
                    },
                    onSubmit(){
                        // eslint-disable-next-line no-console
                        console.log('submit!');},
                    xiaoshudian: function (number) {
                        number = String(number).replace(/^(.*\..{4}).*$/, "$1");
                        number = Number(number); // number = 12.3321
                        return number}
                },
         watch: {
            select_factor: function () {
                const factor_duibi=[]
                const arr_and = Array.from(new Set([...factor_duibi].filter(x => new Set(this.select_factor).has(x))))
                const arr_diff = Array.from(new Set([...this.select_factor].filter(x => !new Set(arr_and).has(x))));
                const select_result_new = []


                for (var j = 0; j < arr_diff.length; j++) {
                    select_result_new.push({
                        "factor_id": factor.result[arr_diff[j]]['key'],
                        "factor": factor.result[arr_diff[j]]['label']
                    })
                }


                this.select_result = select_result_new
                console.log(this.select_result);


            }


        },


    };
</script>

<style >
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #FF0000;
  }
  .bg-purple {
    background: #FFFFFF;
  }
  /*  .bg-purple {*/
  /*  background: #BEBEBE;*/
  /*}*/
  .bg-purple-light {
    background: #FFFFFF;
  }
  .grid-content {
    border-radius: 10px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
     .el-select  {
    width: 140px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
    .abc {font-size:16px; }
    .bbb {text-align: left;}

</style>



