<!--
 * @Author: Billy
 * @Date: 2020-07-05 20:44:16
 * @LastEditors: Billy
 * @LastEditTime: 2021-08-23 11:53:13
 * @Description: 可拖动的对话框（样式仿照element ui）
--> 
<template>
  <Draggable
    :style="style"
    class="draggable-window"
    v-show="isDialogVisible"
    :ignoreArea="'.dialog-inner__body'"
    :allowGoToOutside="allowGoToOutside"
    :restriction="restriction"
    ref="drag"
    :moveDirection="moveDirection"
  >
    <div class="dialog-inner">
      <div class="dialog-inner__header">
        <span v-if="isSpanTitle" class="title">{{ title }}</span>
        <slot name="title"></slot>
        <div class="header-btns">
          <button class="header-btn" @click="handleDialogMinimize">
            <i
              :class="minimized ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
            ></i>
          </button>
        </div>
      </div>
      <transition
        name="flatten"
        v-bind:css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div v-show="!minimized" ref="dial-body" class="dialog-inner__body">
          <slot></slot>
        </div>
      </transition>
    </div>
  </Draggable>
</template>
<script>
import Draggable from "./Draggable.vue";
import Velocity from "velocity-animate";
export default {
  components: { Draggable },
  props: {
    // 默认是否显示
    visible: { type: Boolean, default: false },
    // 是否最小化窗口
    minimized: { type: Boolean, default: false },
    // 关闭窗口后再打开，是否复位
    isReposition: { type: Boolean, default: true },
    // 对话框的标题
    title: { type: String, default: "提示" },
    // 对话框的宽度
    width: { type: String, default: "30%" },
    // 对话框的顶部margin
    marginTop: { type: String, default: "15vh" },
    // 是否居中
    isCentered: { type: Boolean, default: true },
    // 对话框是否可以部分移出“移动区域”
    allowGoToOutside: { type: Boolean, default: true },
    // 对话框的“移动区域”，默认为对话框的父标签
    restriction: { type: String, default: "parent" },
    // 移动方向，both/horizontal/vertical，默认是全部方向
    moveDirection: {
      type: String,
      default: "both",
      validator: function (value) {
        return ["both", "horizontal", "vertical"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      isDialogVisible: this.visible,
    };
  },
  computed: {
    isSpanTitle: function () {
      return !this.$slots.title;
    },
    style: function () {
      let w = `width: ${this.width};`;
      let l = `left: calc(50% - ${this.width} / 2);`;
      let mt = `margin-top: ${this.marginTop};`;

      let stl = w + mt;
      if (this.isCentered) stl += l;

      return stl;
    },
  },
  watch: {
    visible: function (newVal) {
      this.isDialogVisible = newVal;
      if (newVal && this.isReposition) {
        this.$refs.drag.$el.style.transform = "unset";
        this.$refs.drag.$el.setAttribute("data-x", "");
        this.$refs.drag.$el.setAttribute("data-y", "");
      }
    },
  },
  beforeUpdate() {},
  mounted() {},
  methods: {
    handleDialogClose() {
      this.$emit("close");
      this.isDialogVisible = false;
      this.$emit("update:visible", false);
    },
    handleDialogMinimize() {
      this.$emit("update:minimized", !this.minimized);
    },

    beforeEnter(el) {
      el.style.height = "0";
      el.style.overflow = "hidden";
    },
    enter(el, done) {
      Velocity(
        el,
        { height: el.scrollHeight }, // scrollHeight是一个不固定的高度，故只能用velocity库来做缩放了
        { duration: 300, complete: done }
      );
    },
    afterEnter(el) {
      el.style.height = "";
    },

    beforeLeave(el) {},

    leave(el, done) {
      Velocity(el, { height: "0px" }, { duration: 300, complete: done });
    },
    afterLeave(el) {
      el.style.height = "";
    },
  },
};
</script>
<style lang='scss' scoped>
.draggable-window {
  position: fixed;
  top: 0;
  z-index: 2000;

  .dialog-inner {
    height: 100%;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    .dialog-inner__header {
      padding: 10px 20px 10px;
      display: flex;
      &:hover {
        background-color: #eee;
      }
      .title {
        line-height: 18px;
        font-size: 12px;
        color: #303133;
      }
      .header-btns {
        position: absolute;
        top: 0;
        right: 20px;
        .header-btn {
          width: 38px;
          height: 38px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          &:hover {
            background-color: #b3d8ff;
          }
        }
      }
    }
    .dialog-inner__body {
      overflow: hidden;
    }
  }
}
</style>