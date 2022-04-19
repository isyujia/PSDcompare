/*
 * @Author: Billy
 * @Date: 2020-09-15 10:05:45
 * @LastEditors: Billy
 * @LastEditTime: 2021-10-18 15:16:42
 * @Description: 文件相关帮助方法
 */

/**
 * 格式化输出文件尺寸
 * @param {Number} size 文件尺寸的数字（单位为Byte）
 * @param {Number} pointLength 小数点后的位数
 * @param {Array} units 自定义单位数组
 * 返回：字符串如 1M
 */
function formatFileSize(
  size,
  pointLength = 2,
  units = ["B", "K", "M", "G", "TB"]
) {
  // 格式化输出文件尺寸
  let unit;
  while ((unit = units.shift()) && size > 1024) {
    size = size / 1024;
  }
  return (unit === "B" ? size : size.toFixed(pointLength)) + unit;
}

export default {
  formatFileSize
};