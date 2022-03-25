<template>
  <div class="aside">
    <el-row>
      <el-col :span="24">
        <div class="active">
          <span class="compare-icon"></span>
          图纸对比
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class=""><span class="note-icon"></span> 历史记录</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AsideComponent",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
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

    .el-col {
      text-align: left;
      .compare-icon {
        mask: url("/public/images/svg/compare.svg") no-repeat;
      }
      .note-icon {
        mask: url("/public/images/svg/note.svg") no-repeat;
      }
      [class$="-icon"] {
        background: white;
        width: 20px;
        min-height: 20px;
        background: #636d7e;
        transform: translateY(25%);
        display: inline-block;
      }

      .active {
        background: $aside-active-background;
        color: white;
        [class$="-icon"] {
          background: white;
        }
      }
      div {
        padding-left: 20px;
        border-radius: 4px;
      }
    }
  }
}
</style>