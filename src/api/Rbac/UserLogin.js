/*
 * @Author: Billy
 * @Date: 2021-09-22 09:42:40
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-22 23:15:29
 * @Description: 请输入
 */

import BaseAxios from "./_BaseAxios.js";
import ResHelper from "../_ResponseHelper.js"

/**
 * @description 登录方法
 * @param {string} username 用户名(必填)
 * @param {string} password 密码(必填)
 * @param {string} captcha 验证码(非必填)
 * @param {string} checkKey 验证码key(非必填)
 */
function login({
    username,
    password,
    captcha,
    checkKey
}) {
    return BaseAxios({
        url: `/sys/login`,
        method: "post",
        data: {
            username,
            password,
            captcha,
            checkKey
        }
    }).then(ResHelper.handler);
}

/**
 * @description 退出登录方法
 */
function logout() {
    return BaseAxios({
        url: `/sys/logout`,
        method: "post"
    }).then(ResHelper.handler);
}

export default {
    login, // 登录方法
    logout // 退出登录方法
}