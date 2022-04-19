<!--
 * @Author: Billy
 * @Date: 2021-08-07 16:02:32
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-04 17:50:37
 * @Description: 轻量级分列器(取代el-row和el-col)
-->

<!--
用法：
<LightSplit :ratios="[1, 1, 1]">
    <template v-slot:1>aaa</template>
    <template v-slot:2>bbb</template>
    <template v-slot:3>ccc</template>
    ...
    <template v-slot:n>zzz</template>
</LightSplit>
-->

<template>
  <div class="light-split-container" :style="containerStyle">
    <template v-if="percents.length > 0">
      <div class="row">
        <div
          v-for="(per, i) in percents"
          :key="i"
          :style="{ width: per + '%' }"
          class="col"
        >
          <slot :name="i + 1"></slot>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    ratios: {
      type: Array, // 必须由正整数组成的数组
      required: true,
      validator: function (ratios) {
        for (const s of ratios)
          if (typeof s !== "number" || s <= 0) return false;
        return true;
      },
    },
    minHeight: {
      type: Number,
    },
    // 本组件最大高度，超出此高度则出现滚动条
    maxHeight: {
      type: Number,
    },
  },
  computed: {
    containerStyle: function () {
      let styleObj = {};
      if (this.maxHeight || this.minHeight) {
        styleObj.overflowY = "auto";
        if (this.maxHeight) {
          styleObj.maxHeight = this.maxHeight + "px";
        }
        if (this.minHeight) {
          styleObj.minHeight = this.minHeight + "px";
        }
        return styleObj;
      } else return {};
    },
  },
  data() {
    return {
      percents: [],
    };
  },
  beforeMount() {
    let total = 0;
    this.ratios.map((s) => (total += s));
    this.percents = [];
    for (const ratio of this.ratios) {
      let per = 100 * (ratio / total);
      this.percents.push(per);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/_variables.scss";
.light-split-container {
  overflow-y: auto;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    flex-wrap: nowrap;
    .col {
      border: solid 1px $theme-background-dark;
      padding: 8px;

      &:not(:last-child) {
        border-right: none;
      }
    }
  }
}
</style>