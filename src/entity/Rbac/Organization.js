/*
 * @Author: Billy
 * @Date: 2021-12-29 17:46:53
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 15:43:38
 * @Description: 请输入
 */

import Parent from '../_Common/Parent.js'

class Organization extends Parent {
    /**
     * @description 组织架构的节点
     * @param {string} name 部门名称
     */
    constructor({
        name,
        ...rest
    }) {
        super(rest);
        this.name = name;
    }
}

export default Organization