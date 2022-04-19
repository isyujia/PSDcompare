/*
 * @Author: Billy
 * @Date: 2022-01-04 17:33:57
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 10:44:18
 * @Description: 请输入
 */

import User from "../../entity/Rbac/User.js";
import PageResult from "../../entity/_Common/PageResult.js"

/**
 * @description 某部门添加一个已存在的用户/移动用户(移动用户：把某用户从某部门移动到另一部门)
 * @param {string} orgId 目标部门id
 * @param {string} userId 用户id
 * @returns {User} 用户对象
 */
async function relateUser(orgId, userId) {
    return new User({
        id: 'a',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDA2Mjc3ODMsInVzZXJuYW1lIjoiMTcxNTk2NTMzOTAifQ.V9Bf0nlpf-QYdEGP2Eu6-U0VXZvuwFEN0fNtmeQxmUI',
        username: '张三',
        realname: '张三',
    });
}

/**
 * @description 根据部门id分页查找部门内用户列表(也可获取到不在组织架构内的用户)
 * @param {string} orgId 部门id(可以传null或者不传，这样会获取到不在组织架构内的用户)
 * @param {number} pageSize 每页大小
 * @param {number} pageNum 第几页
 * @param {string} orderBy 排序依据字段
 * @param {string} direction 排序顺序(ASC, DESC)
 * @returns {Array.<User>} 用户列表
 */
async function findUsersByOrgIdAndByPage(orgId, pageSize = 10, pageNum = 1, orderBy = 'id', direction = 'ASC') {
    return new PageResult([
        new User({
            id: 'a',
            createTime: '2022-01-01 10:00:00',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDA2Mjc3ODMsInVzZXJuYW1lIjoiMTcxNTk2NTMzOTAifQ.V9Bf0nlpf-QYdEGP2Eu6-U0VXZvuwFEN0fNtmeQxmUI',
            username: '张三',
            realname: '张三',
        }),
        new User({
            id: 'b',
            createTime: '2022-01-02 10:00:00',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDA2Mjc3ODMsInVzZXJuYW1lIjoiMTcxNTk2NTMzOTAifQ.V9Bf0nlpf-QYdEGP2Eu6-U0VXZvuwFEN0fNtmeQxmUI',
            username: '李四',
            realname: '李四',
        })
    ], 20);
}


export default {
    relateUser,
    findUsersByOrgIdAndByPage
}