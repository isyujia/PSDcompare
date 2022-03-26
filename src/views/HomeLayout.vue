<template>
  <div>
    <el-container id="main-container" :style="'height:' + windowHeight + 'px'">
      <el-header height="7.1%" class="el-header-header">
        <header-component></header-component>
      </el-header>

      <el-container>
        <el-aside width="" style="flex-basis: 12.5%">
          <aside-component></aside-component>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideComponent from "@/components/Aside";
import HeaderComponent from "@/components/Header";

export default {
  name: "HomeLayout",
  components: {
    AsideComponent,
    HeaderComponent,
  },
  data() {
    return {
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
    };
  },
  methods: {},
  // <!--在watch中监听实时宽高-->
  watch: {
    windowHeight(val) {
      let that = this;
      console.log("实时屏幕高度：", val, that.windowHeight);
    },
    windowWidth(val) {
      let that = this;
      console.log("实时屏幕宽度：", val, that.windowHeight);
    },
  },
  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.windowHeight = window.fullHeight; // 高
        that.windowWidth = window.fullWidth; // 宽
      })();
    };
  },
};
</script>

<style lang='scss'>
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
.el-container {
  height: 91.7%;
}
</style>
