<!--
 * @Author: Billy
 * @Date: 2020-06-07 03:55:51
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-01 02:43:57
 * @Description: 请输入
--> 
<!--
由于element ui的对话框dialog有填充满页面body遮挡层，故本组件不适用
本组件适用于任何自定义的div

事件：
drag-start 事件对象：{id - 父组件给予本组件的id, originalX - 拖动前的 translate x 值, originalY - 拖动前的 translate y 值}
drag-move 事件对象：{
  id - 父组件给予本组件的id
  currentX -  移动后的 translate x 值
  currentY - 移动后的 translate y 值
  movedX - 本次x移动的距离
  movedY - 本次y移动的距离
  deltaX - x轴上移动方向，正数向右，负数向左
  deltaY - y轴上移动方向，正数向上，负数向下
}
drag-end 事件对象：{
  id - 父组件给予本组件的id  
  currentX -  移动后的 translate x 值
  currentY - 移动后的 translate y 值
}
-->
<template>
  <div
    :id="areaDraggableId"
    class="area-draggable"
    ref="area-draggable"
    v-if="isVisible"
  >
    <slot></slot>
  </div>
</template>
<script>
// 参考：https://interactjs.io/
import InteractJs from "interactjs";
// import Velocity from "velocity-animate";
export default {
  props: {
    // 父组件给予本组件的id
    id: { type: [Number, String] },
    // 组件的 translate x
    translateX: { type: Number },
    // 组件的 translate y
    translateY: { type: Number },
    // 标记鼠标无法移动的区域，建议用类名表示（例：".ignore-area"），默认整个可移动模块都可以用鼠标移动
    ignoreArea: { type: String, required: false },
    // 可移动模块的“移动区域”，默认为可移动模块的父标签
    restriction: { type: String, default: "parent" },
    // 在“甩动”可移动模块时，是否采用惯性移动一定距离；无惯性时，可移动模块会立刻停止移动
    inertia: { type: Boolean, default: true },
    // 可移动模块是否可以部分移出“移动区域”，当为false时，可移动模块整个都必须在“移动区域”内
    allowGoToOutside: { type: Boolean, default: false },
    // 可移动模块是否可见，默认可见。从false改为true后，本可移动模块会恢复到原始位置（因为用的是v-if，而不是v-show）。
    // 可在父组件调用本组件时，使用v-show。
    // 父组件调用例子：<Draggable class="draggable-window" v-show="isDialogVisible" :ignoreArea="'.table'">你的内容</Draggable>
    isVisible: { type: Boolean, default: true },
    // 移动方向，both/horizontal/vertical，默认是全部方向
    moveDirection: {
      type: String,
      default: "both",
      validator: function (value) {
        return ["both", "horizontal", "vertical"].indexOf(value) !== -1;
      },
    },
    // 是否禁止拖动效果
    isFrozen: { style: Boolean },
    // 鼠标移入本组件区域内，curser是否改变(改变的话，默认会显示为十字箭头；不改变的话，就是系统原来的默认箭头)
    toStyleCursor: { type: Boolean, default: false },
    // 移动完毕后的回调，传递一个Rebound()函数作为参数，调用Rebound()可将本组件恢复到原位
    handleMoveEnd: { type: Function },
  },
  watch: {
    translateX: {
      immediate: false,
      handler(val, oldVal) {
        this.moveTo({ x: val });
      },
    },
    translateY: {
      immediate: false,
      handler(val, oldVal) {
        this.moveTo({ y: val });
      },
    },
  },
  data() {
    return {
      // 本组件的 dom id，由随机数和时间戳组成，保证唯一性
      areaDraggableId: `now-${Date.now()}-random-${Math.floor(
        Math.random() * (9999999 - 1000000 + 1) + 1000000
      )}${this.id ? "-" + this.id : "-0"}`,
      zIndexWhenMovingHeavy: "1000", // 组件移动时的z-index
      zIndexWhenMovingLight: "100", // 组件移动时的z-index
      originalX: 0, // 组件在每次拖动前的 translate x
      originalY: 0, // 组件在每次拖动前的 translate y
      originalZindex: "", // 组件在初始化时的 z-index
      originalTransform: "", // 组件在初始化时的 transform
      originalTransition: "", // 组件在初始化时的 transition
    };
  },
  mounted() {
    const bodyOverflow =
      document.getElementsByTagName("body")[0].style.overflow; // 由于拖动时，组件用于把body的滚动条隐藏掉

    this.originalZindex = this.$refs["area-draggable"].style.zIndex;
    this.originalTransform = this.$refs["area-draggable"].style.transform;
    this.originalTransition = this.$refs["area-draggable"].style.transition;

    if (this.translateX || this.translateY)
      this.moveTo({ x: this.translateX, y: this.translateY });

    const dragStartListener = (event) => {
      if (!this.isFrozen) {
        const target = event.target;
        const x = parseFloat(target.getAttribute("data-x")) || 0;
        const y = parseFloat(target.getAttribute("data-y")) || 0;
        this.originalX = x;
        this.originalY = y;
        target.style.zIndex = this.zIndexWhenMoving;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        this.$emit("drag-start", { id: this.id, originalX: x, originalY: y });
      }
    };

    const dragMoveListener = (event) => {
      if (!this.isFrozen) {
        const target = event.target;
        // parentElement和parentNode一样，只是parentElement是ie的标准
        // var target = event.target.parentNode || event.target.parentElement;

        const movedX = this.moveDirection === "horizontal" ? event.dx : 0;
        const x = (parseFloat(target.getAttribute("data-x")) || 0) + movedX;
        const movedY = this.moveDirection === "vertical" ? event.dy : 0;
        const y = (parseFloat(target.getAttribute("data-y")) || 0) + movedY;

        // target.style.transform =
        //   target.style.webkitTransform = `translate(${x}px, ${y}px)`;
        // target.setAttribute("data-x", x);
        // target.setAttribute("data-y", y);

        this.moveTo({ x, y, zIndex: this.zIndexWhenMoving });

        this.$emit("drag-move", {
          id: this.id,
          currentX: x, // 移动后的x值
          currentY: y,
          movedX, // 本次移动的距离
          movedY,
          deltaX: event.delta.x, // 正数向右，负数向左
          deltaY: event.delta.y,
        });
      }
    };

    const dragEndListener = (event) => {
      if (!this.isFrozen) {
        const target = event.target;
        document.getElementsByTagName("body")[0].style.overflow = bodyOverflow;

        if (this.handleMoveEnd) {
          this.handleMoveEnd(this.Rebound);
        } else {
          target.style.zIndex = this.originalZindex;
          // target.style.transition = "";
        }

        const x = parseFloat(target.getAttribute("data-x")) || 0;
        const y = parseFloat(target.getAttribute("data-y")) || 0;
        this.$emit("drag-end", {
          id: this.id,
          currentX: x, // 移动后的x值
          currentY: y,
        });
      }
    };

    // InteractJs("#" + this.myId).draggable({
    const interact = InteractJs(this.$refs["area-draggable"]).draggable({
      // enable inertial throwing
      inertia: this.inertia,
      // Prevent actions on child
      // ref: https://interactjs.io/docs/faq/#prevent-actions-on-child
      ignoreFrom: this.ignoreArea,
      // keep the element within the area of it's parent
      modifiers: [
        InteractJs.modifiers.restrictRect({
          restriction: this.restriction,
          endOnly: this.allowGoToOutside,
        }),
      ],
      // enable autoScroll
      autoScroll: false,
      // https://interactjs.io/docs/action-options/#cursorchecker
      // cursorChecker(action, interactable, element, interacting) {
      //   // don't set a cursor for drag actions
      //   return null;
      // },
      listeners: {
        start: dragStartListener,
        // call this function on every dragmove event
        move: dragMoveListener,
        // call this function on every dragend event
        end: dragEndListener,
      },
    });

    interact.styleCursor(this.toStyleCursor);

    // interact.dropzone({
    //   accept: ".area-draggable",
    //   overlap: "center",
    //   ondropactivate: function (event) {},
    //   ondragenter: (event) => {
    //     // console.log("event :>> ", event);
    //     const draggableElement = event.relatedTarget;
    //     const dropzoneElement = event.target;
    //     this.$emit("drag-enter", {
    //       draggableElement,
    //       dropzoneElement,
    //       id: this.id,
    //     });
    //   },
    //   ondragleave: function (event) {},
    //   ondrop: function (event) {},
    //   ondropdeactivate: function (event) {},
    // });
  },
  methods: {
    moveTo({ x = 0, y = 0, zIndex = this.zIndexWhenMovingHeavy }) {
      const target = this.$refs["area-draggable"];

      if (zIndex) {
        target.style.zIndex = zIndex;
      }

      target.style.transform =
        target.style.webkitTransform = `translate(${x}px, ${y}px)`;
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },

    // 移动到某处(供外部调用)
    MoveTo({
      x = 0,
      y = 0,
      zIndex = this.zIndexWhenMovingLight,
      transitionDuration = null, // 移动动效时长，整数，单位毫秒
      transitionTimingFunction = null, // 移动动效函数，linear, ease等
      afterMoveTo,
    }) {
      const target = this.$refs["area-draggable"];
      const _x = parseFloat(target.getAttribute("data-x")) || 0;
      const _y = parseFloat(target.getAttribute("data-y")) || 0;

      if (x !== _x || y !== _y) {
        if (transitionDuration) {
          target.style.transition = `transform ${transitionDuration}ms ${
            transitionTimingFunction ? transitionTimingFunction : "ease"
          }`;

          if (zIndex) {
            target.style.zIndex = zIndex;
          }

          setTimeout(() => {
            if (afterMoveTo) afterMoveTo();
            target.style.transition = "";
            target.style.zIndex = this.originalZindex;
          }, transitionDuration);
        } else {
          if (afterMoveTo) afterMoveTo();
        }

        target.style.transform =
          target.style.webkitTransform = `translate(${x}px, ${y}px)`;
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      } else {
        afterMoveTo && afterMoveTo();
      }
    },

    // 恢复到上次移动后的位置(供外部调用)
    Rebound({
      transitionDuration = null, // 移动动效时长，整数，单位毫秒
      transitionTimingFunction = null, // 移动动效函数，linear, ease等
      afterRebound,
    }) {
      const target = this.$refs["area-draggable"];
      const x = parseFloat(target.getAttribute("data-x")) || 0;
      const y = parseFloat(target.getAttribute("data-y")) || 0;
      if (this.originalX !== x || this.originalY !== y) {
        this.MoveTo({
          x: this.originalX,
          y: this.originalY,
          transitionDuration,
          transitionTimingFunction,
          afterMoveTo: () => {
            afterRebound && afterRebound();
          },
        });
      }
    },

    // 把移动的痕迹抹除(供外部调用)
    Clear() {
      const target = this.$refs["area-draggable"];
      target.style.transform = this.originalTransform;
      target.style.transition = this.originalTransition;
      target.style.zIndex = this.originalZindex;
      target.setAttribute("data-x", 0);
      target.setAttribute("data-y", 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.area-draggable {
  touch-action: none;
}
</style>