/*
 * @Author: Billy
 * @Date: 2021-07-11 22:41:51
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 00:45:33
 * @Description: Json Web Token 的 payload 的格式(v1.0)
 */

class TokenPayload {
    /**
     * @description Json Web Token 的 payload 的格式
     * @param {string} uid 用户的id
     * @param {Array.<number>} roles 角色id的数组
     * @param {Array.<Array.<string>>} auths 权限code的二维数组，内层数组与角色id的数组元素一一对应
     */
    constructor(uid, roles = [], auths = []) {
        this.uid = uid;
        this.roles = roles;
        this.auths = auths;
    }

    /**
     * 二维数组转一维，并去重
     */
    getCleanAuths() {
        let arr = [];
        this.auths.forEach(_auths => arr = arr.concat(_auths));
        return [...new Set(arr)];
    }
}

module.exports = TokenPayload