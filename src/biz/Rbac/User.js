/*
 * @Author: Billy
 * @Date: 2022-01-04 16:50:54
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-10 20:28:39
 * @Description: 请输入
 */

import User from "../../entity/Rbac/User.js";
import CommonResult from "../../entity/_Common/CommonResult.js";
import UserLoginApi from "../../api/Rbac/UserLogin.js"

/**
 * @description 登录方法
 * @param {string} username 用户名(必填)
 * @param {string} password 密码(必填)
 * @param {string} captcha 验证码(非必填)
 * @param {string} checkKey 验证码key(非必填)
 * @returns {User} 用户类
 */
async function login({
  username,
  password,
  captcha,
  checkKey
}) {
  // ----------以下是测试数据----------

  const user = new User({
    id: 'a',
    token: 't-o-k-e-n',
    username: 'tom',
    realname: '张三',
  });

  return user;

  // ----------以上是测试数据----------

  // const _user = await UserLoginApi.login({
  //   username,
  //   password,
  //   captcha,
  //   checkKey
  // });

  // const user = new User({
  //   id: _user.userInfo.id,
  //   token: _user.token,
  //   username: _user.userInfo.username,
  //   realname: _user.userInfo.realname,
  // });

  // return user;
}

/**
 * @description 退出登录方法
 */
async function logout() {
  // ----------以下是测试数据----------

  return new CommonResult(true, '退出登录成功');

  // ----------以上是测试数据----------

  // const _result = await UserLoginApi.logout();
  // return new CommonResult(_result.success, _result.message);
}

/**
 * @description 根据用户名称模糊查询（不传或传''可查所有用户）
 * @param {string} name 用户名
 * @returns {Array.<User>} 用户列表
 */
async function findByName(name = '') {
  return [{
      name: "李杰",
      department: "战略支持部",
      role: "系统管理员",
      status: "正常",
    },
    {
      name: "李杰",
      department: "战略支持部",
      role: "系统管理员",
      status: "正常",
    },
    {
      name: "李杰",
      department: "战略支持部",
      role: "系统管理员",
      status: "正常",
    },
    {
      name: "李杰",
      department: "战略支持部",
      role: "系统管理员",
      status: "异常",
    },
  ]
}

/**
 * @description 添加一个用户
 * @param {string} name 用户名
 * @param {string} password 密码(5-18位，可由数字、大小写字母组成)
 * @param {string} realName 真实姓名
 * @param {string} telephone 手机号
 * @param {string} email 邮箱号
 * @param {string} orgId 组织架构id(不传或传null则新建的用户不在组织架构内)
 * @returns {string} 添加成功后的用户的id
 */
async function add({
  name,
  password,
  realName,
  telephone,
  email,
  orgId
}) {
  return 'a';
}

/**
 * @description 修改用户信息
 * @param {string} id 用户id
 * @param {string} name 用户名
 * @param {string} password 密码(5-18位，可由数字、大小写字母组成)
 * @param {string} realName 真实姓名
 * @param {string} telephone 手机号
 * @param {string} email 邮箱号
 * @returns 成功修改的个数
 */
async function update({
  id,
  name,
  softDelete,
  realName,
  telephone,
  email
}) {
  return 1;
}

/**
 * @description 通过id删除用户
 * @param {string} id 用户id
 * @returns 成功删除的个数
 */
async function delById(id) {
  return 1;
}

/**
 * @description 获取所有用户数量
 * @returns 用户数量
 */
async function countAll() {
  return 3;
}

export default {
  login,
  logout,
  findByName,
  add,
  update,
  delById,
  countAll
}