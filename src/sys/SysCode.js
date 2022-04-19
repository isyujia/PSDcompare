/*
 * @Author: Billy
 * @Date: 2020-09-07 13:34:39
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-22 16:29:03
 * @Description: v1.2
 */
class SysCode {
    static SUCCESS = 0; // 成功
    static COMMON_ERROR = 500; // 通用的错误码
    static ACCESS_AUTH_FAILED = 510; // 访问权限认证未通过
    static RESET_PASSWORD_TOKEN_FAILED = 1001; // 找回密码token(不是登录的token)已失效，请再次获取验证码
}

export default SysCode;