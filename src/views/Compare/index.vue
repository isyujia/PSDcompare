<template>
  <el-container class="main-container">
    <el-aside class="main-left" width="0">
      <div>
        <el-row class="header-row">
          <el-col :span="12">
            <div class="left">对比记录</div>
          </el-col>
          <el-col :span="12">
            <div class="right">
              <svg-icon icon-class="add" @click="openUploadDialog()"></svg-icon>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="orders">
        <el-row class="order">
          <el-col>
            <div>
              <el-row>
                <el-col :span="16">
                  <span class="notice">名称：</span>
                  <span>132</span>
                </el-col>

                <el-col :span="4" class="compare">
                  <a href="#">对比</a>
                </el-col>

                <el-col :span="4" class="download">
                  <a href="#">下载</a>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">状态：</span>
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">时间：</span>
                  <span>2022/2/22 12:00:00</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col class="more">
                  <span>查看更多 </span>
                  <svg-icon icon-class="angle-bottom"></svg-icon>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-row class="order">
          <el-col>
            <div>
              <el-row>
                <el-col :span="16">
                  <span class="notice">名称：</span>
                  <span>132</span>
                </el-col>

                <el-col :span="4" class="compare">
                  <a href="#">对比</a>
                </el-col>

                <el-col :span="4" class="download">
                  <a href="#">下载</a>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">状态：</span>
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">时间：</span>
                  <span>2022/2/22 12:00:00</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col class="spilit-line">
                  <span></span>
                </el-col>
              </el-row>

              <el-row class="file-list">
                <el-col :span="20">
                  <span>预制件1.pdf</span>
                </el-col>
                <el-col :span="4">
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row class="file-list">
                <el-col :span="20">
                  <span>预制件2.pdf</span>
                </el-col>
                <el-col :span="4">
                  <span class="normal">无差异</span>
                </el-col>
              </el-row>

              <el-row class="time-line">
                <el-col :span="2">
                  <svg-icon icon-class="clock"></svg-icon>
                </el-col>
                <el-col :span="19">
                  <el-progress
                    :percentage="50"
                    :stroke-width="10"
                    :show-text="false"
                  >
                  </el-progress>
                </el-col>
                <el-col :span="3">
                  <div><span>50%</span></div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-row class="order">
          <el-col>
            <div>
              <el-row>
                <el-col :span="16">
                  <span class="notice">名称：</span>
                  <span>132</span>
                </el-col>

                <el-col :span="4" class="compare">
                  <a href="#">对比</a>
                </el-col>

                <el-col :span="4" class="download">
                  <a href="#">下载</a>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">状态：</span>
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">时间：</span>
                  <span>2022/2/22 12:00:00</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col class="spilit-line">
                  <span></span>
                </el-col>
              </el-row>

              <el-row class="file-list">
                <el-col :span="20">
                  <span>预制件1.pdf</span>
                </el-col>
                <el-col :span="4">
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row class="file-list">
                <el-col :span="20">
                  <span>预制件2.pdf</span>
                </el-col>
                <el-col :span="4">
                  <span class="normal">无差异</span>
                </el-col>
              </el-row>

              <el-row class="time-line">
                <el-col :span="2">
                  <svg-icon icon-class="play"></svg-icon>
                </el-col>
                <el-col :span="19">
                  <el-progress
                    :percentage="0"
                    :stroke-width="10"
                    :show-text="false"
                  >
                  </el-progress>
                </el-col>
                <el-col :span="3">
                  <div><span>0%</span></div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row class="order">
          <el-col>
            <div>
              <el-row>
                <el-col :span="16">
                  <span class="notice">名称：</span>
                  <span>132</span>
                </el-col>

                <el-col :span="4" class="compare">
                  <a href="#">对比</a>
                </el-col>

                <el-col :span="4" class="download">
                  <a href="#">下载</a>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">状态：</span>
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <span class="notice">时间：</span>
                  <span>2022/2/22 12:00:00</span>
                </el-col>
              </el-row>

              <el-row>
                <el-col class="spilit-line">
                  <span></span>
                </el-col>
              </el-row>

              <el-row class="file-list">
                <el-col :span="20">
                  <span>预制件1.pdf</span>
                </el-col>
                <el-col :span="4">
                  <span class="success">已完成</span>
                </el-col>
              </el-row>

              <el-row class="file-list">
                <el-col :span="20">
                  <span>预制件2.pdf</span>
                </el-col>
                <el-col :span="4">
                  <span class="normal">无差异</span>
                </el-col>
              </el-row>

              <el-row class="time-line">
                <el-col :span="2">
                  <svg-icon icon-class="play"></svg-icon>
                </el-col>
                <el-col :span="19">
                  <el-progress
                    :percentage="0"
                    :stroke-width="10"
                    :show-text="false"
                  >
                  </el-progress>
                </el-col>
                <el-col :span="3">
                  <div><span>0%</span></div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-aside>
    <el-main class="main-right">
      <el-container>
        <el-header>
          <el-row class="main-right-header">
            <el-col :span="4">
              <span class="gray">图纸名称：</span>
              <span>预制件1</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">图纸大小：</span>
              <span>20M</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">图纸分辨率：</span>
              <span>3000*4000</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">红色：</span>
              <span>代表修改部分</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">绿色：</span>
              <span>代表删除部分</span>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="right-main-img">
            <img :src="`${publicPath}images/251.png`" alt="" />
          </div>
        </el-main>
      </el-container>
    </el-main>
    <upload-dialog
      v-show="IsUploadDialogShow"
      @on-close="closeUploadDialog"
    ></upload-dialog>
    <pay-dialog v-show="IsPayDialogShow" @on-close="closePayDialog"></pay-dialog>
  </el-container>
