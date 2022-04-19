/*
 * @Author: aqi
 * @Date: 2021-09-07 09:49:06
 * @LastEditors: aqi
 * @LastEditTime: 2021-09-07 09:55:54
 * @Description: 根据url获取base64图片
 */
import LoginInfo from "../storage/login-info.js";
import {
    BIZ_BASE_URL,
    TOKEY_ATTR_NAME
} from "../const.js"
/**
 * @description 根据接口和id，返回图片
 * @param {string} 不带服务器域名/ip的接口url 如/device-base64/find-icon
 * @param {*} id 图片id 如1
 * @returns {Blob}
 */
export function getBase64Image(url, id) {
    return `${BIZ_BASE_URL}/${url}?id=${id}&${TOKEY_ATTR_NAME}=${LoginInfo.getUserInfo().token}`
}