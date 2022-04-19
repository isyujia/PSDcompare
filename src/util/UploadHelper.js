/*
 * @Author: Billy
 * @Date: 2020-09-18 14:04:17
 * @LastEditors: Billy
 * @LastEditTime: 2021-06-06 02:02:30
 * @Description: 上传工具函数(弃用，有一点参考价值，暂时保留不删除)
 */

/**
 * @description 弹窗上传文件方法
 * @param {string} actionPath 上传文件的接口网址
 * @param {string} filePath 将要上传文件的目录的相对路径
 */
function uploadByForm(actionPath, filePath) {
    let formTag = document.createElement('form');
    formTag.setAttribute("enctype", "multipart/form-data");
    formTag.setAttribute("method", "post");
    formTag.setAttribute("action", actionPath);

    let inputPath = document.createElement('input');
    inputPath.setAttribute("type", "text");
    inputPath.value = filePath;

    let inputFile = document.createElement('input');
    inputFile.setAttribute("type", "file")

    formTag.appendChild(inputPath);
    formTag.appendChild(inputFile);
    // inputFile.click();
    formTag.style.display = "none";
    document.body.appendChild(formTag);

    formTag.addEventListener("submit", function (event) {
        event.preventDefault();
    }, false);

    formTag.submit();
}

export default {
    uploadByForm
}