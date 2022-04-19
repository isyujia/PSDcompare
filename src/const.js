/*
 * @Author: Billy
 * @Date: 2020-09-10 09:49:13
 * @LastEditors: Billy
 * @LastEditTime: 2022-03-07 15:17:54
 * @Description: 配置文件
 */
export const PROJECT_NAME = '示例';
export const LOGIN_PAGE_TITLE = '前端示例 2';
export const TOKEY_ATTR_NAME = 'X-Access-Token'; // TOKEN的属性名(即客户端传token到服务端，token的属性名)
export const IS_LOGIN_NEEDED = true; // 系统是否需要登录后使用

let baseUrl; // 基础API地址
switch (process.env.NODE_ENV) {
    case "production": // 发布到服务器 npm run build
    case "preview": // 发布前预览 npm run preview
    {
        baseUrl = 'http://ty.y68.fun/sales-expo-saas'; // swagger http://ty.y68.fun/sales-expo-saas/#/
        break;
    }
    case "development": // 本机前端开发调试 npm run serve
    default:
        baseUrl = 'http://ty.y68.fun/sales-show-3'; // swagger http://ty.y68.fun/sales-expo-saas/#/
        // baseUrl = '/api';
        break;
}
export const BASE_URL = baseUrl;

export const TIMEOUT = 10000; // 一般请求超时时间
export const UPLOAD_TIMEOUT = 0; // 指定文件上传请求超时的毫秒数(0 表示无超时时间)

// ---------- EIM --------------------------------------------------
// export const BASE_BOS_URL = 'http://eim.beta.i3vgroup.cn:8080';
// export const BASE_3D_URL = 'http://eim.beta.i3vgroup.cn:82';
// export const APP_KEY = 'k4718b198e0b41c2abf4069dcb47eecf';
// export const EIM_USER_NAME = 'test01';
// export const EIM_PASSWORD = '123456';

// export const IFRAME_NAME = "iframe-viewer-eim-0225.html"; // iframe的html的名称
// export const IFRAME_2D_NAME = "iframe-viewer-2d.html"; // iframe的html的名称

// export const UPLOAD_MODEL_MAX_SIZE = 100; // 上传模型的最大允许大小，单位mb
// export const DOWNLOAD_CANCEL = "DOWNLOAD_CANCEL"; // 用于专门指示axios的cancel token取消下载的操作

// // 示例模型的信息
// export const EXAMPLE_MODEL_INFO = {
//     base3dUrl: 'http://eim.i3vgroup.cn:8081',
//     appKey: 'fd5ba6a10c4b429faef65117aba2a25a',
//     projectKey: 'p30faf7851d042a08290fb8ea5e18841',
//     modelKeys: ['M1616334467556'],
// }
// ---------- EIM --------------------------------------------------

export const DEFAULT_HOME_LAYOUT = ['top-bottom', 'left-right'][0]; // 网站前台是上下布局还是左右布局
export const DEFAULT_BACK_LAYOUT = ['top-bottom', 'left-right'][0]; // 网站后台是上下布局还是左右布局
export const HEADER_THICKNESS = 48; // 首页头部尺寸(单位：像素)