import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import Highcharts from 'highcharts'
import Highchartsmore from 'highcharts/highcharts-more'
import elementui from 'element-ui'
import {Switch,Transfer} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.prototype.$axios=axios

Highchartsmore(Highcharts);
Vue.use(Highcharts);
Vue.use(elementui);
Vue.use(axios);
// Vue.use(Transfer);
// Vue.use(Switch);
Vue.config.productionTip=false;

//设置api接口提交数据的json格式
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.timeout = 1000;


//设置和django交互的crsf权限
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
  return config
});

new Vue({
  router,
  render: h => h(App),
  methods: {

    moreChart() {
      var options = this.getMoreOptions(this.type);

      if (this.chart) {
        this.chart.destroy()
      }
      // 初始化 Highcharts 图表
      this.chart = new Highcharts.Chart('Highcharts', options)
    }
  }

}).$mount('#app');
