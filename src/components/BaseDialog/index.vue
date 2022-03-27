<template>
  <div class="dialog">
    <div class="dialog-mask"></div>
    <el-container>
      <el-header>
          <slot name="header"></slot>
      </el-header>
      <el-main>
          <slot name="main"></slot>
      </el-main>
      <el-footer height="auto">
          <slot name="footer"></slot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "BaseDialog",
  props: ["dialogTitle"],
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 10;
  }

  .el-container {
    .el-header {
      padding: 0 5px;
    }
    .el-footer {
      text-align: right;
      padding: 0 5px;
    }
    padding: {
      left: 20px;
      right: 20px;
    }
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background: white;
    width: 469px;
    height: auto;
    border-radius: 2px;
  }
}
</style>