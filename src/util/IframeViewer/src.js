/*
 * @Author: Billy
 * @Date: 2021-03-08 15:56:33
 * @LastEditors: Billy
 * @LastEditTime: 2021-07-20 09:40:16
 * @Description: 请输入
 */

import Qs from "qs";
import {
    IFRAME_NAME,
    IFRAME_2D_NAME
} from "../../const.js"

/**
 * 生成iframe的src的方法（3d）
 * @param {string} projectKey 即modelDb key
 * @param {Array.<string>} modelKeys 模型key的数组(可包含多个模型的意思)
 * @param {string} base3dUrl 3d url
 * @param {boolean} hasToolBar 是否显示工具栏
 * @param {boolean} hasController 控制是否显示viewer右上角的6面体
 * @param {number} iframeTimeStamp 用时间作为iframe的id(用于刷新iframe（原理是只要url有改变，iframe即自动重新加载）)
 * @param {boolean} isShare 是否显示右下角”联系我们“
 */
function InitSrc(projectKey, modelKeys, base3dUrl, hasToolBar, hasController, iframeTimeStamp, isShare = false) {
    // 把初始化viewer及模型所需的参数以get方式传递给iframe
    let iframeFileName = IFRAME_NAME;
    let _src = `./3d-viewer/${iframeFileName}?`;

    let params = {
        projectKey: projectKey,
        modelKeys: modelKeys.join(","),
        host: base3dUrl,
        hasToolBar: hasToolBar,
        hasController: hasController,
        timeStamp: iframeTimeStamp
    };

    if (isShare) params.share = true;

    let paramStr = Qs.stringify(params, {
        encode: false
    });
    _src += paramStr;
    return _src;
}

/**
 * 生成iframe的src的方法（2d）
 * @param {string} projectKey 即modelDb key
 * @param {Array.<string>} modelKeys 模型key的数组(可包含多个模型的意思)
 * @param {string} base3dUrl 3d url
 * @param {number} iframeTimeStamp 用时间作为iframe的id(用于刷新iframe（原理是只要url有改变，iframe即自动重新加载）)
 * @param {boolean} isShare 是否显示右下角”联系我们“
 */
function InitSrcFor2d(projectKey, modelKeys, base3dUrl, iframeTimeStamp, isShare = false) {
    // 把初始化viewer及模型所需的参数以get方式传递给iframe
    let iframeFileName = IFRAME_2D_NAME;
    let _src = `./2d-viewer/${iframeFileName}?`;

    let params = {
        projectKey: projectKey,
        modelKeys: modelKeys.join(","),
        host: base3dUrl,
        timeStamp: iframeTimeStamp
    };

    if (isShare) params.share = true;

    let paramStr = Qs.stringify(params, {
        encode: false
    });
    _src += paramStr;
    return _src;
}

export default {
    InitSrc,
    InitSrcFor2d
}