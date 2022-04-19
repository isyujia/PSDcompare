<!--
 * @Author: Billy
 * @Date: 2021-08-28 17:29:55
 * @LastEditors: Guanghao
 * @LastEditTime: 2022-01-05 18:02:56
 * @Description: 请输入
-->
<template>
  <div class="tree-item">
    <div class="title">{{ data.name }}</div>
    <div class="btn" v-if="hasBtn">
      <el-popover
        placement="right"
        trigger="hover"
        popper-class="tree-node-pop"
        width="120"
      >
        <div slot="reference" class="dots">
          <svg-icon icon-class="vertical-more"></svg-icon>
        </div>

        <div class="title">{{ data.name }}</div>

        <el-menu
          @select="
            (index, indexPath) => {
              this.$emit('menu-select', index, indexPath, data);
            }
          "
        >
          <el-menu-item index="edit" v-if="btns.includes('edit')">
            <div class="menu-item-content">
              <div class="icon">
                <svg-icon icon-class="edit"></svg-icon>
              </div>
              <div class="text">编 辑</div>
            </div>
          </el-menu-item>
          <el-menu-item index="add" v-if="btns.includes('add')">
            <div class="menu-item-content">
              <div class="icon">
                <svg-icon icon-class="add"></svg-icon>
              </div>
              <div class="text">{{ addBtnName }}</div>
            </div>
          </el-menu-item>
          <el-menu-item index="move" v-if="btns.includes('move')">
            <div class="menu-item-content">
              <div class="icon">
                <svg-icon icon-class="move" class="move"></svg-icon>
              </div>
              <div class="text">移 动</div>
            </div>
          </el-menu-item>
          <el-menu-item index="delete" v-if="btns.includes('delete')">
            <div class="menu-item-content">
              <div class="icon">
                <svg-icon icon-class="delete"></svg-icon>
              </div>
              <div class="text">删 除</div>
            </div>
          </el-menu-item>
        </el-menu>
      </el-popover>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    // 节点数据，一般至少包含id和name
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // 是否有操作按钮
    hasBtn: {
      type: Boolean,
      default: true,
    },
    // 操作按钮的种类（edit/add/move/delete）
    btns: {
      type: Array, // 字符串数组
      default: () => {
        return ["edit", "add", "move", "delete"];
      },
    },
    addBtnName: {
      type: String,
      default: "新增子节点",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/_variables.scss";
$dots-btn-width: 22px;
.tree-item {
  width: 100%;
  height: 100%;
  font-size: 14px;
  overflow: hidden;
  .title {
    float: left;
    width: calc(100% - #{$dots-btn-width});
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btn {
    float: right;
    width: $dots-btn-width;
    text-align: center;
    display: none;
    .dots {
      box-sizing: border-box;
      padding: 3px 0;
    }
    &:hover {
      background-color: $theme-background-dark;
    }
  }
  &:hover {
    .btn {
      display: block;
    }
  }
}

.el-popover.tree-node-pop {
  .title {
    padding: 4px 8px;
    text-align: center;
    background-color: $theme-background-dark;
  }
  .el-menu {
    border-right: none; // 取消垂直导航菜单默认的右边框
    .el-menu-item {
      padding-left: 4px !important;
      line-height: 32px;
      height: 32px;
      .menu-item-content {
        .icon {
          float: left;
          width: 20px;
          height: 32px;
          box-sizing: border-box;
          padding: 6px 0;
          margin-right: 5px;
          svg {
          }
        }
        .text {
          font-size: 14px;
          color: $font-color-light;
        }
      }
    }
  }
}

.svg-icon {
  width: 20px;
  height: 20px;
  color: $font-color-light;
}
</style>