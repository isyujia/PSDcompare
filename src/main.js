/*
 * @Author: Billy
 * @Date: 2020-09-10 09:12:00
 * @LastEditors: Billy
 * @LastEditTime: 2022-03-07 15:03:20
 * @Description: 请输入
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/_index.js';
import store from './store';
import ElementUI from 'element-ui';
import './scss/element-variables.scss';
import "./svgicon/index.js";
import Event from './util/Event';
// import AuthHelper from "./auth/AuthHelper.js";
import SafePush from './util/SafePush';

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: 'medium'
});

Vue.prototype.$safePush = SafePush;

// 注册一个全局自定义指令 `v-auth`，用于验证权限
// Vue.directive('auth', {
//   bind: function (el, param) { },
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el, param) {
//     let pass = AuthHelper.checkAuth(param.value);
//     if (!pass) {
//       el.remove()
//     }
//   },
//   update: function (el, param) { },
//   componentUpdated: function (el, param) { },
//   unbind: function (el, param) { }
// });

// 全局事件总线
// 参考：https://zhuanlan.zhihu.com/p/72777951
// 不到必要时，不建议使用，否则容易增加全局代码复杂度
let EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    // 如果用原生的resize事件，将会损耗大量资源，因为resize事件触发的次数非常多
    // 因此把连续触发的resize事件转化为optimizedResize自定义事件，节约资源，并且组件也有足够时间重新渲染
    // 在此监听resize事件即可，不要在别处重复监听resize事件
    // 参考：https://stackoverflow.com/questions/28056716/check-if-an-element-has-event-listener-on-it-no-jquery
    Event.throttle('resize', 'optimizedResize', 500)
  }
}).$mount('#app')