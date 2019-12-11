<template>
    <div style="padding-left: 150px;padding-right: 150px ">
    <div style="background-color: #FFFFFF" >
        <h2 style="padding-top: 20px" >{{data[0].factor}}</h2>

        <el-form ref="form" :model="form" label-width="100px" label="因子类别" label-position="right" data:data>
            <el-form-item label="因子类别:" class="bbb" style="margin-top: -20px;">
           <div class="abc">{{data[0].type}}</div>
            </el-form-item>
            <el-form-item label="计算公式:" class="bbb" style="margin-top: -20px;">
           <div class="abc">{{data[0].formula}}</div>
            </el-form-item>
            <el-form-item label="更新时间:" class="bbb" style="margin-top: -20px;">
                <div class="abc">{{data[0].time}}</div>
            </el-form-item>
            <el-form-item label="数据处理:" class="bbb" style="margin-top: -20px;">
                <div class="abc">{{data[0].handle}}</div>
            </el-form-item>
            <el-form-item label="默认参数:" class="bbb" style="margin-top: -20px;">
                <div class="abc">{{data[0].parameter}}</div>
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
            <div class="aabbcc">0.030</div>
            </el-form-item>
            </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="|IC|>0.02的比率" class = "bbb">
            <div class="aabbcc">0.030</div>
            </el-form-item>
            </div>
            </el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="IR值" class = "bbb">
            <div class="aabbcc">0.030</div>
            </el-form-item>
            </div>
            </el-col>

</el-row>
            </el-form>
        <el-divider></el-divider>
    </div>
    </div>
</template>

<script>
    import res from "/Users/eminem/Desktop/Eminem_Project/stock_vue/static/test.json"
    export default {
        name: "factor_1",
        data() {
            return {
                data:res.result,
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
    .abc {font-size:20px; }
    .aabbcc {font-size:30px; }
    .bbb {text-align: left;}

</style>