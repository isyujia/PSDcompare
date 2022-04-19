<template>
  <el-aside style="flex-basis: 12.5%">
    <div class="aside">
      <el-row v-if="false">
        <el-col :span="24">
          <div
            class="router"
            @click="redirectTo('/compare')"
            v-bind:class="{ active: isHomeCompare }"
          >
            <SvgIcon icon-class="compare" class="compare-icon"></SvgIcon>
            <span>图纸对比</span>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="false">
        <el-col :span="24">
          <div
            class="router"
            v-bind:class="{ active: isHomeHistory }"
            @click="redirectTo('/history')"
          >
            <SvgIcon icon-class="note" class="note-icon"></SvgIcon>
            <span>历史记录</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" v-for="(v, k) in this.routes" :key="k">
          <div
            class="router"
            v-bind:class="{ active: isActive(v.name) }"
            @click="redirectTo(v.path)"
          >
            <SvgIcon
              :icon-class="v.meta.iconClass"
              :class="`${v.meta.iconClass}-icon`"
            ></SvgIcon>
            <span>{{ v.meta.title }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-aside>
</template>

<script>
import homeRoutes from "@/router/main";
export default {
  name: "HomeAside",
  data() {
    return {
      routes: [],
    };
  },
  created() {
    console.log(homeRoutes);
    for (const child of homeRoutes) {
      let r = {
        path: `/home/${child.path.replace("/", "")}`,
        meta: child.meta,
        name: child.name,
      };
      this.routes.push(r);
    }
  },
  mounted() {},
  computed: {
    isHomeHistory() {
      return this.$route.name == "HomeHistory";
    },
    isHomeCompare() {
      return this.$route.name == "HomeCompare";
    },
  },
  methods: {
    redirectTo(router) {
      if (this.$route.path == router) return false;
      this.$router.push(router);
    },
    isActive(routeName) {
      if (routeName == this.$route.name) return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.el-aside {
  box-shadow: 2px 0px 10px rgb(0 0 0 / 10%);
}
.aside {
  background: $aside-background;
  height: 100%;
  .el-row {
    $height: 37px;
    box-sizing: content-box;
    height: $height;
    line-height: $height;
    $pad: 16px;
    padding: {
      left: $pad;
      right: $pad;
    }
    margin-bottom: 20px;
    &:first-child {
      padding: {
        top: 20px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    margin-bottom: 20px;
  }
}

.el-col {
  text-align: left;

  [class$="-icon"] {
    min-height: 20px;
    display: inline-block;
    margin-right: 9px;
    transform: scale(1.5) translateX(-80px);
  }
  [class$="-icon"] {
    filter: drop-shadow(#636d7e 80px 0);
  }
  .active {
    background: $aside-active-background;
    color: white;
    [class$="-icon"] {
      filter: drop-shadow(white 80px 0);
    }
  }
  div {
    padding-left: 20px;
    border-radius: 4px;
  }
}
.router {
  display: flex;
  align-items: center;
}
</style>
