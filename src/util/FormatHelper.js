/*
 * @Author: Billy
 * @Date: 2021-05-05 17:36:21
 * @LastEditors: Billy
 * @LastEditTime: 2021-08-24 16:59:56
 * @Description: 工具函数集
 */

/**
 * @description 检验数字字符串是否为正确的正整数
 * @param {String} strNum 数字字符串
 * @returns {Boolean} 检验结果
 */
function isPositiveInt(strNum) {
    if (typeof strNum === "number") {
        strNum += '';
    }
    return /^[1-9][0-9]*$/.test(strNum);
}

export default {
    isPositiveInt
}