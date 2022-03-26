<template>
  <el-container class="main-container">
    <el-header>
      <el-row>
        <el-col :span="1">
          <span>关键词：</span>
        </el-col>
        <el-col span="3">
          <el-input
            placeholder="请输入内容"
            v-model="searchText"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="2">
          <span>日期范围：</span>
        </el-col>
        <el-col :span="5">
          <el-date-picker
            v-model="daterange"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
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
    <el-footer>
      <el-row class="pagination">
        <el-col :span="24">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            background
          >
          </el-pagination>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
console.log(process.env.BASE_URL);

export default {
  name: "HistoryIndex",
  components: {},
  computed: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      daterange: "",
      searchText: "",
    };
  },
  methods: {},
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
  .el-header {
    background: white;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }
  .main {
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
  }
  .el-footer {
    background: white;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
    .pagination{
        .el-col{
            text-align: right;
        }
    }
  }
}
</style>