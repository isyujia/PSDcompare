/*
 * @Author: Billy
 * @Date: 2020-08-30 23:07:45
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-22 10:55:19
 * @Description: 网盘报错类
 */
class SysError extends Error {
    constructor(code, message, data, success, timestamp) {
        super(message);
        this.code = code;
        this.data = data;
        this.success = success;
        this.timestamp = timestamp;
    }
}

module.exports = SysError;