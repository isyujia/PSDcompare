/*
 * @Author: Guanghao
 * @Date: 2022-01-04 18:07:13
 * @LastEditors: Guanghao
 * @LastEditTime: 2022-01-04 18:36:29
 * @Description: 角色类定义
 */

class Role {
  /**
   * @description 创建角色类
   * @param {number} id 角色id
   * @param {string} name 角色名称
   * @param {string} description 角色说明
   * @param {string} auths 角色权限
   */
  constructor({
    id,
    name,
    description
  }) {
    this.id = id
    this.name = name
    this.description = description
  }
}

export default Role