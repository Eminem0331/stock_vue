<template>
    <div style="padding-left: 150px;padding-right: 150px ">
    <div style="background-color: #FFFFFF">
        <h2 style="padding-top: 20px">净盈余ROE_除非</h2>

        <el-form ref="form" :model="form" label-width="100px" label-position="right">
            <el-form-item label="因子类别:" class="bbb" style="margin-top: -20px;">
           <div class="abc">基础财务因子</div>
            </el-form-item>
            <el-form-item label="计算公式:" class="bbb" style="margin-top: -20px;">
           <div class="abc">净盈余ROE_除非</div>
            </el-form-item>
            <el-form-item label="更新时间:" class="bbb" style="margin-top: -20px;">
                           <div class="abc">下一交易日早晨9:00前更新</div>
            </el-form-item>
                       <el-form-item label="数据处理:" class="bbb" style="margin-top: -20px;">
                           <div class="abc">中位数去极值->行业市值对数中性化->zscore标准化-></div>
            </el-form-item>
                       <el-form-item label="默认参数:" class="bbb" style="margin-top: -20px;">
                           <div class="abc">加权方式为按市值加权</div>
            </el-form-item>
         <el-divider></el-divider>
            <el-row :gutter="10">
            <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="组合构建:">
                <el-select v-model="select1" placeholder="纯多头组合">
            <el-option label="纯多头组合" value="纯多头组合"></el-option>
                <el-option label="多空组合 I" value="多空组合 I"></el-option>
                <el-option label="多空组合 II" value="多空组合 II"></el-option>
                    </el-select>

            </el-form-item>
            </div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple">
         <el-form-item label="股票池:">
                    <el-select v-model="select2" placeholder="沪深300">
                <el-option label="沪深300" value="沪深300"></el-option>
                <el-option label="上证180" value="上证180"></el-option>
                <el-option label="深证100" value="深证100"></el-option>
                <el-option label="中证100" value="中证100"></el-option>
                <el-option label="中证500" value="中证500"></el-option>
                    </el-select>
                   </el-form-item>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
         <el-form-item label="回测区间:">
             <el-select v-model="select3" placeholder="近1年">
                <el-option label="近3个月" value="近3个月"></el-option>
                <el-option label="近6个月" value="近6个月"></el-option>
                <el-option label="近1年" value="近1年"></el-option>
                <el-option label="近3年" value="近3年"></el-option>
                <el-option label="近10年" value="近10年"></el-option>
                    </el-select>
         </el-form-item>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
         <el-form-item label="过滤停牌股:">
             <el-select v-model="select4" placeholder="是">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
                    </el-select>
         </el-form-item>
  </div></el-col>
</el-row>

            <el-row :gutter="10">
            <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="调仓周期:">
                <el-select v-model="select5" placeholder="1天" disabled>
                <el-option label="1天" value="1天"></el-option>
                    </el-select>
            </el-form-item>
            </div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple">
         <el-form-item label="调仓时间:">
             <el-select v-model="select6" placeholder="当天/15:00" disabled>
                <el-option label="1天" value="当天/15:00"></el-option>
                    </el-select>
                   </el-form-item>
  </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
         <el-form-item label="手续费及滑点:" label-width="120px">
                          <el-select v-model="select7" placeholder="无" style="width: 180px;float: left">
                <el-option label="无" value="无"></el-option>
                <el-option label="3‱佣金+1‰印花税+无滑点" value="3‱佣金+1‰印花税+无滑点"></el-option>
                <el-option label="3‱佣金+1‰印花税+1‰滑点" value="3‱佣金+1‰印花税+1‰滑点"></el-option>
                    </el-select>
         </el-form-item>
  </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
  <el-form-item label-width="0px">
    <el-button type="primary" @click="onSubmit" style="width:120px;">确定</el-button>
  </el-form-item>
  </div></el-col>
</el-row>
            </el-form>

<el-divider></el-divider>

        <el-form  ref="form" :model="form" label-width="100px" label-position="top" >
            <el-row :gutter="10">
            <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="IC均值" class = "bbb">
            <div class="abc">0.030</div>
            </el-form-item>
            </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="IC均值" class = "bbb">
            <div class="abc">0.030</div>
            </el-form-item>
            </div>
            </el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="IC均值" class = "bbb">
            <div class="abc">0.030</div>
            </el-form-item>
            </div>
            </el-col>

