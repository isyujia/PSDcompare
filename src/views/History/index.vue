<template>
  <el-container class="main-container">
    <el-header>
      <el-row>
        <el-col :span="1">
          <span>关键词：</span>
        </el-col>
        <el-col :span="3">
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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row class="pagination">
        <el-col :span="24">
          <el-pagination
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
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
    background: white;
    .el-table{
        padding: 0 17px;
    }
  }
  .el-footer {
    background: white;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
    .pagination {
      .el-col {
        text-align: right;
      }
    }
  }
}
</style>