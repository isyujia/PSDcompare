/*
 * @Author: Aardpro
 * @Date: 2021-07-01 10:24:35
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-23 01:01:49
 * @Description: 自动加载当前目录和所有子目录下的svg文件
 * 使用说明
 * 把svg图标文件分门别类地存在本目录下（子目录）
 * 在vue的template部分使用 <svg-icon icon-class="svg文件名" icon-style="样式" class-name="样式类名"></svg-icon>
 */

import Vue from 'vue';
import SvgIcon from './SvgIcon.vue'; // svg component

// 全局注册组件
Vue.component('SvgIcon', SvgIcon);

const req = require.context('./', true, /\.svg$/);
((requireContext) => requireContext.keys().map(requireContext))(req); // 参考：https://segmentfault.com/a/1190000019723837