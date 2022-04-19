<template>
  <div class="div-login-container">
    <div class="div-login">
      <div class="img-box">
        <img src="../../assets/login.png" alt />
      </div>
      <div class="form-box">
        <h3 class="title1">欢迎使用</h3>
        <h1>{{ LOGIN_PAGE_TITLE }}</h1>
        <el-tabs v-model="activeTabName" @tab-click="onTabClick">
          <el-tab-pane label="用户管理" name="first">
            <el-form class="form-signin" ref="form" :model="form">
              <el-form-item class="item-user-name" label="账号">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item class="item-password" label="密码">
                <el-input
                  v-model="form.password"
                  placeholder="请输入"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item v-if="loginError.msg" class="item-msg">
                <el-alert
                  class="alert-login"
                  :title="loginError.msg"
                  type="error"
                  center
                  :closable="false"
                ></el-alert>
              </el-form-item>
              <el-form-item class="item-login-btn">
                <el-button
                  v-if="stateOfbtnSubmit"
                  class="btn-block"
                  type="primary"
                  @click="onSubmit"
                  >登录</el-button
                >
                <el-button
                  v-else
                  class="btn-block"
                  type="info"
                  :loading="true"
                  plain
                  disabled
                  >登录中</el-button
                >
              </el-form-item>
              <div class="form-bottom">
                <el-form-item class="item-remember-me">
                  <!-- <el-checkbox v-model="form.isRememberMe">记住我</el-checkbox> -->
                  <el-checkbox v-model="form.isRememberMe"
                    >7天内自动登录</el-checkbox
                  >
                </el-form-item>
                <el-form-item class="link-download-register">
                  <el-button type="text">下载APP|立即注册</el-button>
                </el-form-item>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { LOGIN_PAGE_TITLE } from "../../const.js";
import Qs from "qs";
import UserBiz from "../../biz/Rbac/User.js";
import LoginInfo from "../../storage/login-info.js";

export default {
  data() {
    return {
      LOGIN_PAGE_TITLE,
      form: {
        name: "", // 用户名
        password: "", // 密码
        isRememberMe: true, // 是否记住我
      },
      activeTabName: "first",
      loginError: {
        msg: "",
      },
      stateOfbtnSubmit: true, // 登录按钮是否处于可用状态
    };
  },
  watch: {
    "form.name": function () {
      this.clearLoginError();
    },
    "form.password": function () {
      this.clearLoginError();
    },
  },
  mounted() {
    window.addEventListener("keyup", this.onEnter);
  },
  destroyed() {
    window.removeEventListener("keyup", this.onEnter);
  },
  methods: {
    async onSubmit() {
      // 如果账号或密码任意一个为空，则没必要提交服务器了
      if (!this.form.name || !this.form.password) {
        this.setLoginError("账号/密码不能为空");
      } else {
        try {
          this.setBtnSubmitDisable();

          const user = await UserBiz.login({
            username: this.form.name,
            password: this.form.password,
          });

          // 把登录api返回的token保持到storage
          LoginInfo.saveUser(user);

          const distRouteName = this.$route.query["routeName"];
          if (distRouteName) {
            const queryString = this.$route.query["queryString"];
            const queryObj = Qs.parse(queryString);

            const paramsString = this.$route.query["paramsString"];
            const paramsObj = Qs.parse(paramsString);

            this.$router.push({
              name: distRouteName,
              query: queryObj,
              params: paramsObj,
            });
          } else {
            // this.$router.push({ name: "Home" });
            this.$router.push({ name: "Default" });
          }
        } catch (error) {
          this.setLoginError(error);
        } finally {
          this.resetBtnSubmit();
        }
      }
    },

    // 禁用登录按钮（处于登录过程中）
    setBtnSubmitDisable() {
      this.stateOfbtnSubmit = false;
    },

    // 启用登录按钮
    resetBtnSubmit() {
      this.stateOfbtnSubmit = true;
    },

    // 设置错误信息，使错误消息框显示
    setLoginError(error) {
      if (error.message) {
        this.loginError.msg = error.message;
      } else {
        this.loginError.msg = error;
      }
    },

    // 清空错误信息，使错误消息框消失
    clearLoginError() {
      this.loginError.msg = "";
    },

    // 按回车后登录的方法
    onEnter(event) {
      //回车键的键值为13
      if (event && event.keyCode == 13) {
        this.onSubmit();
      }
    },

    // 点击“立即注册”按钮
    goToRegisterView() {
      this.$router.push({ name: "register" });
    },

    // 点击“忘记密码”按钮
    goToResetPasswordView() {
      this.$router.push({ name: "ResetPassword" });
    },

    // tab标签被选中时
    onTabClick() {},
  },
};
</script>

<style scoped lang="scss">
@import "~@/scss/_variables.scss";

@media screen and (max-width: 900px) {
  .img-box {
    display: none !important;
  }
}

.div-login-container {
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: $theme-background-light;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .div-login {
    height: 600px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .img-box {
      width: 600px;
      height: 100%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 4px solid $theme-background-light;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    .form-box {
      width: 500px;
      height: 100%;
      padding: 48px;
      background-color: $theme-background-dark;
      box-sizing: border-box;
      h3 {
        color: #8c98b2;
        text-align: left;
        margin-bottom: 5px;
      }
      h1 {
        font-size: 28px;
        color: $theme-main-color;
        text-align: left;
        margin-bottom: 20px;
      }
      .form-signin {
        width: 100%;
        min-width: 360px;
        box-sizing: border-box;

        .el-form-item {
          margin-bottom: 0;

          .el-input {
            // https://stackoverflow.com/questions/61083813/how-to-avoid-internal-autofill-selected-style-to-be-applied
            ::v-deep input:-internal-autofill-selected {
              box-shadow: inset 0 0 0 1000px $theme-background-light !important;
            }
          }

          &:not(:last-child) {
            margin-bottom: 24px;
          }

          ::v-deep .el-form-item__label {
            line-height: 30px;
          }

          &.item-user-name,
          &.item-password {
            ::v-deep input {
              &:focus {
                // border: solid 1px $primary-color;
              }
            }
          }

          &.item-msg {
            .alert-login {
              padding-top: 0;
              padding-bottom: 0;
            }
          }

          &.item-login-btn {
            .btn-block {
              width: 100%;
            }
          }
        }
        // 7天内自动登录 及 下载APP和立即注册
        .form-bottom {
          overflow: hidden;
          .el-form-item {
            &.item-remember-me {
              float: left;
              margin-bottom: 0;
            }
            &.link-download-register {
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>