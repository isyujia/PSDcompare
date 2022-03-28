import Vue from 'vue'//在主js中引入基本的四个版块
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons';
//element-ui插件的导入和使用
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)

Vue.config.productionTip = false//生产模式提示是否开启

new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App)
}).$mount('#app')
