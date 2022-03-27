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
            range-separator="~"
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
        <el-table-column
          prop="serial_number"
          label="流水编号"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="compare_file_1_name"
          label="对比文件"
          width="200"
        ></el-table-column>
        <el-table-column prop="comparison_cost" label="支付费用" width="200">
        </el-table-column>
        <el-table-column prop="status" label="支付状态" width="200">
          <template slot-scope="scope">
            <span v-if="scope.row.status" class="dot"
              ><span class="blue-dot"></span>已支付</span
            >
            <span v-else class="dot"><span class="red-dot"></span>未支付</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="支付状态" width="200">
          <template slot-scope="scope">
            <span v-if="scope.row.status" class="dot"
              ><span class="blue-dot"></span>已完成</span
            >
            <span v-else class="dot"><span class="red-dot"></span>未完成</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="支付结果" width="200">
          <template slot-scope="scope">
            <span v-if="scope.row.status" style="color: #67c23a">成功</span>
            <span v-else style="color: #f56760">错误</span>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="时间" width="200">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <div class="act">
              <svg-icon icon-class="show-eye"></svg-icon>
              <span>查看</span>
              <el-divider direction="vertical"></el-divider>
              <svg-icon icon-class="download"></svg-icon>
              <span>下载</span>
              <el-divider direction="vertical"></el-divider>
              <svg-icon icon-class="bin"></svg-icon>
              <span>删除</span>
            </div>
          </template>
        </el-table-column>
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
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      daterange: "",
      searchText: "",
      tableData: [
        {
          serial_number: "15881206583",
          compare_file_1_name: "金天宇",
          comparison_cost: "22854.87",
          status: false,
          create_time: "2000年09月01日 22:08",
        },
        {
          serial_number: "15881206583",
          compare_file_1_name: "金天宇",
          comparison_cost: "22854.87",
          status: false,
          create_time: "2000年09月01日 22:08",
        },
        {
          serial_number: "15881206583",
          compare_file_1_name: "金天宇",
          comparison_cost: "22854.87",
          status: false,
          create_time: "2000年09月01日 22:08",
        },
        {
          serial_number: "15881206583",
          compare_file_1_name: "金天宇",
          comparison_cost: "22854.87",
          status: false,
          create_time: "2000年09月01日 22:08",
        },
        {
          serial_number: "15881206583",
          compare_file_1_name: "金天宇",
          comparison_cost: "22854.87",
          status: false,
          create_time: "2000年09月01日 22:08",
        },
        {
          serial_number: "15881206583",
          compare_file_1_name: "金天宇",
          comparison_cost: "22854.87",
          status: false,
          create_time: "2000年09月01日 22:08",
        },
      ],
    };
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
  .el-header {
    background: white;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }
  .main {
    background: white;
    .el-table {
      padding: 0 17px;
      .act {
        display: flex;
        align-items: center;
        line-height: 100%;
        .svg-icon {
          width: 1.3em;
          height: 1.3em;
        }
      }
      .dot {
        position: relative;
        .red-dot,
        .blue-dot {
          position: absolute;
          top: 50%;
          left: -20%;
          width: 5px;
          height: 5px;
          display: inline-block;
          border-radius: 50%;
          transform: translateY(-25%);
        }
        .red-dot {
          background: #f56760;
        }
        .blue-dot {
          background: #347eff;
        }
      }
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