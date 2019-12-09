<template>
    <div style="padding-left: 300px;padding-right: 300px ">
    <div style="background-color: #FFFFFF">
        <h2 style="padding-top: 20px">因子看板</h2>
        <el-divider></el-divider>


        <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="因子分类:">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="财务因子" name="type"></el-checkbox>
                    <el-checkbox label="情绪类因子" name="type"></el-checkbox>
                    <el-checkbox label="动量类因子" name="type"></el-checkbox>
                    <el-checkbox label="成长类因子" name="type"></el-checkbox>
                    <el-checkbox label="技术指标因子" name="type"></el-checkbox>
                    <el-checkbox label="风险类因子" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="股票池:">
                <el-radio-group v-model="form.resource">
                    <el-radio label="沪深300"></el-radio>
                    <el-radio label="中证500"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手续费及滑点:">
                <el-radio-group v-model="form.handlingfee">
                    <el-radio label="无"></el-radio>
                    <el-radio label="3‱佣金+1‰印花税+无滑点"></el-radio>
                    <el-radio label="3‱佣金+1‰印花税+1‰滑点"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="组合策略:">
                <el-radio-group v-model="form.combinationstrategy">
                    <el-radio label="纯多头组合"></el-radio>
                </el-radio-group>
            </el-form-item>

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
        name: "formtwo",
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

<style scoped>
    .a{text-decoration: none;}
</style>