/*
 * @Author: Billy
 * @Date: 2020-06-23 08:44:33
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-22 09:41:08
 * @Description: 基础api的Axios的基类
 */

import axios from "axios";
import AxiosInterceptors from '../_AxiosInterceptors.js'

import {
    BASE_URL,
    TIMEOUT
} from '../../const.js'

let requestConfig = {
    baseURL: BASE_URL, // `baseURL` will be prepended to `url` unless `url` is absolute.
    timeout: TIMEOUT
}

const baseAxios = axios.create(requestConfig);
AxiosInterceptors.setInterceptors(baseAxios);

export default baseAxios;