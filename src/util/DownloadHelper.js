/*
 * @Author: Billy
 * @Date: 2020-09-16 08:55:25
 * @LastEditors: Billy
 * @LastEditTime: 2021-06-06 01:59:30
 * @Description: 下载工具函数
 */

/**
 * @description 弹窗下载文件方法
 * @param {string} filePath 将要下载的文件的网址
 * @param {string} fileName 下载的文件保存本地时的文件名(含后缀)
 */
function downloadByAnchorTag(filePath, fileName = '') {
    let anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', filePath);
    anchorTag.setAttribute('download', fileName);
    anchorTag.click();
}

export default {
    downloadByAnchorTag
}