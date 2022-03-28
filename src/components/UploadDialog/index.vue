<template>
  <div class="dialog">
    <div class="dialog-mask"></div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="20">上传PDF图纸</el-col>
          <el-col :span="4">
            <svg-icon icon-class="close" @click="closeDialog"></svg-icon>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table
          ref="multipleTable"
          :data="files"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column type="index" label="序号" width="120">
          </el-table-column>
          <el-table-column prop="name" label="文件名"> </el-table-column>
          <el-table-column prop="size" label="大小" width="120">
          </el-table-column>
        </el-table>
        <span class="fileinput-button">
          <i class="el-icon-plus avatar-uploader-icon"></i>
          <input type="file" class="el-upload" @change="submit2" accept=".png"/>
        </span>
      </el-main>
      <el-footer>
        <el-row>
          <el-button @click="closeDialog">取消</el-button>
          <el-button type="primary" @click="upload">上传</el-button>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "UploadDialog",
  data() {
    return {
      multipleSelection: [],
      files: [], //写文件对象数组,用于表格遍历展示
    };
  },
  methods: {
    closeDialog() {
      this.$emit("on-close");
    },
    submit2(e) {
      if(e.target.files[0])
      {
        this.imagesCount++;
        if(this.files.length<2)  this.files.push(e.target.files[0]);
        else alert('注意,最多两张图纸进行比较!')
      }
    },
    upload(){
      console.log(this.files);
      this.$bus.$emit('UploadDone');
      this.files = []
    },
  },
};
</script>

<style lang="scss" scoped>
.fileinput-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.fileinput-button input {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  // -ms-filter: "alpha(opacity=0)";
}
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
      .el-row {
        font-weight: bold;
        .el-col {
          .svg-icon {
            cursor: pointer;
          }
          &:first-of-type {
            text-align: left;
          }
          &:last-of-type {
            text-align: right;
          }
        }
      }
    }
    .el-footer {
      text-align: right;
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