/*
 * @Author: Guanghao
 * @Date: 2022-01-04 18:01:37
 * @LastEditors: Guanghao
 * @LastEditTime: 2022-01-05 18:10:49
 * @Description: 角色相关数据请求和处理逻辑
 */

import Role from '../../entity/Rbac/Role.js'

/**
 * @description 按角色名称模糊查询，不传或传''可查所有角色
 * @returns {Array.<Role>} 角色对象数组
 */
async function findByName(name = '') {
  return [
    new Role({
      id: 1,
      name: '产品管理员',
      description: '产品管理员说明'
    }),
    new Role({
      id: 2,
      name: '超级管理员',
      description: '超级管理员说明'
    }),
    new Role({
      id: 3,
      name: '方案管理员',
      description: '方案管理员说明'
    }),
  ]
}

/**
 * @description 新建角色
 * @param {string} name 角色名称
 * @param {string} description 角色说明
 * @returns {Role} 返回新建的角色
 */
async function add(name, description) {
  return new Role({
    id: 4,
    name,
    description
  })
}

/**
 * @description 编辑角色
 * @param {number} id 角色id
 * @param {string} name 角色名称
 * @param {string} description 角色说明
 * @returns {number} 成功更新个数
 */
async function update(id, name, description) {
  return 1
}

/**
 * @description 删除角色
 * @param {number} id 角色id
 * @returns {number} 成功删除个数
 */
async function delById(id) {
  return 1
}

export default {
  findByName,
  add,
  update,
  delById
}