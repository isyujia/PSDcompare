<template>
  <el-container class="main-container">
    <el-header class="el-header-header" height="66px">
      <Header />
    </el-header>

    <el-container>
      <Aside />
      <el-main>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import Header from "../components/Home/Header.vue";
import Aside from "../components/Home/Aside.vue";
import { DEFAULT_HOME_LAYOUT, HEADER_THICKNESS } from "../const.js";

export default {
  name: "Home",
  components: {
    Header,
    Aside,
  },
  data() {
    return {
      DEFAULT_HOME_LAYOUT,
      HEADER_THICKNESS,
      activeTab: "0",
    };
  },
  computed: {
    // 当前应该被选中(高亮)的菜单栏的按钮的id
    activeHeaderMenuItemId: function () {
      const routerName = this.$route.name;
      return routerName;
    },
  },
  updated() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables";
.el-header-header {
  padding: 0% !important;
}

body {
  background: $html-background;
}
.el-header,
.el-footer {
  text-align: center;
  line-height: 66px;
}

.el-aside {
  text-align: center;
}

.el-main {
  text-align: center;
  padding: 0% !important;
}
.main-container {
  height: 100%;
  .el-header-header {
    line-height: 1;
  }
}
</style>