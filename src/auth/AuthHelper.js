/*
 * @Author: Billy
 * @Date: 2021-09-12 21:49:24
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-17 09:22:22
 * @Description: 请输入
 */

import LoginInfo from "../storage/login-info.js"

/**
 * 检查当前用户是否具有某种权限，或某几种权限中的一种
 * @param {string|Array.<string>} paramValue 权限code或权限code的数组
 * @returns 
 */
function checkAuth(paramValue) {
    if (paramValue) {
        let auths = LoginInfo.getRbacFromToken().getCleanAuths();

        if (typeof paramValue === 'string') {
            if (auths.includes(paramValue)) return true;
            else return false;
        } else if (Array.isArray(paramValue)) {
            for (const pv of paramValue) {
                if (auths.includes(pv)) return true;
            }
            return false;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

export default {
    checkAuth
}