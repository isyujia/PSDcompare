<!--
 * @Author: Billy
 * @Date: 2020-09-10 09:12:00
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-05 19:55:32
 * @Description: 请输入
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoginPage: function () {
      return this.$route.name === "Login";
    },
  },
  watch: {
    isLoginPage: function (newVal, oldVal) {
      let body = document.body;
      if (newVal) {
        body.classList.add("login");
      } else {
        body.classList.remove("login");
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/scrollbar.scss";
@import "@/scss/element-ui-reset.scss"; // 重设element ui的样式都写于这个scss

body.login {
  min-width: unset;
}

body {
  min-width: $body-min-width;
  min-height: $body-min-height;
}

#app {
  height: 100%;
  font-size: 14px;
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>