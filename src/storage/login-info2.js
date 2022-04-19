/*
 * @Author: Billy
 * @Date: 2021-07-11 00:39:24
 * @LastEditors: Billy
 * @LastEditTime: 2021-12-19 23:25:43
 * @Description: 用户登录信息的保存和获取
 */

import UserEntity from "../entity/Rbac/User.js"

function setLocalStorage(user) {
    for (const key in user) {
        const item = user[key];
        window.localStorage.setItem(key, String(item));
    }
}

function setSessionStorage(user) {
    for (const key in user) {
        const item = user[key];
        window.sessionStorage.setItem(key, String(item));
    }
}

function removeLocalStorage(user = new UserEntity()) {
    for (const key in user) {
        window.localStorage.removeItem(key);
    }
}

function removeSessionStorage(user = new UserEntity()) {
    for (const key in user) {
        window.sessionStorage.removeItem(key);
    }
}

/**
 * @description 判断用户是否处于登录状态，未登录返回null，如果已登录则获取用户信息
 */
function getUserInfo() {
    let user = new UserEntity({
        id: '',
        token: '',
        username: '',
        realname: '',
        cdmsSid: '',
    });

    let isLocal, isSession;
    for (const key in user) {
        isLocal = !!window.localStorage.getItem(key);
        if (!isLocal) break;
    }

    for (const key in user) {
        isSession = !!window.sessionStorage.getItem(key);
        if (!isSession) break;
    }

    if (isLocal)
        for (const key in user)
            user[key] = window.localStorage.getItem(key);
    else if (isSession)
        for (const key in user)
            user[key] = window.sessionStorage.getItem(key);
    else user = null;

    return user;
}

/**
 * @description 新增（未有）或更新（已有旧的）token，并将token存入 localStorage 或 sessionStorage
 * @param {UserEntity} user 用户实体类对象
 */
function saveUser(user) {
    if (user instanceof UserEntity) {
        removeUser();
        if (user.isRememberMe) {
            setLocalStorage(user);
        } else {
            setSessionStorage(user);
        }
    } else throw new Error('参数user的类型错误');
}

/**
 * @description 清空 localStorage 和 sessionStorage 中的登录信息
 */
function removeUser(user = new UserEntity({
    id: '',
    token: '',
    username: '',
    realname: '',
    cdmsSid: '',
})) {
    removeLocalStorage(user);
    removeSessionStorage(user);
}

export default {
    getUserInfo,
    saveUser,
    removeUser,
}