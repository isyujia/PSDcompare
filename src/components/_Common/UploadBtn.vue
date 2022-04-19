<!--
 * @Author: Billy
 * @Date: 2020-09-30 08:54:15
 * @LastEditors: Billy
 * @LastEditTime: 2021-06-06 02:21:47
 * @Description: 文件上传组件(部分接口仿照Element的Upload组件)
-->

<template>
  <div>
    <div class="upload" @click="handleBtnFileUpload">
      <slot></slot>
    </div>
    <input
      type="file"
      name="resource"
      :multiple="multiple"
      ref="resource"
      @change="handleFileInputChange"
    />
  </div>
</template>
<script>
import UploadAxios from "../../api/Disk/_UploadAxios.js";

export default {
  props: {
    disabled: { type: Boolean, default: false }, // 是否不可用
    beforeUploadAll: Function, // 上传所有文件之前的钩子，返回false将会中止所有文件上传
    beforeUpload: Function, // 上传单个文件之前的钩子，返回false将会中止单个文件上传
    onBegin: Function, // 开始上传单个文件时的钩子，后于beforeUpload，文件必定会开始上传
    onChange: Function,
    onSuccess: Function,
    onProgress: Function,
    onError: Function,
    onExceed: Function,
    autoUpload: { type: Boolean, default: true },
    multiple: { type: Boolean, default: false },
    limit: { type: Number },
    action: { type: String, required: true },
    extraData: Object,
    fileSizeAttrName: String, // 文件大小 字段对应的字段名（如果不传，则每个文件的大小不会上传服务器）
    fileNameAttrName: String // 文件名 字段对应的字段名（如果不传，则每个文件的文件名不会上传服务器）
  },
  data() {
    return {
      fileInput: null
    };
  },
  mounted() {
    this.fileInput = this.$refs["resource"];
    this.fileInput.style.display = "none";
  },
  methods: {
    setFiles(files) {
      if (this.fileInput) {
        this.fileInput.files = files;
      } else {
        throw new Error("fileInput 未初始化");
      }
    },

    // 清空选择的所有文件(恢复input的初始状态，目的是使onChange事件在选择同一文件时也会触发)
    clearFiles() {
      this.fileInput.value = null;
    },

    // 上传按钮被物理点击
    handleBtnFileUpload() {
      if (!this.disabled) this.fileInput && this.fileInput.click();
    },

    // 选择要上传的文件时
    handleFileInputChange(event) {
      let files = event.target.files;
      this.onChange && this.onChange(files);
      if (this.autoUpload) {
        this.upload(files);
      }
    },

    // 上传文件
    upload(files) {
      let _files = files ? files : this.fileInput.files;
      if (this.beforeUploadAll) {
        const beforeAll = this.beforeUploadAll(_files);
        if (beforeAll && beforeAll.then) {
          beforeAll
            .then(result => {
              if (result !== false) {
                this.$$_upload(_files);
              }
            })
            .catch(err => {
              // console.log("err :>> ", err);
            });
        } else if (beforeAll !== false) {
          this.$$_upload(_files);
        }
      } else {
        this.$$_upload(_files);
      }
    },

    /**
     * @description 上传多个文件
     * @param {Array.<File>} files 表单文件对象数组
     */
    $$_upload(files) {
      if (this.beforeUpload) {
        for (const file of files) {
          const before = this.beforeUpload(file, files);
          if (before && before.then) {
            before.then(result => {
              if (result !== false) {
                this.$_upload(file, files);
              }
            });
          } else if (before !== false) {
            this.$_upload(file, files);
          }
        }
      } else {
        for (const file of files) {
          this.$_upload(file, files);
        }
      }
    },

    /**
     * @description 上传单个文件
     * @param {File} file 表单文件对象
     * @param {Array.<File>} files 表单文件对象数组
     * @returns {Function} 用于中止上传的函数
     */
    $_upload(file, files) {
      if (this.limit && this.limit > 0) {
        if (files.length > this.limit) {
          this.onExceed && this.onExceed(files);
          return;
        }
      }

      let extraData = JSON.parse(JSON.stringify(this.extraData));

      extraData[this.fileSizeAttrName] = file.size;
      extraData[this.fileNameAttrName] = file.name;

      // let slicedBlob = file.slice(start);

      return UploadAxios.upload(
        this.action,
        file,
        // slicedBlob,
        extraData,
        this.onBegin,
        this.onSuccess,
        this.onProgress,
        this.onError,
        "file"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.upload {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: 0;
}
</style>