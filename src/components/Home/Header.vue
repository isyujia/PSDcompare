<template>
  <el-row type="flex" class="row-bg header">
    <el-col :span="6" class="logo">
      <SvgIcon icon-class="logo"></SvgIcon>
    </el-col>
    <el-col>
      <div></div>
    </el-col>
    <el-col :span="7">
      <div class="home-avatar">
        <div class="to-home">返回主页</div>
        <el-divider direction="vertical"></el-divider>
        <div class="avatar">
          <img :src="`/images/avatar.png`" alt="" />
          <span>头像</span>
          <SvgIcon icon-class="angle-down"></SvgIcon>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
$header-font-size: 16px;
.header {
  height: 100%;
  align-items: center;
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
  font-size: $header-font-size;
  background: $header-row-background;
}

.logo {
  display: flex;
  align-items: center;
  svg {
    transform: translateX(-15%);
    width: 16em;
    height: 2em;
  }
}
.home-avatar {
  height: 72%;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-divider {
    height: 2.14rem;
    margin: 0 2.14rem;
  }
  .avatar {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      margin: {
        right: 10px;
      }
    }
  }
}
</style>