</template>

<script>
console.log(process.env.BASE_URL);
import UploadDialog from "@/components/UploadDialog";
import PayDialog from "@/components/PayDialog"

export default {
  name: "CompareIndex",
  components: {
    UploadDialog,
    PayDialog
  },
  computed: {
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      IsUploadDialogShow:false,
      IsPayDialogShow:false,

    };
  },
  methods: {
    openUploadDialog() {
        this.IsUploadDialogShow=true
    },
    closeUploadDialog() {
        this.IsUploadDialogShow=false
    },
    openPayDialog() {
        this.IsPayDialogShow=true
    },
    closePayDialog() {
        this.IsPayDialogShow=false
    },
  },
};
</script>

<style lang='scss' scoped>
.gray {
  color: #a8a8aa;
}
.main-container {
  height: 100%;
  align-items: stretch;
  padding: 18px;
  box-sizing: border-box;
  $radius: 4px;
  .main-left {
    flex: {
      basis: 23%;
    }
    background: white;
    border-top-left-radius: $radius;
    border-bottom-left-radius: $radius;
    $pad: 20px;
    padding: {
      left: $pad;
      right: $pad;
    }
    border-right: 1px solid #e5e7ed;
    .header-row {
      line-height: 60px;
      font-size: 16px;

      .left {
        text-align: left;
      }
      .right {
        .svg-icon {
          cursor: pointer;
        }
        text-align: right;
      }
    }
    .orders {
      height: 90%;
      overflow-y: auto;
      //TODO:有点问题，滚动条显示不出来
      &::-webkit-scrollbar {
        width: 10px;
        //   height: 100px;
      }
      //   &::-webkit-scrollbar-track{
      //       background-color: #EDEDED;
      //   }
      //   &::-webkit-slider-thumb{
      //       background-color: #535353;
      //   }
      //   &::-webkit-scrollbar-track-piece{
      //       background-color: pink;
      //   }
      .order {
        //   &:nth-last-child(1){
        //       margin-bottom: 0;
        //   }
        margin-bottom: 20px;
        border: 1px solid #e5e7ed;
        border-radius: 4px;
        padding: 15px;
        text-align: left;
        .more {
          text-align: center;
          color: #25262b;
        }
        .el-row {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .success {
          color: #7ebf50;
        }
        .normal {
          color: #347eff;
        }
        .compare,
        .download {
          text-align: right;
          a {
            color: #347eff;
          }
        }
        .notice {
          color: #a8a8aa;
        }

        .time-line {
          text-align: center;
          line-height: 14px;
          font-size: 14px;
          .svg-icon {
            width: 1.2em;
            height: 1.2em;
            transform: translateY(-15%);
          }
          .el-progress {
            transform: translateY(15%);
          }
        }
        .spilit-line {
          border: 1px solid #e5e7ed;
        }
      }
    }
  }
  .main-right {
    .el-container {
      height: 100%;
    }
    .main-right-header {
      .el-col {
        &:first-of-type {
          text-align: left;
        }
        &:last-of-type {
          text-align: right;
        }
      }
    }
    .right-main-img {
      padding: 20px;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    flex: {
      basis: 77%;
    }
    background: white;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}
</style>