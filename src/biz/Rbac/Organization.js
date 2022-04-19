/*
 * @Author: Billy
 * @Date: 2022-01-04 16:49:56
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 00:56:05
 * @Description: 请输入
 */

import Organization from "../../entity/Rbac/Organization.js";

/**
 * @description 创建一个部门
 * @param {string} parentId 父部门id(null代表根节点)
 * @param {string} name 部门名称
 * @returns {Organization} 部门对象
 */
async function add(parentId, name) {
    return new Organization({
        id: 'a',
        name: '新部门'
    });
}

/**
 * @description 修改一个部门信息
 * @param {string} id 部门id
 * @param {string} name 部门名称
 * @returns {number} 成功操作的个数
 */
async function update(id, name) {
    return 1;
}

/**
 * @description 移动部门到其它父部门
 * @param {string} id 部门id
 * @param {string} parentId 目标父部门id
 * @returns {Organization} 部门对象
 */
async function move(id, parentId) {
    return new Organization({
        id: 'a',
        name: '开发部'
    });
}

/**
 * @description 通过name获取部门数组
 * @param {string} name 部门id
 * @returns {Array.<Organization>} 部门对象数组
 */
async function findByName(name) {
    return [
        new Organization({
            id: 'a',
            name: '开发部'
        }),
    ];
}

/**
 * @description 获取某部门下所有层级的子部门
 * @param {number} id 部门id
 * @returns {Array.<Organization>} 部门对象数组
 */
async function getAllNodes(id) {
    return [
        new Organization({
            id: 'a',
            name: '开发部'
        }),
        new Organization({
            id: 'b',
            name: '产品部'
        }),
        new Organization({
            id: 'c',
            name: '测试部'
        })
    ];
}

/**
 * @description 通过id删除某部门
 * @param {string} id 部门id
 * @returns {number} 成功操作的个数
 */
async function delById(id) {
    return 1;
}

export default {
    add,
    update,
    move,
    findByName,
    getAllNodes,
    delById
}