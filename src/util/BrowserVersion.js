/*
 * @Author: Billy
 * @Date: 2020-09-22 17:44:24
 * @LastEditors: Billy
 * @LastEditTime: 2021-06-06 01:58:59
 * @Description: 请输入
 */

/**
 * @description 获取浏览器版本（例如：chrome 64）
 * @see https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser
 * @param userAgent 传参则解析参数的内容，否则读取本机浏览器信息
 * @returns {object} 形如 {name: chrome, version: 64}
 */
function getVersion(userAgent) {
    var ua = userAgent || navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
            name: 'IE',
            version: (tem[1] || '')
        };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) {
            return {
                name: 'Opera',
                version: tem[1]
            };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}

export default {
    getVersion
}