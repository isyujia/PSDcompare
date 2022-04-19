/*
 * @Author: Billy
 * @Date: 2021-07-17 14:26:25
 * @LastEditors: Billy
 * @LastEditTime: 2021-07-17 18:05:56
 * @Description: 请输入
 */

import SparkMD5 from "spark-md5"

function fileToMd5(file) {
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        // file = this.files[0],
        chunkSize = 2097152, // Read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

    fileReader.onload = function (e) {
        console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        spark.append(e.target.result); // Append array buffer
        currentChunk++;

        if (currentChunk < chunks) {
            loadNext();
        } else {
            console.log('finished loading');
            console.info('computed hash', spark.end()); // Compute hash
        }
    };

    fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
    };

    function loadNext() {
        var start = currentChunk * chunkSize,
            end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
}

export default {
    fileToMd5
}