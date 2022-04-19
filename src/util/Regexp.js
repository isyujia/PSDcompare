/*
 * @Author: Billy
 * @Date: 2021-05-03 02:31:05
 * @LastEditors: Billy
 * @LastEditTime: 2021-08-24 17:02:16
 * @Description: 请输入
 */

/**
 * @description 验证手机号是否是有效手机号
 * @param {String} telephone 需要验证的手机号码
 * @returns {Boolean}
 * @see https://blog.csdn.net/u011415782/article/details/85601655
 */
const TEL_REG_EXP = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;

function isTelephoneValid(telephone) {
    return TEL_REG_EXP.test(telephone);
}

/**
 * @description 验证邮箱是否为有效邮箱格式
 * @param {String} email 需要验证的邮箱
 * @returns {Boolean}
 * @see https://www.cnblogs.com/stellar/p/5888163.html
 */
const EMAIL_REG_EXP = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

function isEmailValid(email) {
    return EMAIL_REG_EXP.test(email);
}

const PW_REG_EXP = /^[A-Za-z\d]{5,18}$/;

/**
 * @description 验证密码是否正确
 * @param {string} password 密码
 * @returns {Boolean}
 */
function isPasswordValid(password) {
    return PW_REG_EXP.test(password);
}

// 经纬度参考 https://developer.aliyun.com/article/618783

const LONGITUDE_REGEX = /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/;

function isLongitudeCorrect(value) {
    return LONGITUDE_REGEX.test(value);
}

const LATITUDE_REGEX = /^[\-\+]?((0|([1-8]\d?))(\.\d{1,10})?|90(\.0{1,10})?)$/;

function isLatitudeCorrect(value) {
    return LATITUDE_REGEX.test(value);
}

export default {
    isTelephoneValid,
    isEmailValid,
    isPasswordValid,
    isLongitudeCorrect,
    isLatitudeCorrect
}