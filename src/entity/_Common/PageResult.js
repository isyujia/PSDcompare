/*
 * @Author: Billy
 * @Date: 2022-01-05 01:14:29
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 10:29:12
 * @Description: 请输入
 */

class PageResult {
    /**
     * @description 分页获取数据的格式类
     * @param {Array.<object>} rows 数据集合
     * @param {number} count 数据总条数
     */
    constructor(rows, count) {
        this.rows = rows;
        this.count = count;
    }
}

export default PageResult;