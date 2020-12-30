<template>
  <div id="home">
    <el-form ref="form" :model="findData" label-width="80px">
      <div class="topline">
        <div class="box">
          <el-form-item label="城市:">
            <el-select v-model="findData.address" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="box">
          <el-form-item label="日期:">
            <el-date-picker
              v-model="findData.date"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
        </div>
        <div class="box">
          <el-form-item label="注册渠道:">
            <el-select v-model="findData.channel" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="box">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </div>
      </div>
    </el-form>
    <main>
      <div class="warp">
        <div class="choiceTitle">
          <div class="l">
            <span>用户增长</span>
            <el-select
              v-model="findData.address"
              placeholder="按什么"
              size="mini"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
          <div class="r">
            <el-checkbox v-model="userCheck">全部</el-checkbox>
            <el-button size="mini">导出</el-button>
          </div>
        </div>
        <div class="warpBox">
          <div class="echart-card1">
            <el-card class="box-card" shadow="always">
              <div v-for="o in 4" :key="o" class="text item">
                {{ "列表内容 " + o }}
              </div>
            </el-card>
          </div>
          <div class="echart-card2">
            <el-card class="box-card" shadow="always">
              <div v-for="o in 4" :key="o" class="text item">
                {{ "列表内容 " + o }}
              </div>
            </el-card>
          </div>
          <div class="echart-card3">
            <el-card class="box-card" shadow="always">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="date" label="日期">
                </el-table-column>
                <el-table-column prop="name" label="注册用户数">
                </el-table-column>
                <el-table-column prop="province" label="省份">
                </el-table-column>
                <el-table-column prop="city" label="市区">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="zip" label="邮编">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleClick(scope.row)"
                      type="text"
                      size="small"
                      >查看</el-button
                    >
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      findData: {
        address: "",
        date: "",
        channel: "",
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      userCheck: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    onSubmit(e) {
      console.log("submit!", e);
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>



<style lang="less" scoped>
#home {
  height: 100%;
  background-color: #f2f2f2;
  box-sizing: border-box;
  padding: 33px;
  .topline {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  main {
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 35px;
    .choiceTitle {
      /deep/ .el-input {
        width: 50%;
      }
      /deep/ .el-input__inner {
        border: none;
      }
      display: flex;
      justify-content: space-between;
      .r > div {
      }
    }
    .warpBox {
      box-sizing: border-box;
      /deep/ .box-card {
        width: 100%;
        height: 100%;
      }
      & > div {
        margin: 10px;
      }
      display: flex;
      flex-wrap: wrap;
      .echart-card1 {
        width: 315px;
        height: 315px;
      }
      .echart-card2 {
        width: 620px;
        height: 315px;
      }
      .echart-card3 {
        width: 100%;
        height: 370px;
      }
    }
  }
}
</style>