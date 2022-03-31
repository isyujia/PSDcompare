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
          @selection-change="handleSelectionChange"
          @select="select1"
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
          <input
            type="file"
            class="el-upload"
            @change="submit2"
            accept="application/pdf"
            multiple
            :disabled="fileList.length >= 2"
            ref="inputFile"
          />
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
import { mapState } from "vuex";
export default {
  name: "UploadDialog",
  data() {
    return {
      multipleSelection: [],
      files: [], //写文件对象数组,用于表格遍历展示
      fileList: [], //用于传输file数组给后端
      fileArrayOrigin: [],
    };
  },
  beforeCreate() {
    this.$bus.$on("requestUpload", () => {
      this.$message({
        message: "正在上传",
        type: "info",
      });
      let timer = setInterval(() => {
        if (this.workObj.fileCode1 != null) {
          this.$api
            .reqUploadFile({
              file: this.$refs.inputFile.files[0],
              workcode: this.workObj.workCode,
              filecode: this.workObj.fileCode1,
            })
            .then((r) => {
              this.$api
                .reqUploadFile({
                  file: this.$refs.inputFile.files[1],
                  workcode: this.workObj.workCode,
                  filecode: this.workObj.fileCode2,
                })
                .then((rr) => {
                  if (rr.status == 200 && r.status == 200) {
                    this.$message({
                      message: "上传成功",
                      type: "success",
                    });
                    this.$bus.$emit("startCheckCompareWorkTimer");
                  } else {
                    this.$message({
                      message: "系统正忙",
                      type: "error",
                    });
                  }
                });
            });
          clearInterval(timer);
        }
      }, 100);
    });
  },
  computed: {
    ...mapState({
      workObj: (s) => s.compare.workObj,
    }),
  },
  methods: {
    // 勾选的文件时把对应的文件对象给fileList
    select1(select, row) {
      this.fileList.push(row);
    },
    closeDialog() {
      this.$emit("on-close");
    },
    // 客户上传文件时，传给files数组存储，渲染上去
    submit2(e) {
      if (e.target.files.length) {
        for (let f of e.target.files) {
          console.log(f);
          this.files.push({
            name: f.name,
            size: `${Math.round(f.size / 1024)}KB`,
          });
          this.fileList.push({
            name: f.name,
            size: `${Math.round(f.size / 1024)}KB`,
          });
          this.fileArrayOrigin.push(f);
        }
        // this.files = this.files.concat(e.target.files);
        // this.fileList = this.fileList.concat(e.target.files);
      }
    },
    requestUpload() {},
    // 确定最终上传的文件对象数组
    upload() {
      if (this.fileList.length === 2) {
        this.$bus.$emit("UploadDone");
        this.$store.dispatch("getWorkCode");
      } else this.$message.error("请上传两个文件");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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