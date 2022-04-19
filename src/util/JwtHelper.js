/*
 * @Author: Billy
 * @Date: 2021-06-06 18:57:16
 * @LastEditors: Billy
 * @LastEditTime: 2021-07-29 17:28:16
 * @Description: 生成jwt和验证jwt
 */

const jwt = require('jsonwebtoken');

/**
 * 获取token对应的payload
 * @param {string} token 
 * @returns {object} payload
 */
function decodeJwt(token) {
    return jwt.decode(token, {
        // complete: true
    });
}

module.exports = {
    decodeJwt
}