</el-row>
            </el-form>


        <el-divider></el-divider>
    </div>

    <div>
        <el-table
                :data="data1"
                highlight-current-row
                style="width: 100%">
            <el-table-column
                    prop="a"
                    label="因子"
                    sortable
                    align="center"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                <router-link v-bind:to="'/factor'" class="a">{{scope.row.a}}</router-link>
                </template>
            </el-table-column>

            <el-table-column
                    prop="b"
                    label="因子日期"
                    sortable
                    align="center"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="c"
                    sortable
                    label="最小分位数收益率"
                    align="center"
                    show-overflow-tooltip >
                <template slot-scope="scope">
                    <div v-html="xiaoshudian(scope.row.c*100)+'%'" v-if="scope.row.c > 0 " style="color: red"></div>
                    <div v-html="xiaoshudian(scope.row.c*100)+'%'" v-if="scope.row.c <= 0 " style="color: green"></div>

                </template>
            </el-table-column>
            <el-table-column
                    prop="d"
                    sortable
                    label="最大分位数收益率"
                    align="center"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                    <div v-html="xiaoshudian(scope.row.d*100)+'%'" v-if="scope.row.d > 0 " style="color: red"></div>
                    <div v-html="xiaoshudian(scope.row.d*100)+'%'" v-if="scope.row.d <= 0 " style="color: green"></div>

                </template>
            </el-table-column>
            <el-table-column
                    prop="e"
                    sortable
                    label="最小分位数换手率"
                    align="center"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                    <div v-html="xiaoshudian(scope.row.e*100)+'%'" v-if="scope.row.e > 0 " style="color: red"></div>
                    <div v-html="xiaoshudian(scope.row.e*100)+'%'" v-if="scope.row.e <= 0 " style="color: green"></div>

                </template>
            </el-table-column>
            <el-table-column
                    prop="f"
                    sortable
                    label="最大分位数换手率"
                    align="center"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                    <div v-html="xiaoshudian(scope.row.f*100)+'%'" v-if="scope.row.e > 0 " style="color: red"></div>
                    <div v-html="xiaoshudian(scope.row.f*100)+'%'" v-if="scope.row.e <= 0 " style="color: green"></div>
                </template>
            </el-table-column>
        </el-table>
    </div>
    </div>
</template>

<script>
    export default {
        name: "factor_1",
        data() {
            return {
                data1:[
                    {
                    "a": "净盈余ROE_除非",
                    "b": "2017-03-31",
                    "c": -0.142462498635306,
                    "d": -0.000984779931298108,
                    "e": 0.26158038147139,
                    "f": 0.223433242506812
                }, {
                    "a": "流动比率",
                    "b": "2017-03-31",
                    "c": -0.076765433704721,
                    "d": -0.123818795354462,
                    "e": 0.132963988919667,
                    "f": 0.174515235457064
                }, {
                    "a": "速动比率",
                    "b": "2017-03-31",
                    "c": -0.0800485906265397,
                    "d": -0.118144911802922,
                    "e": 0.152354570637119,
                    "f": 0.182825484764543
                }, {
                    "a": "资产负债率",
                    "b": "2017-03-31",
                    "c": -0.121131051165965,
                    "d": -0.0632991427820417,
                    "e": 0.171195652173913,
                    "f": 0.108991825613079
                }, {
                    "a": "营业总收入同比增长率",
                    "b": "2017-03-31",
                    "c": -0.128259939612205,
                    "d": -0.067886912435236,
                    "e": 0.335149863760218,
                    "f": 0.305177111716621
                }, {
                    "a": "营业收入同比增长率",
                    "b": "2017-03-31",
                    "c": -0.127823479618155,
                    "d": -0.0676418564514531,
                    "e": 0.335149863760218,
                    "f": 0.305177111716621
                }, {
                    "a": "每股货币资金",
                    "b": "2017-03-31",
                    "c": -0.117949389487257,
                    "d": -0.0571739384951644,
                    "e": 0.298630136986301,
                    "f": 0.235616438356164
                }, {
                    "a": "基本每股收益",
                    "b": "2017-03-31",
                    "c": -0.146017374873255,
                    "d": -0.00494984661081368,
                    "e": 0.310810810810811,
                    "f": 0.215846994535519
                }, {
                    "a": "商誉营",
                    "b": "2017-03-31",
                    "c": -0.104535609712757,
                    "d": -0.058123747196091,
                    "e": 0.140186915887851,
                    "f": 0.0887850467289719
                }, {
                    "a": "业收入同比增长率",
                    "b": "2017-03-31",
                    "c": -0.127823479618155,
                    "d": -0.0676418564514531,
                    "e": 0.335149863760218,
                    "f": 0.305177111716621
                }, {
                    "a": "期末总股本",
                    "b": "2017-03-31",
                    "c": -0.142046264612683,
                    "d": -0.0259636369483653,
                    "e": 0.133152173913043,
                    "f": 0.0844686648501363
                }, {
                    "a": "年净益率",
                    "b": "2017-03-31",
                    "c": -0.144068374724451,
                    "d": -0.00306816234161971,
                    "e": 0.315217391304348,
                    "f": 0.267029972752043
                }, {
                    "a": "市盈率",
                    "b": "2017-03-31",
                    "c": -0.0123132726900437,
                    "d": -0.133948769176186,
                    "e": 0.223880597014925,
                    "f": 0.435820895522388
                }, {
                    "a": "市盈率_TTM",
                    "b": "2017-03-31",
                    "c": -0.00534895259749867,
                    "d": -0.125565476900449,
                    "e": 0.187311178247734,
                    "f": 0.366666666666667
                }, {
                    "a": "市净率",
                    "b": "2017-03-31",
                    "c": -0.0399430655583701,
                    "d": -0.135196088239916,
                    "e": 0.171662125340599,
                    "f": 0.243169398907104
                }],
                select1: '',
                select2: '',
                select3: '',
                select4: '',
                select5: '',
                select6: '',
                select7: '',
                form: {
                    type: ['财务因子'],
                    resource: '中证500',
                    handlingfee:'无',
                    combinationstrategy:'纯多头组合',
                }
            }
        },
        methods: {
            onSubmit() {
                // eslint-disable-next-line no-console
                console.log('submit!');
            },
            xiaoshudian: function(number) {
                number = String(number).replace(/^(.*\..{4}).*$/,"$1");
                number = Number(number); // number = 12.3321
                return number

            }

        }
    }
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
    background: #BEBEBE;
  }
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
    .abc {font-size:20px; }
    .bbb {text-align: left;}

</style>