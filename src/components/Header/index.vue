<template>
  <el-row type="flex" class="row-bg header">
    <el-col :span="6">
      <svg-icon icon-class="logo" class="logo"></svg-icon>
    </el-col>
    <el-col>
      <div></div>
    </el-col>
    <el-col :span="5">
      <div class="home-avatar">
        <div class="to-home">返回主页</div>
        <div class="side-spilit"></div>
        <div class="avatar">
          <img :src="`${publicPath}images/avatar.png`" alt="" />
          头像
          <svg-icon icon-class="angle-down"></svg-icon>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
$header-font-size: 16px;
.header {
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
  .logo {
    width: 16rem;
    height: 2rem;
    vertical-align: 0;
    transform: translateY(30%) translateX(-20%);
  }
  font-size: $header-font-size;
  background: $header-row-background;
  .side-spilit {
    height: 50%;
    border: {
      right: 1px solid #e5e7ed;
    }
  }
  .avatar {
    flex-basis: 60%;
  }
  .to-home {
    flex-basis: 40%;
  }

  .home-avatar {
    height: $header-height;
    display: flex;
    align-items: center;
    .avatar {
      img {
        border-radius: 50%;
        margin: {
          right: 10px;
        }
      }
    }
  }
  &::after {
    box-sizing: content-box;
  }
}
</style>