<template>
  <div class="page">
    <div class="page-container">
      <div class="page-content">
        <div class="page-title">
          <h1>404</h1>
        </div>
        <div class="page-subtitle">
          <p>本页不存在</p>
        </div>
        <el-button class="btn-main" type="primary" size="medium" @click="toHome">去首页</el-button>
        <div class="btn-container">
          或者
          <el-button type="text" @click="goBack">返回上页 ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  data() {},
  props: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toHome() {
      this.$router.push("/").catch(e => {}); // 这个奇怪的catch请参考：https://github.com/vuejs/vue-router/issues/2873
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../scss/_variables";
.page-container {
  display: flex;
  justify-content: center;
  padding-top: 180px;
  .page-content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 384px;
    max-width: 500px;
    .page-title,
    .page-subtitle {
      color: #646464;
      line-height: 1.4;
    }
    .page-subtitle {
      font-size: 18px;
      margin-top: 10px;
    }
    .btn-main,
    .btn-container {
      margin-top: 20px;
    }
    .btn-container {
      align-items: center;
      // color: $main-color-light;
      display: flex;
      font-size: 14px;
      .el-button {
        margin-left: 10px;
        padding: 0;
        // color: $main-color-light;
      }
    }
  }
}
</style>