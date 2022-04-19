<!--
 * @Author: Billy
 * @Date: 2020-09-28 13:54:46
 * @LastEditors: Billy
 * @LastEditTime: 2021-06-06 02:22:29
 * @Description: 上传拖拽面板
-->

<template>
  <div class="upload-pane">
    <div v-if="showPane" class="drag-area" v-on:dragleave="handleDragleave" v-on:drop="handleDrop">
      <div class="upload-tip">上传文件到当前目录</div>
    </div>
  </div>
</template>
<script>
// https://stackoverflow.com/questions/10261989/html5-javascript-drag-and-drop-file-from-external-window-windows-explorer
export default {
  data() {
    return {
      showPane: false,
      dropZone: null,
      onDragenter: e => {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        this.showPane = true;
      },
      onDragover: e => {
        e.stopPropagation();
        e.preventDefault(); // 此处是取消文件拖拉后另页打开或弹框下载的关键
        e.dataTransfer.dropEffect = "move";
      }
    };
  },
  mounted() {
    this.dropZone = document.getElementsByTagName("body")[0];
    this.dropZone.addEventListener("dragenter", this.onDragenter);
    this.dropZone.addEventListener("dragover", this.onDragover);

    // dropZone.addEventListener("drop", (e) => {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   e.dataTransfer.dropEffect = "move";
    // });
  },
  destroyed() {
    this.dropZone &&
      this.dropZone.removeEventListener("dragenter", this.onDragenter);
    this.dropZone &&
      this.dropZone.removeEventListener("dragover", this.onDragover);
  },
  methods: {
    handleDragleave(e) {
      e.stopPropagation();
      e.preventDefault();
      this.showPane = false;
    },
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      this.showPane = false;
      let files = e.dataTransfer.files; // Array of all files
      this.$emit("file-dropped", files); // https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/files
    }
  }
};
</script>
<style lang="scss" scoped>
.drag-area {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 3px darkgray dashed;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .upload-tip {
    font-size: 36px;
    color: darkgray;
  }
}
</style>