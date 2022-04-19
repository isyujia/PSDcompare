/*
 * @Author: Billy
 * @Date: 2021-06-20 01:04:22
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 15:40:14
 * @Description: 用户类
 */

import Parent from '../_Common/Parent.js'

class User extends Parent {
    /**
     * @description 创建用户类
     * @param {string} token 登录凭据
     * @param {string} username 登录用户名
     * @param {string} realname 登录用户名
     * @param {boolean} isRememberMe 是否记住我
     */
    constructor({
        token,
        username,
        realname,
        isRememberMe = true, // 是否记住我，是则记在localStorage，否则记在sessionStorage
        ...rest
    }) {
        super(rest);
        this.token = token;
        this.username = username;
        this.realname = realname;
        this.isRememberMe = isRememberMe;
    }
}

export default User