/*
 * @Author: Billy
 * @Date: 2022-01-05 01:21:58
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 10:41:46
 * @Description: 请输入
 */

class Parent {
    /**
     * @description 所有业务对象的父类
     * @param {string} id 对象的全局唯一id
     * @param {Date|string} createTime 对象数据的创建时间
     * @param {Date|string} modifyTime 对象数据的最近一次修改时间
     * @param {boolean} softDelete 是否软删除
     * @param {string} createUserId 对象的创建者id
     */
    constructor({
        id,
        createTime,
        modifyTime,
        softDelete,
        createUserId
    }) {
        this.id = id;
        this.createTime = typeof (createTime) === 'string' ? Date(createTime) : createTime;
        this.modifyTime = typeof (modifyTime) === 'string' ? Date(modifyTime) : modifyTime;
        this.softDelete = softDelete;
        this.createUserId = createUserId;
    }
}

export default Parent;