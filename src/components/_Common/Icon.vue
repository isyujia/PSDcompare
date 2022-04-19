<!--
 * @Author: Billy
 * @Date: 2021-08-24 01:47:34
 * @LastEditors: Billy
 * @LastEditTime: 2021-08-26 10:47:05
 * @Description: 用户头像组件
-->

<template>
  <el-image
    class="icon-image"
    :style="iconSize"
    :src="iconPreviewUrl"
    :fit="'contain'"
  >
    <div slot="error" class="image-slot">
      <i class="el-icon-picture-outline"></i>
    </div>
  </el-image>
</template>
<script>
import Qs from "qs";

export default {
  props: {
    size: { type: Number, default: 48 }, // 头像大小
    iconBaseUrl: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      flag: Date.now(),
    };
  },
  computed: {
    iconSize: function () {
      return `width: ${this.size}px; height: ${this.size}px`;
    },
    iconPreviewUrl: function () {
      return (
        this.iconBaseUrl +
        "?" +
        Qs.stringify({ ...this.data, flag: this.flag }, { encode: false })
      );
    },
  },
  methods: {
    reflash() {
      this.flag = Date.now();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/_variables.scss";
.icon-image {
  border: 1px solid $theme-second-font-color-half;
  border-radius: 50%;
  ::v-deep .image-slot {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>