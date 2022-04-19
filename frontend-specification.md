<!--
 * @Author: Billy
 * @Date: 2021-07-13 09:00:16
 * @LastEditors: Billy
 * @LastEditTime: 2022-03-08 19:55:32
 * @Description: v2.1
-->

## 前端项目目录结构

├─api  // 对后端接口的封装，要客观反映后端接口(无论目录结构还是命名)  
│  ├─Disk  // 分类子文件夹  
│  │  └─_BaseAxios.js // Base Axios  
│  ├─Rbac  // 分类子文件夹  
│  │  └─_BaseAxios.js // Base Axios  
│  ├─_AxiosInterceptors.js  // Axios拦截器  
│  └─_ResponseHelper.js  // 针对服务器返回值的处理方法  
├─assets  // Vue静态资源  
├─biz  // 处于api和views之间的一层，用于处理业务，要做到api层只读写数据，views层基本只做界面展示，而且views层不直接调用api层；api层设计决定权在于后端开发，views层设计决定权在于产品经理及UI，biz层设计决定权在于前端开发；方法名一般以add/del/edit/update/get/find开头  
│  └─Disk  // 分类子文件夹(尽量跟views的结构有对应关系，但如果是多个页面共用的biz可以单独归类)  
├─components  // Vue组件  
│  ├─Disk  // 分类子文件夹(按大功能模块划分，尽量跟views的结构有对应关系)  
│  │  └─Recycle  // 分类子子文件夹(按小功能模块划分，尽量跟views的结构有对应关系)  
│  ├─Home  // 分类子文件夹(按大功能模块划分，尽量跟views的结构有对应关系)   
│  └─_Common  // 常用Vue组件，在此进行归类，可在其它Vue组件或Vue页面使用  
│     ├─Drag  // 分类子文件夹  
│     └─Tree  // 分类子文件夹  
├─entity  // 对象实体类，由前端定义，不能照搬后端的定义，其new出来的对象，会在biz层和views层之间流转  
│  ├─Disk  // 分类子文件夹  
│  └─Rbac  // 分类子文件夹  
├─router  
│  ├─_index.js  // 路由入口文件   
│  ├─disk.js  // 路由子分类  
│  └─user-role-auth.js  // 路由子分类   
├─scss  
│  ├─HomeScreen  // scss分类子文件夹  
│  ├─_globals.scss  // 全局scss，除element ui的重设样式，均在本文件编写或引用；在App.vue中引用本文件  
│  ├─_variables.scss  // 常用的scss常量；原则上颜色都必须定义在此  
│  └─element-ui-reset.scss  对element ui的全局级别重设，以适应UI设计；在App.vue中引用本文件
├─storage  // 对localStorage或sessionStorage的操作的封装  
│  └─login-info.js  // 针对登录的storage封装   
├─store  // Vuex  
├─svgicon  // svg图标存放于此
│  └─homescreen  
├─sys  
│  ├─SysCode.js  // 信息码，与后端返回值的code对应  
│  └─SysError.js  // 错误类  
├─util  // 常用工具类的封装(先看有没有合适用的，没有再自行实现)  
├─views  // Vue页面  
│  ├─HomeSubViews  // 业务类子页面  
│  │  ├─Disk  // 子页面分类  
│  │  └─Rbac  // 子页面分类  
│  └─SystemViews  // 管理类子页面  
├─App.vue  // 全局样式记在此文件的style标签
├─const.js  // 全局常量记在此
├─main.js  

## 编码格式
* 习惯性用“;”作为语句结尾  
* 单行注释文字前面加一个空格，如：// 注释  
* Vue 组件的 props 必须写明注释  