import Vue from 'vue'//在主js中引入基本的四个版块
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons';
//element-ui插件的导入和使用
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios框架
import axios from 'axios'

import * as API from '@/api';

Vue.use(element)
Vue.config.productionTip = false//生产模式提示是否开启

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份 
    "d+": this.getDate(),                    //日 
    "h+": this.getHours(),                   //小时 
    "m+": this.getMinutes(),                 //分 
    "s+": this.getSeconds(),                 //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds()             //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$http = axios
    Vue.prototype.$api = API
  },
  render: h => h(App)
}).$mount('#app')
