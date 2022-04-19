/*
 * @Author: Billy
 * @Date: 2021-07-10 20:49:58
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-22 15:22:02
 * @Description: 针对服务器返回值的一些处理方法
 */

import SysCode from "../sys/SysCode.js"
import SysError from "../sys/SysError.js"

// 一般处理方法
function handler(res) {
    if (res.data.success) {
        return res.data.result;
    } else {
        throw new SysError(
            res.data.code,
            res.data.message,
            res.data.result,
            res.data.success,
            res.data.timestamp
        );
    }
}

export default {
    handler
}