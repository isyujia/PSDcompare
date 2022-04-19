/*
 * @Author: Billy
 * @Date: 2022-01-10 17:00:37
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-10 17:05:18
 * @Description: 请输入
 */

class CommonResult {
    /**
     * @description 通用数据格式类
     * @param {object|Array.<object>} data 数据
     * @param {string} message 操作信息(一般由后端返回)
     */
    constructor(data, message) {
        this.data = data;
        this.message = message;
    }
}

export default CommonResult;