/*
 * @Author: Billy
 * @Date: 2021-07-11 00:39:24
 * @LastEditors: Billy
 * @LastEditTime: 2021-12-20 01:04:31
 * @Description: 用户登录信息的保存和获取
 */

import router from '../router/_index.js'
import UserEntity from "../entity/Rbac/User.js"

const ITEM_KEY = "current-user-info";

function setLocalStorage(user) {
    let stringifiedUser = JSON.stringify(user);
    window.localStorage.setItem(ITEM_KEY, stringifiedUser);
}

function setSessionStorage(user) {
    let stringifiedUser = JSON.stringify(user);
    window.sessionStorage.setItem(ITEM_KEY, stringifiedUser);
}

function removeLocalStorage() {
    window.localStorage.removeItem(ITEM_KEY);
}

function removeSessionStorage() {
    window.sessionStorage.removeItem(ITEM_KEY);
}

/**
 * @description 判断用户是否处于登录状态，未登录返回null，如果已登录则获取用户信息
 */
function getUserInfo() {
    let stringifiedUser;
    stringifiedUser = window.localStorage.getItem(ITEM_KEY);
    if (!stringifiedUser) stringifiedUser = window.sessionStorage.getItem(ITEM_KEY);

    if (stringifiedUser) {
        try {
            let _user = JSON.parse(stringifiedUser);
            let user = new UserEntity({
                id: _user.id,
                token: _user.token,
                username: _user.username,
                realname: _user.realname,
                cdmsSid: _user.cdmsSid,
            });
            return user;
        } catch (e) {
            // 用户信息损坏，需要重新登录
            console.log('当前用户信息损坏');
            if (router.currentRoute.name !== "Login") {
                router.push({
                    name: 'Login'
                }).catch(e => { });
            }
            return null;
        }
    } else {
        return null;
    }
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
function removeUser() {
    removeLocalStorage();
    removeSessionStorage();
}

export default {
    getUserInfo,
    saveUser,
    removeUser,
}