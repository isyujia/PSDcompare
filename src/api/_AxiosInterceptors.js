/*
 * @Author: Billy
 * @Date: 2021-06-19 02:43:26
 * @LastEditors: Billy
 * @LastEditTime: 2021-12-20 01:00:36
 * @Description: Axios拦截器
 */

import router from '../router/_index.js'
import LoginInfo from "../storage/login-info.js";
import SysCode from "../sys/SysCode.js"
import {
    TOKEY_ATTR_NAME
} from "../const.js"

function setInterceptors(axios) {
    // 在被then()和catch()方法处理之前，把 客户端请求 拦截下来优先处理
    axios.interceptors.request.use(function (config) {
        // api 返回的数据均为json，如果请求没有指明，则默认视为json
        if (!config.responseType) {
            config.responseType = 'json';
        }

        let regex1 = /\/([A-Za-z0-9_-]+\/)+login/; // 登录系统(含登录系统后台及eim后台)
        let regex2 = /\/system(\/\S+)+(\/)?/; // rbac后台里的system route下的所有接口
        // let regex5 = /\/(\w+\/)+register/; // 注册用户

        if (
            !regex1.test(config.url) &&
            !regex2.test(config.url)
        ) {
            // 只要已登录，默认都把 token 加到对后端服务请求的 header 里
            let user = LoginInfo.getUserInfo();

            if (user !== null)
                config.headers[TOKEY_ATTR_NAME] = user.token;
            else
                console.log('本地用户信息为空');
        }

        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // 在被then()和catch()方法处理之前，把 服务器返回结果 拦截下来优先处理
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response) { // 请求已经发送，并且服务器携带着一个http状态码返回了数据，而这个状态码不包括2xx
            if (error.response.status === 401 &&
                (
                    error.response.data.code === SysCode.TOKEN_EXPIRED ||
                    error.response.data.code === SysCode.TOKEN_FORCED_INVALID ||
                    error.response.data.code === SysCode.TOKEN_ERROR
                )) {
                if (router.currentRoute.name !== "Login") {
                    router.push({
                        name: 'Login'
                    }).catch(e => { });
                }
            } else {
                if (!(
                    router.currentRoute.name === "Error" &&
                    router.currentRoute.params.code === error.response.data.code &&
                    router.currentRoute.params.message === error.response.data.message
                )) {
                    if (process.env.NODE_ENV !== 'development') {
                        router.push({
                            name: 'Error',
                            params: {
                                code: error.response.data.code,
                                message: error.response.data.message
                            }
                        });
                    } else {
                        console.log('后端接口返回非2XX状态码 :>> ', error.response.data);
                    }
                }
                return Promise.reject(new Error(error.response.data.message));
            }
        } else if (error.request) { // 请求已经发出，但并无收到来自服务器的任何返回
            console.log('请求已经发出，但并无收到来自服务器的任何返回：', error.message);
        } else { // 在建立一个请求的时候发生了错误
            console.log('在建立一个请求的时候发生了错误：', error.message);
        }
        return Promise.reject(error);
    });

    return axios;
}

export default {
    setInterceptors
}