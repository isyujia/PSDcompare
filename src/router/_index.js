/*
 * @Author: Billy
 * @Date: 2020-09-10 09:12:00
 * @LastEditors: Billy
 * @LastEditTime: 2022-03-07 15:30:56
 * @Description: 静态路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Qs from "qs";
import Home from '../views/Home.vue'
import {
  PROJECT_NAME,
  IS_LOGIN_NEEDED
} from '../const.js'
import LoginInfo from "../storage/login-info.js";
import MainChildren from "./main.js";

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Default',
  redirect: {
    name: 'Home'
  },
}, {
  path: '/home',
  // alias: '/home',
  name: 'Home',
  redirect: {
    name: 'HomeCompare'
  },
  component: Home,
  meta: {
    title: ''
  },
  children: [
    ...MainChildren,
  ]
}, {
  path: '/login',
  name: 'Login',
  component: () => import( /* webpackChunkName: "Login" */ '../views/SystemViews/Login.vue'),
  meta: {
    title: '登录页'
  }
}, {
  path: '/error/:code/:message',
  name: 'Error',
  component: () => import( /* webpackChunkName: "Error" */ '../views/SystemViews/Error.vue'),
  meta: {
    title: '出错了'
  }
}, {
  // 其它情况，全都跳转到404页
  path: '*',
  name: 'NotFound',
  component: () => import( /* webpackChunkName: "NotFound" */ '../views/SystemViews/NotFound.vue'),
  meta: {
    title: '404'
  }
}]

const router = new VueRouter({
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 组装完整的页面title
    document.title = PROJECT_NAME + '-' + to.meta.title
  }

  if (IS_LOGIN_NEEDED) {
    if (to.name === 'Register' || to.name === 'ResetPassword' || to.name === 'NotFound' || to.name === 'Error') {
      // 用户尝试访问注册页、重置密码页、一个不存在的页面 或者 错误页
      next()
    } else if (
      to.name !== 'Login' &&
      !LoginInfo.getUserInfo()
    ) {
      // 用户不是访问登录页，并且用户状态为未登录
      let queryString = Qs.stringify(to.query, {
        encode: false
      });

      next({
        name: 'Login',
        query: {
          routeName: to.name,
          queryString: queryString ? queryString : undefined
        }
      });
    }
  }

  next()
})

export default router